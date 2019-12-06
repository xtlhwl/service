'use strict'

const Controller = require('egg').Controller;

class MainController extends Controller{

    async index() {
        this.ctx.body = 'hi APi'
    }
    async checkLogin(){
        let userName = this.ctx.request.userName
        let password = this.ctx.request.password
        const sql = " SELECT username FROM admin_user WHERE username = '"+userName +
        "' AND password = '"+password+"'"
        const res = await this.app.mysql.query(sql)


        if(res.length >0){
            // console.log(res)
            let openId = new Date().getTime()
            this.ctx.session.openId = {openId:openId} // 记录时间戳
            this.ctx.body = {data:'登录成功',openId:openId}
        }else{
            this.ctx.body = {data:res,key:res}
        }
    }
}

module.exports = MainController