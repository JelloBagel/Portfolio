import ImageBB1 from "../images/img-block-breaker/bb1.PNG";
import ImageBB2 from "../images/img-block-breaker/bb2.PNG";
import ImageBB3 from "../images/img-block-breaker/bb3.PNG";

import ImageFractalBg from "../images/fractalBg.png";
// import ImageProfile from "../images/profile.jpg";

import ImageDogs from "../images/photoshop/puppy-rumble.png";
import ImageSpringPicnic from "../images/photoshop/spring-picnic.jpg";
import ImageStevonnie from "../images/photoshop/stevonnie.jpg";
import ImageGrad from "../images/photography/grad-picture.png";
import ImageMark from "../images/photography/mark.jpg";
import ImageWesley from "../images/photography/wesley.jpg";
import ImageRyan from "../images/photography/ryan.jpg";

export default {
  HomePage: {
    description: "Developer",
    videosTitle: "Featured News",
    cards: [
      {
        button: {
          buttonType: "link",
          buttonRoute: "/about",
        },
        content: {
          title: "About Me",
          // image: { src: ImageProfile, alt: "About Me" },
          content: "Puzzle-loving, game-playing, web-developing girl",
        },
      },
      {
        button: {
          buttonType: "link",
          buttonRoute: "/projects",
        },
        content: {
          image: { src: ImageBB2, alt: "Game Projects" },
          title: "Game Projects",
          content: "Games are how I learn best!",
        },
      },
      {
        button: {
          buttonType: "link",
          buttonRoute: "/projects",
        },
        content: {
          title: "Media",
          image: { src: ImageDogs, alt: "Media" },
          content: "Past creative projects",
        },
      },
    ],
  },
  AboutPage: {
    mastHead: {
      backgroundImage: ImageFractalBg,
      title: "About",
    },
    me: [
      {
        content: {
          // image: { src: ImageProfile, alt: "Stephanie Hong" },
          title: "Stephanie Hong",
          content:
            "<p>As a young girl, I was an avid player of video games, and over the years, my interests expanded from playing games to creating them as well – resulting in a passion for computer programming. Over the years, I independently learned to build games and develop websites and feel ready to pursue a career where I can use the skills I've learned.</p>",
        },
      },
    ],
    cards: [
      {
        content: {
          svg: "IconFindGroup",
          title: "Looking For Opportunities",
          content:
            "Passionate to learn more about programming. Looking to join a team of like-minded individuals. Feel free to reach out at <a href='mailto:stephielhong@gmail.com'>stephielhong@gmail.com</a>.",
        },
      },
    ],
    endorsements: [
      {
        content: {
          svg: "IconPointingHand",
          title: "Shot Caller",
          subtitle: "Leader, Strategist",
          content: "Leads and executes strategies.",
        },
      },
      {
        content: {
          svg: "IconFistBump",
          title: "Good Teammate",
          subtitle: "Helpful, Effective Communication",
          content: "Highly effective team player.",
        },
      },
      {
        content: {
          svg: "IconHandshake",
          title: "Sportsmanship",
          subtitle: "Positive, Respectful",
          content: "Player who is a positive influence.",
        },
      },
    ],
  },
  ProjectsPage: {
    gamesTitle: "Games",
    games: [
      {
        button: {
          buttonAlt: "Block Breaker Gameplay 1",
          buttonRoute: ImageBB1,
          buttonType: "modal-img",
        },
        content: {
          title: "Block Breaker Gameplay 1",
          image: { src: ImageBB1, alt: "Block Breaker Gameplay 1" },
        },
      },
      {
        button: {
          buttonAlt: "Block Breaker Gameplay 2",
          buttonRoute: ImageBB2,
          buttonType: "modal-img",
        },
        content: {
          title: "Block Breaker Gameplay 2",
          image: { src: ImageBB2, alt: "Block Breaker Gameplay 2" },
        },
      },
      {
        button: {
          buttonAlt: "Block Breaker Gameplay 3",
          buttonRoute: ImageBB3,
          buttonType: "modal-img",
        },
        content: {
          title: "Block Breaker Gameplay 3",
          image: { src: ImageBB3, alt: "Block Breaker Gameplay 3" },
        },
      },
    ],
    videosTitle: "Cinematography",
    videos: [
      {
        button: {
          buttonAlt: "About Us: Mean Girls",
          buttonRoute: "https://www.youtube.com/embed/7i3aRYkAwrY",
          buttonType: "modal-video",
        },
        content: {
          title: "About APhA-ASP: Mean Girls Edition",
          image: {
            src: "http://img.youtube.com/vi/7i3aRYkAwrY/maxresdefault.jpg",
            alt: "About Us: Mean Girls",
          },
        },
      },
      {
        button: {
          buttonAlt: "Conference",
          buttonRoute: "https://www.youtube.com/embed/fpZKsoT8WbU",
          buttonType: "modal-video",
        },
        content: {
          title: "APhA Conference in Baltimore, Maryland",
          image: {
            src: "http://img.youtube.com/vi/fpZKsoT8WbU/maxresdefault.jpg",
            alt: "Conference",
          },
        },
      },
      {
        button: {
          buttonAlt: "Fair",
          buttonRoute: "https://www.youtube.com/embed/hMWMDmtauVQ",
          buttonType: "modal-video",
        },
        content: {
          title: "Pacific Spring Picnic: Superhero Themed",
          image: {
            src: "http://img.youtube.com/vi/hMWMDmtauVQ/maxresdefault.jpg",
            alt: "Fair",
          },
        },
      },
      {
        button: {
          buttonAlt: "Draw My Life",
          buttonRoute: "https://www.youtube.com/embed/aBv9NiNHhhw",
          buttonType: "modal-video",
        },
        content: {
          title: "Draw My Life: Pharmacists",
          image: {
            src: "http://img.youtube.com/vi/aBv9NiNHhhw/maxresdefault.jpg",
            alt: "Draw My Life",
          },
        },
      },
    ],
    photoTitle: "Photography",
    photos: [
      {
        button: {
          buttonRoute: ImageDogs,
          buttonType: "modal-img",
        },
        content: {
          title: "Overwatch Heroes as Dogs",
          image: { src: ImageDogs, alt: "overwatch dogs" },
        },
      },
      {
        button: {
          buttonAlt: "T-shirt",
          buttonRoute: ImageSpringPicnic,
          buttonType: "modal-img",
        },
        content: {
          title: "T shirt Design",
          image: { src: ImageSpringPicnic, alt: "T-shirt" },
        },
      },
      {
        button: {
          buttonAlt: "steven universe",
          buttonRoute: ImageStevonnie,
          buttonType: "modal-img",
        },
        content: {
          title: "Steven Universe Cosplay with CG Background",
          image: { src: ImageStevonnie, alt: "steven universe" },
        },
      },
      {
        button: {
          buttonAlt: "graduation photo with overwatch grad caps",
          buttonRoute: ImageGrad,
          buttonType: "modal-img",
        },
        content: {
          title: "Graduation Caps",
          image: {
            src: ImageGrad,
            alt: "graduation photo with overwatch grad caps",
          },
        },
      },
      {
        button: {
          buttonAlt: "mark ruiz",
          buttonRoute: ImageMark,
          buttonType: "modal-img",
        },
        content: {
          title: "White Coat Ceremony: Mark Ruiz",
          image: { src: ImageMark, alt: "mark ruiz" },
        },
      },
      {
        button: {
          buttonAlt: "wesley sweis",
          buttonRoute: ImageWesley,
          buttonType: "modal-img",
        },
        content: {
          title: "Counseling Patients: Wesley Sweis",
          image: { src: ImageWesley, alt: "wesley sweis" },
        },
      },
      {
        button: {
          buttonAlt: "ryan abundo",
          buttonRoute: ImageRyan,
          buttonType: "modal-img",
        },
        content: {
          title: "An aspiring musician/pharmacist: Ryan Abundo",
          image: { src: ImageRyan, alt: "ryan abundo" },
        },
      },
    ],
  },
};
