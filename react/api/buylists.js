class BuylistsApi {
  static fetchBuylists(jwt) {
    return fetch("http://localhost:3000/buy_lists", {
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

  static addBuylist(jwt, user_id, name, description) {
    return fetch("http://localhost:3000/buy_lists", {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: "Bearer " + jwt
      },
      body: JSON.stringify({
        buy_list: {
          user_id,
          name,
          description
        }
      })
    }).then(res => {
      if (!res.ok) {
        throw Error(res.statusText)
      }
      return res.json()
    })
  }

  static deleteBuylist(jwt, id) {
    return fetch("http://localhost:3000/buy_lists/" + id, {
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

  static updateBuylist(jwt, id, name, description) {
    return fetch("http://localhost:3000/buy_lists/" + id, {
      method: "PATCH",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: "Bearer " + jwt
      },
      body: JSON.stringify({
        buy_list: {
          name,
          description
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

export default BuylistsApi;
