// form validation

$(document).ready(function() {
    
    commAddress();
});

$(document).on('click', '.js_Submitform', function(e) {
    e.preventDefault();
    $(this).parents('.formValid').find('.required').not('.hidden').trigger('blur');
    checkbox();
    

    //var errrlength = $(this).parents('.formValid').find('.error').length;

    var errrlength = $('.error:visible').length;
    console.log(errrlength)
    if(errrlength == 0){
        //console.log('true')
        window.location.href = 'screen-21.html';
    }

    
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


function commAddress(){
    $(document).on('change','input[name="declarationBtn"]:radio', function(){
         
        if(this.value == "no"){
            $('.addressDetailsCont .form-field-container input').each(function(){
                $(this).removeClass('hidden');
            });
        }
        if(this.value == "yes"){
            $('.addressDetailsCont .form-field-container input').each(function(){
                $(this).addClass('hidden');
                $(this).removeClass('error');
            })
        }
    });

   

    $(document).on('change','input[name="residentBtn"]:radio', function(){
        if(this.value == "no"){
            $('.residDetailsCont .form-field-container input').each(function(){
                $(this).removeClass('hidden');
            });
            $('.residDetailsCont .form-field-container select').each(function(){
                $(this).removeClass('hidden');
            });
        }
        if(this.value == "yes"){
            $('.residDetailsCont .form-field-container input').each(function(){
                $(this).addClass('hidden');
                $(this).removeClass('error');
            });
            $('.residDetailsCont .form-field-container select').each(function(){
                $(this).addClass('hidden');
                $(this).removeClass('error');
            })
        }
    });
}


$(function() {
    $('#pancard').keyup(function() {
        this.value = this.value.toLocaleUpperCase();
    });
});


// form validation


$('#backToHome').click(function(){
    window.localStorage.setItem("backToHome", "true");
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
    var personalFormData = $('#personalDetailsForm').serializeObject();
    localStorage.setItem('personFormObject', JSON.stringify(personalFormData));
    //console.log(personalFormData);
})

var backfrom = JSON.parse(localStorage.getItem('backToPerson')); 

if (backfrom === true) {
    var person = window.localStorage.getItem('personFormObject');
    var formData = JSON.parse(person);
    console.log(formData)

    $('#pancard').val(formData.pancard).parent().find("label").addClass("focus-state");
    $('#fatherName').val(formData.fatherName).parent().find("label").addClass("focus-state");
    $('#motherName').val(formData.motherName).parent().find("label").addClass("focus-state");
    $('#spouse').val(formData.spouse).parent().find("label").addClass("focus-state");
    $('#addressLine1').val(formData.addressLine1).parent().find("label").addClass("focus-state");
    $('#addressLine2').val(formData.addressLine2).parent().find("label").addClass("focus-state");
    $('#addressLine3').val(formData.addressLine3).parent().find("label").addClass("focus-state");
    $('#landmark').val(formData.landmark).parent().find("label").addClass("focus-state");
    $('#city').val(formData.city).parent().find("label").addClass("focus-state");
    $('#pincode').val(formData.pincode).parent().find("label").addClass("focus-state");
    $('#district').val(formData.district).parent().find("label").addClass("focus-state");
    $('#country').val(formData.country).parent().find("label").addClass("focus-state");
    $('#pob').val(formData.pob).parent().find("label").addClass("focus-state");


    //select Dropdown
    $("#prof option[value= '" + formData.prof + "' ]").attr("selected", "selected").trigger('change');
    $("#eduQualification option[value= '" + formData.eduQualification + "' ]").attr("selected", "selected").trigger('change');
    $("#residenStatus option[value= '" + formData.residenStatus + "' ]").attr("selected", "selected").trigger('change');
    $("#citizenship option[value= '" + formData.citizenship + "' ]").attr("selected", "selected").trigger('change');


    //checkbox
    $("input[name='radio2'][value = '" + formData.radio2 + "']").prop('checked', true).trigger('click');
    $("input[name='declarationBtn'][value = '" + formData.declarationBtn + "']").prop('checked', true).trigger('click');
    $("input[name='status'][value = '" + formData.status + "']").prop('checked', true).trigger('click');
    $("input[name='residentBtn'][value = '" + formData.residentBtn + "']").prop('checked', true).trigger('click');
  
}
else{
    localStorage.removeItem("personFormObject");
}

$(document).ready(function () {
    
    if($("input[type=radio][name='declarationBtn']:checked").val() == "no"){
        $('.addressDetailsCont').show();
        $('.addressDetailsCont .form-field-container input').each(function(){
            $(this).removeClass('hidden');
            
        });
    }else{
        $('.addressDetailsCont .form-field-container input').each(function(){
            $(this).parent().find("label").removeClass("focus-state");
        })
    }

    if($("input[type=radio][name='status']:checked").val() == "Other Option"){
        $('.spousenameInput').hide();
        $('#spouse').parent().find("label").removeClass("focus-state");
    }

    if($("input[type=radio][name='residentBtn']:checked").val() == "no"){
        $('.residDetailsCont').show();
        $('.note2').hide();
        $('.residDetailsCont .form-field-container input').each(function(){
            $(this).removeClass('hidden');
        });
    }else{
        $('.residDetailsCont .form-field-container input').each(function(){
            $(this).parent().find("label").removeClass("focus-state");
        })
    }
    
});

$(document).ready(function(){
    window.localStorage.setItem("backToPerson", "false");
});        
