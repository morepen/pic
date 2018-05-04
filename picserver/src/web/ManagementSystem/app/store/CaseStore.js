/**
 * Created by wjl on 2018/03/05.
 */
Ext.define('ManagementSystem.store.CaseStore', {
    extend: 'Ext.data.Store',
    fields: [
        'id','policyNo', 'storageID','storageday','orderid','case_state','reportdate','reporthour','damagedate',
        'damagehour','registno','reportorname','reportornumber','reportormobile','usercode','user_name',
        'contacts','reportTime','contactsPhone','contactsmobile','operatetimeforhis',
        'outTime','receiveTime','institution','insurant','reporter','reporterPhone',
        'caseHandler','outAddress','outProcess','handleState','caseNo','storageTime','updateTime','changeState',
        'caseHandlerRole','amount','yardtime','yardman_id','yardman','dealman_id','dealman','commentsTime','commentsContent'
        ,'evaluateMoney','isReport'
    ],
    pageSize: PublicObject.pageSize,
    proxy: {
        type: 'ajax',
        timeout: PublicObject.ajaxTimeout,
        reader: {
            type: 'json',
            root: 'data.topics',
            totalProperty: 'data.totalCount',
            successProperty: 'success'
        }
    }
});