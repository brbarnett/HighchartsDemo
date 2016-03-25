(function(){
    'use strict';
    
    // extend for specific chart instance
    var stockChart = $.extend(true, {}, 
        window.chart, {
        chart: {
            type: 'line'
        },
        series: [{
            name: 'GOOGL',
            data: GOOGL
        }, {
                name: 'MSFT',
                data: MSFT
            }]
    });
    
    $('#stockchart').highcharts('StockChart', stockChart);
}());