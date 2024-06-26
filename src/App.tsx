import React from "react";
import "./App.css";
import "./components/Dashboard";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div
      className="w-screen h-screen overflow-y-scroll flex flex-col justify-start items-center pt-[5rem]"
      style={{
        background:
          "linear-gradient(0deg, rgba(40,34,43,1) 0%, rgba(98,87,104,1) 100%)",
      }}
    >
      <Dashboard />
    </div>
  );
}

export default App;
