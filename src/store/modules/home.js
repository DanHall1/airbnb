import {
  fetchDiscountData,
  fetchHighScore,
  fetchHomeData,
  fetchHotRecommend,
  fetchLongFor,
  fetchPlus,
} from "@/services/modules/home";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getHomeDateAction = createAsyncThunk(
  "getHomeDate",
  (payload, { dispatch }) => {
    fetchHomeData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res));
    });
    fetchHighScore().then((res) => {
      dispatch(changeHighScoreInfoAction(res));
    });
    fetchDiscountData().then((res) => {
      dispatch(changeDiscountInfoAction(res));
    });
    fetchHotRecommend().then((res) => {
      dispatch(changeHotRecommendInfoAction(res));
    });
    fetchLongFor().then((res) => {
      dispatch(changeLongForInfoAction(res));
    });
    fetchPlus().then((res) => {
      dispatch(changePlusInfoAction(res));
    });
  }
);

const home = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: [],
    highScoreInfo: [],
    discountInfo: [],
    hotRecommendInfo: [],
    longForInfo: [],
    plusInfo: []
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload;
    },
    changeHotRecommendInfoAction(state, { payload }) {
      state.hotRecommendInfo = payload;
    },
    changeLongForInfoAction(state, { payload }) {
      state.longForInfo = payload;
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload;
    },
  },
});

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeHotRecommendInfoAction,
  changeLongForInfoAction,
  changePlusInfoAction
} = home.actions;
export { getHomeDateAction };

export default home.reducer;
