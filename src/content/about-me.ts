// content/about.ts
import { IAboutSection } from "@/interfaces/IAboutMe";

export const aboutSection: IAboutSection = {
  about: {
    title: "About Me",
    subTitle:
      "I am a front-end developer based in Sydney. Has Mechanical Engineering background.",
    description:
      "I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I'm exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.",
  },
  capabilities: {
    title: "My Capabilities",
    description: "I am always looking to add more skills.",
    skills: [
      { label: "HTML" },
      { label: "CSS" },
      { label: "Javascript" },
      { label: "JQuery" },
      { label: "Accessibility" },
      { label: "Figma" },
      { label: "Tailwind CSS" },
    ],
  },
};
