export default class Buylist {
  id: int
  name: string
  description: string
  constructor(id = 0, name = "", description = "") {
    this.id = id
    this.name = name
    this.description = description
  }
}
