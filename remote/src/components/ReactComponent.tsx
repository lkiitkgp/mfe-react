import React from "react";

interface ReactComponentProps {
  value: number;
  onIncrement: () => void;
}

const ReactComponent: React.FC<ReactComponentProps> = ({
  value,
  onIncrement,
}) => {
  return (
    <div>
      <h2>Hello from React Remote Component!</h2>
      <p>Value from Host App: {value}</p>
      <button onClick={onIncrement}>Increment Value</button>
    </div>
  );
};

export default ReactComponent;
