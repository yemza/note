import { INote } from "./i-note";
import { IRole } from "./i-role";

export interface IUser {
  userId?: number;
  firstName?: String;
  lastName?: String;
  email?: String;
  username?: String;
  userNotes?: INote[];
  userRoles?: IRole[];
}
