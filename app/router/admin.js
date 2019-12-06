module.exports = app => {
    const { router,controller } = app;
    // router.get('/default/index',controller.default.home.index); // 这个/default/index 路径返回后面模块的内容
    router.get('/admin/index',controller.admin.index.index) 
    router.post('/admin/checkLogin',controller.admin.index.checkLogin) //登录接口 post请求
}