import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionsWrapper } from "./style";

const HeaderSections = memo((props) => {
  const { itemData } = props;
  return (
    <SectionsWrapper>
      {itemData.map((item, index) => {
        return (
          <div className="item" key={item.title}>
            <div className="info">
              <div className="title">{item.title}</div>
              <div className="desc">{item.desc}</div>
            </div>
            {index !== itemData.length - 1 && <div className="divider"></div>}
          </div>
        );
      })}
    </SectionsWrapper>
  );
});

HeaderSections.propTypes = {
  itemData: PropTypes.array,
};

export default HeaderSections;
