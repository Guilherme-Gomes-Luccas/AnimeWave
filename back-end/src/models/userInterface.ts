export interface User {
  name: string;
  email: string;
  password: string;
  public_id: string;
  photo?: string | null;
  refresh_token?: string | null;
  access_token?: string | null;
}
