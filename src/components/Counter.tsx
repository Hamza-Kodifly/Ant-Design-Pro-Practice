import { useModel } from '@umijs/max';

export default () => {
  const { count, increment, decrement } = useModel('counter');

  return (
    <div>
      <h2>Global State Management Example:</h2>
      <p>Count: {count}</p>
      <button type="button" onClick={increment}>
        +1
      </button>
      <button type="button" onClick={decrement}>
        -1
      </button>
    </div>
  );
};
