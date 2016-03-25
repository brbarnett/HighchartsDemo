(function(){
    'use strict';
    
    // extend for specific chart instance
    var stockChart = $.extend(true, {}, 
        window.chart, {
        chart: {
            type: 'line'
        },
        navigator: {
            enabled: false
        },
        scrollbar: {
            enabled: false,
        },
        series: [{
            name: 'GOOGL',
            data: GOOGL
        }, {
                name: 'MSFT',
                data: MSFT
            }]
    });
    
    $('#stockchart-nonav').highcharts('StockChart', stockChart);
}());