import { useState } from "react";
import "./index.scss";
import { Modal } from "../Modal/index";

export const FishingSimulator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const mailList = [
    {
      name: "Ирина documents@official-law.site",
      theme: "Рабочая история от Ирины",
      firstText: `Добрый день!.Вас беспокоит Ирина, вы спрашивали меня насчет моей рабочей истории. Там довольно большой объём, поэтому я к письму не прикладываю, а загрузила на файлообменник:$`,
      link: "https://official-law.site/process/ru/demo-eyJjb2RlIjoiMTQ1X1dvcmtfSGlzdG9yeSIsImxvY2FsZSI6InJ1In0",
      lastText: `Проверьте, пожалуйста, все ли правильно, до нашей следующей встречи. Спасибо!
      С уважением,Ирина`,
    },
    {
      name: "Ирина documents@official-law.site",
      theme: "Рабочая история от Ирины",
      firstText: `Добрый день!.Вас беспокоит Ирина, вы спрашивали меня насчет моей рабочей истории. Там довольно большой объём, поэтому я к письму не прикладываю, а загрузила на файлообменник:$`,
      link: "https://official-law.site/process/ru/demo-eyJjb2RlIjoiMTQ1X1dvcmtfSGlzdG9yeSIsImxvY2FsZSI6InJ1In0",
      lastText: `Проверьте, пожалуйста, все ли правильно, до нашей следующей встречи. Спасибо!
      С уважением,Ирина`,
    },
  ];

  return (
    <>
      <div>
        <div>
          <h2>Данная старница является симулятором фишинговых ссылок</h2>
          <p>
            Ваша задача открыть искуственно письмо и понять является ли оно
            безопасным для вас
          </p>
        </div>
        <div>
          {mailList.map((item, index) => {
            return (
              <>
                <div className="mail_item" key={index}>
                  <button
                    onClick={() => {
                      setSelectedItem(item);
                      setIsOpen(true);
                    }}
                    className="mail_button"
                  >
                    {item.name}
                  </button>
                  <p>новое письмо</p>
                </div>
              </>
            );
          })}
        </div>
        <div>
          {isOpen && (
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} item={selectedItem} />
          )}
        </div>
      </div>
    </>
  );
};
