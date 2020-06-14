import React from "react";

const App = () => {
      let count = 0;

  const message = "Kill station rulls the underworld";

  const handleClick = () => {
    count++
    prompt(`Declare Your Love For Kill Station ${count}`);
  }
  return (
    <div>
      <h1>Hi there</h1>
      <h2 onClick={handleClick}>
        
        {message}
      </h2>
    </div>
  );
};

export default App;
