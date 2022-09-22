
1 页面轮播图的分析
1. 指示器的点居中, 但是靠边的几个不会居中,还是详情图的图片也是类似的  
  entire / entire-filter 
  entire / entire-pagination
  entire / entire-rooms

2 filter的过滤器
  2.1 拿到json的数据, 
  2.2 选择多个条件,对每个item进行监听
  2.3 ClassNames 判断选中的item,样式的更新

3 rooms / room的数据
  redux保存数据
    当前页码
    页面数据的数量
    当前页码
3.1 请求数据 entire/list
    参数 getOffsetLeft,size
    在action文件发送网络请求, (dispatch, getState) => 
    需要拿到页码, 
    在entire页面派发
3.2 点击首页logo可以回去首页 监听点击
    useNavigate

4   entire / pagination 
    分页器 通过 mui 的 ui库的使用
    修改样式和 第 xxx条数据,总共xxx数据
4.1 点击分页器,切换数据
    onChange会传入两个参数 event, pageCount
    请求数据 pageCount需减1 , 因为请求是从0开始
4.2 蒙版的展示和loading
4.3 css属性 object=fit 图片不要被压缩

5   轮播图的效果
    修改两个箭头svg的大小
    使用antd

6 思路 base-ui / indicator
  先写一个demo, 然后封装成组件
6.1 点击下一个一定在中间
6.2 获取selectIndex对应的item
6.3 获取selector要滚动的距离
6.4 特殊情况的处理
6.5 移动位置
6.6 判断imgs有没有有就显示普通的, 没有就显示slider


选中谁,谁滚动到中间
滚动到组件 的算法 中间的offsetLeft + 中间的宽度 / 2 - 可滚动的总宽度 / 2
左边的情况 什么时候需要居中 判断只要是负值就不要移动
右边的情况 总宽度 - 可移动的宽度
    

7 进入首页
  测试的时候,将详情页的数据先保存到redux中, 复制粘贴