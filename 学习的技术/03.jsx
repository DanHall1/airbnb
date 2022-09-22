import { createAsyncThunk } from "@reduxjs/toolkit"

1 > 可选中后代元素
  >.content {}
2 高性价比房源
  先拿数据 , 放在 store中
  store  / modules / home 
  const fetchHomeDataAction =   createAsyncThunk("fetchData" , () => {

  })
  initialState = {
    goodPriceInfo
  },
  reducers : {
    changeGoodPriceInfoAction(state,{payload}) {

    }
  }
  extraReducer: {
    [fetchHomeDataAction.fulfilled](state,{payload}) {}
  }

2.1 services / modules / home
    写好网络请求
    getHomeGoodPrice
3   components / section-header / index & style
    rmcp
4   footer
5   component / room-item / index & style 封装每一个房间的显示
    服务器给了10条数据, 使用slice只显示8条数据
    样式 

