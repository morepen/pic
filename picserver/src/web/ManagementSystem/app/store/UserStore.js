
Ext.define('ManagementSystem.store.UserStore', {
    extend: 'Ext.data.Store',
    fields: [
        'id', 'username', 'realname','jobNo','frontrole','mobile'
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