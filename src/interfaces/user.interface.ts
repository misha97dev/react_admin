export interface IUsers {
  success: boolean;
  time: string;
  message: string;
  total_users: number;
  offset: number;
  limit: number;
  users: IUserSimple[];
}

export interface IUser {
  success: boolean;
  message: string;
  user: IUserSimple;
}

export interface IUserSimple {
  id: number;
  first_name: string;
  last_name: string;
  gender: string;
  date_of_birth: string;
  profile_picture: string;
  job: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  zipcode: string;
  state: string;
  country: string;
  lattitude: number;
  longitude: number;
}
