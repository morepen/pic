
Ext.define('ManagementSystem.view.TaskGridPanel', {
    extend: 'Ext.grid.Panel',
    id: 'TaskGridPanelId',
    xtype: 'TaskGridPanel',
    enableColumnMove: false,
    store: 'TaskStore',
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
                // { text: '保单号', flex: 1,dataIndex: 'policyNo', align: 'center',hidden:true},
                {
                    text: '出险时间', flex: 1, align: 'center',
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
                { text: '接收时间', flex: 1, dataIndex: 'storageTime', align: 'center' },
                { text: '案件处理人', flex: 1, dataIndex: 'caseHandler', itemId:'caseHandler',hidden:true, align: 'center' },
                {
                    text: '操作', flex: 1, dataIndex: 'operate', itemId: 'operate', align: 'center',
                    renderer: function (value, metaData, record, rowIdx, colIdx, store) {
                        var str1 = '';
                        var str2 = '';
                        if(record.raw.handleState==0 || record.raw.handleState==1){
                            str1 = "<button type='button' id='btnEdit' class='btnGridContr' style='background: #ffa53b;'>调度</button> ";
                        }else if(record.raw.handleState==-1 || record.raw.handleState==2){
                            str2 = "<button type='button' id='btnDetail' class='btnGridContr'>详情</button> ";
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
                    height: 60,
                    defaults:{
                        //'bodyStyle':'padding-top:0;',
                        scale: 'large',
                        width: 150,
                        xtype : 'button'
                    },
                    items: [
                        // {
                               //      xtype : 'tbtext',
                               //      itemId: 'taskstate1',
                               //      width: 110,
                               //      margin: '8 0 8 12',
                               //      text: '<span style="color: #ffffff;height:34px;line-height:34px;font-size:14px;cursor:pointer">已调度的任务</span>',
                               //      style: 'background-color:#50a2f2;border:#50a2f2 solid 1px;background-image: url();text-align:center;'
                               //  },
                               //  {
                               //      xtype : 'tbtext',
                               //      itemId: 'taskstate2',
                               //      width: 110,
                               //      margin: '8 0 8 0',
                               //      text: '<span style="color: #838383;height:34px;line-height:34px;font-size:14px;cursor:pointer">未调度的任务</span>',
                               //      style: 'background-color:#fff;border:#dadada solid 1px;background-image: url();text-align:center;'
                               //  }
                        {
                            itemId: 'taskstate0',
                            text: '<div id="Btnstate0" class="penBtn active" style="color: #dadada;height: 36px;width: 150px;padding-top:8px;">未调度的任务</div>'
                            //text: '<div id="Btnstate0" class="penBtn active" style="width:110px;color: #dadada;height:34px;line-height:34px;font-size:14px;cursor:pointer;">未调度的任务</div>',
                            //style: 'background-image: url();background-color:#50a2f2'
                        },
                        {
                            itemId: 'taskstate1',
                            text: '<div id="Btnstate1" class="penBtn" style="color: #dadada;height: 36px;width: 150px;padding-top:8px;">已调度的任务</div>'
                            //text: '<div id="Btnstate1" class="penBtn" style="color: #dadada;width:100px;height:34px;line-height:34px;font-size:14px;cursor:pointer;">已调度的任务</div>',
                            //style: 'background-image: url();'


                        },
                        '->',
                        {
                            scale:'medium',
                            width:130,
                            itemId: 'btnexport',
                            margin: '0 20 0 12',
                            text: '<span style="color: #ffffff;">导出需报案任务</span>',
                            style: 'background-color:#50a2f2;background-image: url();'
                        }
                    ]
                },
                {
                    xtype: 'pagingtoolbar',
                    inputItemWidth: 40,
                    store: 'TaskStore',
                    dock: 'bottom',
                    border: false,
                    displayInfo: true
                }
            ]
        });
        this.callParent(arguments);
    }
});
