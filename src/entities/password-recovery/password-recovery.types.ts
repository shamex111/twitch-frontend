export interface ISendPasswordRecovery {
  email: string;
}
export interface INewPasswordDto {
  newPassword: string;
  token: string;
}
