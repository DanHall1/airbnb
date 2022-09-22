import {
  CHANGE_CURRENT_PAGE,
  CHANGE_ENTIRE_LIST,
  CHANGE_IS_LOADING,
  CHANGE_TOTAL_COUNT,
} from "./constants";

const initialState = {
  currentPage: 0,
  totalCount: 0,
  entireList: [],
  isLoading: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.page };
    case CHANGE_ENTIRE_LIST:
      return { ...state, entireList: action.list };
    case CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount };
    case CHANGE_IS_LOADING:
      return { ...state, isLoading: action.loading };
    default:
      return state;
  }
}

export default reducer;
