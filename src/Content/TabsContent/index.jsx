import "./index.scss";

export const TabContent = ({ header, firstText, secondText }) => {
  return (
    <>
      <div className="tab__content">
        <h1>{header}</h1>
        <p>{firstText}</p>
        <p>{secondText}</p>
      </div>
    </>
  );
};
