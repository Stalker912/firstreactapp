import React, { useState } from "react";
import ClassCounter from "./Components/ClassCounter";
import Counter from "./Components/Counter";


function App() {
  return (
    <div className="App">
      <Counter/>
      <ClassCounter/> Использовать классы - устарвевший подход 
    </div>
  );
}

export default App;
