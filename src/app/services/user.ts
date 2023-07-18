export interface User {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
  profilePicture: string | ArrayBuffer | null;
}
