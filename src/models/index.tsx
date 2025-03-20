export interface Info {
  bio: string;
  button: string;
  image?: string;
  text: string;
}
export interface NavLink {
  name: string;
  path: string;
}
export interface Nav {
  logo: string;
  links: NavLink[];
}

export interface Abt {
  image: string;
  secimage?: string;
  text: string;
  texttwo?: string;
}

export interface Tch {
  image: string;
  text: string;
}
