import { Collaborator } from "./Collaborator";

export class Account{

    idAccount! : number;
    account! : string;
    username! : string;
    password! : string;
    collaborator! : Collaborator;
    state! : number;

}