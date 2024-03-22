import { IDogList } from "./IDogList";

export interface IUser {
  email: any;
  token: any;
  id: any;
  name: any;
  secondName: any;
  thirdName: any;
  number: any;
  password: any;
  dogs: IDogList[];
}
