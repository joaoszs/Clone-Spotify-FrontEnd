/* eslint-disable no-unused-vars */

import React from "react";
import ItemList from "./ItemList";

const Main = () => {
  return (
    <div className="main">

      {/* Item List de Artistas */}
      <ItemList title = "Artistas" items= {10} />

      {/* Item List de musicas */}
      <ItemList title = "Musicas" items= {20} />
    </div>
  );
};

export default Main;
