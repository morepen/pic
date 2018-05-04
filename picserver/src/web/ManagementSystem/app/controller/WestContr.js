Ext.define('ManagementSystem.controller.WestContr', {
    extend: 'Ext.app.Controller',
    requires: [],
    stores: ['TaskStore'],
    init: function () {
        this.control({
            'westPanel #systemTreePanel': {
                'itemclick': function (tree, record, item, index, e, eOpts) {
                    record.raw.iconCls='';
                    record.raw.iconCls='user-icon-active';
                    if (record.raw.name == 11 || record.raw.name == 12 || record.raw.name == 13 || record.raw.name == 14 || record.raw.name == 15) {
                        PublicObject.currentUserClass = record.raw.name;
                        this.showSystem(record.raw.name);
                    }
                }
            }
        })
    },
    showSystem: function (value) {
        Ext.getCmp('centerPanelId').removeAll();
        //var aa=Ext.getCmp("westPanelId").down("#systemTreePanel").getRootNode();
        //aa.removeAll();
        //PublicObject.currentRecord = '';
        if (value == 11) {
        //    nodes1 = [
        //        {
        //            text: "<span style='font-size:13px;line-height:26px;padding-left:10px;color:#50a2f2;'>人员管理</span>", name: 11,leaf: true,iconCls:'user-icon-active',itemId: 'usericon'
        //        },
        //        {
        //            text: "<span style='font-size:13px;line-height:26px;padding-left:10px;'>保单规则设置</span>", name: 12, leaf: true,iconCls:'policy-icon',itemId: 'policyicon'
        //        },
        //        {
        //            text: "<span style='font-size:13px;line-height:26px;padding-left:10px;'>任务调度</span>", name: 13, leaf: true,iconCls:'task-icon',itemId: 'taskicon'
        //        },
        //        {
        //            text: "<span style='font-size:13px;line-height:26px;padding-left:10px;'>案件处理</span>", name: 15, leaf: true,iconCls:'case-icon',itemId: 'caseicon'
        //        },
        //        {
        //            text: "<span style='font-size:13px;line-height:26px;padding-left:10px;'>数据清单</span>", name: 14, leaf: true,iconCls:'calculate-icon',itemId: 'calculateicon'
        //        }
        //    ];
        //    aa.appendChild(nodes1);
            Ext.getCmp('centerPanelId').add(Ext.widget('userGridPanel', { //用户管理
                region: 'center'
            }));
        } 
        else if (value == 12) {
            Ext.getCmp('centerPanelId').add(Ext.widget('policyGridPanel', { //保单规则设置
                region: 'center'
            }));
        } 
        else if (value == 13) {
            Ext.getCmp('centerPanelId').add(Ext.widget('TaskGridPanel', {  //任务调度
                region: 'center'
            }));

        } 
        else if (value == 14) {
            Ext.getCmp('centerPanelId').add(Ext.widget('CalculateGridPanel', { //数据统计
                region: 'center',
                selModel: Ext.create('Ext.selection.CheckboxModel', {
//                singleSelect : false,
                    checkOnly: true
                })
            }));
        }
        else if (value == 15) {
            Ext.getCmp('centerPanelId').add(Ext.widget('CaseGridPanel', {  //案件处理
                region: 'center'
            }));
        }
    }
});

