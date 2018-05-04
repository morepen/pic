Ext.application({
    name: 'ManagementSystem',
    extend: 'Ext.app.Application',
    controllers: [
        'ViewportContr',
        'WestContr',
        'PolicyContr',
        'TaskContr',
        'UserContr',
        'CaseContr',
        'CostStatistics'
    ],
    autoCreateViewport: true
});