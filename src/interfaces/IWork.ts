export interface IWorkItem {
  title: string;
  description: string;
  image: string;
  alt: string;
  info: string;
  category: string;
  year: string;
  role: string;
}

export interface IWorkSection {
  header: {
    title: string;
    description: string;
  };
  items: IWorkItem[];
}
