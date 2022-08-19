// form validation

$(document).ready(function() {
    $(document).on('click', '.js_Submitform', function(e) {
        e.preventDefault();
        $(this).parents('.formValid').find('.required').not('.hidden').trigger('blur');
        checkbox();
        var errrlength = $(this).parents('.formValid').find('.error').length;
         
        if(errrlength === 0){

        }

    });
    einsurance();
});


var errors;
var onlyDigits = [];
for (i = 48; i < 58; i++)
    onlyDigits.push(i);


$(document).on('blur','.form-field-container input,.form-field-container textarea',function(){
    $(this).each(function() {
        var error_div = $(this).parent(".form-field-container").find('.errormsg');
        var field_container = $(this);
        // var default_error_div = $(this).parent().find('.default_message');

        if ($(this).hasClass("required")) {
            if (!$.empty_field_validation($(this).val())) {
                // error_div.html('This field is required.');
                field_container.addClass('error');
                errors = true;
            } else {
                // error_div.html('');
                field_container.removeClass('error')
                errors = false;
            }
        }
        if ($(this).val() != "") {
            if ($(this).hasClass('pan')) {
                if (!$.pan_validation($(this).val())) {
                    error_div.html('Please enter valid PAN.');
                    error_div.css('display', 'block');
                    field_container.addClass('error');
                    errors = true;
                } else {
                    error_div.html('');
                    error_div.css('display', 'none');
                    field_container.removeClass('error');
                    errors = false;
                }
            }

            if ($(this).hasClass('panNum')) {
                if (!$.panValidate($(this).val())) {
                    error_div.html('Please enter valid PAN number.');
                    error_div.css('display', 'block');
                    field_container.addClass('error');
                    errors = true;
                } else {
                    error_div.html('');
                    error_div.css('display', 'none');
                    field_container.removeClass('error');
                    errors = false;
                }
            }

            if ($(this).hasClass('email')) {
                if (!$.email_validation($(this).val())) {
                    error_div.html('Please enter valid Email Id.');
                    error_div.css('display', 'block');
                    field_container.addClass('error');
                    errors = true;
                } else {
                    error_div.html('');
                    error_div.css('display', 'none');
                    field_container.removeClass('error');
                    errors = false;
                }
            }

            if ($(this).hasClass('mobileNumber')) {
                if (!$.mobile_validation($(this).val())) {
                     
                    error_div.html('Please enter valid Mobile Number.');
                    error_div.css('display', 'block');
                    field_container.addClass('error');
                    errors = true;
                } else {
                    error_div.html('');
                    error_div.css('display', 'none');
                    field_container.removeClass('error');
                    errors = false;
                }
            }

            if ($(this).hasClass('fullname')) {
                if (!$.fullname_validation($(this).val())) {
                    error_div.html('Please enter valid Full Name.');
                    error_div.css('display', 'block');
                    field_container.addClass('error');
                    errors = true;
                } else {
                    error_div.html('');
                    error_div.css('display', 'none');
                    field_container.removeClass('error');
                    errors = false;
                }
            }
            if ($(this).hasClass('pincode')) {
                if (!$.pincode_validation($(this).val())) {
                    error_div.html('Please enter valid pincode.');
                    error_div.css('display', 'block');
                    field_container.addClass('error');
                    errors = true;
                } else {
                    error_div.html('');
                    error_div.css('display', 'none');
                    field_container.removeClass('error');
                    errors = false;
                }
            }
            if ($(this).hasClass('datepicker')) {
                if (!$.datepicker_validation($(this).val())) {
                    error_div.html('Please enter valid date.');
                    error_div.css('display', 'block');
                    field_container.addClass('error');
                    errors = true;
                } else {
                    error_div.html('');
                    error_div.css('display', 'none');
                    field_container.removeClass('error');
                    errors = false;
                }
            }
            if ($(this).hasClass('ifsc')) {
                if (!$.ifsc_validation($(this).val())) {
                    error_div.html('Please enter valid IFSC code.');
                    error_div.css('display', 'block');
                    field_container.addClass('error');
                    errors = true;
                } else {
                    error_div.html('');
                    error_div.css('display', 'none');
                    field_container.removeClass('error');
                    errors = false;
                }
            }

        }
    });
    //console.log(errors)
});
$(document).on('blur','.form-field-container select',function(){
    if($(this).val() == ""){
        $(this).addClass('error');
    }
    else{
        $(this).removeClass('error');
    }
});
function checkbox(){
    $(document).on('click','input[type=checkbox]',function() {
        if($(this).hasClass('required')){
            if($(this).prop("checked") == true){
                $(this).removeClass('error');
            }
            else if($(this).prop("checked") == false){
                $(this).addClass('error');
            }
        }
    });

     
    $('input[type=checkbox]').each(function () {
        if($(this).hasClass('required') && !$(this).is(':checked')){
             $(this).addClass('error');
        }
        else{
            $(this).removeClass('error');
        }
    });  
}


