import Phaser from "phaser";

import backgroundImg from "../../../images/game/bg.png";
import groundImg from "../../../images/game/ground.png";
import mountainImg from "../../../images/game/mountain.png";

import logoImg from "../../../images/game/logo.png";
import subtitleBgImg from "../../../images/game/subtitle_bg.png";

import hydrantImg from "../../../images/game/hydrant.png";
import playerIdleImg from "../../../images/game/player_idle.png";
import corgiRunShapes from "../../../images/game/corgi-run-shapes.json";

export default class loading extends Phaser.Scene {
  constructor() {
    super("loading");
  }

  preload() {
    this.load.image("background", backgroundImg);
    this.load.image("ground", groundImg);
    this.load.image("mountain", mountainImg);

    this.load.image("logo", logoImg);
    this.load.image("subtitleBg", subtitleBgImg);

    this.load.image("hydrant", hydrantImg);
    this.load.spritesheet("player_idle", playerIdleImg, {
      frameWidth: 90,
      frameHeight: 60
    });
    this.load.json("shapes", corgiRunShapes);
  }

  create() {
    // this.background = this.add.image(0, 0, "background");
    // this.background.setOrigin(0, 0);

    this.ground = this.add.image(0, 278, "ground");
    this.ground.setOrigin(0, 0);

    this.subtitleText = this.add.text(20, 20, "Loading", {
      fontFamily: '"Press Start 2P", cursive',
      fontSize: 15
    });

    this.scene.start("title");
  }
}
