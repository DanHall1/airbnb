import IconAvatar from "@/assets/svg/icon_avatar";
import IconGlobal from "@/assets/svg/icon_global";
import IconMenu from "@/assets/svg/icon_menu";
import React, { memo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { RightWrapper } from "./style";

const HeaderRight = memo(() => {
  const [isShowPanel, setIsShowPanel] = useState(false);
  const profileClick = () => {
    setIsShowPanel(true);
  };

  useEffect(() => {
    const windowClickShowPanel = () => {
      setIsShowPanel(false);
    };
    window.addEventListener("click", windowClickShowPanel, true);
    return () => {
      window.removeEventListener("click", windowClickShowPanel, true);
    };
  }, []);
  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>
      <div className="profile" onClick={profileClick}>
        <IconMenu />
        <IconAvatar />
        {isShowPanel && (
          <div className="panel">
            <div className="top">
              <div className="item">注册</div>
              <div className="item">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
