import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { HomeWrapper } from "./style";

import HomeBanner from "./cpns/home-banner";

import { getHomeDateAction } from "@/store/modules/home";
import HomeSectionV1 from "./cpns/home-section-v1";
import { isEmpty } from "@/utils";
import HomeSectionV2 from "./cpns/home-section-v2";
import LongFor from "./cpns/long-for";
import HomeSectionV3 from "./cpns/home-section-v3";
import { changeHeaderConfigAction } from "@/store/modules/main";

const Home = memo(() => {
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    hotRecommendInfo,
    longForInfo,
    plusInfo,
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      hotRecommendInfo: state.home.hotRecommendInfo,
      longForInfo: state.home.longForInfo,
      plusInfo: state.home.plusInfo,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHomeDateAction());
    dispatch(
      changeHeaderConfigAction({
        isFixed: true,
        topAlpha: true,
      })
    );
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {isEmpty(discountInfo) && (
          <HomeSectionV2 itemData={discountInfo} itemWidth="33.3333%" />
        )}
        {isEmpty(hotRecommendInfo) && (
          <HomeSectionV2 itemData={hotRecommendInfo} itemWidth="33.3333%" />
        )}
        {isEmpty(longForInfo) && <LongFor itemData={longForInfo} />}
        {isEmpty(goodPriceInfo) && <HomeSectionV1 itemData={goodPriceInfo} />}
        {isEmpty(highScoreInfo) && <HomeSectionV1 itemData={highScoreInfo} />}
        {isEmpty(plusInfo) && (
          <HomeSectionV3 itemData={plusInfo} itemWidth="20%" />
        )}
      </div>
    </HomeWrapper>
  );
});

export default Home;
