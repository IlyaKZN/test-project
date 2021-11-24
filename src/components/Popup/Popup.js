import React from "react";
import popupStyles from "./popup.module.scss";
import Form from "../Form/Form";

function Popup({active, popupName, setModalState, api, setUserData, setUserId, userId}) {
  if (popupName === "edit") {
    return (
      <div className={active ? `${popupStyles.popup} ${popupStyles.active}` : `${popupStyles.popup}`} onClick={() => setModalState()} >
        <div className={popupStyles.popupСontent} onClick={(e) => e.stopPropagation()}>
          <Form api={api} popupName={popupName} setModalState={setModalState} setUserId={setUserId} userId={userId}/>
        </div>
      </div>
    )
  } else if (popupName === "authorization") {
    return (
      <div className={active ? `${popupStyles.popup} ${popupStyles.active}` : `${popupStyles.popup}`} onClick={() => setModalState()} >
        <div className={popupStyles.popupСontent} onClick={(e) => e.stopPropagation()}>
          <Form api={api} popupName={popupName} setUserData={setUserData} setModalState={setModalState} setUserId={setUserId} userId={userId}/>
        </div>
      </div>
    )
  } else {
    return null;
  }
  
}

export default Popup;