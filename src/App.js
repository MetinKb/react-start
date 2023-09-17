import { useEffect } from 'react';
import styles from './App.module.css';
import Test from './Test'
import TailwindButton from './Button';
import './tailwind.css'

function App() {

  useEffect(() => {

  }, [])

  return (
    <>
      <div className={styles.Flex}>
        <h2 className={styles.App}>{process.env.NODE_ENV}</h2>
        <Test />
        {process.env.NODE_ENV === 'production' && (
          <>
            <img src="favicon.ico" alt="" />
          </>
        )}
      </div >
      <TailwindButton />
    </>
  );
}


export default App;