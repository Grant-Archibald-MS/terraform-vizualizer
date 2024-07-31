// src/App.js
import React from 'react';
import JsonUploader from './JsonUploader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Terraform Resource Visualizer</h1>
      </header>
      <main>
        <JsonUploader />
      </main>
    </div>
  );
}

export default App;