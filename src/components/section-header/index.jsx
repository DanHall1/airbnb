import React, { memo } from "react";
import { HeaderWrapped } from "./style";
import PropTypes from "prop-types";

const SectionHeader = memo((props) => {
  const { title, subTitle } = props;
  return <HeaderWrapped>
    <h2 className="title">{title}</h2>
    {subTitle && <div className="subtitle">{subTitle}</div>}
  </HeaderWrapped>;
});

SectionHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default SectionHeader;
