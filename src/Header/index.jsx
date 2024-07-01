import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import "./index.scss";

export const Header = () => {
  const mobile_style = {
    padding: "6px",
    fontSize: "12px",
    margin: "3px",
  };

  // const mobile_style_menu = {
  //   display: "flex",
  //   gap: "5px",
  //   flexDirection: "column",
  // };

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
          <div className="buttons">
            <Menu>
              <MenuButton>Тренажеры</MenuButton>
              <MenuItems anchor="bottom">
                <MenuItem>
                  <Link to="simulator">
                    <button style={mobile_style} className="menu__bottoms">
                      Фишенговый симулятор
                    </button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="pass">
                    <button style={mobile_style}>Создание пароля</button>
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
