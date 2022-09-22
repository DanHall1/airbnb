import { fetchEntireList } from "@/services/modules/entire";
import {
  CHANGE_CURRENT_PAGE,
  CHANGE_ENTIRE_LIST,
  CHANGE_IS_LOADING,
  CHANGE_TOTAL_COUNT,
} from "./constants";

const changeCurrentPageAction = (page) => ({
  type: CHANGE_CURRENT_PAGE,
  page,
});

const changeTotalCountAction = (totalCount) => ({
  type: CHANGE_TOTAL_COUNT,
  totalCount,
});

const changeEntireListAction = (list) => ({
  type: CHANGE_ENTIRE_LIST,
  list,
});

const changeIsLoadingAction = (loading) => ({
  type: CHANGE_IS_LOADING,
  loading,
});

const fetchEntireListAction = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(changeCurrentPageAction(page));
    dispatch(changeIsLoadingAction(true));
    const res = await fetchEntireList(page * 20);
    dispatch(changeIsLoadingAction(false));
    dispatch(changeTotalCountAction(res.totalCount));

    dispatch(changeEntireListAction(res.list));
  };
};

export {
  changeCurrentPageAction,
  changeEntireListAction,
  changeTotalCountAction,
  fetchEntireListAction,
};
