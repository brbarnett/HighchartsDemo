(function(){
    'use strict';
    
    var options = {
        lang: {
            decimalPoint: '.',
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            thousandsSep: ',',
            weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        }
    };
    
    Highcharts.setOptions(options);
    
    var chartOptions = {
        chart: {
            alignTicks: true,
            animation: true,
            backgroundColor: '#384450',
            panning: true,
            plotBorderColor: '#535D68',
            plotBorderWidth: 1,
            type: 'line'
        },
        colors: ['#2A80CF', '#E97232', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#8085e8', '#8d4653', '#91e8e1'],
        credits: {
            enabled: false
        },
        legend: {
            align: 'center',
            enabled: true
        },
        rangeSelector: {
            selected: 1
        },
        scrollbar: {
            enabled: true
        },
        series: [{
            name: 'GOOGL',
            data: GOOGL
        }, {
            name: 'MSFT',
            data: MSFT
        }]
    };
    
    $('#chart').highcharts('StockChart', chartOptions);
}());