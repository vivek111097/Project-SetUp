// form validation

$(document).ready(function() {
    $(document).on('click', '.js_Submitform', function(e) {
        
    e.preventDefault();
    $(this).parents('.formValid').find('.required').trigger('blur');
    checkbox();
    
    var errrlength = $('.error:visible').length;
    if(errrlength === 0){
        window.location.href ='screen-18.html';
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
                error_div.html('This field is required.');
                field_container.addClass('error');
                errors = true;
            } else {
                error_div.html('');
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

// find clinic

var locationArray = [];
var closest;
var myLocAdd;
var mylocLat;
var mylocLong;
var ip;
var mynewCity;

$(document).ready(function() {
    branchLocator();
    changemap();
    addressArray();
});

function branchLocator() {
    removeDuplicatesFromSelectElement('city');
    //removeDuplicatesFromSelectElement('locality');
    $("#city").val($("#city option:first").val());
    $("#locality").val($("#locality option:first").val());
}

function removeDuplicatesFromSelectElement(elementName) {
    var code = {};
    $("select[name=" + elementName + "] > option").each(function() {
        if (code[this.text]) {
            $(this).remove();
        } else {
            code[this.text] = this.value;
        }
    });
    sortSelectOptionsAlphabetically(elementName);
}

function sortSelectOptionsAlphabetically(elementName) {
    $("select[name=" + elementName + "]").append($("select[name=" + elementName + "] option")
        .remove().sort(function(a, b) {
            var at = $(a).text(),
                bt = $(b).text();
            return (at > bt) ? 1 : ((at < bt) ? -1 : 0);
        }));

    // $("#state").val($("#state option:first").val());
    // $("#city").val($("#city option:first").val());
    // $("#locality").val($("#locality option:first").val());
}

function addressArray() {

    var count = 0;
    var newlat = [];
    var newlang = [];
    var newaddress = [];
    var newlocality =[];
    locationArray = [];
    $("#duplicateLocality option").each(function() {


        newlat.push(parseFloat($(this).attr('data-branch-latitude')));
        newlang.push(parseFloat($(this).attr('data-branch-longitude')));
        newaddress.push($(this).attr('data-branch-address'));
        newlocality.push($(this).text());
    });
    for (var i = 0; i < newlat.length; i++) {
        locationArray.push([newaddress[i], newlat[i], newlang[i],newlocality[i]]);
    }

    // console.log(locationArray)

    // use each to iterate over the array, incrementing count each time
$.each(locationArray, function() {
    count++
});

// the alert won't get called until the 'each' is done
//      as evidenced by the value of count
// console.log(count);



}


function changemap() {
    var databranchlatitude = 19.175120;
    var databranchlongitude = 72.846999;
    // var databranchlatitude;
    // var databranchlongitude;
    var branchaddress = "PNB MetLife India Insurance Company Ltd. , Office Unit No. 101, 1st Floor, Techniplex-1, Techniplex complex veer Savarkar Flyover,Off S V Road Goregaon (West)-400062";
    var selectedText = "Goregaon";
    var branchaddress;
    var branchaddressp;
    

    $(document).on('change', '#city', function() {
        var optionSelected = $("option:selected", this);
        var valueSelected = this.value;
        $("#locality").removeAttr('disabled');
        $("#locality").children('option').not(':first').remove();

        // $("#locality").children("option[data-branch-city^=" + valueSelected + "]").show();

        $("#duplicateLocality option").each(function(index, el) {
            // console.log(valueSelected +"..........."+ $(this).data("branch-state"))
            if($(this).data("branch-city") == valueSelected){
                // console.log($(this));
                 var a = $(this).clone();
                $("#locality").append(a);

            }
        });
        removeDuplicatesFromSelectElement('locality');
        sortSelectOptionsAlphabetically('locality');
        $("#locality").val($("#locality option:first").val());
    });

    $(document).on('change', '#locality', function() {
        selectedText = $("#locality option:selected").html();
        branchaddress = $(this).find(':selected').attr('data-branch-address');
        branchaddressp = $("<p>" + branchaddress + "</p>");

        // var databranchcity = $(this).attr('data-branch-city');
        // var databranchstate =$(this).attr('data-branch-state');

        databranchlatitude = parseFloat($(this).find(':selected').attr('data-branch-latitude'));
        databranchlongitude = parseFloat($(this).find(':selected').attr('data-branch-longitude'));
    });

    $(document).on('click', '#showbranch', function() {
        databranchlatitude = parseFloat($("#locality").find(':selected').attr('data-branch-latitude'));
        databranchlongitude = parseFloat($('#locality').find(':selected').attr('data-branch-longitude'));
         selectedText = $("#locality option:selected").html();
         $(".alladdress h5").text('');
         $(".alladdress h5").text($("#locality option:selected").attr('data-branch-address'));
        if ($('#city').val() == "select") {
            // initMap();
            $("#city").addClass('error');
            return false;
        } else if ($('#locality').val() == "select") {
            // initMap();
            $("#locality").addClass('error');
            
            return false;
        } else {
            initMap();
            $('#city', '#locality').removeClass('error');
            if (selectedText) {
                $('.resultsItem h5').text(selectedText);
            }
            if (branchaddressp) {
                $('.resultsItem .alladdress').empty().html(branchaddressp);
            }

        }



    });


    // Convert Degress to Radians
    function Deg2Rad(deg) {
        return deg * Math.PI / 180;
    }

    function PythagorasEquirectangular(lat1, lon1, lat2, lon2) {
        lat1 = Deg2Rad(lat1);
        lat2 = Deg2Rad(lat2);
        lon1 = Deg2Rad(lon1);
        lon2 = Deg2Rad(lon2);
        var R = 6371; // km
        var x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
        var y = (lat2 - lat1);
        var d = Math.sqrt(x * x + y * y) * R;
        return d;
    }



    function initMap3() {

        if ($("#locality").children("option[data-branch-city=" + city + "]").length) {
            
            var bounds = new google.maps.LatLngBounds();

            var map = new google.maps.Map(document.getElementById('map'), {
                // zoom: 10,
                center: new google.maps.LatLng(newlat[0], newlang[0]),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });


            var infowindow = new google.maps.InfoWindow();
            var marker, i;
            for (i = 0; i < locations.length; i++) {
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                    map: map,
                });

                bounds.extend(marker.position);
                map.fitBounds(bounds);

                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        infowindow.setContent(locations[i][0]);
                        infowindow.open(map, marker);
                    }
                })(marker, i));
            }
        } else {
            alert('no data found');
        }


    }
    

    
    function showPosition(position) {
        databranchlatitude = position.coords.latitude;
        databranchlongitude = position.coords.longitude;
        // databranchlatitude = 40.731;
        // databranchlongitude = -73.997;
        // console.log(databranchlatitude, databranchlongitude);
        // alert(databranchlatitude, databranchlongitude)
    }

    function initMap() {
        var map = new google.maps.Map(
            document.getElementById("map"), {
                center: new google.maps.LatLng(databranchlatitude, databranchlongitude),
                zoom: 13,
                streetViewControl: false,
                icon: normalIcon()
            });

        var marker = new google.maps.Marker({
            map: map,
            draggable: true,
            animation: google.maps.Animation.DROP,
            position: { lat: databranchlatitude, lng: databranchlongitude },
            title: "PNB MetLife India Insurance Co. Ltd",
            icon: normalIcon()
        });

        const contentString =
            '<div id="content">' +
            '<h1 id="firstHeading" class="firstHeading">PNB MetLife India Insurance Co. Ltd</h1>' +
            '<p> <b>' + selectedText + '</b></p>' +
            '<p id="bodyContent">' + branchaddress +
            "</p>" +
            "</div>";

        const infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        // marker.addListener("click", () => {
        marker.addListener("click", function() {
            infowindow.open(map, marker);
        });


        function normalIcon() {
            return {
                url: 'assets/images/mappin.png'
            };
        }
    }
    initMap();    
}


