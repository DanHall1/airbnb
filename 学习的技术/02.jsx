结构 
头部
body
footer

1 header 
1.1 其中的差异有三种,首页 滚动有动画, 更多 fixed并且input也有差异, 详情 不是fixed
1.2 封装三个 
    在每一个都使用 nav-header
1.3 采用一个
    在App中直接使用即可
1.4 结构划分
    components / app-header / style.js
import { useEffect } from "react"
      import styled from "styled-components"
      const HeaderWrapper = styled.div`
        .left{}
        .center{}
        .right{}
      `
    components / app-header / index.js
      <HeaderWrapper>
        <div className="left"></div>
        <div className="center"></div>
        <div className="right"></div>
      </HeaderWrapper>
    components / app-header / c-cpns / header-left / index & style
    components / app-header / c-cpns / header-center / index & style
    components / app-header / c-cpns / header-right / index & style
1.5 样式调整
    components / app-header / style.js
    {
      display: flex
      align-item: center
      height: 80px
      border-bottom: 1px solid #ee
    }
    left & right   flex: 1
1.6 svg
    <div>
      <svg><path></path></svg>
    </div>
    优点 这样的好处就是一下载 HTML 这些svg全部都会被下载下来
    缺点 也可能下载显示不了 / 不好做动态颜色
    assets / svg / icon_logo 
    将svg元素返回
    assets / svg / utils / index  
    styleStrToObject 
2   主题色 
    assets / theme / index
    const theme = {
      color: {
        primaryColor: #ff385c,
        secondaryColor: #008484
      },
      textColor: {
        primaryColor: #484848
        seconderColor: #222
      },
      mixin: {
        boxShadow:  `
          color: red
          `
      }
    }
    使用主题色 

    混入

    `
    color: red
    `
    插入属性
    ${boxShadow}
    点击profile
    因为会冒泡所以会将之前的变量变成false
    useEffect(() => {
      function windowHandleClick() {

      }
      window.addEventListener("click", windowHandleClick,true)
      return () => {
        window.
      }
    })

3   首页的搭建
    views / home / index & style 
    views / home / home-banner / index & style
    background : url()
    和 img 元素 都是不能直接显示的, 因为webpack打包后,我们的路径是不一致的,所以会显示空白
    要使用 import 导入;;
    import coverImg from  "@/assets/img" 或者
    background : url(${require("@/assets/img").default})