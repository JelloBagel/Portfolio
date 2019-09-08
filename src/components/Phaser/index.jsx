import React, { useEffect } from "react";
import Phaser from "phaser";

import platformImg from "../../images/game/platform.png";
import skyImg from "../../images/game/sky.png";
import starImg from "../../images/game/star.png";
import bombImg from "../../images/game/bomb.png";
import dudeImg from "../../images/game/dude.png";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: "phaser-game",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

let player;
let cursors;
let stars;
let score = 0;
let scoreText;
let bombs;
let gameOver = false;

const Game = React.memo(() => {
  useEffect(() => {
    new Phaser.Game(config);
  }, []);

  return <div id="phaser-game" />;
});

function preload() {
  this.load.image("sky", skyImg);
  this.load.image("ground", platformImg);
  this.load.image("star", starImg);
  this.load.image("bomb", bombImg);
  this.load.spritesheet("dude", dudeImg, {
    frameWidth: 32,
    frameHeight: 48
  });
}

function create() {
  this.add.image(400, 300, "sky");

  const platforms = this.physics.add.staticGroup();

  platforms
    .create(400, 568, "ground")
    .setScale(2)
    .refreshBody();

  platforms.create(600, 400, "ground");
  platforms.create(50, 250, "ground");
  platforms.create(750, 220, "ground");

  player = this.physics.add.sprite(100, 450, "dude");

  player.setBounce(0.2);
  player.setCollideWorldBounds(true);

  this.anims.create({
    key: "left",
    frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
  });

  this.anims.create({
    key: "turn",
    frames: [{ key: "dude", frame: 4 }],
    frameRate: 20
  });

  this.anims.create({
    key: "right",
    frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1
  });

  cursors = this.input.keyboard.createCursorKeys();

  stars = this.physics.add.group({
    key: "star",
    repeat: 11,
    setXY: { x: 12, y: 0, stepX: 70 }
  });

  stars.children.iterate(function(child) {
    child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
  });

  scoreText = this.add.text(16, 16, "score: 0", {
    fontSize: "32px",
    fill: "#000"
  });

  bombs = this.physics.add.group();

  this.physics.add.collider(player, platforms);
  this.physics.add.collider(stars, platforms);
  this.physics.add.collider(bombs, platforms);

  this.physics.add.overlap(player, stars, collectStar, null, this);
  this.physics.add.collider(player, bombs, hitBomb, null, this);
}

function update() {
  if (gameOver) {
    return;
  }

  if (cursors.left.isDown) {
    player.setVelocityX(-160);
    player.anims.play("left", true);
  } else if (cursors.right.isDown) {
    player.setVelocityX(160);
    player.anims.play("right", true);
  } else {
    player.setVelocityX(0);
    player.anims.play("turn");
  }

  if (player.body.touching.down && cursors.up.isDown) {
    player.setVelocityY(-330);
  }
}

function collectStar(player, star) {
  star.disableBody(true, true);

  score += 10;
  scoreText.setText("Score: " + score);

  if (stars.countActive(true) === 0) {
    stars.children.iterate(function(child) {
      child.enableBody(true, child.x, 0, true, true);
    });

    var x =
      player.x < 400
        ? Phaser.Math.Between(400, 800)
        : Phaser.Math.Between(0, 400);

    var bomb = bombs.create(x, 16, "bomb");
    bomb.setBounce(1);
    bomb.setCollideWorldBounds(true);
    bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
  }
}

function hitBomb(player, bomb) {
  this.physics.pause();

  player.setTint(0xff0000);

  player.anims.play("turn");

  gameOver = true;
}

export default Game;
