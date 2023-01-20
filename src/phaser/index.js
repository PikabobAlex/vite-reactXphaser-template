import Phaser from "phaser";
import preload from "./scenes/Preload";
import create from "./scenes/Create";

export default function (containerID) {
  return new Phaser.Game({
    type: Phaser.AUTO,
    parent: containerID,
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 200 },
      },
    },
    backgroundColor: "#333333",
    scene: { preload, create },
  });
}
