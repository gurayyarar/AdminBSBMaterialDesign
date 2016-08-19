$(function () {
    //Taken from http://ionden.com/a/plugins/ion.rangeSlider/demo.html

    $("#range_01").ionRangeSlider();

    $("#range_02").ionRangeSlider({
        min: 100,
        max: 1000,
        from: 550
    });

    $("#range_03").ionRangeSlider({
        type: "double",
        grid: true,
        min: 0,
        max: 1000,
        from: 200,
        to: 800,
        prefix: "$"
    });

    $("#range_04").ionRangeSlider({
        type: "double",
        grid: true,
        min: -1000,
        max: 1000,
        from: -500,
        to: 500
    });

    $("#range_05").ionRangeSlider({
        type: "double",
        grid: true,
        min: -1000,
        max: 1000,
        from: -500,
        to: 500,
        step: 250
    });


    $("#range_06").ionRangeSlider({
        type: "double",
        grid: true,
        min: -12.8,
        max: 12.8,
        from: -3.2,
        to: 3.2,
        step: 0.1
    });

    $("#range_07").ionRangeSlider({
        type: "double",
        grid: true,
        from: 1,
        to: 5,
        values: [0, 10, 100, 1000, 10000, 100000, 1000000]
    });


    $("#range_08").ionRangeSlider({
        grid: true,
        from: 5,
        values: [
            "zero", "one",
            "two", "three",
            "four", "five",
            "six", "seven",
            "eight", "nine",
            "ten"
        ]
    });

    $("#range_09").ionRangeSlider({
        grid: true,
        from: 3,
        values: [
            "January", "February", "March",
            "April", "May", "June",
            "July", "August", "September",
            "October", "November", "December"
        ]
    });

    $("#range_10").ionRangeSlider({
        grid: true,
        min: 1000,
        max: 1000000,
        from: 100000,
        step: 1000,
        prettify_enabled: false
    });
});