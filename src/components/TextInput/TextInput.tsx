// TextInput.tsx — textarea that fires onTextChange when the user types

import { TextInputProps } from "../../types";

function TextInput({ onTextChange, placeholder = "Start typing...", initialValue = "" }: TextInputProps) {
    // Style for the textarea
    const style = {
        width: "100%",
        padding: "1rem",
        border: "1px solid #d1d5db",
        borderRadius: "8px",
        fontSize: "1rem",
        fontFamily: "inherit",
        resize: "vertical" as const,
        outline: "none",
    };

    return (
        <textarea
            style={style}
            placeholder={placeholder}
            defaultValue={initialValue}
            onChange={(e) => onTextChange(e.target.value)}
            rows={6}
        />
    );
}

export default TextInput;
