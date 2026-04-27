/ types/index.ts — interfaces for the character counter app

export interface TextInputProps {
    onTextChange: (text: string) => void;
    placeholder?: string;
    initialValue?: string;
}

export interface TextStats {
    characterCount: number;
    wordCount: number;
    readingTime: number; // in minutes
}

export interface StatsDisplayProps {
    stats: TextStats;
    showReadingTime?: boolean;
}