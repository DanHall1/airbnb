1 tab的滚动效果  base-ui / scroll-view
transform: translate()  计算每个item的宽 * index
ref.current.scrollWidth 可以滚动的宽度
ref.current.clientWidth 本身占据的宽度
1.1 offsetLeft 计算偏移量,需要根据定位元素, 否则找到body
一开始 index = 0
拿到元素的index
1.2 是否显示btn
是否显示 = 一共可滚动 > 新偏移的左边值 offsetLeft
使用 ref 保存 新偏移的左边值 offsetLeft,如果使用 useState点击一次就会重新刷新

2   你可能想去longfor   "/home/longfor"
2.1 home / cpns / home-longfor

3   homePlusData 的数据展示  "home/plus"

4   SetionFooter的点击 查看更多
4.1 跳转路由 useNavigate()

5   entire的结构分析
头部过滤 filter-section
中间内容 room-section
页脚跳转 分页器 pagination-section
