export interface IRegisterForm {
  email: string;
  name: string;
  password: string;
  passwordRepeat: string;
}

export interface ILoginForm {
  email:string,
  password:string,
  code?:string
}

export type TProvider  = "google" | "yandex"