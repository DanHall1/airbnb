1 传统模式;
1.1 花了两三个月, 测试,客服,产品就没啥事情干
1.2 我们打包代码 build ,把代码给到测试, 测试发现bug反馈给我们, 测试发现没有问题, 就会把代码发给其他人, 产品经理, 运维,
1.3 部署到服务器, 用户通过域名来访问
传统模式的弊端
1 工作不协调: 开发人员在开发阶段,测试和运维人员其他是在等待的状态,到测试阶段,开发人员等到测试反馈bug,也会处于等待状态
2 线上bug的隐患: 项目准备交付的时候,突然出现了bug,所有人都需要加班,等待问题的处理

2  devOps (Development / Operations) 将开发和运维结合起来的模式,就是边开发边操作
2.1 持续集成: 开发人员开发完把代码提交到仓库中, 然后 jenkins 发现代码有改变即立刻部署, 然后测试, 之后拿到结果, 反馈给开发人员, 开发人员在进行修复,重复上面的操作
2.2 持续交付: 比持续集成多一些步骤, 把发布的代码给到运维人员,在由运维人员,产品人员进行测试,有问题反馈给开发人员,最后手动交付
2.3 持续部署: 把持续交付最后一步变成自动交付


dnf install java-17-openjdk