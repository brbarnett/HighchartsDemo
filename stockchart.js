(function() {
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
                }],
            yAxis: {
                plotLines: [{
                    color: '#FFF',
                    dashStyle: 'Dash',
                    value: 200,
                    width: 1,
                    label: {
                        text: 'Previous close',
                        align: 'right',
                        y: 12,
                        x: 0
                    }
                }],
            }
        });

    $('#stockchart').highcharts('StockChart', stockChart);
} ());