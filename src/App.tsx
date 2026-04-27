// App.tsx — renders the CharacterCounter with example props

import CharacterCounter from "./components/CharacterCounter/CharacterCounter";

function App() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f9fafb", padding: "1rem" }}>
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>Content Writing Helper</h1>

      {/* Pass minWords, maxWords, and targetReadingTime as props */}
      <CharacterCounter minWords={50} maxWords={300} targetReadingTime={2} />
    </div>
  );
}

export default App;
