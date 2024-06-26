import "./index.scss";

import image from "../Asset/icon.png";
import image2 from "../Asset/icon2.png";

export const Land = () => {
  return (
    <>
      <div className="containet_land">
        <div className="top-content">
          <img src={image} alt="" />
          <div className="wrap">
            <h2>be aware</h2>
            <p>
              Данная платформа создавалась для обучения пользователей, с целью
              зашиты их данных, и данных компании. В наше время не редко бывают
              трудности с безопастностью в сети, мошенники, несанкционированая
              кража персональных данных и использование их против вашей воли.
            </p>
            <p></p>
          </div>
        </div>
        <div className="wrap">
          <h3>Что такое информационная безопасность?</h3>
          <p>
            Информационная безопасность — набор практик по защите информации. ИБ
            включает в себя предотвращение несанкционированного доступа,
            раскрытия, уничтожения или изменения информации, снижение негативных
            последствий инцидентов и не только. Информация может быть
            материальной (документы), нематериальной (знания) и электронной.
            Одно из ключевых направлений ИБ — защита целостности,
            конфиденциальности и доступности данных. Важная часть обеспечения ИБ
            — разработка специальных политик, процедур и регламентов, которые
            определяют организационные меры и технические средства по защите
            информации. Защита информации необходима на этапах ее обработки,
            передачи, хранения и уничтожения. Кроме того, для обеспечения
            информационной безопасности разработаны различные мировые и
            отечественные стандарты, в которых описываются общие принципы по
            обеспечению ИБ.
          </p>
        </div>
        <div className="bottom-content">
          <div className="wrap">
            <h3>Какие проблемы решает?</h3>
            <p>
              Сайт предоствит краткую информацию по основным секциям которые
              требуется освоить в теоретическом плане, а так же фишенговый
              симулятор для практического закрепления. В будущем сайт будет
              развиваться и обучит вас определенным навыкам для сохранения
              свойств информации - защита её конфиденциальности, сохранение
              целостности, обеспечение доступности, а также противодействие
              нарушителям информационной безопасности.
            </p>
          </div>
          <img src={image2} />
        </div>
        <p className="wrap_p">
          <span>telegram: @marusov_aa</span>
          <span>-</span>
          <span>e-mail: marusov140@gmail.com</span>
        </p>
      </div>
    </>
  );
};
