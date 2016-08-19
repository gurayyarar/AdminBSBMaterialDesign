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
    $('.chart.chart-bar:not(.reverse)').sparkline(undefined, {
        type: 'bar',
        barColor: 'rgba(0, 0, 0, 0.15)',
        negBarColor: 'rgba(0, 0, 0, 0.15)',
        barWidth: '8px',
        height: '34px'
    });

    //Chart Bar Reverse
    $('.chart.chart-bar.reverse').sparkline(undefined, {
        type: 'bar',
        barColor: 'rgba(255, 255, 255, 0.15)',
        negBarColor: 'rgba(255, 255, 255, 0.15)',
        barWidth: '8px',
        height: '34px'
    });

    //Chart Pie
    $('.chart.chart-pie').sparkline(undefined, {
        type: 'pie',
        height: '50px',
        sliceColors: ['rgba(0,0,0,0.10)', 'rgba(0,0,0,0.15)', 'rgba(0,0,0,0.20)', 'rgba(0,0,0,0.25)']
    });

    //Chart Line
    $('.chart.chart-line').sparkline(undefined, {
        type: 'line',
        width: '60px',
        height: '45px',
        lineColor: 'rgba(0, 0, 0, 0.15)',
        lineWidth: 2,
        fillColor: 'rgba(0,0,0,0)',
        spotColor: 'rgba(0, 0, 0, 0.15)',
        maxSpotColor: 'rgba(0, 0, 0, 0.15)',
        minSpotColor: 'rgba(0, 0, 0, 0.15)',
        spotRadius: 3,
        highlightSpotColor: 'rgba(0, 0, 0, 0.15)'
    });
}