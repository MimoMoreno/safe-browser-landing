import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="safe-browser-title">
          <h1>Sekura</h1>
          <h1>Sekura</h1>
        </div>
        <div className="description">
          Navigate the web without depending on any centralized providers.
        </div>
        <button>DOWNLOAD</button>
        <div className="instructions">
          or{" "}
          <a
            href="https://github.com/gnardini/safe-browser"
            target="_blank"
            rel="noreferrer"
          >
            install from source
          </a>{" "}
          following the instructions on GitHub
        </div>
      </header>
    </div>
  );
}

export default App;
