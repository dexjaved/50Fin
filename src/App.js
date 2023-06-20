import { useState, useRef } from "react";

export default function App() {
  const [timer, setTimer] = useState(300);
  const time = useRef(null);

  const handleStart = () => {
    console.log("click");
    time.current = setInterval(() => {
      setTimer((timer) => {
        if (timer === 0) {
          clearInterval(time.current);
          return 0;
        } else {
          return timer - 1;
        }
      });
    }, 1000);
  };
  const handleReset = () => {
    console.log("reset");
    setTimer(300);
    clearInterval(time.current);
  };

  return (
    <div className="App">
      <div>
        Timer {`${Math.floor(timer / 60)}`.padStart(2, 0)} :
        {`${timer % 60}`.padStart(2, 0)}
      </div>
      <button onClick={handleStart}>start</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
