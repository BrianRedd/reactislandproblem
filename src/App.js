/** @module App */

import React, { useState } from "react";

import "./App.css";

import Grid from "./Grid";
import Calculate from "./Calculate";

/**
 * @function App
 * @description Functional Component for Island Problem app
 * @returns {React.Component}
 */
function App() {
  const [length, setLength] = useState(5);
  const [grid, setGrid] = useState(null);
  const [visited, setVisited] = useState(null);

  /**
   * @function createGrid
   * @description generates x by x grid, each square is either land ("1") or water ("0") 50/50
   * @param {Number} value - Optional; size of grid being created
   */
  const createGrid = value => {
    const size = value ? value : length;
    const temp = [];
    const vTemp = [];
    for (let i = 0; i < size; i += 1) {
      const row = [];
      const vRow = [];
      for (let ii = 0; ii < size; ii += 1) {
        row.push(Math.round(Math.random()));
        vRow.push(0);
      }
      temp.push(row);
      vTemp.push(vRow);
    }
    setGrid(temp);
    setVisited(vTemp);
  };

  return (
    <div className="App">
      <header>
        <a href="http://rbrianredd.com" target="_new">rbr.com</a>
        <a href="https://github.com/BrianRedd/reactislandproblem" target="_new">GitHub</a>
      </header>
      <h1>Island Problem</h1>
      <div style={{ margin: "5px" }}>
        <span style={{ margin: "5px" }}>Number of Squares:</span>
        <select
          onChange={e => {
            const {
              target: { value }
            } = e;
            setLength(value);
            createGrid(value);
          }}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>
      {grid && (
        <React.Fragment>
          <Grid grid={grid} />
          <Calculate
            grid={grid}
            visited={visited}
            createGrid={() => createGrid()}
          />
        </React.Fragment>
      )}
      {!grid && <button onClick={() => createGrid()}>New Grid</button>}
    </div>
  );
}

export default App;
