/* eslint-disable no-unused-vars */

import React from "react";
import ItemList from "./ItemList";

const Main = () => {
  return (
    <div className="main">

      {/* Item List de Artistas */}
      <ItemList title = "Artistas" />

      {/* Item List de musicas */}
      <ItemList title = "Musicas" />
    </div>
  );
};

export default Main;
