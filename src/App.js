import './App.css';
import logo from './logo.svg'

function App() {
  return (
    <div>
      <h2>{process.env.NODE_ENV}</h2>
      {process.env.NODE_ENV == 'production' && (
        <>
          <img src="favicon.ico" alt="" />
        </>
      )}
    </div >
  );
}

export default App;