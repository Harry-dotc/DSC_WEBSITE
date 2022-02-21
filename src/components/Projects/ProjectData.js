//import image
import GAN_IMG from "../../assets/images/Projects/GAN_IMG.png";
import Workspace from "../../assets/images/Projects/Workspace.jpeg";

export const ProjectData = [
  {
    id: 1,
    name: "Generative Dog Images",
    tags: {
      web: [],
      ml: ["GAN(Generative Adversarial Networks)"],
      app: [],
    },
    members: ["Pranjul Itondia", "Nihal MB Chaudhary"],
    description:
      "This project generated us fake images of dogs learnt from real ones that exists using Generative Adversial Networks. Our project is based on the concept of GAN(Generative Adversarial Networks). We have used a dataset with images of different variety of dogs. We have trained our model to differentiate between fake and real dog images using GAN.",
    links: {
      github: "https://github.com/pranjul6386/GAN",
    },
    image: GAN_IMG,
  },
  {
    id: 1,
    name: "Workspace",
    tags: {
      web: ["HTML", "CSS", "JS", "JQuery", "Node.js"],
      ml: [],
      app: [],
    },
    members: ["Hitesh Tripathi", "Ayushi Bansal", "Krishna Agarwal"],
    description:
      "Its a website for a Startup idea , Workspace in which we will provide workspace to growing startups on the basis of there need , at low costs",
    links: {
      github: "/",
    },
    image: Workspace,
  },
];
