import {Reponse} from "./reponse.model";


export interface Question {
  id?: bigint
  texte: string
  reponses: Reponse[]
}
