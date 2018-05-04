
Ext.define('ManagementSystem.store.PolicyStore', {
    extend: 'Ext.data.Store',
    fields: [
        'id', 'caseCode', 'insurant', 'injuredCondition'
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