import Phaser from "phaser";

export default class game extends Phaser.Scene {
  constructor() {
    super("game");
  }

  create() {
    this.createEnvironment();
    this.createHeader();
    this.shapes = this.cache.json.get("shapes");

    this.gameOver = false;

    this.anims.create({
      key: "idle",
      frames: this.anims.generateFrameNames("player_idle"),
      frameRate: 4,
      repeat: -1
    });
    this.player = this.physics.add.sprite(100, 247, "player_idle");
    this.player.setCollideWorldBounds(true);
    this.player.play("idle");
    this.player.setGravityY(200);
    this.physics.add.collider(this.player, this.grounds);

    this.hydrants = this.physics.add.group();
    this.physics.add.collider(this.hydrants, this.grounds);

    this.time.addEvent({
      delay: 2000,
      callback: this.createHydrant,
      callbackScope: this,
      loop: true
    });

    this.cursors = this.input.keyboard.createCursorKeys();
    this.physics.add.collider(
      this.player,
      this.hydrants,
      this.hitHydrant,
      null,
      this
    );
  }

  update() {
    if (this.gameOver) {
      this.scene.start("title");
    }

    this.increaseScore();
    if (this.cursors.space.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-300);
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
    const subtitleHeight = 100;
    this.add.image(300, subtitleHeight, "subtitleBg");
    this.score = 0;
    this.scoreText = this.add.text(
      300,
      subtitleHeight,
      `score: ${this.score}`,
      {
        fontFamily: '"Open Sans", Verdana',
        fontSize: 15
      }
    );
    this.scoreText.setOrigin(0.5, 0.5);

    this.add.image(300, 0, "logo").setOrigin(0.5, 0);
  }

  createHydrant() {
    const hydrant = this.hydrants.create(600, 253, "hydrant");
    hydrant.setBounce(1);
    hydrant.setVelocityX(-200);
    hydrant.allowGravity = false;
  }

  increaseScore() {
    this.score += 10;
    this.scoreText.setText("Score: " + this.score);
  }

  hitHydrant(player, hydrant) {
    player.setTint(0xff0000);

    let gameOverDelay;
    clearTimeout(gameOverDelay);
    this.scene.pause();
    gameOverDelay = setTimeout(() => {
      this.scene.resume();
      this.gameOver = true;
    }, 2000);
  }
}
