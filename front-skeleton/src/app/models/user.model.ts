import { Course } from "./course.model"
import { Major } from "./major.model"

export interface User {
  userid?: bigint
  image?: string
  username: string
}
