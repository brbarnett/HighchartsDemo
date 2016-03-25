(function() {
    'use strict';

    // set Highcharts global variables
    var options = {
        lang: {
            decimalPoint: '.',
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            thousandsSep: ',',
            weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        }
    };

    // set generic chart variables
    window.chart = {
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
        labels: {
            style: {
                color: '#FFF'
            }
        },
        legend: {
            align: 'center',
            enabled: true,
            itemStyle: {
                color: '#FFF'
            }
        },
        plotOptions: {
            line: {
                dashStyle: 'Solid'
            }
        },
        rangeSelector: {
            buttonTheme: {
                fill: 'none',
                style: {
                    color: '#FFF'
                }
            },
            enabled: true,
            inputEnabled: false,
            labelStyle: {
                color: '#D6D7D7'
            },
            selected: 0
        },
        scrollbar: {
            enabled: true
        },
        xAxis: {
            crosshair: {
                dashStyle: 'Dash',
            },
            labels: {
                style: {
                    color: '#FFF'
                }
            }
        }
    };

    Highcharts.setOptions(options);
} ());