
Ext.define('ManagementSystem.view.CalculateGridPanel', {
    extend: 'Ext.grid.Panel',
    id: 'CalculateGridPanelId',
    xtype: 'CalculateGridPanel',
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
                { header:'序号', xtype: 'rownumberer', width: 60, align: 'center' },
                { text: '暂存ID', flex: 1, dataIndex: 'storageID', align: 'center' },
                { text: '保单号', flex: 1, dataIndex: 'policyNo', align: 'center' },
                { text: '承保机构', flex: 1, dataIndex: 'institution', align: 'center' },
                {
                    text: '报案日期', flex: 1, align: 'center',
                    renderer:function(value, metaData, record, rowIdx, colIdx, store){
                        var str1='';
                        var str2='';
                        if(record.raw.reportdate){
                            str1=record.raw.reportdate;
                        }
                        if(record.raw.reporthour){
                            str2=record.raw.reporthour;
                        }
                        return str1+" "+str2;
                    }
                },
                { text: '被保险人', flex:.5, dataIndex: 'insurant', align: 'center' },
                { text: '估损金额', flex:.6, dataIndex: 'amount', align: 'center' },
                {
                    text: '跟踪留言', flex:.5, align: 'center',
                    renderer:function(){
                        var str="<a style='color: #4286E9;border-bottom: 1px solid #4286E9;' id='btnDetail01'>详情</a> ";
                        return str;
                    }
                },
                {
                    text: '案件状态', flex:.5, dataIndex: 'handleState', align: 'center',
                    renderer:function(value, metaData, record, rowIdx, colIdx, store){
                        var str='';
                        if(value==-1){
                            str='已注销';
                        }else if(value==0){
                            str='未处理';
                        }else if(value==1){
                            str='处理中';
                        }else if(value==2){
                            str='已处理';
                        }
                        return str;
                    }
                },
                { text: '暂存日期', flex:.8,  align: 'center',
                    renderer: function (value, metaData, record, rowIdx, colIdx, store) {
                        var str='';
                        var storageday=record.raw.storageday;
                        if(storageday){
                            var storageday1=storageday.substr(0,4);
                            var storageday2=storageday.substr(4,2);
                            var storageday3=storageday.substr(6,2);
                            str=storageday1+'-'+storageday2+'-'+storageday3;
                        }
                        return str;
                    }

                 },
                { text: '最后更新日期', flex: 1, dataIndex: 'operatetimeforhis', align: 'center'
                    //,
                    //renderer: function (value, metaData, record, rowIdx, colIdx, store) {
                    //    var _str = '';
                    //    _str = formatDate(new Date(value * 1), 'yyyy-MM-dd hh:mm:ss');
                    //    return _str;
                    //}
                 }
            ],
            dockedItems:[
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    border: false,
                    height: 40,
                    style: '',
                    items: [
                        '   ',
                        {
                            xtype: 'datefield',
                            itemId: 'reportdate1',
                            labelWidth: 90,
                            width:200,
                            anchor: '100%',
                            format: 'Y-m-d',
                            regex: /^(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)$/,
                            regexText: '请点击选择正确日期',
                            fieldLabel: '按报案日期查询',
                            editable: false,
                            labelAlign:'right',
                            // value: getCurrentMonthTime()[0],
                            blankText: '必须选择起始时间',
                            listeners: {
                                select: function () {
                                    var startdate = this.up('toolbar').down('#reportdate1').getValue();
                                    var enddate = this.up('toolbar').down('#reportdate2').getValue();
                                    if (enddate) {
                                        if (startdate > enddate) {
                                            Ext.Msg.alert('提示', '起始时间不能大于结束时间');
                                            this.setValue();
                                        }
                                    }
                                }
                            }
                        },
                         {
                             xtype: 'datefield',
                             itemId: 'reportdate2',
                             labelWidth:5,
                             width:115,
                             anchor: '100%',
                             format: 'Y-m-d',
                             regex: /^(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)$/,
                             regexText: '请点击选择正确日期',
                             fieldLabel:'-',
                             labelSeparator: '',//去掉冒号
                             editable: false,
                             // value: getCurrentMonthTime()[1],
                             blankText: '必须选择结束时间',
                             listeners: {
                                    select: function () {
                                        var startdate = this.up('toolbar').down('#reportdate1').getValue();
                                        var enddate = this.up('toolbar').down('#reportdate2').getValue();
                                        if (startdate) {
                                            if (startdate > enddate) {
                                                Ext.Msg.alert('提示', '起始时间不能大于结束时间');
                                                this.setValue();
                                            }
                                        }
                                    }
                                }
                          },
                        '       ',
                        {
                            xtype: 'datefield',
                            itemId: 'storageday1',
                            labelWidth: 120,
                            width:230,
                            anchor: '100%',
                            format: 'Y-m-d',
                            labelAlign:'right',
                            regex: /^(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)$/,
                            regexText: '请点击选择正确日期',
                            fieldLabel: '按暂存日期查询',
                            editable: false,
                            // value: getCurrentMonthTime()[0],
                            blankText: '必须选择起始时间',
                            listeners: {
                                select: function () {
                                    var startdate = this.up('toolbar').down('#storageday1').getValue();
                                    var enddate = this.up('toolbar').down('#storageday2').getValue();
                                    if (enddate) {
                                        if (startdate > enddate) {
                                            Ext.Msg.alert('提示', '起始时间不能大于结束时间');
                                            this.setValue();
                                        }
                                    }
                                }
                            }
                        },
                        {
                            xtype: 'datefield',
                            itemId: 'storageday2',
                            labelWidth:5,
                            width:115,
                            anchor: '100%',
                            format: 'Y-m-d',
                            regex: /^(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)$/,
                            regexText: '请点击选择正确日期',
                            fieldLabel:'-',
                            labelSeparator: '',//去掉冒号
                            editable: false,
                            // value: getCurrentMonthTime()[1],
                            blankText: '必须选择结束时间',
                            listeners: {
                                select: function () {
                                    var startdate = this.up('toolbar').down('#storageday1').getValue();
                                    var enddate = this.up('toolbar').down('#storageday2').getValue();
                                    if (startdate) {
                                        if (startdate > enddate) {
                                            Ext.Msg.alert('提示', '起始时间不能大于结束时间');
                                            this.setValue();
                                        }
                                    }
                                }
                            }
                        },
                        '   ',
                        {
                            xtype: 'datefield',
                            itemId: 'operatetimeforhis1',
                            labelWidth: 140,
                            width:250,
                            anchor: '100%',
                            format: 'Y-m-d',
                            labelAlign:'right',
                            regex: /^(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)$/,
                            regexText: '请点击选择正确日期',
                            fieldLabel: '按最后更新日期查询',
                            editable: false,
                            // value: getCurrentMonthTime()[0],
                            blankText: '必须选择起始时间',
                            listeners: {
                                select: function () {
                                    var startdate = this.up('toolbar').down('#operatetimeforhis1').getValue();
                                    var enddate = this.up('toolbar').down('#operatetimeforhis2').getValue();
                                    if (enddate) {
                                        if (startdate > enddate) {
                                            Ext.Msg.alert('提示', '起始时间不能大于结束时间');
                                            this.setValue();
                                        }
                                    }
                                }
                            }
                        },
                        {
                            xtype: 'datefield',
                            itemId: 'operatetimeforhis2',
                            labelWidth:5,
                            width:115,
                            anchor: '100%',
                            format: 'Y-m-d',
                            regex: /^(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)$/,
                            regexText: '请点击选择正确日期',
                            fieldLabel:'-',
                            labelSeparator: '',//去掉冒号
                            editable: false,
                            // value: getCurrentMonthTime()[1],
                            blankText: '必须选择结束时间',
                            listeners: {
                                select: function () {
                                    var startdate = this.up('toolbar').down('#operatetimeforhis1').getValue();
                                    var enddate = this.up('toolbar').down('#operatetimeforhis2').getValue();
                                    if (startdate) {
                                        if (startdate > enddate) {
                                            Ext.Msg.alert('提示', '起始时间不能大于结束时间');
                                            this.setValue();
                                        }
                                    }
                                }
                            }
                        }
                    ]
                },
                {
                        xtype: 'toolbar',
                        dock: 'top',
                        border: false,
                        height: 40,
                        style: '',
                        items: [
                            '   ',
                            {
                                xtype: 'textfield',
                                itemId: 'storageID',
                                fieldLabel: '按暂存ID查询',
                                labelWidth:90,
                                labelAlign:'right',
                                //width:317
                                width:322

                            },
                            '   ',
                            {
                                xtype: 'textfield',
                                fieldLabel: '按保单号查询',
                                labelWidth: 122,
                                labelAlign:'right',
                                itemId: 'policyNo',
                                //width:344
                                width:352
                            },
                            '   ',
                            {
                                xtype: "combobox",
                                itemId: 'handleState',
                                mode: 'local',
                                labelWidth: 140,
                                width:372,
                                labelAlign:'right',
                                value: -2,
                                displayField: 'name',
                                name: 'value',
                                hiddenName: 'name',
                                fieldLabel: '按案件状态查询',
                                emptyText: '请选择',
                                allowBlank: false,// 不允许为空
                                valueField: 'value',// 值,可选
                                editable: false,// 是否允许输入
                                forceSelection: true,// 必须选择一个选项
                                blankText: '请选择',// 该项如果没有选择，则提示错误信息,
                                triggerAction: 'all',// 显示所有下列数据，一定要设置属性triggerAction为all
                                store: Ext.create('Ext.data.Store', {
                                    fields: ['name', 'value'],
                                    data: [
                                        { value: -2, name: '全部' },
                                        { value: -1, name: '已注销' },
                                        { value: 0, name: '未处理' },
                                        { value: 1, name: '处理中' },
                                        { value: 2, name: '已处理' }
                                    ]
                                })
                            }
                        ]

                },
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    border: false,
                    height: 40,
                    style: '',
                    items:[
                        '->',
                        {
                            xtype : 'button',
                            itemId: 'btnsearch',
                            margin: '0 0 0 12',
                            text: '<span style="color: #ffffff;padding:0 16px;height:24px;line-height:24px;text-align:center;font-size: 14px;cursor:pointer">查询</span>',
                            style: 'background-color:#50a2f2;background-image: url();'
                        },
                        '->',
                        {
                            xtype : 'button',
                            text:'导出到Excel',
                            itemId: 'btnexport',
                            style:'margin-right:10px;color:#50a2f2;cursor:pointer;'
                        },
                        '   '
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
