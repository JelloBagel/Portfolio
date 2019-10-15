import ImageBB1 from "../images/img-block-breaker/bb1.PNG";
import ImageBB2 from "../images/img-block-breaker/bb2.PNG";
import ImageBB3 from "../images/img-block-breaker/bb3.PNG";

import ImageFractalBg from "../images/fractalBg.png";
import ImageProfile from "../images/profile.jpg";

import ImageDogsCropped from "../images/photoshop/puppy-rumble-cropped.png";
import ImageSpringPicnic from "../images/photoshop/spring-picnic-cropped.jpg";
import ImageStevonnie from "../images/photoshop/stevonnie-cropped.jpg";
import ImageGrad from "../images/photography/grad-picture-cropped.png";
import ImageMark from "../images/photography/mark-cropped.jpg";
import ImageWesley from "../images/photography/wesley-cropped.jpg";
import ImageRyan from "../images/photography/ryan-cropped.jpg";
import ImagePlaceholder60 from "../images/60.png";

export default {
  HomePage: {
    description: "Independent developer passionate about programming",
    cardTitle: "Featured News",
    cards: [
      {
        button: {
          buttonType: "link",
          buttonRoute: "/about"
        },
        content: {
          title: "About Me",
          image: { src: ImageDogsCropped, alt: "About Me" },
          content: "Puzzle-loving, game-playing, web-developing girl"
        }
      },
      {
        button: {
          buttonType: "link",
          buttonRoute: "/projects"
        },
        content: {
          image: { src: ImageDogsCropped, alt: "Game Projects" },
          title: "Game Projects",
          content: "Games are how I learn best!"
        }
      },
      {
        button: {
          buttonType: "link",
          buttonRoute: "/media"
        },
        content: {
          title: "Media",
          image: { src: ImageDogsCropped, alt: "Media" },
          content: "Past creative projects"
        }
      }
    ]
  },
  AboutPage: {
    mastHead: {
      backgroundImage: ImageFractalBg,
      title: "About"
    },
    me: [
      {
        content: {
          image: { src: ImageProfile, alt: "Stephanie Hong" },
          title: "Stephanie Hong",
          content:
            "<p>Graduated in 2018 from University of the Pacific with a Doctor of Pharmacy and a Minor in Computer Science.</p><p> As a young girl, I was an avid player of video games, and over the years, my interests expanded from playing games to creating them as well – resulting in a passion for computer programming. Over the years, I independently learned to build games and develop websites and feel ready to pursue a career where I can use the skills I've learned.</p>"
        }
      }
    ],
    cards: [
      {
        content: {
          svg: "IconFindGroup",
          title: "Looking For Opportunities",
          content:
            "Passionate to learn more about programming. Looking to join a team of like-minded individuals. Feel free to reach out at <a href='mailto:stephielhong@gmail.com'>stephielhong@gmail.com</a>."
        }
      }
    ],
    endorsements: [
      {
        content: {
          svg: "IconPointingHand",
          title: "Shot Caller",
          subtitle: "Leader, Strategist",
          content: "Leads and executes strategies."
        }
      },
      {
        content: {
          svg: "IconFistBump",
          title: "Good Teammate",
          subtitle: "Helpful, Effective Communication",
          content: "Highly effective team player."
        }
      },
      {
        content: {
          svg: "IconHandshake",
          title: "Sportsmanship",
          subtitle: "Positive, Respectful",
          content: "Player who is a positive influence."
        }
      }
    ]
  },
  ProjectsPage: {
    gamesTitle: "Games",
    games: [
      {
        button: {
          buttonType: "modal"
        },
        content: {
          title: "Block Breaker Gameplay 1",
          image: { src: ImageBB1, alt: "Block Breaker Gameplay 1" }
        }
      },
      {
        button: {
          buttonType: "modal"
        },
        content: {
          title: "Block Breaker Gameplay 2",
          image: { src: ImageBB2, alt: "Block Breaker Gameplay 2" }
        }
      },
      {
        button: {
          buttonType: "modal"
        },
        content: {
          title: "Block Breaker Gameplay 3",
          image: { src: ImageBB3, alt: "Block Breaker Gameplay 3" }
        }
      }
    ],
    cardTitle: "Cinematography",
    cards: [
      {
        button: {
          buttonType: "anchor",
          buttonRoute: "https://www.youtube.com/watch?v=7i3aRYkAwrY"
        },
        content: {
          title: "About Me",
          image: {
            src: "http://img.youtube.com/vi/7i3aRYkAwrY/mqdefault.jpg",
            alt: "About Me"
          },
          content: "APhA-ASP Pacific Orientation Video 2016"
        }
      },
      {
        button: {
          buttonType: "anchor",
          buttonRoute: "https://www.youtube.com/watch?v=fpZKsoT8WbU"
        },
        content: {
          image: {
            src: "http://img.youtube.com/vi/fpZKsoT8WbU/mqdefault.jpg",
            alt: "Game Projects"
          },
          title: "Game Projects",
          content: "APhA Conference 2016 in Baltimore, Maryland"
        }
      },
      {
        button: {
          buttonType: "anchor",
          buttonRoute: "https://www.youtube.com/watch?v=hMWMDmtauVQ"
        },
        content: {
          title: "Media",
          image: {
            src: "http://img.youtube.com/vi/hMWMDmtauVQ/mqdefault.jpg",
            alt: "Media"
          },
          content: "Pacific Spring Picnic: Superhero Themed"
        }
      },
      {
        button: {
          buttonType: "anchor",
          buttonRoute: "https://www.youtube.com/watch?v=aBv9NiNHhhw"
        },
        content: {
          title: "Draw My Life",
          image: {
            src: "http://img.youtube.com/vi/aBv9NiNHhhw/mqdefault.jpg",
            alt: "Draw My Life"
          },
          content: "Draw My Life: Pharmacists"
        }
      }
    ],
    photoTitle: "Photography",
    photos: [
      {
        button: {
          buttonType: "modal"
        },
        content: {
          title: "Dogs",
          image: { src: ImageDogsCropped, alt: "overwatch dogs" },
          content: "Overwatch Heroes as Dogs"
        }
      },
      {
        button: {
          buttonType: "modal"
        },
        content: {
          title: "T shirt",
          image: { src: ImageSpringPicnic, alt: "T-shirt" },
          content: "Pacific Spring Picnic 2016 T-Shirt Design"
        }
      },
      {
        button: {
          buttonType: "modal"
        },
        content: {
          title: "Stevonnie",
          image: { src: ImageStevonnie, alt: "steven universe" },
          content: "Steven Universe Cosplay with CG Background"
        }
      },
      {
        button: {
          buttonType: "modal"
        },
        content: {
          title: "Graduation",
          image: {
            src: ImageGrad,
            alt: "graduation photo with overwatch grad caps"
          },
          content: "Photoshoot with graduation caps using tripod"
        }
      },
      {
        button: {
          buttonType: "modal"
        },
        content: {
          title: "Mark Ruiz",
          image: { src: ImageMark, alt: "mark ruiz" },
          content: "White Coat Ceremony 2017"
        }
      },
      {
        button: {
          buttonType: "modal"
        },
        content: {
          title: "Wesley Sweis",
          image: { src: ImageWesley, alt: "wesley sweis" },
          content: "Counseling at an independent pharmacy"
        }
      },
      {
        button: {
          buttonType: "modal"
        },
        content: {
          title: "Ryan Abundo",
          image: { src: ImageRyan, alt: "ryan abundo" },
          content: "An aspiring musician/pharmacist"
        }
      }
    ]
  }
};
