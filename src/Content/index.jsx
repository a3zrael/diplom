import "./index.scss";

export const Content = () => {
  const difficArr = [
    { name: "Электронная почта", content: "mail" },
    { name: "Пароли и учетные записи", content: "mail" },
    { name: "Веб-сайты и Интернет", content: "mail" },
    { name: "Социальные сети и мессенджеры", content: "mail" },
    { name: "Безопасность ПК", content: "mail" },
    { name: "Конфиденциальные данные", content: "mail" },
  ];
  return (
    <>
      <div className="content">
        <div>
          <div className="menu__flex">
            <h3>Меню</h3>
          </div>
          <div className="menu__difficulty">
            {difficArr.map(({ name }) => {
              return (
                <>
                  <button>{name}</button>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
