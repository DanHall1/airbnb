import PropTypes from "prop-types";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { SectionFooterWrapped } from "./style";

const SectionFooter = memo((props) => {
  const { name } = props;
  let title = "显示更多";
  if (name) title = `显示更多${name}房源`;
   const navigate =  useNavigate();
  const navigateClick = () => {
    navigate("/entire")
  };

  return (
    <SectionFooterWrapped color={name ? "#00848A" : "#000"}>
      <div className="info" onClick={navigateClick}>
        <span className="text">{title}</span>
      </div>
    </SectionFooterWrapped>
  );
});

SectionFooter.propTypes = {
  name: PropTypes.string,
};

export default SectionFooter;
