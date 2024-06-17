import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
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
          <div>
            <Menu>
              <MenuButton>Тренажеры</MenuButton>
              <MenuItems anchor="bottom">
                <MenuItem>
                  <Link to="simulator">
                    <button>Фишенговый симулятор</button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="pass">
                    <button>Создание пароля</button>
                  </Link>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
};
