import React from "react";
import { useTranslation } from "react-i18next";

const DescriptionCard = ({ children }) => {
  const t = useTranslation("DescriptionCard");
  return (
    <>
      <h1>t('DescriptionCreditCard')</h1>
      {children}
    </>
  );
};

export default DescriptionCard;
