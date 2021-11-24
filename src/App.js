import appStyles from './App.module.scss';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import { BrowserRouter, Routes } from 'react-router-dom';
import Api from './components/Api/Api';

function App() {
  return (
    <BrowserRouter>
      <div className={appStyles.App}>
        <Header />
        <Content api={Api}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
