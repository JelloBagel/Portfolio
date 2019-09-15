import Phaser from "phaser";

export default class title extends Phaser.Scene {
  constructor() {
    super("title");
  }

  create() {
    // this.background = this.add.image(0, 0, "background");
    // this.background.setOrigin(0, 0);

    this.ground = this.add.image(0, 278, "ground");
    this.ground.setOrigin(0, 0);

    this.subtitleBg = this.add.image(300, 180, "subtitleBg");
    this.subtitleText = this.add.text(
      300,
      180,
      "Help Corgi skate as far as possible!",
      {
        fontFamily: '"Open Sans", Verdana',
        fontSize: 15
      }
    );
    this.subtitleText.setOrigin(0.5, 0.5);

    this.logo = this.add.image(300, 120, "logo");

    this.instructions = this.add.text(
      300,
      370,
      "Press the Space key or click to make the corgi skate over obstacles.",
      {
        fontFamily: '"Open Sans", Verdana',
        fontSize: 15,
        color: "#000"
      }
    );
    this.instructions.setOrigin(0.5, 0.5);

    this.cursors = this.input.keyboard.createCursorKeys();
    this.input.on("pointerdown", () => {
      this.scene.start("game");
    });
  }

  update() {
    if (this.cursors.space.isDown) {
      this.scene.start("game");
    }
  }
}
