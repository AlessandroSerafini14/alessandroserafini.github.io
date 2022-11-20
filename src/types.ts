export enum ChipType {
  PRIMARY,
  SECONDARY,
  DEFAULT,
  SUCCESS,
}

export enum ButtonSize {
  SMALL,
  MEDIUM,
}

export enum TextSize {
  SMALL,
  LARGE,
  XLARGE,
}

export enum LanguageLevel {
  A1 = "A1",
  A2 = "A2",
  B1 = "B1",
  B2 = "B2",
  C1 = "C1",
  C2 = "C2",
}

export type Anchor = {
  text: string;
  target: string;
  icon: JSX.Element;
};

export type Experience = {
  id: string;
  company: Company;
  role: string;
  employment: string;
  city: string;
  country: string;
  description: string;
  startDate: string;
  endDate?: string;
};

export type Company = {
  id: string;
  name: string;
  logo: string;
  url?: string;
};

export type Education = {
  id: string;
  name: string;
  startDate: string;
  endDate?: string;
  place: string;
};

export type Item = {
  id: string;
  title: string;
  subtitle: string;
  icon: JSX.Element;
  url?: string;
};

export type Language = {
  id: string;
  name: string;
  percentage: number;
  color: string;
  level: LanguageLevel;
};

export type Publication = {
  id: string;
  name: string;
  date: string;
  url: string;
};
