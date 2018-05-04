Ext.define('ManagementSystem.view.UserGridPanel', {
    extend: 'Ext.grid.Panel',
    id: 'userGridPanelId',
    xtype: 'userGridPanel',
    enableColumnMove: false,
    store: 'UserStore',
    viewConfig: {
        forceFit: true,
        loadMask: false
    },
    border: false,
    initComponent: function () {
        Ext.apply(this, {
            columns: [
                { header: '序号', xtype: 'rownumberer', width: 60, align: 'center' },
                { text: '用户名', flex: 1, dataIndex: 'username', align: 'center' },
                { text: '姓名', flex: 1, dataIndex: 'realname', align: 'center' },
                { text: '工号', flex: 1, dataIndex: 'jobNo', align: 'center' },
                {
                    text: '角色', flex: 1, dataIndex: 'frontrole', align: 'center',
                    renderer:function(value){
                        var str='';
                        if(value==0){
                            str='管理员';
                        }else if(value==1){
                            str='代码管理岗';
                        }else if(value==2){
                            str='调度岗';
                        }else if(value==3){
                            str='案件处理岗';
                        }
                        return str;
                    }
                },
                { text: '联系电话', flex: 1, dataIndex: 'mobile', align: 'center' },
                {
                    text: '操作', flex: 1, dataIndex: 'operate', itemId: 'operate', align: 'center',
                    renderer: function (value, metaData, record, rowIdx, colIdx, store) {
                        var str1 = '';
                        var str2 = '';
                        str1 = "<button type='button' id='btnEditUser' class='btnGridContr'>修改</button> ";
                        str2 = "<button type='button' id='btnDelUser' class='btnGridContr'>删除</button> ";
                        return str1 + str2;
                    }
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    border: false,
                    height: 35,
                    items: [
                        {
                            xtype:"panel",
                            border: false,
                            height: 35,
                            items:[
                               {
                                    xtype : 'button',
                                    itemId: 'btnAdd',
                                    border:false,
                                    width:60,
                                    margin: '0 0 0 12',
                                    text: '<span style="color: #ffffff;">新增</span>',
                                    style: 'background-color:#50a2f2;background-image: url();'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'pagingtoolbar',
                    inputItemWidth: 40,
                    store: 'UserStore',
                    dock: 'bottom',
                    border: false,
                    displayInfo: true
                }
            ]
        });
        this.callParent(arguments);
    }
});
