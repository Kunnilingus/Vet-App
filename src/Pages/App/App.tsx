import { FC, useState } from "react";
import styles from "./app.module.scss";
import { Link } from "react-router-dom";

export const App: FC = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <h1 className={styles.value}>{count}</h1>
      <button
        className={styles.button}
        onClick={() => setCount((prev) => prev + 1)}
      >
        +1
      </button>
      <button
        className={styles.button}
        onClick={() => setCount((prev) => prev - 1)}
      >
        -1
      </button>
      <Link to="/About">About</Link>
    </div>
  );
};
