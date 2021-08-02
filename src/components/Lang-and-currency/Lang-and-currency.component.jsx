import React from "react";
import "./Lang-and-currency.styles.css";

const LangAndCurrency = ({ language, setLanguage }) => {
  const closeOutsideLanguage = () => {
    setLanguage(false);
  };
  return (
    <div className="lang-modal-wrapper" onClick={closeOutsideLanguage}>
      <div className="whole-block-lang"></div>
    </div>
  );
};

export default LangAndCurrency;
