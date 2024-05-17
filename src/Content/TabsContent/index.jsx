import "./index.scss";

export const TabContent = ({ header, firstText, secondText, lastText }) => {
  return (
    <>
      <div className="tab__content">
        <h1>{header}</h1>
        <p>{firstText}</p>
        <p>{secondText}</p>
        <p>{lastText}</p>
      </div>
    </>
  );
};
