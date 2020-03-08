import React from "react";

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

const Grid = props => {
  const { grid } = props;
  return (
    <div>
      <Rows grid={grid} />
    </div>
  );
};

export default Grid;
