
Ext.define('ManagementSystem.view.CaseGridPanel', {
    extend: 'Ext.grid.Panel',
    id: 'CaseGridPanelId',
    xtype: 'CaseGridPanel',
    enableColumnMove: false,
    store: 'CaseStore',
    viewConfig: {
        forceFit: true,
        loadMask: false
    },
    border: false,
    initComponent: function () {
        Ext.apply(this, {
            columns: [
                { header: '序号', xtype: 'rownumberer', width: 60, align: 'center' },
                { text: '暂存ID', flex: 1,dataIndex: 'storageID', align: 'center' },
                {
                    text: '出险时间', flex: 1, dataIndex: 'outTime', align: 'center',
                    renderer:function(value, metaData, record, rowIdx, colIdx, store){
                        var str1='';
                        var str2='';
                        if(record.raw.damagedate){
                            str1=record.raw.damagedate;
                        }
                        if(record.raw.damagehour){
                            str2=record.raw.damagehour;
                        }
                        return str1+" "+str2;
                    }
                },
                { text: '承保机构', flex: 1, dataIndex: 'institution', align: 'center' },
                { text: '被保险人', flex: 1, dataIndex: 'insurant', align: 'center' },
                {
                    text: '接收时间', flex: 1, dataIndex: 'receiveTime', align: 'center',
                    renderer:function(value){
                        var str='';
                        if(value!=0){
                            str=formatDate(new Date(value*1000),'yyyy-MM-dd hh:mm:ss');
                        }
                        return str;
                    }
                },
                {
                    text: '操作', flex: 1, dataIndex: 'operate', itemId: 'operate', align: 'center',
                    renderer: function (value, metaData, record, rowIdx, colIdx, store) {
                        var str1 = '';
                        //str1 = "<button type='button' id='btnEdit' style='width:80px;' class='btnGridContr'>案件处理</button> ";
                         if (record.data.handleState==-1 || record.data.handleState==2){
                             str1 = "<button type='button' id='btnDetail' class='btnGridContr'>详情</button> ";
                         }else{
                             str1 = "<button type='button' id='btnEdit' style='width:80px;' class='btnGridContr'>案件处理</button> ";
                         }
                         return str1;
                    }
                },
                {
                    text: '是否需正式报案', flex: 1, dataIndex: 'isReport', itemId: 'isReport', align: 'center',
                    renderer: function (value, cellmeta, record, rowIndex, columnIndex, store) {
                        var str = "";
                        if (value == 1) {//启用
                            str = "<button type='button' class='mwui-switch-btn' " +
                                "id='case_" + record.raw.storageID + "' " +
                                "onclick=\"ReportCase('" + record.raw.storageID +
                                "','" + record.raw.isReport + "')\">" +
                                "<span id='case_span_" + record.raw.storageID + "' change='否'>是</span>" +
                                "</button>";
                        } else {//停用
                            str = "<button type='button' class='mwui-switch-btn' " +
                                "id='case_" + record.raw.storageID + "' " +
                                "onclick=\"ReportCase('" + record.raw.storageID +
                                "','" + record.raw.isReport + "')\">" +
                                "<span id='case_span_" + record.raw.storageID + "' change='是' class='off'>否</span>" +
                                "</button>";
                        }
                        return str;
                    }
                }
            ],
             dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    border: false,
                    height: 58,
                    //bodyStyle:'background-color:#fff',
                    defaults:{
                        //'bodyStyle':'padding-top:0;',
                        scale: 'large',
                        width: 150,
                        xtype : 'button'
                    },
                    items: [
                        {
                            //xtype: 'button',
                            itemId: 'casestate0',
                            text: '<div  class="penCase active" style="color: #dadada;height: 36px;width: 150px;padding-top:6px;">未处理的任务</div>',
                        },
                        {
                            //xtype : 'button',
                            itemId: 'casestate1',
                            text: '<div  class="penCase" style="color: #dadada;height: 36px;width: 150px;padding-top:6px;">处理中的任务</div>',
                        },
                        {
                            //xtype: 'button',
                            itemId: 'casestate2',
                            text: '<div  class="penCase" style="color: #dadada;height: 36px;width: 150px;padding-top:6px;">已完成的任务</div>',
                        },
                        {
                            //xtype : 'button',
                            itemId: 'casestate3',
                            text: '<div class="penCase" style="color: #dadada;height: 36px;width: 150px;padding-top:6px;">已注销的任务</div>',
                        },
                        {
                            xtype:'combobox',
                            itemId:'time',
                            displayField: 'name',
                            name: 'value',
                            value:1,
                            fieldLabel: '案件状态',
                            labelWidth:60,
                            //emptyText: '请选择',
                            readOnly:false,
                            allowBlank: false,// 不允许为空
                            valueField: 'value',// 值,可选
                            editable: false,// 是否允许输入
                            forceSelection: true,// 必须选择一个选项
                            blankText: '请选择',// 该项如果没有选择，则提示错误信息,
                            triggerAction: 'all',// 显示所有下列数据，一定要设置属性triggerAction为all
                            store: Ext.create('Ext.data.Store', {
                                fields: ['name', 'value'],
                                data: [
                                    {value: 1, name: '一个月'},
                                    {value: 3, name: '三个月'},
                                    {value: 12, name: '一年'}
                                ]
                            })
                        },
                        //'->',
                        {
                            //xtype : 'button',
                            scale:'small',
                            width:60,
                            itemId: 'btnsearch',
                            margin: '0 0 0 12',
                            text: '<span style="color: #ffffff;">查询</span>',
                            style: 'background-color:#50a2f2;background-image: url();'
                        }
                    ]
                },
                {
                    xtype: 'pagingtoolbar',
                    inputItemWidth: 40,
                    store: 'CaseStore',
                    dock: 'bottom',
                    border: false,
                    displayInfo: true
                }
            ]
        });
        this.callParent(arguments);
    }
});
