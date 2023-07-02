import React, { useState } from "react";
import AppHero from "../components/appSection/appHero";

const App = ({ ...props }) => {
  return (
    <>
      <main className="relative">
        <AppHero {...props} />
      </main>
    </>
  );
};

export default App;
