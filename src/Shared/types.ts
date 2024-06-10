export enum SelectedPage {
    Home = "home",
    Benefits = "benifits",
    ContactUs = "contact Us",
    ourClasses = "ourClasses",
  }
  export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
  }

  export interface ClassType {
    name: string;
    description?: string;
    image: string;
  }