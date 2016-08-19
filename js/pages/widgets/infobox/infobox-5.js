$(function () {
    initCounters();
    initCharts();
});

//Widgets count plugin
function initCounters() {
    $('.count-to').countTo();
}

//Charts
function initCharts() {
    //Chart Bar
    $.each($('.chart.chart-bar'), function (i, key) {
        var chartColor = $.AdminBSB.options.colors[$(key).data('chartcolor')];
        $(key).sparkline(undefined, {
            type: 'bar',
            barColor: chartColor,
            negBarColor: chartColor,
            barWidth: '8px',
            height: '34px'
        });
    });

    //Chart Pie
    $.each($('.chart.chart-pie'), function (i, key) {
        var chartColor = $.AdminBSB.options.colors[$(key).data('chartcolor')];
        $(key).sparkline(undefined, {
            type: 'pie',
            height: '50px',
            sliceColors: [hexToRgba(chartColor, '0.55'), hexToRgba(chartColor, '0.70'), hexToRgba(chartColor, '0.85'), hexToRgba(chartColor, '1')]
        });
    });

    //Chart Line
    $.each($('.chart.chart-line'), function (i, key) {
        var chartColor = $.AdminBSB.options.colors[$(key).data('chartcolor')];
        $(key).sparkline(undefined, {
            type: 'line',
            width: '60px',
            height: '45px',
            lineColor: chartColor,
            lineWidth: 1.3,
            fillColor: 'rgba(0,0,0,0)',
            spotColor: chartColor,
            maxSpotColor: chartColor,
            minSpotColor: chartColor,
            spotRadius: 3,
            highlightSpotColor: chartColor
        });
    });
}