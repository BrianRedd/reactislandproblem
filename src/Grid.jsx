/** @module Grid */

import React from "react";

/**
 * @function Row
 * @description returns Row
 * @param {Object} props 
 * @returns {React.Component}
 */
const Row = ({ array, rowKey }) => {
  const row = array.map((square, idx) => {
    return (
      <div
        key={`${rowKey}-${idx}`}
        className={`square ${square ? "land" : "sea"}`}
      >
        {square}
      </div>
    );
  });
  return row;
};

/**
 * @function Rows
 * @description returns Rows (Grid)
 * @param {Object} props 
 * @returns {React.Component}
 */
const Rows = ({ grid }) => {
  const rows = grid.map((row, idx) => {
    const key = idx;
    return (
      <div key={key}>
        <Row array={row} rowKey={key} />
      </div>
    );
  });
  return rows;
};

/**
 * @function Grid
 * @description Presentational Component that converts grid array to visual grid
 * @param {Object} props 
 */
const Grid = props => {
  const { grid } = props;
  return (
    <div className="grid-block">
      <Rows grid={grid} />
    </div>
  );
};

export default Grid;
