
  /* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1574997586021_7485';

  // add your middleware config here
  config.middleware = [];
  // 配置跨域，是否允许跨域
  config.security = {
    csrf:{
      enable:false
      
    },
    domainWhiteList:['*']
  }
  // 跨域配置 
  config.cors = {
    origin:'*',  // 允许任何域名访问
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH' // 允许的协议
  }
  config.mysql = {
    // database configuration
    client: {
      // host
      host: '180.76.121.233',
      // port
      port: '3306',
      // username
      user: 'react',
      // password
      password: 'xtlhwl',
      // database
      database: 'react_blog',    
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',s
  };
  return {
    ...config,
    ...userConfig,
  };
}