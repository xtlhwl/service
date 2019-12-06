module.exports = app => {
    const { router,controller } = app;
    // router.get('/default/index',controller.default.home.index); // 这个/default/index 路径返回后面模块的内容
    router.get('/default/getAerticleList',controller.default.home.getAeticleList)
    router.get('/default/getAerticleById/:id',controller.default.home.getAeticleById)
    router.get('/default/getTypeInfo',controller.default.home.getTypeInfo)
   
}