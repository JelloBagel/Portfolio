import Phaser from "phaser";

export default class game extends Phaser.Scene {
  constructor() {
    super("game");
  }

  create() {
    // this.background = this.add.image(0, 0, "background");
    // this.background.setOrigin(0, 0);

    this.ground = this.add.image(0, 278, "ground");
    this.ground.setOrigin(0, 0);

    this.player = this.physics.add.sprite(100, 0, "dude");

    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
    // this.mountain = this.add.tileSprite(0, 0, 600, 400, "mountain");
    // this.mountain.setOrigin(0, 0);
    // this.mountain.setScrollFactor(0);

    // this.cameras.main.startFollow(this.player);
    // this.mountain.tilePositionX = this.myCam.scrollX * 0.3;

    this.hydrant1 = this.add.image(100, 253, "hydrant");
    this.hydrant2 = this.add.image(200, 253, "hydrant");
    this.hydrant3 = this.add.image(300, 253, "hydrant");

    this.cursors = this.input.keyboard.createCursorKeys();

    this.add.text(20, 20, "game...");
  }

  update() {
    this.background.tilePositionX -= this.moveHydrant(this.hydrant1, 1);
    this.moveHydrant(this.hydrant2, 2);
    this.moveHydrant(this.hydrant3, 3);
  }

  moveHydrant(hydrant, speed) {
    hydrant.x -= speed;
    if (hydrant.x < 0) {
      this.resetHydrantPos(hydrant);
    }
  }

  resetHydrantPos(hydrant) {
    hydrant.y = 253;
    hydrant.x = 600;
  }
}
