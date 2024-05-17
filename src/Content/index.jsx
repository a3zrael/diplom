import { useState } from "react";
import { difficArr } from "./config";
import "./index.scss";
import { TabContent } from "./TabsContent";

export const Content = () => {
  const [tab, setTab] = useState(0);

  const openTab = (e) => setTab(+e.target.dataset.index);

  console.log(difficArr);
  console.log(...difficArr);
  return (
    <>
      <div className="content">
        <>
          <div className="content__left">
            {difficArr[tab] && <TabContent {...difficArr[tab]} />}
          </div>
          <div className="content__right">
            <div className="menu__flex">
              <h3>Меню</h3>
            </div>
            <div className="menu__difficulty">
              {difficArr.map((n, i) => {
                return (
                  <>
                    <button
                      className={`tabLinks ${i === tab ? "active" : ""} `}
                      onClick={openTab}
                      data-index={i}
                    >
                      {n.header}
                    </button>
                  </>
                );
              })}
            </div>
          </div>
        </>
      </div>
    </>
  );
};
