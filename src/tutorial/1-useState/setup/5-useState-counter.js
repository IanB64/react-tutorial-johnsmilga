import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const increaseValue = () => {
    setValue((prevState) => {
      return prevState + 1;
    });
  };

  const increaseValueLater = () => {
    setTimeout(() => {
      return increaseValue();
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          decrese
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          reset
        </button>
        <button className="btn" onClick={increaseValue}>
          increase
        </button>
      </section>

      <section style={{ margin: '4rem 0' }}>
        <h2>complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={increaseValueLater}>
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
