// StatsDisplay.tsx — shows text statistics in three cards

import { StatsDisplayProps } from "../../types";

function StatsDisplay({ stats, showReadingTime = true }: StatsDisplayProps) {
    // Style for each stat card
    const cardStyle = {
        flex: 1,
        minWidth: "120px",
        padding: "1rem",
        backgroundColor: "#f3f4f6",
        borderRadius: "8px",
        textAlign: "center" as const,
    };

    // Style for the stat label text
    const labelStyle = {
        fontSize: "0.75rem",
        textTransform: "uppercase" as const,
        color: "#6b7280",
        marginBottom: "0.25rem",
        letterSpacing: "1px",
        fontWeight: 600,
    };

    // Style for the stat value
    const valueStyle = {
        fontSize: "1.5rem",
        fontWeight: 700,
        color: "#111827",
    };
    return (
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
            <div style={cardStyle}>
                <div style={labelStyle}>Characters</div>
                <div style={valueStyle}>{stats.characterCount}</div>
            </div>

            <div style={cardStyle}>
                <div style={labelStyle}>Words</div>
                <div style={valueStyle}>{stats.wordCount}</div>
            </div>

            {/* Only show reading time card if showReadingTime is true */}
            {showReadingTime && (
                <div style={cardStyle}>
                    <div style={labelStyle}>Reading Time</div>
                    <div style={valueStyle}>
                        {stats.readingTime < 1 ? "< 1" : stats.readingTime} min
                    </div>
                </div>
            )}
        </div>
    );
}

export default StatsDisplay;