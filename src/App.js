import React from "react";
import { ContentLeft } from "./components/ContentLeft";
import TopNav from "./components/TopNav";
// import { Button, ButtonIcon } from "./components/Buttons";

function App() {
  return (
    <div className="container">
      <TopNav />
      <ContentLeft />
    </div>
  );
}

export default App;
