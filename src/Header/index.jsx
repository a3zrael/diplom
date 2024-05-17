import { Link } from "react-router-dom";
import "./index.scss";

export const Header = () => {
  return (
    <>
      <div className="header">
        <Link to="/">
          <h1 className="header__title">be aware</h1>
        </Link>
        <div className="menu">
          <Link to="/">
            <button>Главная</button>
          </Link>
          <Link to="content">
            <button>Содержание</button>
          </Link>
          <Link to="simulator">
            <button>Фишенговый симулятор</button>
          </Link>
        </div>
      </div>
    </>
  );
};
