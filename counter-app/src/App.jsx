import { createSignal } from 'solid-js';
import styles from './App.module.css';

const [count, setCount] = createSignal(0);

function App() {
  
  function increment() {
    setCount(count() + 1);
  }

  function decrement() {
    setCount(count() - 1);
  }
  return (
    <div class={styles.App}>
      <div class={styles.container}>
        <h1>{count()}</h1>
        <div class={styles.btnGroup}>
          <button onclick={increment}>+</button>
          <button onclick={decrement}>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
