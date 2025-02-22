/* eslint-disable no-unused-vars */

import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = () => {
  return (
    <div className="main">

      {/* Item List de Artistas */}
      <ItemList title = "Artistas" items= {5} itemsArrey={artistArray} />

      {/* Item List de musicas */}
      <ItemList title = "Musicas" items= {20} itemsArrey={songsArray} />
    </div>
  );
};

export default Main;
