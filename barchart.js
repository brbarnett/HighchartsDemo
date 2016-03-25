(function() {
    'use strict';

    // extend for specific chart instance
    var barChart = $.extend(true, {},
        window.chart, {
            chart: {
                type: 'bar'
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

    $('#barchart').highcharts('StockChart', barChart);
} ());