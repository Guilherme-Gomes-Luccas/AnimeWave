export interface Posts {
  public_id?: string;
  id_user: string;
  user_photo?: string;
  username?: string;
  hashtags?: Array<string>;
  content: string;
  photo: string;
  date?: string | Date;
}
