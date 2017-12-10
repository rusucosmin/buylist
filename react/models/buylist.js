export default class Buylist {
  id: int
  name: string
  description: string
  date: string
  constructor(id = 0,
    name = "",
    description = "",
    date = "") {
    this.id = id
    this.name = name
    this.description = description
    this.date = date
  }
}
