import React from "react";
import { ContentCenter } from "./components/ContentCenter";
import { ContentLeft } from "./components/ContentLeft";
import ContentRight from "./components/ContentRight";
import TopNav from "./components/TopNav";
// import { Button, ButtonIcon } from "./components/Buttons";

function App() {
  return (
    <div className="">
      <TopNav />

      <ContentLeft />

      <div className="container mx-auto flex content-center">
        <ContentCenter />
      </div>
      <ContentRight />
    </div>
  );
}

export default App;
