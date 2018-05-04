
Ext.define('ManagementSystem.view.PolicyGridPanel', {
    extend: 'Ext.grid.Panel',
    id: 'policyGridPanelId',
    xtype: 'policyGridPanel',
    enableColumnMove: false,
    store: 'PolicyStore',
    viewConfig: {
        forceFit: true,
        loadMask: false
    },
    border: false,
    initComponent: function () {
        Ext.apply(this, {
            columns: [
                { header: '序号', xtype: 'rownumberer', width: 60, align: 'center' },
                { text: '保单代码', flex: 1, dataIndex: 'caseCode', align: 'center' },
                { text: '被保险人名称', flex: 1, dataIndex: 'insurant', align: 'center' },
                { text: '人伤条件', flex: 1, dataIndex: 'injuredCondition', align: 'center',
                    renderer:function(value){
                        var str='';
                        if(value==-1){
                            str='否';
                        }else if(value==0){
                            str='';
                        }else if(value==1){
                            str='是';
                        }
                        return str;
                    }
                },
                {
                    text: '操作', flex: 1, dataIndex: 'operate', itemId: 'operate', align: 'center',
                    renderer: function (value, metaData, record, rowIdx, colIdx, store) {
                        var str1 = '';
                        var str2 = '';
                        str1 = "";
                        if (!record.data.status){
                            str2 = "<button type='button' id='btnDel' class='btnGridContr'>删除</button> ";
                        }
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
                            xtype: "panel",
                            border: false,
                            height: 35,
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'btnAdd',
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
