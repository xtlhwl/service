'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // const { router, controller } = app;
  // router.get('/', controller.home.index);
  // router.get('/list',controller.home.index);
  // router.get('/router/default')(app);
  require('./router/default')(app) // 引入统计目录下的default
  require('./router/admin')(app)
};
