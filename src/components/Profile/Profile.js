import React from 'react';
import profileStyles from "./profile.module.scss";
import profileAvatar from "../../images/profileAvatar.jpg";

function Profile({setModalState, api, userData}) {

  
  let id;

  return (
    <div className={profileStyles.container}>
      <img className={profileStyles.avatar} src={profileAvatar} />
      <p className={profileStyles.name}>{userData.name} {userData.surname}</p>
      <button className={profileStyles.button} type="button" onClick={() => setModalState('edit')}>Редактировать</button>
      <button className={profileStyles.button} type="button" onClick={() => setModalState('authorization')}>Авторизоваться</button>
    </div>
  )
}

export default Profile;