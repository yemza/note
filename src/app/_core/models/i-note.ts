import { IUser } from "./i-user";

export interface INote {
  noteId?: number;

  noteTitle?: String;

  noteDescription?: String;

  noteWrittenDate?: Date;

  noteModifiedDate?: Date;

  noteUser?: IUser;
}
