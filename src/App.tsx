import { useState } from "react";
import reactLogo from "./assets/react.svg";
import reactSecondLogo from "./assets/react-logo_2.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="nav">
        <ul>
          <li>Home</li>
          <li>Auth</li>
          <li>Settings</li>
          <li>Profile</li>
        </ul>
      </nav>
      <div>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactSecondLogo}
            className="logo react"
            alt="React second logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>rebase check</p>
      <p>rebase check 2</p>
      <p>rebase check 3</p>
      <p>rebase check 4</p>
      <p>rebase check 5</p>
      <p>rebase check 6</p>
      <p>cherry-pick</p>
      <p>from "from-master"</p>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
