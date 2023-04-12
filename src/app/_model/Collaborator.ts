import { Position } from "./Position";
import { Document } from "./Document";
import { Account } from "./Account";


export class Collaborator{

    idCollaborator! : number;
    names! : string;
    lastname! : string;
    document! : Document;
    nroDocument! : string;
    telephone! : string;
    position! : Position
    projects! : Account[];
    idSupervisor! : number;
    state! : number;

}