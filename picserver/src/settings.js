(function () {
    module.exports = {
        cookie_secret: 'secret_meteoric',
        serverPort: 8091,
        mysql: {
            database: 'vuepic',
            host: '116.196.81.196',
            user: 'assist',
            password: 'ipcamera',
            port: 3306,
            multipleStatements: true
        },
        salt:"whrbwyc!@#$%" //接口加密用盐
        ,timeObj:{
            1:1//用于查询一月内的数据
            ,3:1//3月
            ,12:1//一年
        }
        // excelDir配置在app.js中
    };
}).call(this);
