配置别名 @ = src
npm i @craco/craco@alpha -D
创建craco.config.js文件

const { dirname, normalize } = require("path")
const path = require("path")
const resolve = pathname => path.resolve(__dirname,pathname)
module.exports = {
  // less
  // 对webpack某一项进行修改,拍照别名
  webpack: {
    //需要配置绝对路径
    alias: {
    "@": resolve("src"),
    "components": resolve("src/components"),
    "utils": resolve("src/utils") 
    }
  }
}
package.json 的scripts
前面加上 craco start

// less 
npm i craco-less@2.1.0-alpha.0
去github issuc查看
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
 
css样式的重置
normalize.css别人的
npm i normalize.css

reset.css自己的

router配置
npm i react-router-dom

import { Suspense } from "react"
import {HashRouter} from "react-router-dom"



页面的结构
所有的页面的头部和脚部都是一样的
配置路由
router / index
const route = []
useRoutes(router)

页面的取名
home   主页 
detail 详情
entire 全部

Suspense fallback={<div>loading<div/>} 应急方案 



redux状态管理
store / index
import {configureStore} from "@reduxjs/toolkit"
rtk

const store = configureStore({
  reducer: {
    home: homeReducer
  }
})

const homeSlice = createSlice({
  name: "home",
  initialState: {

  },
  reducers: {}
})

普通的redux
index.js

reducer.js
const initialState = {

}
function reducer(state = initialState,action ) {
  switch(action.type) {
    default:
    return state
  }
}
createActions.js
constants.js

网络请求 axios
npm i axios
servicer /  request  / index
import axios from "axios"
import { request } from "https"
class BXRequest {
  constructor() {
    this.instance = axios.create({
      baseUrl,
      timeout
    })
    this.instance.interceptors.response.use(res => {
      return res.data
    },err => {
      return err
    })
  }
    request(config) {
      return this.instance.request()
    }
    get(config) {
      return this.request({...config,method: "get"})
    }
    post(config) {
      return this.request({...config, method: "post"})
    }
}
services /  request / config
const BASE_URL = http://coderwhycba.com:1888/airbnb.api
const TIMEOUT = 10000

services /  index

第一次进来会没有数值,undefined拿数据会报错
两种
{list &&  list.map()}
{list?.map()}