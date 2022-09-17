import React from "react";
import "./App.css";

const debianDownloadLink = 'https://drive.google.com/uc?export=download&id=1WNh2CAPPHDKt6LvE0yEoPKWNbxTiuLMz'
const macDownloadLink = 'https://drive.google.com/uc?export=download&id=1iidztMakMifRE_dxuIkOq33SxGMr7HUv'

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
        <div style={{display: 'flex', gap: '32px', marginTop: '80px'}}>
          <a href={debianDownloadLink} download><button style={{cursor: 'pointer'}}> Download for Debian x64</button></a>
          <a href={macDownloadLink} download><button style={{cursor: 'pointer'}}>Download for MacOS x64</button></a>
        </div>

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
