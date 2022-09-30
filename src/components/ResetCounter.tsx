import React, { useEffect } from "react";
import { useCounterState } from "../state/useCounterState";

export const ResetCounter: React.FC = () => {
  const { resetScoreValue } = useCounterState();

  return (
    <div>
      child
      <button onClick={resetScoreValue}>Reset</button>
    </div>
  );
};
