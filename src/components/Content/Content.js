import React from "react";
import ContentStyles from './content.module.scss';
import RickRoll from "../RickRoll/RickRoll";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "../Profile-page/ProfilePage";

function Content({api}) {
  return (
    <div className={ContentStyles.content}>
        <Routes>
          <Route path="/" element={<ProfilePage api={api} />} />
          <Route path="/about" element={<RickRoll />} />
        </Routes>
    </div>
  )
}

export default Content;