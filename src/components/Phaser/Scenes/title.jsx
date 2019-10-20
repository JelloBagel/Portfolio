import Phaser from "phaser";

export default class title extends Phaser.Scene {
  constructor() {
    super("title");
  }

  create() {
    this.createEnvironment();
    this.createHeader();

    this.instructions = this.add.text(
      300,
      370,
      "Press the Space Bar to make the corgi skate over obstacles.",
      {
        fontFamily: '"Open Sans", Verdana',
        fontSize: 15, 
        color: "#000"
      }
    );
    this.instructions.setOrigin(0.5, 0.5);

    this.anims.create({
      key: "idle",
      frames: this.anims.generateFrameNames("player_idle"),
      frameRate: 4,
      repeat: -1
    });
    this.player = this.physics.add.sprite(100, 247, "player_idle");
    this.player.setCollideWorldBounds(true);
    this.player.play("idle");

    this.physics.add.collider(this.player, this.grounds);

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

  createEnvironment() {
    // this.background = this.add.image(0, 0, "background");
    // this.background.setOrigin(0, 0);

    // TODO: parallax mountains
    // this.mountain = this.add.tileSprite(0, 0, 600, 400, "mountain");
    // this.mountain.setOrigin(0, 0);
    // this.mountain.setScrollFactor(0);
    // this.cameras.main.startFollow(this.player);
    // this.mountain.tilePositionX = this.myCam.scrollX * 0.3;

    this.grounds = this.physics.add.staticGroup();
    this.grounds.create(300, 339, "ground");
  }

  createHeader() {
    this.add.image(300, 180, "subtitleBg");
    const subtitleText = this.add.text(
      300,
      180,
      "Help Corgi skate as far as possible!",
      {
        fontFamily: '"Open Sans", Verdana',
        fontSize: 15
      }
    );
    subtitleText.setOrigin(0.5, 0.5);

    this.add.image(300, 120, "logo");
  }
}
