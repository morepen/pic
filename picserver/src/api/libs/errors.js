(function() {
    var errors;
    errors = {
        10000:{
            name: 'WrongLogin',
            message: '用户名或密码错误'
        },
        10001: {
            name: 'System Error',
            message: '系统错误'
        },
        10002: {
            name: 'OldPwd Error',
            message: '原密码输入不正确'
        },
        10003: {
            name: 'Policy Expiration',
            message: '该保单有效期已过，禁止启用'
        },
        10004: {
            name: 'InsuranceNo Exist',
            message: '该保单号代码已存在'
        },
        10005: {
            name: 'No Access',
            message: '该帐号未激活，登陆邮箱激活账户'
        },
        10006: {
            name: 'Username Exist',
            message: '该用户名已存在'
        },
        10007: {
            name: '',
            message: '暂存ID已存在，请重试'
        },
        10008: {
            name: '',
            message: '保单号规则不匹配'
        },
        10009: {
            name: '',
            message: '保单号代码不匹配'
        },
        10010: {
            name: '',
            message: '被保险人名称不匹配'
        },
        10011: {
            name: '',
            message: '人伤条件不匹配'
        },
        400001: {
            name: 'miss login',
            message: '未登录用户'
        },
        400002: {
            name: 'params Unsuited',
            message: '参数不合法'
        },
        400024: {
            name: 'miss params',
            message: '参数缺失'
        },
        10012: {
            name: 'miss params',
            message: '文件上传失败'
        },
        10013: {
            name: 'miss params',
            message: '该用户已注册'
        },
        10014: {
            name: 'miss params',
            message: '该邮箱已注册'
        },
        10015: {
            name: 'miss params',
            message: '邮件发送失败'
        },
        10016: {
            name: 'miss params',
            message: '激活码错误'
        }
    };

    module.exports = errors;

}).call(this);
