$(function () {
    $('.colorpicker').colorpicker();

    //Dropzone
    Dropzone.options.frmFileUpload = {
        paramName: "file",
        maxFilesize: 2
    };

    //Masked Input ============================================================================================================================
    var $demoMaskedInput = $('.demo-masked-input');

    //Date
    $demoMaskedInput.find('.date').inputmask('dd/mm/yyyy', { placeholder: '__/__/____' });

    //Time
    $demoMaskedInput.find('.time12').inputmask('hh:mm t', { placeholder: '__:__ _m', alias: 'time12', hourFormat: '12' });
    $demoMaskedInput.find('.time24').inputmask('hh:mm', { placeholder: '__:__ _m', alias: 'time24', hourFormat: '24' });

    //Date Time
    $demoMaskedInput.find('.datetime').inputmask('d/m/y h:s', { placeholder: '__/__/____ __:__', alias: "datetime", hourFormat: '24' });

    //Mobile Phone Number
    $demoMaskedInput.find('.mobile-phone-number').inputmask('+99 (999) 999-99-99', { placeholder: '+__ (___) ___-__-__' });
    //Phone Number
    $demoMaskedInput.find('.phone-number').inputmask('+99 (999) 999-99-99', { placeholder: '+__ (___) ___-__-__' });

    //Dollar Money
    $demoMaskedInput.find('.money-dollar').inputmask('99,99 $', { placeholder: '__,__ $' });
    //Euro Money
    $demoMaskedInput.find('.money-euro').inputmask('99,99 €', { placeholder: '__,__ €' });

    //IP Address
    $demoMaskedInput.find('.ip').inputmask('999.999.999.999', { placeholder: '___.___.___.___' });

    //Credit Card
    $demoMaskedInput.find('.credit-card').inputmask('9999 9999 9999 9999', { placeholder: '____ ____ ____ ____' });

    //Email
    $demoMaskedInput.find('.email').inputmask({ alias: "email" });

    //Serial Key
    $demoMaskedInput.find('.key').inputmask('****-****-****-****', { placeholder: '____-____-____-____' });
    //===========================================================================================================================================

    //Multi-select
    $('#optgroup').multiSelect({ selectableOptgroup: true });

    //noUISlider
    var sliderBasic = document.getElementById('nouislider_basic_example');
    noUiSlider.create(sliderBasic, {
        start: [30],
        connect: 'lower',
        step: 1,
        range: {
            'min': [0],
            'max': [100]
        }
    });
    getNoUISliderValue(sliderBasic, true);

    //Range Example
    var rangeSlider = document.getElementById('nouislider_range_example');
    noUiSlider.create(rangeSlider, {
        start: [32500, 62500],
        connect: true,
        range: {
            'min': 25000,
            'max': 100000
        }
    });
    getNoUISliderValue(rangeSlider, false);
});

//Get noUISlider Value and write on
function getNoUISliderValue(slider, percentage) {
    slider.noUiSlider.on('update', function () {
        var val = slider.noUiSlider.get();
        if (percentage) {
            val = parseInt(val);
            val += '%';
        }
        $(slider).parent().find('span.js-nouislider-value').text(val);
    });
}