/** @module Calculate */

import React, { useState, useEffect } from "react";

/**
 * @function Calculate
 * @description Component with logic for determining number of islands
 * @param {Object} props 
 */
const Calculate = props => {
  const { grid, visited, createGrid } = props;

  const [numberOfIslands, setNumberOfIslands] = useState(0);

  useEffect(() => {
    let totalVisited = 0;
    for (let i = 0; i < visited.length; i += 1) {
      for (let j = 0; j < visited[i].length; j += 1) {
        totalVisited += visited[i][j];
      }
    }
    setNumberOfIslands(totalVisited);
  }, [visited]);

  /**
   * @function dfs
   * @description deep field search recursive helper function
   * @param {Number} i coordinate
   * @param {Number} j coordinate
   * @returns {Number} 1 (new island) or 0 (water or visited land)
   */
  const dfs = (i, j) => {
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[i].length ||
      grid[i][j] === 0 ||
      visited[i][j] === 1
    ) {
      return 0;
    }
    visited[i][j] = 1;
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
    return 1;
  };

  /**
   * @function calculateIslands
   * @description iterates through grid; upon encountering land, it calls dfs() to
   * isolate extent of discovered island (so it is only counted once), then increments island count
   */
  const calculateIslands = () => {
    if (!grid || !grid.length) {
      setNumberOfIslands(0);
    }
    let islands = 0;
    for (let i = 0; i < grid.length; i += 1) {
      for (let j = 0; j < grid[i].length; j += 1) {
        if (grid[i][j] === 1) {
          islands += dfs(i, j);
        }
      }
    }

    setNumberOfIslands(islands);
  };

  return (
    <div>
      {!numberOfIslands ? (
        <button onClick={calculateIslands}>Calculate</button>
      ) : (
        <button onClick={() => createGrid()}>New Grid</button>
      )}
      {numberOfIslands > 0 && <div>Number of Islands: {numberOfIslands}</div>}
    </div>
  );
};

export default Calculate;
