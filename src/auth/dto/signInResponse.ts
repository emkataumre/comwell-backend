import { IsNotEmpty } from 'class-validator';

export class SignInResponse {
  constructor(access_token: string) {
    this.access_token = access_token;
  }

  @IsNotEmpty()
  access_token: string;
}
