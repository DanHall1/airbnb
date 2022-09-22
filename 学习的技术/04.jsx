import { RoomsWrapped } from "@/components/section-rooms/style"

高评分 home

1 发送网络请求 "/home/highscore"

2 在store中发送网络请求,  使用promise,不要使用await, 使用await会造成首屏渲染速度太慢
2.1 createAsyncThunk ("", (payload, {dispatch ,getState}) => )
getState 作用可以拿到页码,等等需要传递给网络请求的data
dispatch 派发
export const {requders派发函数 } = homeSlice.actions

3   展示数据 useSelector中拿到数据

4   低至五折 
4.1 请求网络 getHomeDiscountData
4.2 store保存数据 
4.3 页面通过 useSelector中拿到数据
4.4 room-item的宽度 应该为 33.3 , 其他则是25, 传递 itemWidth让外部决定每个房屋信息的宽度

5 tab切换  components /  section-tabs
传入array里面都是要字符串的
5.1 点击tab切换
mpm i classnames 和vue3一样的判断需不需要添加class
5.2 切换下面items的房屋信息
要传入一个函数, 使用useballback
5.3 抽离代码 home-section-v2 
5.4 sectionRoom的初始化值 infoData.dest_address?.[name]
在外面判断 有数据就渲染这个组件

6   热门推荐 
6.1 tab按钮
6.2 section-footer 封装 查看更多>

7 tab的滚动效果
transform: translate()  计算每个item的宽 * index
