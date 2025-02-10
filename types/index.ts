export interface ILoginRequest {
  username: string;
  password: string;
}

export interface ILoginResponse {
  data: {
    token: {
      accessToken: string;
      refreshToken: string;
    };
    message: string;
  };
} 