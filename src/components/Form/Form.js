import React from "react";

class Form extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {value: '', value1: '', value2: ''};
    this.popupName = props.popupName;
    this.setUserData = props.setUserData;
    this.setModalState = props.setModalState;
    this.setUserId = props.setUserId;
    this.userId = props.userId;
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleChange1 = (event) => {
    this.setState({value1: event.target.value});
  }

  handleChange2 = (event) => {
    this.setState({value2: event.target.value});
  }

  getUserData = (event) => {
    event.preventDefault();
    this.props.api.getUserInfo(this.state.value)
      .then((res) => {
        this.setUserData(res);
        this.setUserId(res.id);
        this.setModalState();
      });
  }

  putUserData = (event) => {
    event.preventDefault();
    this.props.api.putUserInfo(this.state.value1, this.state.value2, this.userId);
    this.setModalState();
  }

  render() {
    if (this.popupName === "edit") {
      return (
        <form name="editProfile" action="#" onSubmit={this.putUserData}>
          <h3>Редактировать профиль</h3>
          <input type="text" value={this.state.value1} onChange={this.handleChange1}/>
          <input type="text" value={this.state.value2} onChange={this.handleChange2}/>
          <button type="submit">Сохранить</button>
        </form>
      )
    } else
    if (this.popupName === "authorization") {
      return (
        <form name="authorization" action="#" onSubmit={this.getUserData}>
          <h3>Введите id пользователя</h3>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
          <button type="submit">Войти</button>
        </form>
      )
    }
    
  }
}

export default Form;