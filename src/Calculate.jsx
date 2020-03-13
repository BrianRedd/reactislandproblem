/** @module Calculate */

import React, { useState, useEffect } from "react";

/**
 * @function Calculate
 * @description Component with logic for determining number of islands
 * @param {Object} props 
 * @returns {React.Component}
 */
const Calculate = props => {
  const { grid, visited, createGrid } = props;

  const [numberOfIslands, setNumberOfIslands] = useState(0);

  /**
   * @function useEffect
   * @description useEffect to generate empty "visited" array
   */
  useEffect(() => {
    let totalVisited = 0;
    for (let x = 0; x < visited.length; x += 1) {
      for (let y = 0; y < visited[x].length; y += 1) {
        totalVisited += visited[x][y];
      }
    }
    setNumberOfIslands(totalVisited);
  }, [visited]);

  /**
   * @function dfs
   * @description deep field search recursive helper function
   * @param {Number} x coordinate
   * @param {Number} y coordinate
   * @returns {Number} 1 (new island) or 0 (water or visited land)
   */
  const dfs = (x, y) => {
    if (
      x < 0 ||
      x >= grid.length ||
      y < 0 ||
      y >= grid[x].length ||
      grid[x][y] === 0 ||
      visited[x][y] === 1
    ) {
      return 0;
    }
    visited[x][y] = 1;
    dfs(x + 1, y);
    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);
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
    for (let x = 0; x < grid.length; x += 1) {
      for (let y = 0; y < grid[x].length; y += 1) {
        if (grid[x][y] === 1) {
          islands += dfs(x, y);
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
