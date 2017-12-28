export default class User {
  id: int
  email: int
  role: string
  constructor(id = 0,
    email = "",
    role = "") {
    this.id = id
    this.email = email
    this.role = role
  }
}
