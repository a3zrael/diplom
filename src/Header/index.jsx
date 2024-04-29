import { Route, Routes } from "react-router-dom";
import "./index.scss";

export const Header = () => {
  return (
    <>
      <div className="header">
        <h1 className="header__title">be aware</h1>
        <div className="menu">
          <Routes>
            <Route path="/" />
          </Routes>
          <button>Главная</button>
          <button>Содержание</button>
          <button>Фишенговый симулятор</button>
        </div>
      </div>
    </>
  );
};
