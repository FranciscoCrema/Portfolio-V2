// interfaces/IAbout.ts
export interface ISkill {
  label: string;
}

export interface IAboutSection {
  about: {
    title: string;
    subTitle: string;
    description: string;
  };
  capabilities: {
    title: string;
    description: string;
    skills: ISkill[];
  };
}
