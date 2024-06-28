import PhaserGame from "./phaser";
import React, { useEffect, useState } from "react";
function PhaserContainer(props) {
  const { width, height } = props;

  useEffect(() => {
    console.log(PhaserGame);
    PhaserGame("phaser-container");
  }, []);

  return <div id="phaser-container" style={{ width, height }}></div>;
}

export default PhaserContainer;
