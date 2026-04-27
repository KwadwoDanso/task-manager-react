/ CharacterCounter.tsx — parent that manages text state and combines TextInput + StatsDisplay

import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import StatsDisplay from "../StatsDisplay/StatsDisplay";
import { CharacterCounterProps, TextStats } from "../../types";

function CharacterCounter({ minWords, maxWords, targetReadingTime }: CharacterCounterProps) {
    // useState manages the current text — updates whenever the user types
    const [text, setText] = useState("");

    // Calculate word count: trim whitespace, split on spaces, filter empty entries
    const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).filter(Boolean).length;

    // Reading time at 200 words per minute, rounded up
    const readingTime = Math.ceil(words / 200);

    // Build the stats object that gets passed to StatsDisplay
    const stats: TextStats = {
        characterCount: text.length,
        wordCount: words,
        readingTime: readingTime,
    };

    // Callback passed to TextInput — runs every time the user types
    const handleTextChange = (newText: string) => {
        setText(newText);
    };

    // Calculate progress percentage toward the minWords goal
    const progress = minWords ? Math.min((words / minWords) * 100, 100) : 0;

    // Determine warning message based on word count vs. min/max
    let warning = "";
    if (maxWords && words > maxWords) {
        warning = "Over the " + maxWords + " word limit by " + (words - maxWords) + ".";
    } else if (minWords && words < minWords && words > 0) {
        warning = (minWords - words) + " more words to reach the minimum.";
    } else if (minWords && words >= minWords) {
        warning = "Minimum word count reached.";
    }

    // Container style
    const containerStyle = {
        maxWidth: "700px",
        margin: "2rem auto",
        padding: "1.5rem",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    };

    return (
        <div style={containerStyle}>
            <h2 style={{ marginBottom: "0.75rem" }}>Character Counter</h2>

            {/* TextInput receives the callback as a prop */}
            <TextInput onTextChange={handleTextChange} placeholder="Start typing your content..." />

            {/* StatsDisplay receives the calculated stats */}
            <StatsDisplay stats={stats} showReadingTime={true} />