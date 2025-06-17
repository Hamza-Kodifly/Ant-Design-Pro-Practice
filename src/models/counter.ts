import { useState } from "react";

// src/models/counter.ts
export default () => {
  const [count, setCount] = useState(0);

  return {
    count,
    increment: () => setCount((c) => c + 1),
    decrement: () => setCount((c) => c - 1),
  };
};
