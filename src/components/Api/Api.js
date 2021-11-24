import React from "react";

class Api extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    }
  }

  getUserInfo(id) {
    return fetch(`http://localhost:8081/api/user/${id}`, {
      method: 'GET',
      })
      .then(res => {
        if (!res.ok) {
          return Promise.reject(`Ошибка: ${res.status}`);
        } else {
          return res.json();
        }
      })
  }

  putUserInfo(name, surname, id) {
    return fetch(`http://localhost:8081/api/user`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "id": id,
        "name": `${name}`,
        "surname": `${surname}`
      })
      })
      .then(res => {
        if (!res.ok) {
          return Promise.reject(`Ошибка: ${res.status}`);
        } else {
          return res.json();
        }
      })
  }

}

export default Api;