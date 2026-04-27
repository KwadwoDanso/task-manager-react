# Character Counter

An interactive React + TypeScript app that gives writers real-time feedback on character count, word count, and reading time as they type.

## Table of contents

- [Overview](#overview)
  - [Links](#links)
  - [How to Run](#how-to-run)
  - [components](#components)
  - [How it works](#how-it-works)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Reflection](#reflection)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## How to Run

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Components

### TextInput
A textarea that fires onTextChange whenever the user types.

```tsx
<TextInput
  onTextChange={(text) => console.log(text)}
  placeholder="Type here..."
  initialValue=""
/>
```

Props (TextInputProps):
- `onTextChange` (required) — callback (text: string) => void fired on every keystroke
- `placeholder` (optional) — placeholder text, defaults to "Start typing..."
- `initialValue` (optional) — starting text value, defaults to ""

### StatsDisplay
Shows three stat cards: Characters, Words, and Reading Time.

```tsx
<StatsDisplay
  stats={{ characterCount: 100, wordCount: 20, readingTime: 1 }}
  showReadingTime={true}
/>
```

Props (StatsDisplayProps):
- stats (required) — TextStats object with characterCount, wordCount, readingTime
- showReadingTime (optional) — show/hide the reading time card, defaults to true

### CharacterCounter
The parent component. Manages text state, calculates stats, shows progress.

```tsx
<CharacterCounter minWords={50} maxWords={300} targetReadingTime={2} />
```

**Props (CharacterCounterProps):**
- minWords (optional) — minimum word goal, shows progress bar if set
- maxWords (optional) — maximum word limit, shows warning if exceeded
- targetReadingTime (optional) — target reading time in minutes

## How It Works

1. User types in the TextInput textarea.
2. Each keystroke fires the onTextChange callback, sending the new text to CharacterCounter.
3. CharacterCounter stores the text in state with useState.
4. Stats are calculated from the text (characters, words, reading time at 200 wpm).
5. The stats object is passed as a prop to StatsDisplay, which re-renders with new numbers.
## My process
- Set up vite react typescript project
- Define typescript interfaces
- Builf components
- imports a d run on App.tsx



## Built with
- React
- TypeScript
- Vite
- React hooks

## What I Learned
- State management with useState to track current text and update stats in real time. 
- Event handling communiction with callbacks.
- Real-time derived calculations
- Responsive user feedback


## Reflection

1. State updates when text changes — The TextInput component fires its onTextChange callback on every keystroke. The parent CharacterCounter receives the new text and calls setText to update state. React then re-renders the component with fresh stats automatically.

2. Reading time calculation — I used 200 words per minute as a standard adult reading speed. The math is simply Math.ceil(wordCount / 200), which rounds up so any non-zero text shows at least 1 minute. For very short text (under 200 words), the display shows "< 1 min" to be more accurate.

3. Keeping the UI responsive — Since the stats are calculated synchronously inside the render function from a single state value, every keystroke triggers exactly one re-render. The calculations are simple (string length, split, count) so they finish in microseconds even with long text. No debouncing was needed.

4. Statistics challenges — The biggest issue was counting words correctly. Just splitting on spaces gave wrong counts for text with multiple spaces, leading/trailing whitespace, or empty strings. I fixed it by using .trim() first, then splitting on the regex \s+ (one or more whitespace characters), then filtering out empty strings with .filter(Boolean).

## Author
- Author is Kwadwo
- Claude AI for clarifications and different ways to approach 


## Acknowledgments
- Per Scholas modules
- React.dev