// find clinic


// localstorage
jQuery.fn.serializeObject = function () {
    var formData = {};
    var formArray = this.serializeArray();

    for (var i = 0, n = formArray.length; i < n; ++i)
        formData[formArray[i].name] = formArray[i].value;

    return formData;
};

$('.js_Submitform').click(function () {
    var personalFormData = $('#homepageForm').serializeObject();
    localStorage.setItem('homeFormObject', JSON.stringify(personalFormData));
    console.log(personalFormData);
})

var backfrom = JSON.parse(localStorage.getItem('backToHome')); 

if (backfrom === true) {
    var person = window.localStorage.getItem('homeFormObject');
    var formData = JSON.parse(person);
    console.log(formData)

    $('#flname').val(formData.flname).parent().find("label").addClass("focus-state");
    $('#homepageDob').val(formData.homepageDob).parent().find("label").addClass("focus-state");
    $('#mobnumber').val(formData.mobnumber).parent().find("label").addClass("focus-state");
    $('#email').val(formData.email).parent().find("label").addClass("focus-state");
    $('#pincode').val(formData.pincode).parent().find("label").addClass("focus-state");
    $('#empCode22').val(formData.empCode22).parent().find("label").addClass("focus-state");


    if ($(".form-field-container input").val() == "" || $(".static-form-container input").val() == "" || $('.form-field-container select').val() == "") {
        $(this).parent().find("label").removeClass("focus-state");
    }
    
}
else{
    localStorage.removeItem("personFormObject");
    localStorage.removeItem("homeFormObject");
}


$(document).ready(function(){
    window.localStorage.setItem("backToHome", "false");
});