$.empty_field_validation = function(field_value) {
    if (field_value.trim() == '') return false;
    return true;
}

$.email_validation = function(email) {
    // var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    // var regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;
    var regex = /^[0-9\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
}

$.mobile_validation = function(mobile) {
    var regex = /^[789]\d{9}$/;
    return regex.test(mobile);
}
$.pan_validation = function(pan) {
    var regex = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;
    return regex.test(pan);
}

$.fullname_validation = function(fullname) {
    var regex = /^([A-Za-z']{3,})+\s[A-Za-z ]+$/;
    return regex.test(fullname);
}
$.pincode_validation = function(fullname) {
    var regex = /\d{6}$/;
    return regex.test(fullname);
}
$.ifsc_validation = function(ifsc) {
    var regex = /[A-Z|a-z]{4}[0][a-zA-Z0-9]{6}$/;
    return regex.test(ifsc);
}

// for alphanumeric validation start
$(document).on('keyup','.numbersOnly',function(){
    $(this).val($(this).val().replace(/[^0-9]/g, ''));
})
$(document).on('keyup','.alphaNum',function(){
    $(this).val($(this).val().replace(/[^a-zA-Z0-9]/g, ''));
});
$(document).on('keyup','.alphabateOnly',function(){
    $(this).val($(this).val().replace(/[^a-zA-Z ]/g, ''));
});


// for alphanumeric validation end

function einsurance(){
    $(document).on('change','input[name="e-insurance"]:radio', function(){
        if(this.value == "yes"){
            $('.einsuranceAccountno .form-field-container select').removeClass('hidden')
        }
        if(this.value == "no"){
            $('.einsuranceAccountno .form-field-container select').addClass('hidden');
            $('.einsuranceAccountno .form-field-container select').removeClass('error')
        }
    });
}

// form validation


$('#backNominee').click(function(){
    window.localStorage.setItem("backToNominee", "true");
    history.back();
})
jQuery.fn.serializeObject = function () {
    var formData = {};
    var formArray = this.serializeArray();

    for (var i = 0, n = formArray.length; i < n; ++i)
        formData[formArray[i].name] = formArray[i].value;

    return formData;
};

$('.js_Submitform').click(function () {
    var personalFormData = $('#accountDetailsForm').serializeObject();
    localStorage.setItem('accountDetailsObject', JSON.stringify(personalFormData));

    //console.log(personalFormData);
})


if (typeof (accountDetailsObject) !== "undefined") {
    var person = window.localStorage.getItem('accountDetailsObject');
    var formData = JSON.parse(person);

    $('#bankName').val(formData.bankName).parent().find("label").addClass("focus-state");
    $('#branchName').val(formData.branchName).parent().find("label").addClass("focus-state");
    $('#accountNo').val(formData.accountNo).parent().find("label").addClass("focus-state");
    $('#ifscCode').val(formData.ifscCode).parent().find("label").addClass("focus-state");
    $('#micr').val(formData.micr).parent().find("label").addClass("focus-state");


    //select Dropdown
    $("#repository option[value= '" + formData.repository + "' ]").attr("selected", "selected").trigger('change').parent().find("label").addClass("focus-state");
    $("#accountNumber option[value= '" + formData.accountNumber + "' ]").attr("selected", "selected").trigger('change').parent().find("label").addClass("focus-state");

    //checkbox
    $("input[name='eInsurance'][value = '" + formData.eInsurance + "']").prop('checked', true).trigger('click');


    if ($(".form-field-container input").val() !== "" || $(".static-form-container input").val() !== "" || $('.form-field-container select').val() !== "") {
        $(this).parent().find("label").addClass("focus-state");
    }

}


const pageAccessedByReload = (
    (window.performance.navigation && window.performance.navigation.type === 0) ||
    window.performance
        .getEntriesByType('navigation')
        .map((nav) => nav.type)
        .includes('reload')
);

if (pageAccessedByReload == true) {
    localStorage.clear();
}

$('#backPersonDetails').click(function(){
    window.localStorage.setItem("backToPerson", "true");
    history.back();
})