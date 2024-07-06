import { useState } from 'react';
import reactLogo from '../../assets/react.svg';
import viteLogo from '../../../public/quail.png';
import css from './initial.module.css';

export const Initial = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className={css.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className={css.logoreact} alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={css.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className={css.readthedocs}>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};
