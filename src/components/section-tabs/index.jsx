import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { TabsWrapper } from "./style";
import ScrollView from "@/base-ui/scroll-view";

const SectionTabs = memo((props) => {
  const { tabs, tabClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const tabsClick = (item, index) => {
    setCurrentIndex(index);
    tabClick(item, index);
  };
  return (
    <TabsWrapper>
      <ScrollView>
        {tabs.map((item, index) => (
          <span
            key={item}
            onClick={(e) => tabsClick(item, index)}
            className={`tab  ${index === currentIndex ? "active" : ""}`}
          >
            {item}
          </span>
        ))}
      </ScrollView>
    </TabsWrapper>
  );
});

SectionTabs.propTypes = {
  tabs: PropTypes.array,
  tabClick: PropTypes.func,
};

export default SectionTabs;
