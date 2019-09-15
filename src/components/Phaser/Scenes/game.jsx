import Phaser from "phaser";

export default class game extends Phaser.Scene {
  constructor() {
    super("game");
  }

  create() {
    this.createEnvironment();
    this.createHeader();

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

    this.hydrant1 = this.add.image(100, 253, "hydrant");
    this.hydrant2 = this.add.image(200, 253, "hydrant");
    this.hydrant3 = this.add.image(300, 253, "hydrant");

    this.cursors = this.input.keyboard.createCursorKeys();

    this.add.text(20, 20, "game...");
  }

  update() {
    this.moveHydrant(this.hydrant1, 1);
    this.moveHydrant(this.hydrant2, 2);
    this.moveHydrant(this.hydrant3, 3);
    this.increaseScore();
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
    this.score = 0;
    this.scoreText = this.add.text(300, 180, `score: ${this.score}`, {
      fontFamily: '"Open Sans", Verdana',
      fontSize: 15
    });
    this.scoreText.setOrigin(0.5, 0.5);

    this.add.image(300, 120, "logo");
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

  increaseScore() {
    this.score += 10;
    this.scoreText.setText("Score: " + this.score);
  }
}
