Ext.define('ManagementSystem.store.TaskUserStore', {
    extend: 'Ext.data.Store',
    fields: [
        'id', 'username', 'realname','jobNo','frontrole','mobile'
    ],
    //pageSize: PublicObject.pageSize,
    proxy: {
        //type:'memory'
        type: 'ajax',
        timeout: PublicObject.ajaxTimeout,
        reader: {
            type: 'json',
            root: 'data',
            //totalProperty: 'data',
            successProperty: 'success'
        }
    }
});