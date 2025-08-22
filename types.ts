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
  image: string
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