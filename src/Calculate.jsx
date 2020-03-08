import React, { useState, useEffect } from "react";

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

  const calculateIslands = () => {
    console.log("thisGrid:", grid);
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
        <button onClick={createGrid}>New Grid</button>
      )}
      {numberOfIslands > 0 && <div>{numberOfIslands}</div>}
    </div>
  );
};

export default Calculate;
