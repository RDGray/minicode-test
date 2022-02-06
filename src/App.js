import React from "react";
import { ContentCenter } from "./components/ContentCenter";
import { ContentLeft } from "./components/ContentLeft";
import TopNav from "./components/TopNav";
// import { Button, ButtonIcon } from "./components/Buttons";

function App() {
  return (
    <div className="">
      <TopNav />

      <ContentLeft />

      <div className="container my-auto mx-auto flex content-center">
        <ContentCenter />
      </div>
    </div>
  );
}

export default App;
