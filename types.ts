import { IconType } from "react-icons"

// TYPES
export type Checkin = {
  text: string,
  type: CheckinType, 
}

export type Infodump = {
  title: string,
  image: string
}

export type Fixation = {
  title: string,
  image: string,
  starred: boolean
}

export type NavLink = {
  text: string,
  href: string,
  icon: IconType
}

export type User = {
  id: string;
  username: string;
  email: string;
  hashedPassword: string;
  bio: string;
  profilePicture: string;
  profileTags: string[];
  pinnedInfodumps: Infodump[];
  fixations: Fixation[];
  checkins: Checkin[];
}

export type LoginData = {
  email: string;
  password: string;
}

export type SignupData = {
  username: string;
  email: string;
  password: string;
}

// ENUMS
export enum InputType {
  text = "text",
  email = "email",
  password = "password",
  passwordCheck = "passwordCheck"
}

export enum CheckinType {
  book = "book",
  movie = "movie",
  tvshow = "tvshow",
  music = "music",
  game = "game"
}

// SET STATE FUNCTION TYPES

export type SetStarred = (updater: (prev: boolean) => boolean) => void;
export type SetSortAlpha = (updater: (prev: boolean) => boolean) => void;
export type SetSearchContent = (updater: ( (prev: string) => string) | string) => void;
