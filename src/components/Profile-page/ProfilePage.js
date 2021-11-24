import React from "react";
import Profile from '../Profile/Profile';
import Popup from "../Popup/Popup";
import Api from '../Api/Api';

class ProfilePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalActive : false,
      modalType : 'qwe',
      userData : {
        name: 'name',
        surname: 'surname',
      },
      userId : ''
    };
    this.ApiEx = new Api()
  }

  setUserId = (id) => {
    console.log(id);
    this.setState({userId : id})
  }

  setUserData = (res) => {
    this.setState({userData : {name: res.name, surname: res.surname}});
  }

  setModalState = (popup) => {
    this.setState({modalActive : !this.state.modalActive});
    this.setModalType(popup);
  }

  setModalType = (popup) => {
    this.setState({modalType : popup});
  }

  render () {
    return (
      <>
        <Profile api={this.ApiEx} setModalState={this.setModalState} userData={this.state.userData}/>
        <Popup api={this.ApiEx} active={this.state.modalActive} popupName={this.state.modalType} 
        setModalState={this.setModalState} setUserData={this.setUserData} setUserId={this.setUserId} userId={this.state.userId}/>
      </>
    )
  }
}

export default ProfilePage;