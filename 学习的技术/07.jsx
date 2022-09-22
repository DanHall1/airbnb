import { Steps } from "antd"
import { Provider } from "react-redux"

1   图片浏览器 有滚动条,滚动的功能要消失
    解决: body的overflow = hidden
    关闭了之后 overflow为auto

2   图片浏览器的三个部分
    上面的x 点击关闭
    中间区域 单图片切换地址, 使用switchTransition 做动画
      react-transition
      左边进入,右边进入
    下面的指示器
      隐藏图片列表 高度的切换
      点击图片切换

3   entire点击图片切换 会冒泡,跑到detail,要阻止冒泡 stopPropagation

4   home的输入框动画效果
    home / entire  为fixed吸顶
    detail   不是fixed吸顶
    创建main 的redux ,以保存header的配置, 每个页面都是不一样的
    headerConfig : {
      isFixed: false
    }
    在需要的页面 dispatch改变isFixed
    但是现在他切换数据,不会被监听,  因为Suspense
    AppHeader不会监听, 异步加载的js文件发出来的事件
    dispatch(headerConfig)
    Provider 一定要放在最外层, 要不然会出现监听不到
    现在会渲染多一次, 因为第一次加载home,但是还没有下载所以使用应急方案,下载好了就使用 home又会加载一次
4.1 entire的过滤器要fixed定位
4.2 切换页面回到最顶部
    在App监听
    useLocation   [location.pathname]
    window.scrollTo

5   header

    包裹原来的 header
    记录弹出来的位置, 滚动30就自动合上, 但是有可能向上滚动,使用绝对值 abs
    透明度的逻辑
    alpha 和 scrollY ===0

6   自动部署
    http 80
    https 443
    nginx 配置 然后监听网页,拿到数据

    jenkins 新建任务,它会自动下载
    npm install  npm run build   cp  
    vim 
    i esc  shift + : vm
    jenkins 默认是 8080, 需要配置安全组  源 0.0.0.0 代表所有人都可以访问
    cat 查看密码
    
    create a job
    输入任务名称
    dnf install git
    凭证 manage jenkins 凭证 系统 全局凭证
    构建触发器 定时构建
    轮询 代码有变化才更新
    
    配置 node/ npm 
    manage jenkins global tool 插件管理
    manage 系统管理 全部工具管理

    环境配置 node   
    build Steps

    // sudo chown -R jenkins /root/bx_airbnb
    sudo usermod -a -G root jenkins
