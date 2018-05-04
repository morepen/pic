Ext.define('ManagementSystem.controller.UserContr', {
    extend: 'Ext.app.Controller',
    requires: [],
    stores: ['UserStore'],
    init: function () {
        this.control({
            'userGridPanel': {
                'render': this.GetUser,
                 cellclick: this.cellclickevent
            },
            'userGridPanel #btnAdd': {
                'click': this.ShowUserWinAdd
            },
            'userAddWin #btnCancel': {
                'click': function () {
                    Ext.getCmp('userAddWinId').destroy();
                }
            },
            'userAddWin #btnAdd': {
                'click': this.AddUser
            },
            'userAddWin #btnEdit': {
                'click': this.EditUser
            }
        })

    },
    // 点击grid事件
    cellclickevent: function (thi, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        PublicObject.currentRecord = record.raw;
        // 修改保单
        if (e.getTarget().id == 'btnEditUser') {
            var win = Ext.create('ManagementSystem.view.UserAddWin', {
                title: '修改',
                titleAlign: 'left',
                listeners: {
                    show: function () {
                        Ext.getCmp('userAddWinId').down('#realname').setValue(record.raw.realname);
                        Ext.getCmp('userAddWinId').down('#jobNo').setValue(record.raw.jobNo);
                        Ext.getCmp('userAddWinId').down('#username').setValue(record.raw.username);
                        //Ext.getCmp('userAddWinId').down('#password').setValue(record.raw.password);
                        Ext.getCmp('userAddWinId').down('#password').setValue("");
                        //Ext.getCmp('userAddWinId').down('#password').setFieldLabel('<span style="">&nbsp;&nbsp;</span>密码');
                        Ext.getCmp('userAddWinId').down('#password').emptyText = '不改请留空';
                        Ext.getCmp('userAddWinId').down('#password').applyEmptyText();

                        Ext.getCmp('userAddWinId').down('#mobile').setValue(record.raw.mobile);
                        Ext.getCmp('userAddWinId').down('#frontrole').setValue(record.raw.frontrole);
                    }
                }
            });
            Ext.getCmp('userAddWinId').down('#btnEdit').show();
            win.show();
        }
        // 删除用户
        if (e.getTarget().id == 'btnDelUser') {
            Ext.MessageBox.confirm("提示", "<div style='width:300px;'>确定要删除用户【" + record.raw.realname + "】的账号吗?</div>", function (btn) {
                if (btn == "yes") {
                    Ext.getCmp('mainViewPort').getEl().mask("正在操作，请稍候");//遮罩
                    Ext.Ajax.request({
                        url: '../api/ManageService/DelUser',
                        params: {
                            id: PublicObject.currentRecord.id,
                            RandomTag: Math.random()
                        },
                        method: 'Post',
                        success: function (response, options) {
                            Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
                            var result = Ext.JSON.decode(response.responseText);
                            if (result.code == 200) {
                                Ext.getStore('UserStore').reload();
                                Ext.MessageBox.alert('提示', '删除成功');
                            }
                            else {
                                Ext.MessageBox.alert('提示', result.msg);
                            }
                        },
                        failure: function (response, options) {
                            Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
                            Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.status);
                        }
                    });
                }
            });
        }
    },
    // 获取用户列表
    GetUser: function () {
        Ext.getCmp('mainViewPort').getEl().mask("请稍候...");
        var params = {
            frontrole:PublicObject.CurrentUser.frontrole,
            RandomTag: Math.random()
        };
        var queryUrl = encodeURI('../api/ManageService/GetUser');
        Ext.getStore('UserStore').getProxy().url = queryUrl;
        Ext.getStore('UserStore').getProxy().extraParams = params;
        try {
            Ext.getStore("UserStore").currentPage = 1;
        } catch (e) {
        }
        Ext.getStore('UserStore').load();
        Ext.getCmp('mainViewPort').getEl().unmask();
   
    },
    // 新增窗口
    ShowUserWinAdd: function () {
        var win = Ext.create('ManagementSystem.view.UserAddWin', {
            title: '新增',
            titleAlign: 'left',
            listeners: {
                show: function () {

                }
            }
        });
        Ext.getCmp('userAddWinId').down('#btnAdd').show();
        win.show();
    },
    // 新增人员
    AddUser: function () {
        var realname = Ext.getCmp('userAddWinId').down('#realname').getValue();
        var jobNo = Ext.getCmp('userAddWinId').down('#jobNo').getValue();
        var username = Ext.getCmp('userAddWinId').down('#username').getValue();
        var password = Ext.getCmp('userAddWinId').down('#password').getValue();
        var mobile = Ext.getCmp('userAddWinId').down('#mobile').getValue();
        var frontrole = Ext.getCmp('userAddWinId').down('#frontrole').getValue();
        var reg_realname=new RegExp(/^[\u4E00-\u9FA5]{2,6}$/);
        if (!realname || !reg_realname.test(realname)) {
            Ext.MessageBox.alert('提示', '请输入2-6位中文姓名');
            return false;
        }
        var reg_jobNo=new RegExp(/^[0-9]{1,11}$/);
        if (!jobNo || !reg_jobNo.test(jobNo)) {
            Ext.MessageBox.alert('提示', '请输入1-11位数字工号');
            return false;
        }
        var reg_username=new RegExp(/^[A-Za-z0-9]{1,25}$/);
        if (!username || !reg_username.test(username)) {
            Ext.MessageBox.alert('提示', '请输入1-24位英文或数字用户名');
            return false;
        }
        var reg_password=new RegExp(/^[0-9a-zA-Z]{6,20}$/);
        if (!password || !reg_password.test(password)) {
            Ext.MessageBox.alert('提示', '请输入6-20位英文或数字密码');
            return false;
        }
        var reg_mobile=new RegExp(/^1[3|4|5|6|7|8|9]\d{9}$/);
        if (!mobile || !reg_mobile.test(mobile)) {
            Ext.MessageBox.alert('提示', '请输入11位手机号');
            return false;
        }
        if (!frontrole||frontrole==-1) {
            Ext.MessageBox.alert('提示', '请选择正确角色');
            return false;
        }
      
        Ext.getCmp('mainViewPort').getEl().mask("正在操作，请稍候");//遮罩
        Ext.Ajax.request({
            url: '../api/ManageService/AddUser',
            params: {
                realname: realname,
                jobNo:jobNo,
                username: username,
                password: hex_md5(password),
                mobile: mobile,
                frontrole: frontrole,
                RandomTag: Math.random()
            },
            method: 'Post',
            success: function (response, options) {
                Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
                var result = Ext.JSON.decode(response.responseText);
                if (result.code == 200) {
                    Ext.getCmp('userAddWinId').destroy();
                    Ext.getStore('UserStore').reload();
                    Ext.MessageBox.alert('提示', '新增成功');
                }
                else {
                    Ext.MessageBox.alert('提示', result.msg);
                }
            },
            failure: function (response, options) {
                Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
                Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.status);
            }
        });
    },
    // 修改用户
    EditUser: function () {
        var realname = Ext.getCmp('userAddWinId').down('#realname').getValue();
        var jobNo = Ext.getCmp('userAddWinId').down('#jobNo').getValue();
        var username = Ext.getCmp('userAddWinId').down('#username').getValue();
        var password = Ext.getCmp('userAddWinId').down('#password').getValue();
        var mobile = Ext.getCmp('userAddWinId').down('#mobile').getValue();
        var frontrole = Ext.getCmp('userAddWinId').down('#frontrole').getValue();

        var reg_realname=new RegExp(/^[\u4E00-\u9FA5]{2,6}$/);
        if (!realname || !reg_realname.test(realname)) {
            Ext.MessageBox.alert('提示', '请输入2-6位中文姓名');
            return false;
        }
        var reg_jobNo=new RegExp(/^[0-9]{1,11}$/);
        if (!jobNo || !reg_jobNo.test(jobNo)) {
            Ext.MessageBox.alert('提示', '请输入1-11位数字工号');
            return false;
        }
        var reg_username=new RegExp(/^[A-Za-z0-9]{1,25}$/);
        if (!username || !reg_username.test(username)) {
            Ext.MessageBox.alert('提示', '请输入1-25位英文或数字用户名');
            return false;
        }
        var reg_mobile=new RegExp(/^1[3|4|5|6|7|8|9]\d{9}$/);
        if (!mobile || !reg_mobile.test(mobile)) {
            Ext.MessageBox.alert('提示', '请输入11位手机号');
            return false;
        }
        if (!frontrole||frontrole==-1) {
            Ext.MessageBox.alert('提示', '请选择正确角色');
            return false;
        }

        if (password != "" && password != null && password != undefined) {
            var reg_password=new RegExp(/^[0-9a-zA-Z]{6,20}$/);
            if (!reg_password.test(password)) {
                Ext.MessageBox.alert('提示', '请输入6-20位英文或数字密码');
                return false;
            }
            password = hex_md5(password);
        } else {
            password = "";
        }
        Ext.getCmp('mainViewPort').getEl().mask("正在操作，请稍候");//遮罩
        Ext.Ajax.request({
            url: '../api/ManageService/EditUser',
            params: {
                id: PublicObject.currentRecord.id,
                realname: realname,
                jobNo:jobNo,
                username: username,
                password: password,
                mobile: mobile,
                frontrole: frontrole,
                RandomTag: Math.random()
            },
            method: 'Post',
            success: function (response, options) {
                Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
                var result = Ext.JSON.decode(response.responseText);
                if (result.code == 200) {
                    Ext.getCmp('userAddWinId').destroy();
                    Ext.getStore('UserStore').reload();
                    Ext.MessageBox.alert('提示', '修改成功');
                }
                else {
                    Ext.MessageBox.alert('提示', result.msg);
                }
            },
            failure: function (response, options) {
                Ext.getCmp('mainViewPort').getEl().unmask();//遮罩
                Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.status);
            }
        });
    }
});

