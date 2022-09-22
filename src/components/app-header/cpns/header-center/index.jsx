import IconSearchBar from "@/assets/svg/icon-search-bar";
import React, { memo, useState } from "react";
import { CenterWrapper } from "./style";
import searchTitle from "@/assets/data/search_titles.json";
import HeaderSections from "./cpn/header-sections";
import HeaderTabs from "./cpn/header-tabs";
import { CSSTransition } from "react-transition-group";

const HeaderCenter = memo((props) => {
  const { searchClick, searchFlag } = props;
  const titles = searchTitle.map((i) => i.title);
  const searchInfo = searchTitle.map((i) => i.searchInfos);

  const [tabIndex, setTabIndex] = useState(0);
  const tabClick = (index) => {
    setTabIndex(index);
  };
  const barClick = () => {
    if (searchClick) searchClick();
  };

  return (
    <CenterWrapper>
      <CSSTransition
        classNames="bar"
        in={!searchFlag}
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-bar" onClick={barClick}>
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearchBar />
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        classNames="detail"
        in={searchFlag}
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-detail">
          <HeaderTabs titles={titles} tabClick={tabClick} />
          <div className="infos">
            <HeaderSections itemData={searchInfo[tabIndex]} />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  );
});

export default HeaderCenter;
