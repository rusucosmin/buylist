class UsersApi {
  static fetchUsers(jwt) {
    console.log("fetch users")
    return fetch("http://localhost:3000/users", {
      method: "GET",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: "Bearer " + jwt
      }
    }).then(res => {
      if (!res.ok) {
        throw Error(res.statusText)
      }
      return res.json()
    })
  }

  static addUser(jwt, email, password) {
    return fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: "Bearer " + jwt
      },
      body: JSON.stringify({
        user: {
          email,
          password
        }
      })
    }).then(res => {
      if (!res.ok) {
        throw Error(res.statusText)
      }
      return res.json()
    })
  }

  static deleteUser(jwt, id) {
    return fetch("http://localhost:3000/user/" + id, {
      method: "DELETE",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: "Bearer " + jwt
      }
    }).then(res => {
      if (!res.ok) {
        throw Error(res.statusText)
      }
      return res
    })
  }

  static updateUser(jwt, id, email, role, password) {
    return fetch("http://localhost:3000/user/" + id, {
      method: "PATCH",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: "Bearer " + jwt
      },
      body: JSON.stringify({
        user: {
          email,
          role,
          password
        }
      })
    }).then(res => {
      if (!res.ok) {
        throw Error(res.statusText)
      }
      return res.json()
    })
  }
}

export default UsersApi;
