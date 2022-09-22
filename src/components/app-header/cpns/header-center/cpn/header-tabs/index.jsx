import classNames from "classnames";
import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { TabsWrapper } from "./style";

const HeaderTabs = memo((props) => {
  const { titles, tabClick } = props;

  const [index, setIndex] = useState(0);
  const itemClick = (index) => {
    if (tabClick) tabClick(index);
    setIndex(index);
  };

  return (
    <TabsWrapper>
      {titles.map((item, currentIndex) => {
        return (
          <div
            className={classNames("item", { active: index === currentIndex })}
            key={item}
            onClick={(e) => itemClick(currentIndex)}
          >
            <span>{item}</span>
            <span className="bottom"></span>
          </div>
        );
      })}
    </TabsWrapper>
  );
});

HeaderTabs.propTypes = {
  titles: PropTypes.array,
  tabClick: PropTypes.func,
};

export default HeaderTabs;
