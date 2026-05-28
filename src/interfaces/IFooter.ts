export interface IContact {
  label: string;
  value: string;
}

export interface IFooterData {
  title: string;
  copyright: string;
  contacts: IContact[];
}

export interface IFooter {
  footerData: IFooterData;
}
