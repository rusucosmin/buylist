class LoginApi {
  static login(email, password) {
    return fetch("http://localhost:3000/user_token", {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        auth: {
          email,
          password
        }
      })
    }).then(res => {
      if (!res.ok) {
        if (res.status === 404) {
          throw Error("Invalid username and password combination.");
        }
        throw Error(res.statusText);
      }
      return res.json();
    })
  }

  static getCurrentUser(jwt) {
    return fetch("http://localhost:3000/user/current", {
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
      return res.json();
    })
  }
}

export default LoginApi;
