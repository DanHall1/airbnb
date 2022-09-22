import classNames from "classnames";
import React, { memo, useRef, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import HeaderCenter from "./cpns/header-center";
import HeaderLeft from "./cpns/header-left";
import HeaderRight from "./cpns/header-right";
import { HeaderWrapper, SearchAreaWrapper } from "./style";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const AppHeader = memo(() => {
  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig,
    }),
    shallowEqual
  );
  const { topAlpha, isFixed } = headerConfig;
  const [searchFlag, setSearchFlag] = useState(false);

  const scrollY = useScrollPosition();
  let isAlpha = topAlpha && scrollY === 0;
  const prev = useRef(0);
  if (!searchFlag) prev.current = scrollY;
  if (searchFlag && Math.abs(prev.current - scrollY) > 30) {
    setSearchFlag(false);
  }

  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className="content">
          <div className="top">
            <HeaderLeft />
            <HeaderCenter
              searchFlag={isAlpha || searchFlag}
              searchClick={(e) => setSearchFlag(true)}
            />
            <HeaderRight />
          </div>
          <SearchAreaWrapper isSearch={isAlpha || searchFlag} />
        </div>
        {isAlpha ||
          (searchFlag && (
            <div className="cover" onClick={(e) => setSearchFlag(false)}></div>
          ))}
      </HeaderWrapper>
    </ThemeProvider>
  );
});

export default AppHeader;
