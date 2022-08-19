// form validation

$(document).ready(function() {
    $(document).on('click', '.js_Submitform', function(e) {
        e.preventDefault();
        $(this).parents('.formValid').find('.required').not('.hidden').trigger('blur');
        checkbox();
        
        var errrlength = $('.error:visible').length;
        if(errrlength === 0){
            window.location.href ='screen-22.html';
        }
    });
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

// form validation


$('#backPersonDetails').click(function(){
    window.localStorage.setItem("backToPerson", "true");
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
    var personalFormData = $('#nomineeDetailsForm').serializeObject();
    localStorage.setItem('nomineeDetailsObject', JSON.stringify(personalFormData));
    //console.log(personalFormData);
})


var backfromAcDetails = JSON.parse(localStorage.getItem('backToNominee')); 

if (backfromAcDetails === true) {
    var person = window.localStorage.getItem('nomineeDetailsObject');
    var formData = JSON.parse(person);
    console.log(formData)

    $('#firstName').val(formData.firstName).parent().find("label").addClass("focus-state");
    $('#lastName').val(formData.lastName).parent().find("label").addClass("focus-state");
    $('#dob').val(formData.dob).parent().find("label").addClass("focus-state");
    $('#firstName2').val(formData.firstName2).parent().find("label").addClass("focus-state");
    $('#lastName2').val(formData.lastName2).parent().find("label").addClass("focus-state");
    $('#dob2').val(formData.dob2).parent().find("label").addClass("focus-state");

    //checkbox
    $("input[name='nomineeGender'][value = '" + formData.nomineeGender + "']").prop('checked', true).trigger('click');
    $("input[name='appointeeGender'][value = '" + formData.appointeeGender + "']").prop('checked', true).trigger('click');

    
    if($(".form-field-container input").val() !== "" || $(".static-form-container input").val() !== "" || $('.form-field-container select').val() !== ""){
        $(this).parent().find("label").addClass("focus-state");
    }
    
}else{
    localStorage.removeItem("nomineeDetailsObject");
    localStorage.removeItem("backToNominee");
}


$(document).ready(function(){
    window.localStorage.setItem("backToNominee", "false");
});
   