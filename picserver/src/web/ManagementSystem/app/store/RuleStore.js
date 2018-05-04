
Ext.define('ManagementSystem.store.CostStore', {
    extend: 'Ext.data.Store',
    fields: [
        'id', 'month', 'number'
    ],
    pageSize: PublicObject.pageSize,
    proxy: {
        type: 'ajax',
        timeout: PublicObject.ajaxTimeout,
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    }
});