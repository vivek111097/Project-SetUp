var winWidth = $(window).width();
var winHeight = $(window).height();

$(document).ready(function() {
    callYouSection();
    if ($(".mCustomScrollbar").length) {
        $(".mCustomScrollbar").mCustomScrollbar();
    };

    mCustomScrollbarFocus();
    tabs();

    if ($(".formListItem").length) {
        fileExtension();
    }
    if ($(".showMore").length) {
        showMore();
    };
    if ($(".dateinput").length) {
        $('.dateinput').datepicker({});
    };
    if($('.value-prop__item-container2').length){
        slider2item();
    }
    


    // Quick & dirty toggle to demonstrate modal toggle behavior
    // $('.modal-toggle').on('click', function(e) {
    //     e.preventDefault();
    //     $('.modal').toggleClass('is-visible');
    // });

});
$(window).resize(function() {
    winWidth = $(window).width();
    winHeight = $(window).height();
    // filter();
});

$(window).on('load', function() {
    // setTimeout(function() {
    //     $("#loader").fadeOut();
    // }, 200);


});

$(window).on('scroll', function() {});



function callYouSection() {
    $(document).on('click', '.getOtp', function(e) {
        e.preventDefault();
        console.log('dd');
    });
}


function mCustomScrollbarFocus() {
    $('.mCustomScrollBox').attr("tabindex", "-1");
}

function tabs() {
    // body...
    $('ul.tabs li').click(function() {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })
}


function showMore() {
    // body...
    $('*[data-count').each(function(index, el) {
        console.log("asdfdsdsfsd" + $(this).data("count"))
        $(this).children().eq($(this).data("count") - 1).nextAll().addClass('hideList')

    });

    $(document).on('click', '.showMore', function(event) {
        event.preventDefault();
        $(this).toggleClass('less');
        if ($(this).hasClass('less')) {
            $(this).parents(".container").find('.hideList').show();
            $(this).parents(".container").find('.icon-plus').hide();
            $(this).parents(".container").find('.icon-minus').show();
            // $(this).text("Show Less");

        } else {
            $(this).parents(".container").find(".hideList").hide();
            $(this).parents(".container").find('.icon-minus').hide();
            $(this).parents(".container").find('.icon-plus').show();
            // $(this).text("Show More");
        }


    });
}



function fileExtension() {
    // body...
    $('.formListItem a').each(function() {
        var fileValue = $(this).attr('href');
        var fileType = fileValue.split('.')[1];
        console.log(fileType);
        if (fileType == 'pdf') {
            $(this).parents('.formListItem').addClass('pdf');
        } else if (fileType == 'doc') {
            $(this).parents('.formListItem').addClass('doc');
        }
    });
}
function slider2item(){
    $('.value-prop__item-container2').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: ".js-leftClick",
        nextArrow: ".js-rightClick",
    });
}

// web forms

if ($(".web-forms-migration").length > 0) {
    var webFormsMigrationModule = (function () {
        var parentElement = $(".web-forms-migration");

        /* Common code for All Web forms - Start */
        var contentGroup, subContentGroup, contentGroupDirectory, subContentGroupDirectory, audience;

        function AddInputParameter(a, b, c, d, e) {
            var f = e.createElement(b);
            f.setAttribute("type", "hidden");
            f.setAttribute("name", c);
            f.setAttribute("value", d);
            if ($("#" + a.getAttribute("id")).find("[name='" + c + "']").length == 0) {
                a.appendChild(f);
            }
        }

        function getPageFromURLNode(a, b) {
            var c = document.URL;
            var d = "";
            var e = window.location.search.split("?");
            var f = "";
            var g = "";
            var h = false;
            if (null != document.getElementById("WT.mc_id")) {
                mcid = UtilityModule.getCookie("SessionMCID");
                AddInputParameter(a, "input", "wb_code", mcid, document);
                AddInputParameter(a, "input", "WT.mc_id", mcid, document);
            }
            if (2 == e.length) {
                var i = e[1].split("&");
                for (var j = 0; j < i.length; j++) {
                    var k = i[j].split("=");
                    if ("wt.mc_id" == k[0].toLowerCase()) {
                        AddInputParameter(a, "input", "wb_code", k[1], document);
                    }
                    if ("" != b)
                        if ("pagefrom" == k[0].toLowerCase()) {
                            d = k[1] + "-" + b;
                            if (j == i.length - 1) g = g + k[0] + "=" + d;
                            else g = g + k[0] + "=" + d + "&";
                            h = true;
                        } else if (j == i.length - 1) g += i[j];
                        else g = g + i[j] + "&";
                }
                if (h) {
                    var l = document.URL;
                    var m = l.split("?");
                    f = window.location.href.split("#")[1];
                    if ("" != f) c = m[0] + "?" + g;
                    else c = m[0] + "?" + g + "#" + f;
                }
            }
            return c;
        }

        function addSessionParameters(a) {
            var b = sessionVars.getSessionParams();
            for (var c in b)
                if (b.hasOwnProperty(c))
                    if ("" !== b[c])
                        if (checkFormField(a, c)) AddInputParameter(a, "input", c, b[c], document);
                        else a.elements[c].value = b[c];
        }
		
		function getQueryString(a) {
			a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
			var b = "[\\?&]" + a + "=([^&#]*)";
			var c = new RegExp(b);
			var d = c.exec(window.location.href);
			if (null == d) return "";
			else return d[1];
		}

        function onFormSubmit($this) {
            var fid = $this.attr('data-fsubmit');
            var $formid = $('[data-fid=' + fid + ']');
            var formStatus = true;
            var flag;
            var errorMsg;
            var errorDOB
            var errorStatus
            var inputElements = $formid.find('[data-required=true]:visible').not(':hidden');
            $.each(inputElements, function () {
                var $this = $(this);
                var placeholder = $this.attr('placeholder');
                if ($this.val() == placeholder) {
                    $this.val("");
                }
                var val = $this.val();
                if (val != null) {
                    // $this.closest('.insuredDateOfBirth').find('.form-field-errormessage').html("");
                    if (val.length == 0) {
                        $this.addClass('error');
                        errorMsg = $this.parent('.form-field-container').find('.form-field-errormessage').data("error"); 
                        errorDOB = $this.closest('.insuredDateOfBirth').find('.form-field-errormessage').data("error");
                        errorStatus = $this.closest('.dateOfBirth').find('.form-field-errormessage').data("error");
                        console.log(errorStatus);
						$this.parent('.form-user-grp').find('label').addClass('error-msg');
                        $this.parent('.form-user-grp').find('svg').css('fill', '#db3535');
                        $this.parent('.form-user-grp').find('.form-field-errormessage').html(errorMsg);
                        $this.closest('.insuredDateOfBirth').find('.form-field-errormessage').html(errorDOB);
						$this.parents('.form-field-groups').addClass("form-field-custom-groups");
                        $this.closest('.dateOfBirth').find('.form-field-errormessage').html(errorStatus);
               
                        formStatus = false;
                    }
					else{
						//$this.trigger("blur");
					}
                }
				//parentElement.find("input[type=text]").trigger("blur");
                if (parentElement.find(".error").length > 0) {
                    formStatus = false;
                }
            });
            return formStatus;
        }

        function validateOnType(val, $this, re) {
            var placeholder = $this.attr('placeholder');
            var formatError;
            if (val.length > 0 && val != placeholder) {
                if (val.match(re)) {
                    $this.removeClass('error');
                    $this.removeClass('formatError');
                    $this.parent('.form-user-grp').find('.form-field-errormessage').html("");
                    $this.removeAttr('data-valid-status');

                } else {
                    $this.addClass('error');                    
                    $this.addClass('formatError');
                    formatError = $this.parent('.form-user-grp').find('.form-field-errormessage').data("format");
					//$this.parent('.form-user-grp').find('label').addClass('error-msg');
                    $this.parent('.form-user-grp').find('.form-field-errormessage').html(formatError);
                    $this.attr('data-valid-status', 'failed');
                }
            } else {
                $this.removeClass('formatError');				
                var attrDVS = $this.attr('data-required');
                if (typeof attrDVS !== typeof undefined && attrDVS !== false) {
                } else {
                    $this.removeClass('error');
                    $this.removeAttr('data-valid-status');
                }
            }
        }


        function formTaggingNewLead() {
            opTriggerCounter("newLead");
        }

        function formTaggingServiceLead() {
            opTriggerCounter("service");
        }

        function opTriggerCounter() {
        }

        function isDate(obj) {
            var userDate;
            var validateDate = false;
            var futureDate;
            obj1 = obj.split("/");

            obj1[0] = parseInt(obj1[0], 10) - 1; //for javascript 0=>January!
            obj1[1] = parseInt(obj1[1], 10);
            obj1[2] = parseInt(obj1[2], 10);

            if (obj1[2] >= 1900) {
                userDate = new Date(obj1[2], obj1[0], obj1[1]);
                if ((obj1[1] == userDate.getDate()) && (obj1[0] == userDate.getMonth()) && (obj1[2] == userDate.getFullYear())) {
                    validateDate = true;
                } else {
                    validateDate = false;
                }
            }
            var currentDate = new Date();

            if (currentDate > userDate) {
                futureDate = true;
            } else {
                futureDate = false;
            }

            if (validateDate == true && futureDate == true) {
                parentElement.find(".dateOfBirth").find(".errorSpan").removeClass("errorSpanShow");
                return true;
            } else {
                if (!parentElement.find('.firstDateOfBirth').hasClass("hide")) {
                    parentElement.find("#DOB1_id,#DOB2_id,#DOB3_id").addClass("error");
					parentElement.find("#DOB1_id,#DOB2_id,#DOB3_id").parents('.form-field-groups').addClass("form-field-custom-groups");
                    parentElement.find("#dobMM,#dobDD,#dobYY").parents('.form-field-groups').addClass("form-field-custom-groups");					
                    parentElement.find(".dateOfBirth ").find(".errorSpan").addClass("errorSpanShow");

                }
                else if (!parentElement.find('.secondDateOfBirth').hasClass("hide")) {
                    parentElement.find("#DOB4_id,#DOB5_id,#DOB6_id").addClass("error");
                    parentElement.find(".dateOfBirth ").find(".errorSpan").addClass("errorSpanShow");

                }
                return false;
            }
        }

        function isValidDateFuture(obj) {
            var dteDate;
            var validateDate = false;
            var futureDate;
            obj1 = obj.split("/");
            obj1[0] = parseInt(obj1[0], 10) - 1; //for javascript 0=>January!
            obj1[1] = parseInt(obj1[1], 10);
            obj1[2] = parseInt(obj1[2], 10);
            if (obj1[2] >= 1900) {
                dteDate = new Date(obj1[2], obj1[0], obj1[1]);

                if ((obj1[1] == dteDate.getDate()) && (obj1[0] == dteDate.getMonth()) && (obj1[2] == dteDate.getFullYear())) {

                    validateDate = true;
                } else {
                    validateDate = false;
                }
            }

            var dteDate1;
            var dteDate2;
            var now = new Date();

            obj2 = obj.split("/");
            obj2[0] = parseInt(obj2[0], 10) - 1;
            obj2[1] = parseInt(obj2[1], 10);
            obj2[2] = parseInt(obj2[2], 10);
            dteDate1 = new Date(obj2[2], obj2[0], obj2[1]);
            dteDate2 = new Date(now.getFullYear(), now.getMonth(), now.getDate());

            if (dteDate1 >= dteDate2) {
                futureDate = true;
            } else {
                futureDate = false;
            }

            if (validateDate && futureDate) {
                parentElement.find(".effective-date-section").find(".errorSpan").removeClass("errorSpanShow");
                return true;
            }
            else {
                parentElement.find("#effectivechangeDate1_id,#effectivechangeDate2_id,#effectivechangeDate3_id").addClass("error");
                parentElement.find(".effective-date-section ").find(".errorSpan").addClass("errorSpanShow");
                return false;
            }
        }
		
		function isDatePrmiaryInsured(obj) {
            var userDate;
            var validateDate = false;
            var futureDate;
            var prmiaryInsuredDateObj = obj.split("/");

            prmiaryInsuredDateObj[0] = parseInt(prmiaryInsuredDateObj[0], 10) - 1; //for javascript 0=>January!
            prmiaryInsuredDateObj[1] = parseInt(prmiaryInsuredDateObj[1], 10);
            prmiaryInsuredDateObj[2] = parseInt(prmiaryInsuredDateObj[2], 10);

            if (prmiaryInsuredDateObj[2] >= 1900) {
                userDate = new Date(prmiaryInsuredDateObj[2], prmiaryInsuredDateObj[0], prmiaryInsuredDateObj[1]);
                if ((prmiaryInsuredDateObj[1] == userDate.getDate()) && (prmiaryInsuredDateObj[0] == userDate.getMonth()) && (prmiaryInsuredDateObj[2] == userDate.getFullYear())) {
                    validateDate = true;
                } else {
                    validateDate = false;
                }
            }
            var currentDate = new Date();

            if (currentDate > userDate) {
                futureDate = true;
            } else {
                futureDate = false;
            }

           if (validateDate && futureDate) {
                parentElement.find("#DOB4,#DOB5,#DOB6").removeClass("error");
                parentElement.find(".primaryInsuredDateOfBirth").find(".errorSpan").removeClass("errorSpanShow");
				parentElement.find("#DOB4,#DOB5,#DOB6").parents('.form-field-groups').removeClass("form-field-custom-groups"); 
                return true;
            }
            else {
                parentElement.find("#DOB4,#DOB5,#DOB6").addClass("error");				
                parentElement.find(".primaryInsuredDateOfBirth").find(".errorSpan").addClass("errorSpanShow");
				parentElement.find("#DOB4,#DOB5,#DOB6").parents('.form-field-groups').addClass("form-field-custom-groups"); 
                return false;
            }
        }


        function validateZipCode() {
			var re = /^[0-9]*$/;
			var errorMsg;
			var val = parentElement.find(".zipCode").val();
			if(val.match(re) && val.length ==5){
				 parentElement.find(".zipCode").removeClass("error").parents(".col-xs-12").find(".errorSpan").removeClass("errorSpanShow");
			}
            else{
                parentElement.find(".zipCode").addClass("error").parents(".col-xs-12").find(".errorSpan").addClass("errorSpanShow");
				errorMsg = parentElement.find(".zipCode").parents(".col-xs-12").find('.form-field-errormessage').data("error");
				parentElement.find(".zipCode").parents(".col-xs-12").find('.form-field-errormessage').html(errorMsg);
            }
        }
		
		function validateNewZipCode() {
			var re = /^[0-9]*$/;
			var val = parentElement.find(".newZipCode").val();
			if(val.match(re) && val.length ==5){
				 parentElement.find(".newZipCode").removeClass("error").parents(".col-xs-12").find(".errorSpan").removeClass("errorSpanShow");
			}
            else{
                parentElement.find(".newZipCode").addClass("error").parents(".col-xs-12").find(".errorSpan").addClass("errorSpanShow");
            }
        }

        function validateEmail() {
            var $this = parentElement.find(".validateEmail");
            var val = parentElement.find(".validateEmail").val();
            var errorMsg;	
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\u00C0-\u017F\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
            if (val.match(re)) {
				$this.removeClass('error');
                $this.parents(".col-xs-12").find(".errorSpan").removeClass("errorSpanShow");
                $this.parents(".col-xs-12").find('.form-field-errormessage').html("");
            }
            else {
				$this.addClass('error');
                $this.parents(".col-xs-12").find(".errorSpan").addClass("errorSpanShow");
            }
        }

        function validatePhone() {
            var $this = parentElement.find(".validatePhone");
            var val = parentElement.find(".validatePhone").val();
            var errorMsg;
            var re = /^([0-9]{3}[-][0-9]{3}[-][0-9]{4})$/;
            if (val.match(re)) {
				$this.removeClass('error');
                $this.parents(".col-xs-12").find(".errorSpan").removeClass("errorSpanShow");
                $this.parents(".col-xs-12").find('.form-field-errormessage').html("");
            }
            else {
				$this.addClass('error');
                $this.parents(".col-xs-12").find(".errorSpan").addClass("errorSpanShow");
                 errorMsg = $this.parents(".col-xs-12").find('.form-field-errormessage').data("error");
                 $this.parents(".col-xs-12").find('.form-field-errormessage').html(errorMsg);
            }
        }

        function validateSSN() {
            var $this = parentElement.find(".validateSSN");
			var errorMsg;
            var val = parentElement.find(".validateSSN").val();
            var re = /^[0-9]*$/;
            if (val != "" && val != null) {
                if (val.match(re) && val.length ==4) {
					$this.removeClass('error');
                    $this.parents(".col-xs-12").find(".errorSpan").removeClass("errorSpanShow");
                }
                else {
					$this.addClass('error');
                    $this.parents(".col-xs-12").find(".errorSpan").addClass("errorSpanShow");
					errorMsg = $this.parents(".col-xs-12").find('.form-field-errormessage').data("error");
					$this.parents(".col-xs-12").find('.form-field-errormessage').html(errorMsg);
					//$this.trigger("blur");
                }
            }
            else {
                $this.parents(".col-xs-12").find(".errorSpan").addClass("errorSpanShow");
            }
        }

        function validatePoliyNumber() {
            var re = /^[0-9]*$/;
            var policyNumberLength = parentElement.find(".policy-number:visible").not(':hidden');
            $.each(policyNumberLength, function (index, item) {
                if ($(item).val() != null && $(item).val() != "") {
                    if ($(item).val().match(re)) {
                        $(item).removeClass('error');
                        $(item).parents(".form-user-grp").find(".number-validation").removeClass("errorSpanShow");
                    }
                    else {
                        $(item).addClass('error');
                        $(item).parents(".form-user-grp").find(".number-validation").addClass("errorSpanShow");
                    }
                }
                else {
                    $(item).addClass("error");
                    $(item).parents(".form-user-grp").find(".number-validation").addClass("errorSpanShow");
                }
            });

        }

        function populateDaysDropDown(parentId) {
            var selectedMonth = parentId.find(".dobMonth").val();
            var selectedYear = parentId.find(".dobYear option:selected").val();

            function isLeapYear(year) {
                var d = new Date(year, 1, 28);
                d.setDate(d.getDate() + 1);
                return d.getMonth() == 1;
            }

            if (selectedMonth !== '') {
                switch (selectedMonth) {
                    case "1":
                    case "3":
                    case "5":
                    case "7":
                    case "8":
                    case "10":
                    case "12":
                        parentId.find(".dobDay option[value='31']").show().prop('disabled', false);
                        parentId.find(".dobDay option[value='30']").show().prop('disabled', false);
                        parentId.find(".dobDay option[value='29']").show().prop('disabled', false);
                        break;
                    case "4":
                    case "6":
                    case "9":
                    case "11":
                        parentId.find(".dobDay option[value='31']").hide().prop('disabled', true);
                        parentId.find(".dobDay option[value='30']").show().prop('disabled', false);
                        parentId.find(".dobDay option[value='29']").show().prop('disabled', false);
                        if (parseInt(parentId.find(".dobDay option:selected").val()) > 30) {
                            parentId.find(".dobDay").val('30');
                            parentId.find(".dobDay").change();
                        }
                        break;
                    case "2":
                        parentId.find(".dobDay option[value='31']").hide().prop('disabled', true);
                        parentId.find(".dobDay option[value='30']").hide().prop('disabled', true);
                        if (parseInt(parentId.find(".dobDay option:selected").val()) > 29) {
                            parentId.find(".dobDay").val('29');
                            parentId.find(".dobDay").change();
                        }
                        if (selectedYear !== '') {
                            if (isLeapYear(selectedYear)) {
                                parentId.find(".dobDay option[value='29']").show().prop('disabled', false);
                                if (parseInt(parentId.find(".dobDay option:selected").val()) > 29) {
                                    parentId.find(".dobDay").val('29');
                                    parentId.find(".dobDay").change();
                                }
                            } else {
                                parentId.find(".dobDay option[value='29']").hide().prop('disabled', true);
                                if (parseInt(parentId.find(".dobDay option:selected").val()) > 28) {
                                    parentId.find(".dobDay").val('28');
                                    parentId.find(".dobDay").change();
                                }
                            }
                        }
                        break;
                }
            }
        }
		
		function objectifyForm(formArray) {
			var returnArray = {};
			for (var i = 0; i < formArray.length; i++) {
				returnArray[formArray[i]['name']] = formArray[i]['value'];
			}
			return returnArray;
		}

        function webFormMigrationProcessorSubmit(formName, formObj) {
            var lead = "";
            var scenarioName = "";
            var mmrep = "";
            var formObjectName = document.getElementById(formName);
            var reserveid = UtilityModule.getCookie("ReserveID");

            if (null != reserveid) {
                AddInputParameter(formObjectName, "input", "reserveid", reserveid, document);
            }

            var TKM = parentElement.find("#contactus_lead_thankyou").html();
            console.debug("TKM is: " + TKM);
            AddInputParameter(formObjectName, "input", "webFormPage_ThankYouPage", TKM, document);

            if (null != document.getElementById("beginapp-rep")) {
                mmrep = document.getElementById("beginapp-rep").value;
            }
            if (null != mmrep && "" != mmrep) {
                var lsubContentGroupDirectory = "";
                var lcontentGroupDirectory = "";
                var laudience = "";
                if ("" != subContentGroupDirectory) {
                    lsubContentGroupDirectory = subContentGroupDirectory + "-" + mmrep;
                    lcontentGroupDirectory = contentGroupDirectory;
                    laudience = audience;
                } else if ("" != contentGroupDirectory) {
                    lcontentGroupDirectory = contentGroupDirectory + "-" + mmrep;
                    lsubContentGroupDirectory = subContentGroupDirectory;
                    laudience = audience;
                } else if ("" != audience) {
                    laudience = audience + "-" + mmrep;
                    lcontentGroupDirectory = contentGroupDirectory;
                    lsubContentGroupDirectory = subContentGroupDirectory;
                }
                if ("undefined" == typeof contentGroupDirectory) AddInputParameter(formObjectName, "input", "contentGroup", "", document);
                else AddInputParameter(formObjectName, "input", "contentGroup", lcontentGroupDirectory, document);
                if ("undefined" == typeof subContentGroupDirectory) AddInputParameter(formObjectName, "input", "subcontentGroup", "", document);
                else AddInputParameter(formObjectName, "input", "subcontentGroup", lsubContentGroupDirectory, document);
                if ("undefined" == typeof audience) AddInputParameter(formObjectName, "input", "audience", "", document);
                else AddInputParameter(formObjectName, "input", "audience", laudience, document);
            }
            else {
                var CGFrQS = "";
                var SCGFrQS = "";
                var AUFrQS = "";

                 CGFrQS = getQueryString("CG");
                 SCGFrQS = getQueryString("SCG");
                 AUFrQS = getQueryString("AU");

                if ("" != CGFrQS) AddInputParameter(formObjectName, "input", "contentGroup", CGFrQS, document);
                else if ("undefined" == typeof contentGroupDirectory) AddInputParameter(formObjectName, "input", "contentGroup", "", document);
                else AddInputParameter(formObjectName, "input", "contentGroup", contentGroupDirectory, document);

                if ("" != SCGFrQS) AddInputParameter(formObjectName, "input", "subcontentGroup", SCGFrQS, document);
                else if ("undefined" == typeof subContentGroupDirectory) AddInputParameter(formObjectName, "input", "subcontentGroup", "", document);
                else AddInputParameter(formObjectName, "input", "subcontentGroup", subContentGroupDirectory, document);

                if ("" != AUFrQS) AddInputParameter(formObjectName, "input", "audience", AUFrQS, document);
                else if ("undefined" == typeof audience) AddInputParameter(formObjectName, "input", "audience", "", document);
                else AddInputParameter(formObjectName, "input", "audience", audience, document);
            }

            if ("requestFormRightNav_Acc" == formName) {
                var prodType = document.getElementById("requestType").value;
                if ("" != prodType)
                    if ("Existing Product/Policy" == prodType) lead = "ServiceLead";
                    else if (prodType.length > 11 && "New Product" == prodType.substr(0, 11)) lead = "NewLead";
            }
            else if ("requestFormRightNav" == formName) {
                var prodType = "";
                if (document.getElementById("requestTypeQuote")) prodType = document.getElementById("requestTypeQuote").value;
                else if (document.getElementById("requestType")) prodType = document.getElementById("requestType").value;
                if ("" != prodType)
                    if ("Existing Product/Policy" == prodType) lead = "ServiceLead";
                    else if (prodType.length >= 11 && "New Product" == prodType.substr(0, 11)) lead = "NewLead";
            }
            else {
                var prodType = "";
                if (document.getElementById("requestType")) prodType = document.getElementById("requestType").value;
                if ("" != prodType)
                    if (prodType.length >= 11 && "New Product" == prodType.substr(0, 11)) lead = "NewLead";
                    else if ("Existing Product/Policy" == prodType) lead = "ServiceLead";
            }

            if ("NewLead" != lead && "ServiceLead" != lead) {
                lead = "NonLeadForm";
                if (document.getElementById("scenarioName") && "" != document.getElementById("scenarioName").value) scenarioName = document.getElementById("scenarioName").value;
            }

            var results = document.cookie.match("(^|;) ?WT_FPC=([^;]*)(;|$)");

            if (null != results) {
                var fullID = unescape(results[2]);
                var partID = fullID.split(":");
                var visitorID = partID[0].split("=");
            }

            if ("undefined" == typeof visitorID) {
                AddInputParameter(formObjectName, "input", "visitorIDReq", "", document)
            }
            else {
                AddInputParameter(formObjectName, "input", "visitorIDReq", visitorID[1], document);
            }

            var urlNode = document.URL;
            urlNode = getPageFromURLNode(formObjectName, mmrep);

            if ("requestFormRightNav" == formName) {
                if (document.requestFormRightNav.coverage)
                    if (document.requestFormRightNav.coverage.value < 1e5) {
                        urlNode = urlNode.split("?");
                        urlNode = urlNode[0];
                        AddInputParameter(formObjectName, "input", "webFormPage_urlPagevalue", urlNode, document);
                    }
            }
            AddInputParameter(formObjectName, "input", "webFormPage_urlPagevalue", urlNode, document);
            var validationSuccess = true;
            if (validationSuccess) {
                var tempURL = "www.metlife.com";
                if ("view" == location.host.match("view")) tempURL = "view.metlife.com"; else tempURL = "www.metlife.com";
                if ("int" == location.host.split(".", 1)) tempURL = "int." + tempURL; else if ("qa" == location.host.split(".", 1)) tempURL = "qa." + tempURL; else if ("dev" == location.host.split(".", 1)) tempURL = "dev." + tempURL;

                var preFill = formObjectName.lstPnPPreFillParameters;

                if (null == preFill || "undefined" == typeof preFill) console.debug("No Prefill Parameters is: ");

                else {
                    var prefillParam = preFill.value;
                    var prefillList = prefillParam.split(",");
                    var PnPPreFillValues = "";

                    for (i = 0; i < prefillList.length; i++) {
                        var prefillListParam = eval("formObjectName." + prefillList[i] + ".value");
                        console.debug("prefillListParam is: " + prefillListParam);
                        PnPPreFillValues = PnPPreFillValues + prefillList[i] + ":" + prefillListParam + "|";
                    }
                    document.cookie = "PnPPreFill=" + PnPPreFillValues + "; path=/";
                }

                varwebformID = formObjectName.webformId;
                if (null == varwebformID || "undefined" == typeof varwebformID) {
                    var submitUrl = $("#" + formName).attr("data-product-url");
                }
                else {
                    var submitUrl = $("#" + formName).attr("data-product-url");
                    addSessionParameters(formObjectName);
                }

                var gluString = (window.location.search).split("?");
                if (gluString.length == 2 && gluString[1].indexOf("otherParam") != "-1") {
                    var oParams = base64Decode(gluString[1].split('&')[1].split("=")[1]);
                    oParams = oParams.split('|');
                    if (oParams[8] == "GLU") {
                        AddInputParameter(formObjectName, "input", "GLU", "GLU", document)
                    }
                }

                if (typeof String.prototype.trim !== 'function') {
                    String.prototype.trim = function () {
                        return this.replace(/^\s+|\s+$/g, '');
                    }
                }

                $.ajax({
                    type: "POST",
                    url: submitUrl,
                    data: $("#" + formName).serialize(),
                    success: function (response, status, xhr) {
                        if (xhr.status == 200) {
                            parentElement.find(".generic-form,.logo-trust").addClass("hide");
                            parentElement.find(".contactSideThankyou").css("display", "block");
                            //$("html, body").animate({scrollTop: 0}, "slow");
                            $('html, body').animate({
                                'scrollTop': parentElement.find(".web-form-container").position().top
                            });
							var formValues = objectifyForm(formObj.serializeArray());
                            AnalyticsDTM.formComplete(formName,formValues);
                        }
                        else {
                            $(".error_message_overlay").show();
                            $("body").addClass("modal-open");
                            parentElement.find(".form-submit").attr('disabled', false).html("SUBMIT");
                            AnalyticsDTM.formError(formName);
                        }
                    },
                    error: function (errorMessage) {
                        $(".error_message_overlay").show();
                        $("body").addClass("modal-open");
                        parentElement.find(".form-submit").attr('disabled', false).html("SUBMIT");
                        AnalyticsDTM.formError(formName);
                    }

                });
            }

        }
		
		function addOption(selectbox,text,value ) {
			var optn = document.createElement("OPTION");
			optn.text = text;
			optn.value = value;
			selectbox.options.add(optn);
		}

		function removeAllOptions(selectbox)
		{
			var i;
			for(i=selectbox.options.length-1;i>=0;i--)
			{ 
				selectbox.remove(i); 
			}
		}

        /* Common code for All Web forms - End */

        return {
            init: function () {
                /* Common code for All Web forms - Start  */

                parentElement.find(".regexpName").on("keyup blur", function () {
                    var regexpName = /^([A-Za-z\s0-9-\'()]*)$/;
                    var $this = $(this);
                    var val = $this.val();
                    validateOnType(val, $this, regexpName);
                });

                parentElement.find(".regexpAddress").on("keyup blur", function () {
                    var regexpAddress = /^([A-Za-z\s0-9-\'#(),.&]*)$/;
                    var $this = $(this);
                    var val = $this.val();
                    validateOnType(val, $this, regexpAddress);
                });

                parentElement.find(".numericOnly").on("keyup blur", function () {
                    var regexpNumericOnly = /^[0-9]*$/;
                    var $this = $(this);
                    var val = $this.val();
                    validateOnType(val, $this, regexpNumericOnly);
                });

                parentElement.find(".regexpPhone").on("keyup blur", function () {
                    var regexpPhone = /^([+\s0-9-()]*)$/;
                    var $this = $(this);
                    var val = $this.val();
                    validateOnType(val, $this, regexpPhone);
                });

                parentElement.find(".validateCountry").on("keyup blur", function () {
                    var $this = $(this);
                    if ($this.val() != "" && $this.val() != null) {
                        var regexpName = /^([A-Za-z\s0-9-\'()]*)$/;
                        var val = $this.val();
                        validateOnType(val, $this, regexpName);
                    }
                    else {
                        $this.removeClass("error");
                    }
                });
				
				
                parentElement.find(".zipCode,.newZipCode").on('blur', function (evt) {
					 var val = $(this).val();
					 var re = /^[0-9]*$/;
						if ($(this).val()) {
							if ($(this).val().length == 5 && val.match(re)) {
								$(this).removeClass("error");
							}
							else {
								$(this).addClass("error");
							}
						}
                });

                parentElement.find("#DOB1_id,#DOB2_id,#DOB3_id").on('focus', function (event) {
                    if ($("#DOB1_id").val() && $("#DOB3_id").val() && $("#DOB3_id").val())
                        $("#DOB1_id,#DOB2_id,#DOB3_id").removeClass("error");
                });

                parentElement.find("#DOB4_id,#DOB5_id,#DOB6_id").on('focus', function (event) {
                    if ($("#DOB4_id").val() && $("#DOB5_id").val() && $("#DOB6_id").val())
                        $("#DOB4_id,#DOB5_id,#DOB6_id").removeClass("error");
                });
				
				parentElement.find("#DOB4,#DOB5,#DOB6").on('focus', function (event) {
                    if ($("#DOB4").val() && $("#DOB5").val() && $("#DOB6").val()){
                        $("#DOB4,#DOB5,#DOB6").removeClass("error");
						parentElement.find("#DOB4,#DOB5,#DOB6").parents('.form-field-groups').removeClass("form-field-custom-groups");
						}
                });

                parentElement.find("#effectivechangeDate1_id,#effectivechangeDate2_id,#effectivechangeDate3_id").on('focus', function (event) {
                    if ($("#effectivechangeDate1_id").val() && $("#effectivechangeDate2_id").val() && $("#effectivechangeDate3_id").val())
                        $("#effectivechangeDate1_id,#effectivechangeDate2_id,#effectivechangeDate3_id").removeClass("error");
                });

                parentElement.find("input[type=text]").on('focus', function (event) {
                    if ($(this).parents(".dateOfBirth ").find(".errorSpan").hasClass("errorSpanShow")) {
                        $(this).parents(".dateOfBirth ").find(".errorSpan").removeClass("errorSpanShow");
                    }
                    if ($(this).hasClass("error")) {
                        $(this).removeClass("error");
                    }
                });

                parentElement.find("#DOB4_id,#DOB5_id,#DOB6_id").on('focus', function (event) {
                    if ($("#DOB4_id").val() && $("#DOB5_id").val() && $("#DOB6_id").val())
                        $("#DOB4_id,#DOB5_id,#DOB6_id").removeClass("error");
                });

                /* Common code for All Web forms - End */


                /* Code for Ask a Privacy question Form */

                parentElement.find('[data-submit-type="askQuestionFormSubmit"]').on('click', function (e) {
                    e.preventDefault();
                    validateZipCode();
                    validateEmail();
                    validatePhone();
                    var isValid = onFormSubmit($(this));
					validatePhone();
                    if (isValid) {
                        parentElement.find("#askQuestionFormSubmit").attr("disabled", true);
                        parentElement.find("#askQuestionFormSubmit").html(parentElement.find("#askQuestionFormSubmit").attr("data-proctext"));
                        var formName = parentElement.find("#ContactForm_getInTouch").attr("name");
						var formObj=parentElement.find(".generic-form");
                        contentGroup = "Privacy";
                        subContentGroup = "Ask a Privacy Policy Question";
                        contentGroupDirectory = "privacy-policy";
                        subContentGroupDirectory = "privacy-questions";
                        audience = "about";
                        webFormMigrationProcessorSubmit(formName, formObj);
                    }
                    else {
                        $('html, body').animate({
                            'scrollTop': $(".wrapper.page-title").position().top
                        });
                    }
                });

                /* Code for Customer Service for Group Products Form */

                parentElement.find("#contactForm_Customerservice_GroupProducts").find("select[name=Product_Type]").on("change", function () {
                    var productType = $(this).val();
                    parentElement.find(".your-enquiry-section :input:not(select[name=Product_Type])").val("").removeClass('error');
                    parentElement.find(".your-enquiry-section .form-user-grp").find('svg').css('fill', '#666');
                    parentElement.find(".dateOfBirth ").find(".errorSpan").removeClass("errorSpanShow");
                    parentElement.find("#groupServiceRelationshipToEmployee,#groupServiceAccountNumber").removeClass("align-with-dob");
                    parentElement.find("#groupServiceNameOfEmployer,#groupServicePolicyNumber,#groupServiceSocialSecurityNumber,#groupServiceTotalControlAccountSSN,#groupServiceRelationshipToEmployee,#groupServiceAccountNumber,#groupServiceDateOfBirth,#groupServiceTotalControlAccountDOB,#groupServiceEmployeeStatus").addClass('hide');


                    if (productType == 1) {
                        parentElement.find("#groupServiceNameOfEmployer,#groupServicePolicyNumber").removeClass('hide');
                    }
                    else if (productType == 2) {
                        parentElement.find("#groupServiceNameOfEmployer,#groupServiceSocialSecurityNumber,#groupServiceRelationshipToEmployee").removeClass('hide');
						
						removeAllOptions(document.contactForm_Customerservice_GroupProducts.RelationshiptoEmployee);
						addOption(document.contactForm_Customerservice_GroupProducts.RelationshiptoEmployee, "Relationship to Employee", "" );
						addOption(document.contactForm_Customerservice_GroupProducts.RelationshiptoEmployee,"Employee", "Employee");
						addOption(document.contactForm_Customerservice_GroupProducts.RelationshiptoEmployee,"Spouse", "Spouse");
						addOption(document.contactForm_Customerservice_GroupProducts.RelationshiptoEmployee,"Dependent", "Dependent");
						addOption(document.contactForm_Customerservice_GroupProducts.RelationshiptoEmployee,"Provider", "Provider");
						addOption(document.contactForm_Customerservice_GroupProducts.RelationshiptoEmployee,"Benefit Rep", "Benefit Rep");
						
                    }
                    else if (productType == 3) {
                        parentElement.find("#groupServiceNameOfEmployer,#groupServiceSocialSecurityNumber").removeClass('hide');
                    }
                    else if (productType == 4) {
                        parentElement.find("#groupServiceNameOfEmployer,#groupServiceDateOfBirth,#groupServiceSocialSecurityNumber,#groupServiceRelationshipToEmployee").removeClass('hide');
                        parentElement.find("#groupServiceRelationshipToEmployee").addClass("align-with-dob");
						
						removeAllOptions(document.contactForm_Customerservice_GroupProducts.RelationshiptoEmployee);
						addOption(document.contactForm_Customerservice_GroupProducts.RelationshiptoEmployee, "Relationship to Employee", "");
						addOption(document.contactForm_Customerservice_GroupProducts.RelationshiptoEmployee,"Employee", "Employee");
						addOption(document.contactForm_Customerservice_GroupProducts.RelationshiptoEmployee,"Spouse", "Spouse");
						addOption(document.contactForm_Customerservice_GroupProducts.RelationshiptoEmployee,"Parent", "Parent");
						addOption(document.contactForm_Customerservice_GroupProducts.RelationshiptoEmployee,"Retiree", "Retiree");
						addOption(document.contactForm_Customerservice_GroupProducts.RelationshiptoEmployee,"Other Eligible", "Other Eligible");
                    }
                    else if (productType == 5) {
                        parentElement.find("#groupServiceNameOfEmployer,#groupServiceSocialSecurityNumber,#groupServiceEmployeeStatus").removeClass('hide');
                    }
                    else if (productType == 6) {
                        parentElement.find("#groupServiceAccountNumber,#groupServiceTotalControlAccountDOB,#groupServiceTotalControlAccountSSN").removeClass('hide');
                        parentElement.find("#groupServiceAccountNumber").addClass("align-with-dob");
						removeAllOptions(document.contactForm_Customerservice_GroupProducts.RelationshiptoEmployee);
						addOption(document.contactForm_Customerservice_GroupProducts.RelationshiptoEmployee, "Relationship to Employee", "");
						addOption(document.contactForm_Customerservice_GroupProducts.RelationshiptoEmployee,"Employee", "Employee");
						addOption(document.contactForm_Customerservice_GroupProducts.RelationshiptoEmployee,"Spouse", "Spouse");
						addOption(document.contactForm_Customerservice_GroupProducts.RelationshiptoEmployee,"Parent", "Parent");
						addOption(document.contactForm_Customerservice_GroupProducts.RelationshiptoEmployee,"Retiree", "Retiree");
						addOption(document.contactForm_Customerservice_GroupProducts.RelationshiptoEmployee,"Other Eligible", "Other Eligible");
                    }
                    else {
                        parentElement.find("#groupServiceNameOfEmployer").removeClass('hide');
                    }


                });

                parentElement.find('[data-submit-type="groupServiceFormSubmit"]').on('click', function (e) {
                    e.preventDefault();
                    validateZipCode();
                    validateEmail();
                    var isValid = onFormSubmit($(this));
                    var dobFlag = true;

                    if (!parentElement.find('#groupServiceDateOfBirth').hasClass("hide")) {
                        var dobMonth = parentElement.find("#DOB1_id").val();
                        var dobDate = parentElement.find("#DOB2_id").val();
                        var dobYear = parentElement.find("#DOB3_id").val();
                        dobFlag = isDate(Trim(dobMonth) + "/" + Trim(dobDate) + "/" + Trim(dobYear));
                        parentElement.find("input[name=dob]").val(dobMonth + "/" + dobDate + "/" + dobYear);
                    }
                    else if (!parentElement.find('#groupServiceTotalControlAccountDOB').hasClass("hide")) {
                        var dobMonth = parentElement.find("#DOB4_id").val();
                        var dobDate = parentElement.find("#DOB5_id").val();
                        var dobYear = parentElement.find("#DOB6_id").val();
                        dobFlag = isDate(Trim(dobMonth) + "/" + Trim(dobDate) + "/" + Trim(dobYear));
                        parentElement.find("input[name=dobnew]").val(dobMonth + "/" + dobDate + "/" + dobYear);
                    }

                    if (isValid && dobFlag) {
                        // Before Submit:: Update hidden inputs
                        var param = window.location.href;
                        var prodtype = parentElement.find("select[name=Product_Type]").val();
                        if (param.indexOf('?') > 0) {
                            param = param.substr(param.indexOf('?') + 1, 3);
                            if (prodtype == "1" && param == "con") {
                                parentElement.find("#subject").val("Contact Annuity");
                                parentElement.find("#id").val("annuitysvc@metlifeservice.com");
                            }
                        } else if (prodtype == "1") {
                            parentElement.find("#subject").val("Contact Annuity");
                            parentElement.find("#id").val("cscontact@metlifeservice.com");
                        }
                        if (prodtype == "2") {
                            parentElement.find("#subject").val("Contact Auto and Home");
                            parentElement.find("#id").val("metautoinfo@metlifeservice.com");
                        }
                        if (prodtype == "3") {
                            parentElement.find("#subject").val("Contact Life Insurance");
                            parentElement.find("#id").val("cscontact@metlifeservice.com");
                        }
                        if (prodtype == "4") {
                            parentElement.find("#subject").val("Contact Total Control Account");
                            parentElement.find("#id").val("cscontact@metlifeservice.com");
                        }

                        parentElement.find("#groupServiceFormSubmit").attr("disabled", true);
                        parentElement.find("#groupServiceFormSubmit").html(parentElement.find("#groupServiceFormSubmit").attr("data-proctext"));
                        var formName = parentElement.find("#contactForm_Customerservice_GroupProducts").attr("name");
						var formObj=parentElement.find(".generic-form");
                        contentGroup = "Customer Service";
                        subContentGroup = "";
                        contentGroupDirectory = "service";
                        subContentGroupDirectory = "";
                        audience = "individual";
                        webFormMigrationProcessorSubmit(formName,formObj);
                    }
                    else {
                        $('html, body').animate({
                            'scrollTop': $(".wrapper.page-title").position().top
                        });
                    }
                });

                /* Code for Opt Out Info sharing Form */
				
				parentElement.find(".optOutSSN").on('focus', function (event) {
                    if ($(this).parents(".col-xs-12").find(".errorSpan").hasClass("errorSpanShow")) {
                        $(this).parents(".col-xs-12").find(".errorSpan").removeClass("errorSpanShow");
                    }
                    if ($(this).hasClass("error")) {
                        $(this).removeClass("error");
                    }
                });

                /*parentElement.find(".validateSSN").on("keyup blur", function () {
                    if ($(this).val() != "" && $(this).val() != null) {
						var errorMsg;
                        var regexpNumericOnly = /^[0-9]*$/;
                        var $this = $(this);
                        var val = $this.val();
                        validateOnType(val, $this, regexpNumericOnly);
                    }
                    else {
                        $(this).removeClass("error");
                    }
                });*/

                parentElement.find(".validateSSN").on("blur", function () {
                    if ($(this).val() != "" && $(this).val() != null) {
						var regexpNumericOnly = /^[0-9]*$/;
                        var $this = $(this);
                        var val = $this.val();
						var re = /^[0-9]*$/;
						validateOnType(val, $this, regexpNumericOnly);
                        if (val.length == 4 && val.match(re)) {
                            $this.removeClass("error");
                        }
                        else {
                            $this.addClass("error");
                        }
                    }
                    else {
                        $this.removeClass("error");
                    }
                });

                parentElement.find(".policy-numbers").on("keyup blur", function () {
                    if ($(this).val() != "" && $(this).val() != null) {
                        parentElement.find(".policy-numbers").removeClass("error");
                    }
                });

                parentElement.find('.preferences').click(function () {
                    if ($(this).is(':checked')) {
                        parentElement.find(".preferences").parents(".preference-section").find(".errorSpan").removeClass("errorSpanShow");
						parentElement.find(".preferences").parents(".preference-section").find(".preference-section-group").removeClass("preference-section-content");
						parentElement.find(".preferences").parents(".preference-section").find('.errorSpan').hide();
                    }				
                });

                parentElement.find('[data-submit-type="optOutInfoFormSubmit"]').on('click', function (e) {
                    e.preventDefault();
                    validateZipCode();
					if(parentElement.find(".validateSSN").val() != "" && parentElement.find(".validateSSN").val() != null){
						validateSSN();
					}
                    var isValid = onFormSubmit($(this));
					var errorMsg;
                    var dobFlag = false, policyNumberFlag = false, preferenceCheckboxFlag = false;
                    var dobMonth = parentElement.find("#DOB1_id").val();
                    var dobDate = parentElement.find("#DOB2_id").val();
                    var dobYear = parentElement.find("#DOB3_id").val();
                    dobFlag = isDate(Trim(dobMonth) + "/" + Trim(dobDate) + "/" + Trim(dobYear));
                    parentElement.find("input[name=dob]").val(dobMonth + "/" + dobDate + "/" + dobYear);

                    var policyNumberLength = parentElement.find(".policy-numbers:visible").not(':hidden');
                    $.each(policyNumberLength, function (index, item) {
                        if ($(item).val() != null && $(item).val() != "") {
                            $(item).removeClass('error');
                            policyNumberFlag = true;
                            parentElement.find(".policy-numbers").removeClass("error");
                            return false;
                        }
                        else {
                            $(item).addClass("error");
                            $(item).addClass("error1");
                            errorMsg = $(item).parents('.form-field-container').find('.form-field-errormessage').data("error"); 
                            $(item).parents('.form-field-container').find('.form-field-errormessage').html(errorMsg);
                        }
                    });

                    if (parentElement.find(".preferences").is(':checked')) {
                        preferenceCheckboxFlag = true;
                        parentElement.find(".preferences").parents(".preference-section").find(".errorSpan").removeClass("errorSpanShow");
                    }
                    else {
						parentElement.find(".preferences").parents(".preference-section").find(".preference-section-group").addClass("preference-section-content");
						parentElement.find(".preferences").parents(".preference-section").find('.errorSpan').show();
                        parentElement.find(".preferences").parents(".preference-section").find(".errorSpan").addClass("errorSpanShow");						
                    }

                    if (isValid && dobFlag && policyNumberFlag && preferenceCheckboxFlag) {
                        parentElement.find("#optOutInfoFormSubmit").attr("disabled", true);
                        parentElement.find("#optOutInfoFormSubmit").html(parentElement.find("#optOutInfoFormSubmit").attr("data-proctext"));
                        var formName = parentElement.find("#ContactForm_OptOutInfo").attr("name");
						var formObj=parentElement.find(".generic-form");
                        contentGroup = "Privacy";
                        subContentGroup = "Opting Out of Information Sharing";
                        contentGroupDirectory = "privacy-policy";
                        subContentGroupDirectory = "opting-out";
                        audience = "about";
                        webFormMigrationProcessorSubmit(formName,formObj);
                    }
                    else {
                        $('html, body').animate({
                            'scrollTop': $(".wrapper.page-title").position().top
                        });
                    }
                });

                /* Code for Contact Metlife Brokers & Business */

                parentElement.find('#I_am_an').on('change', function (e) {
                    parentElement.find(".your-role").val("").removeClass('error');
                    if ($(this).val() == "Other") {
                        parentElement.find("#yourRole").removeClass('hide');
                    }
                    else {
                        parentElement.find("#yourRole").addClass('hide');
                    }
                });

                parentElement.find('#otherCheckedVal').on('click', function (e) {
                    parentElement.find(".other-product-interest").val("").removeClass('error');
                    if ($(this).prop('checked')) {
                        parentElement.find("#otherContactPrefDiv").removeClass('hide');
                    }
                    else {
                        parentElement.find("#otherContactPrefDiv").addClass('hide');
                    }
                });

                parentElement.find('#new-contact-preference').on('click', function (e) {
                    parentElement.find("#OtherReason,#Reason_to_be_contacted").removeClass('error');
                    parentElement.find("#reasonWulLikeToContacted .form-user-grp").find('svg').css('fill', '#666');
                    if ($(this).prop('checked')) {
                        parentElement.find(".contact-preference-content,#reasonWulLikeToContacted").removeClass('hide');
                        if (parentElement.find("#Reason_to_be_contacted").val() == "Other Specify") {
                            parentElement.find("#otherReasonDiv").removeClass('hide');
                        }
                        if (parentElement.find('#Mail_me').prop('checked')) {
                            parentElement.find('#Mail_me').trigger('click');
                        }
                    }
                    else {
                        parentElement.find(".contact-preference-content,#reasonWulLikeToContacted,#otherReasonDiv").addClass('hide');

                    }
                });

                parentElement.find('#Reason_to_be_contacted').on('change', function (e) {
                    parentElement.find(".other-reason").val("").removeClass('error');
                    if ($(this).val() == "Other Specify") {
                        parentElement.find("#otherReasonDiv").removeClass('hide');
                    }
                    else {
                        parentElement.find("#otherReasonDiv").addClass('hide');
                    }
                });

                parentElement.find('#Mail_me').on('click', function (e) {
                    if ($(this).prop('checked')) {
                        parentElement.find(".contact-preference-content").addClass('hide');
                        if (parentElement.find('#new-contact-preference').prop('checked')) {
                            parentElement.find('#new-contact-preference').trigger('click');
                        }
                    }
                });

                parentElement.find(".email,.cemail").on("blur", function () {
                    var val = $(this).val();
                    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\u00C0-\u017F\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
                    if (parentElement.find(".email").val() && parentElement.find(".cemail").val() != "") {
                        if (parentElement.find(".email").val() != parentElement.find(".cemail").val() || val.match(re) == null) {
                            parentElement.find(".email,.cemail").addClass("error");
                        }
                        else {
                            parentElement.find(".email,.cemail").removeClass("error");
                        }
                    }

                });

                parentElement.find('[data-submit-type="contactMetlifeFormSubmit"]').on('click', function (e) {
                    e.preventDefault();
                    validateZipCode();
                    validateEmail();
                    validatePhone();
                    var isValid = onFormSubmit($(this));

                    if (parentElement.find(".email").val() != parentElement.find(".cemail").val()) {
                        parentElement.find(".email,.cemail").addClass("error");
                    }

                    if (isValid) {
                        var comp_size = $('#Company_Size').val();
                        if (comp_size == "500-2,999" || comp_size == "3,000-24,999" || comp_size == "25,000+") {
                            $('input[name=pageFrom]').val("ML_Bus_2_Bus_Life_Large");
                        }

                        $("#Other_ProductInterests").val($("#otherContactPref").val());

                        if ($('#new').prop('checked')) {
                            var Reason_to_be_contacted = $("#Reason_to_be_contacted").val();
                            var OtherReason = $("#OtherReason").val();

                            if (Reason_to_be_contacted != "" && Reason_to_be_contacted == "Other Specify") {
                                if (OtherReason != "") {
                                    $("#OtherReasontoContact").val("Reason you would like to be contacted:" + OtherReason);
                                }
                            } else {
                                if (!$('#otherCheckedVal').prop('checked')) {
                                    $("#Other_ProductInterests").val("");
                                }
                                $("#OtherReasontoContact").val("");
                                $("#OtherReason").val("");
                            }
                        }
                        else {
                            $("#Reason_to_be_contacted").val("");
                            $("#OtherReasontoContact").val("");
                            $("#OtherReason").val("");
                        }
                        parentElement.find("#contactMetlifeFormSubmit").attr("disabled", true);
                        parentElement.find("#contactMetlifeFormSubmit").html(parentElement.find("#contactMetlifeFormSubmit").attr("data-proctext"));
                        var formName = parentElement.find("#ContactForm_getInTouch").attr("name");
						var formObj=parentElement.find(".generic-form");
                        contentGroup = "Contact";
                        subContentGroup = "";
                        contentGroupDirectory = "contact";
                        subContentGroupDirectory = "";
                        if (parentElement.find(".contactMetlifeBrokerForm").length > 0) {
                            audience = "brokers";
                        }
                        if (parentElement.find(".contactMetlifeBusinessForm").length > 0) {
                            audience = "business";
                        }
                        webFormMigrationProcessorSubmit(formName,formObj);
                    }
                    else {
                        $('html, body').animate({
                            'scrollTop': $(".wrapper.page-title").position().top
                        });
                    }
                });

                /* Code for Customer Service for Individual Product Form */

                parentElement.find("#IndividualServiceProductType").on("change", function () {
                    var productType = $(this).val();
                    parentElement.find(".your-enquiry-section :input:not(select[name=Product_Type])").val("").removeClass('error');
                    parentElement.find(".your-enquiry-section .form-user-grp").find('svg').css('fill', '#666');
                    parentElement.find(".dateOfBirth,#individualServiceSSN,#individualServiceAccHolderSSN").find(".errorSpan").removeClass("errorSpanShow");
                    parentElement.find("#individualServicePolicyContract,#individualServiceAccountNumber").removeClass("align-with-dob");
                    parentElement.find("#individualServicePolicyContract,#individualServiceAccountNumber,#individualServiceDateOfBirth,#individualServiceAccHolderDateOfBirth,#individualServiceSSN,#individualServiceAccHolderSSN").addClass('hide');

                    if (productType == "") {
                        parentElement.find("#individualServicePolicyContract").removeClass("hide");
                        parentElement.find("#individualServicePolicyContract").removeClass("align-with-dob");
                    }
                    else if (productType == 1 || productType == 2 || productType == 3) {
						parentElement.find("#individualServicePolicyContract").addClass("align-with-dob");
                        parentElement.find("#individualServicePolicyContract,#individualServiceDateOfBirth,#individualServiceSSN").removeClass('hide');
                       
                    } 
					else if (productType == 4) {
						parentElement.find("#individualServicePolicyContract").addClass('hide');
                        parentElement.find("#individualServiceAccountNumber,#individualServiceAccHolderDateOfBirth,#individualServiceAccHolderSSN").removeClass('hide');
                        parentElement.find("#individualServiceAccountNumber").addClass("align-with-dob");
                    }
                });

                parentElement.find('[data-submit-type="individualServiceFormSubmit"]').on('click', function (e) {
                    e.preventDefault();
                    validateZipCode();
                    if (parentElement.find("#IndividualServiceProductType").val() != "" && parentElement.find("#IndividualServiceProductType").val() != null) {
                        validateSSN();
                    }
                    validateEmail();

                    if ($(".validateCountry").val() != "" && $(".validateCountry").val() != null) {
                        var regexpName = /^([A-Za-z\s0-9-\'()]*)$/;
                        var val = $(".validateCountry").val();
                        validateOnType(val, $(".validateCountry"), regexpName);
                    }
                    else {
                        $(".validateCountry").removeClass("error");
                    }

                    var isValid = onFormSubmit($(this));
                    var dobFlag = true;

                    if (!parentElement.find('#individualServiceDateOfBirth').hasClass("hide")) {
                        var dobMonth = parentElement.find("#DOB1_id").val();
                        var dobDate = parentElement.find("#DOB2_id").val();
                        var dobYear = parentElement.find("#DOB3_id").val();
                        dobFlag = isDate(Trim(dobMonth) + "/" + Trim(dobDate) + "/" + Trim(dobYear));
                        parentElement.find("input[name=dob]").val(dobMonth + "/" + dobDate + "/" + dobYear);
                    }
                    if (!parentElement.find('#individualServiceAccHolderDateOfBirth').hasClass("hide")) {
                        var dobMonthAccHolder = parentElement.find("#DOB4_id").val();
                        var dobDateAccHolder = parentElement.find("#DOB5_id").val();
                        var dobYearAccHolder = parentElement.find("#DOB6_id").val();
                        dobFlagAccHolder = isDate(Trim(dobMonthAccHolder) + "/" + Trim(dobDateAccHolder) + "/" + Trim(dobYearAccHolder));
                        parentElement.find("input[name=dob]").val(dobMonthAccHolder + "/" + dobDateAccHolder + "/" + dobYearAccHolder);
                    }

                    if (isValid && dobFlag) {
                        // Before Submit:: Update hidden inputs
                        var param = window.location.href;
                        var prodtype = parentElement.find("select[name=Product_Type]").val();
                        if (param.indexOf('?') > 0) {
                            param = param.substr(param.indexOf('?') + 1, 3);
                            if (prodtype == "1" && param == "con") {
                                parentElement.find("#subject").val("Contact Annuity");
                                parentElement.find("#id").val("annuitysvc@metlifeservice.com");
                            }
                        } else if (prodtype == "1") {
                            parentElement.find("#subject").val("Contact Annuity");
                            parentElement.find("#id").val("cscontact@metlifeservice.com");
                        }
                        if (prodtype == "2") {
                            parentElement.find("#subject").val("Contact Auto and Home");
                            parentElement.find("#id").val("metautoinfo@metlifeservice.com");
                        }
                        if (prodtype == "3") {
                            parentElement.find("#subject").val("Contact Life Insurance");
                            parentElement.find("#id").val("cscontact@metlifeservice.com");
                        }
                        if (prodtype == "4") {
                            parentElement.find("#subject").val("Contact Total Control Account");
                            parentElement.find("#id").val("cscontact@metlifeservice.com");
                        }

                        parentElement.find("#individualServiceFormSubmit").attr("disabled", true);
                        parentElement.find("#individualServiceFormSubmit").html(parentElement.find("#individualServiceFormSubmit").attr("data-proctext"));
                        var formName = parentElement.find("#contactForm_Customerservice_IndividualProducts").attr("name");
						var formObj=parentElement.find(".generic-form");
                        contentGroup = "Customer Service";
                        subContentGroup = "";
                        contentGroupDirectory = "service";
                        subContentGroupDirectory = "";
                        audience = "individual";
                        webFormMigrationProcessorSubmit(formName,formObj);
                    } else {
                        $('html, body').animate({
                            'scrollTop': $(".wrapper.page-title").position().top
                        });
                    }
                });


                /* Code for Change Address form  */

                parentElement.find("#change_Address_Product_Type").on("change", function () {
                    var productType = $(this).val();
                    parentElement.find(".show-for-product :input").val("").removeClass('error');
                    parentElement.find(".show-for-product").find(".errorSpan").removeClass("errorSpanShow");
                    if (productType != "" && productType != null) {
                        parentElement.find(".show-for-product").removeClass("hide");
                    }
                    else {
                        parentElement.find(".show-for-product").addClass("hide");
                    }

                });

                var policyNumberFields = parentElement.find('#policyNumber_Section .policy-number').length;
                var policyNumberCount;
                var maxPolicyNumberFields = 5;


                var emailFields = $('#email_Section .email').length;
                var maxEmailFields = 2;

                parentElement.find('.add-policy-number-link').on('click', function () {
                    var policyId = "Policy" + policyNumberFields;
					var errorMsg;
                    if (parentElement.find("[name=" + policyId + "]").val() != "" && parentElement.find("[name=" + policyId + "]").val() != null) {
                        policyNumberCount = policyNumberFields + 1;
                        if (policyNumberFields < maxPolicyNumberFields) {
                            parentElement.find(".policy-number-section .form-user-grp:last").after('<div class="form-user-grp new-policy-number-row form-field-container"><label>Policy/Contract Number *</label><input type="text" name="Policy' + policyNumberCount + '" value="" class="form-user-ctrl policy-number" placeholder="" data-required="true" aria-required="true"><div class="form-field-errormessage" data-format="Numbers Only" data-error="Numbers Only"></div><p class="remove-policy-number-text-box"><a class="remove-policy-number-link" href="javascript:void(0)" title="Remove policy number">- Remove policy/account</a></p></div>');
                            policyNumberFields++;
                            if (policyNumberCount == 5) {
                                parentElement.find(".add-policy-number-text-box").addClass("hide");
                            }
                            if (policyNumberCount < 3) {
                                parentElement.find(".remove-policy-number-text-box").removeClass("hide");
                            }
                            return false;
                        }
                        else {
                            //alert("Maxium of 5 can be added");
                            //parentElement.find(".add-policy-number-text-box").addClass("hide");
                        }
                    }
                    else {
						errorMsg = parentElement.find(".policy-number-section .form-field-container").find('.form-field-errormessage').data("error");
						parentElement.find(".policy-number-section .form-field-container:last").find('.form-field-errormessage').html(errorMsg).show();
                    }
					//initializeStaticFormFields();
                });

               $(document).on('focus', ".policy-number", function () {
					var errorMsg;
					errorMsg = $(this).parents(".policy-number-section ").find('.new-policy-number-row .form-field-errormessage').data("error");
					$(this).parents(".policy-number-section ").find('.new-policy-number-row .form-field-errormessage').html(errorMsg);
					$(this).parents(".policy-number-section ").find('.new-policy-number-row').find('label').removeClass('error-msg');
					$(this).parents(".policy-number-section ").find('.new-policy-number-row').find('input').removeClass('error');
                    $(this).parents(".form-user-grp").find(".number-validation").removeClass("errorSpanShow")
                    $(this).parents(".form-user-grp").find(".emptyCheck ").removeClass("errorSpanShow");
                });

                $(document).on('keyup blur', ".policy-number", function () {
                    var val = $(this).val();
                    var re = /^[0-9]*$/;
					var errorMsg;
                    if (val != "") {
                        if (val.match(re) == null) {
                            $(this).addClass("error");
                        }
                        else {
                            $(this).removeClass("error");
                        }
                    }
                    else {
                        $(this).addClass("error");
						errorMsg = $(this).parents(".policy-number-section .form-field-container").find('.form-field-errormessage').data("error");
						$(this).parents(".policy-number-section .form-field-container").find('.form-field-errormessage').html(errorMsg);
                    }
                });

                $(document).on('click', ".remove-policy-number-link", function () {
                    if (policyNumberCount > 1) {
                        $(this).parents('.form-user-grp').remove();
                        policyNumberFields--;
                        if (parentElement.find(".add-policy-number-text-box").hasClass("hide")) {
                            parentElement.find(".add-policy-number-text-box").removeClass("hide");
                        }
                        if (parentElement.find('#policyNumber_Section .policy-number').length < 2) {
                            parentElement.find(".remove-policy-number-text-box").addClass("hide");
                        }

                        var policyNumberFieldCount = parentElement.find('#policyNumber_Section .policy-number');

                        var newNameForFiled;
                        $.each(policyNumberFieldCount, function (index, item) {
                            newNameForFiled = index + 1;
                            $(item).attr("name", "Policy" + newNameForFiled);
                        });
                    }
                    return false;
                });
				
				parentElement.find('.changeOfAddressEmail').on('keyup blur', function () {
                    var val = $(this).val();
                    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\u00C0-\u017F\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
					var errorMsg;
                    if (val != "") {
                        if (val.match(re) == null) {
                            $(this).addClass("error");
							errorMsg = $(this).parents(".change-email-section .form-field-container").find('.form-field-errormessage').data("error");
							$(this).parents(".change-email-section .form-field-container").find('.form-field-errormessage').html(errorMsg);
                        }
                        else {
                            $(this).removeClass("error");
							$(this).parents(".change-email-section .form-field-container").find('.form-field-errormessage').html("");
                        }
                    }
                    else {
                        errorMsg = $(this).parents(".change-email-section .form-field-container").find('.form-field-errormessage').data("error");
						$(this).parents(".change-email-section .form-field-container").find('.form-field-errormessage').html(errorMsg);
                    }					
                });
				
				parentElement.find('.changeOfAddressEmail').on('focus', function () {                  
					$(this).removeClass("error");
					$(this).removeClass("formatError");
					$(this).parents(".change-email-section .form-field-container").find('.form-field-errormessage').html("");                    
                });
				
                parentElement.find('.add-new-email').on('click', function () {
                    if (parentElement.find("#ownerEmail1").val() != "" && parentElement.find("#ownerEmail1").val() != null) {
                        parentElement.find(".another-email-field").removeClass("hide");
                        parentElement.find(".add-another-email-link").addClass("hide");

                    }
                    else {
                        /*$(this).parents(".col-xs-12").find(".emptyCheck").addClass("errorSpanShow");
                        $(this).parents(".col-xs-12").find(".email-validation").removeClass("errorSpanShow");*/
						var errorMsg = $(this).closest(".change-email-section").find('.form-field-container .form-field-errormessage').data("error");
						$(this).closest(".change-email-section").find(' .form-field-container .form-field-errormessage').html(errorMsg).show();
                    }
                });

                parentElement.find('.remove-new-email').on('click', function () {
                    parentElement.find(".another-email-field").find(".errorSpan").removeClass("errorSpanShow");
                    parentElement.find(".another-email-field :input").val("").removeClass("error");
					parentElement.find(".another-email-field label").removeClass("error-msg");
                    parentElement.find(".another-email-field").addClass("hide");
                    parentElement.find(".add-another-email-link").removeClass("hide");
                });

                parentElement.find('[data-submit-type="changeAddressFormSubmit"]').on('click', function (e) {
                    e.preventDefault();
                    validateZipCode();
					validateNewZipCode();
                    validateEmail();
                    validatePoliyNumber();
                    parentElement.find(".change-email-section").find(".emptyCheck").removeClass("errorSpanShow");
                    var isValid = onFormSubmit($(this));

                    var dobFlag = false, effectiveDateFlag = false;

                    var dobMonth = parentElement.find("#DOB1_id").val();
                    var dobDate = parentElement.find("#DOB2_id").val();
                    var dobYear = parentElement.find("#DOB3_id").val();

                    if (parentElement.find("#change_Address_Product_Type").val() != "" && parentElement.find("#change_Address_Product_Type").val() != null) {
                        validateSSN();
                        dobFlag = isDate(Trim(dobMonth) + "/" + Trim(dobDate) + "/" + Trim(dobYear));
                    }
                    parentElement.find("input[name=dob]").val(dobMonth + "/" + dobDate + "/" + dobYear);

                    var effMonth = parentElement.find("#effectivechangeDate1_id").val();
                    var effDate = parentElement.find("#effectivechangeDate2_id").val();
                    var effYear = parentElement.find("#effectivechangeDate3_id").val();
                    effectiveDateFlag = isValidDateFuture(Trim(effMonth) + "/" + Trim(effDate) + "/" + Trim(effYear));

                    if (isValid && dobFlag && effectiveDateFlag) {
                        parentElement.find("#changeAddressFormSubmit").attr("disabled", true);
                        parentElement.find("#changeAddressFormSubmit").html(parentElement.find("#changeAddressFormSubmit").attr("data-proctext"));
                        var formName = parentElement.find("#ContactForm_ChangeofAddress").attr("name");
						var formObj=parentElement.find(".generic-form");

                        var sproduct = parentElement.find("#change_Address_Product_Type").val();
                        if (sproduct == "Annuity") {
                            parentElement.find("#subject").val("Annuity Address Change");
                            parentElement.find("#id").val("coaddress@metlifeservice.com");
                        } else if (sproduct == "Auto & Home Insurance") {
                            parentElement.find("#subject").val("Auto and Home Address Change");
                            parentElement.find("#id").val("coaddress@metlifeservice.com");
                        } else if (sproduct == "LifeInsurance") {
                            parentElement.find("#subject").val("Life Insurance Address Change");
                            parentElement.find("#id").val("coaddress@metlifeservice.com");
                        }
                        contentGroup = "Customer Service";
                        subContentGroup = "";
                        contentGroupDirectory = "service";
                        subContentGroupDirectory = "";
                        audience = "individual";
                        webFormMigrationProcessorSubmit(formName,formObj);
                    }
                    else {
                        $('html, body').animate({
                            'scrollTop': $(".wrapper.page-title").position().top
                        });
                    }
                });
				
				/* Code for Domestic violence form */
				
				parentElement.find(".domestic-violence .help-text-heading").click(function(){
					 parentElement.find(".tooltip-content").toggle();
				});
				
				parentElement.find(".domestic-violence input,.domestic-violence select").on('focus', function (event) {
                    parentElement.find(".tooltip-content").hide();
                });

                parentElement.find('.alt-contact-check').click(function () {
                    if (parentElement.find(".alt-contact-check").is(':checked')) {
                        parentElement.find(".alt-contact-check").parents(".alternative-contact-information").find(".errorCheckSpan").removeClass("errorSpanShow");
						parentElement.find(".alternative-contact-information").find(".alternative-contact-information-content").removeClass('product-order-error');
                    }
                    else {
                        parentElement.find(".alt-contact-check").parents(".alternative-contact-information").find(".errorCheckSpan").addClass("errorSpanShow");
						parentElement.find(".alternative-contact-information").find(".alternative-contact-information-content").addClass('product-order-error');
                    }
                });

                parentElement.find('#altzip,#cphone,#cemail,#bphone,#bemail').on('focus', function (event) {
					
                    if ($(this).parents(".col-xs-12").find(".errorSpan").hasClass("errorSpanShow")) {
                        $(this).parents(".col-xs-12").find(".errorSpan").removeClass("errorSpanShow");
                    }

                });
				
				parentElement.find('#altzip,#childName,#cemail,#altcity,#altStaddr,#relChild,#parentName,#legalName,#relIndividual,#bemail').on("keyup blur", function (event) {				
                  		$(this).parents(".col-xs-12").find("label").removeClass("error-msg");				
                });

                parentElement.find('.productive-order-check').click(function () {
                    if (parentElement.find(".productive-order-check").is(':checked')) {
                        parentElement.find(".productive-order-check").parents(".productive-order-section").find(".errorCheckSpan").removeClass("errorSpanShow");
						parentElement.find(".productive-order-check").parents(".product-order-information").find(".product-order-content").removeClass('product-order-error');
                    }
                    else {
                        parentElement.find(".productive-order-check").parents(".productive-order-section").find(".errorCheckSpan").addClass("errorSpanShow");
						parentElement.find(".productive-order-check").parents(".product-order-information").find(".product-order-content").addClass('product-order-error');
                    }
                });

                parentElement.find('.product-info-check').click(function () {
                    if (parentElement.find(".product-info-check").is(':checked')) {
                        productiveOrderCheckFlag = true;
                        parentElement.find(".product-info-check").parents(".product-information-content").find(".errorCheckSpan").removeClass("errorSpanShow");
						parentElement.find(".product-info-check").parents(".product-information-content").find(".product-group-information").removeClass('product-information-error');
						parentElement.find(".product-group-information").find('.ml-form-field-checkboxes-group label').removeClass("error-bg");
                    }
                    else {
                        parentElement.find(".product-info-check").parents(".product-information-content").find(".errorCheckSpan").addClass("errorSpanShow");
						parentElement.find(".product-info-check").parents(".product-information-content").find(".product-group-information").addClass('product-information-error');
						parentElement.find(".product-group-information").find('.ml-form-field-checkboxes-group label').addClass("error-bg");
                    }
					if ($(this).is(':checked')){
						$(this).parents('.ml-form-field-checkboxes').siblings().removeClass('hide');
					}else{
						$(this).parents('.ml-form-field-checkboxes').siblings().addClass('hide');
					}
                });

                parentElement.find('#altLocations2').click(function () {
                    if (parentElement.find("#altLocations1").is(':checked')) {
                        parentElement.find("#altLocations1").trigger('click');
                    }
                    if ($(this).is(':checked')) {
                        parentElement.find("#altStaddr,#altcity,#altstate").attr("data-required", "true").attr("aria-required", "true");
                        parentElement.find("#altzip").attr("data-required", "true").attr("aria-required", "true").attr("data-valid-type", "zip");
                    }
                    else {
                        parentElement.find(".alternative-contact-information .form-user-grp").find('svg').css('fill', '#666');
                        parentElement.find(".alternative-contact-information").find(".errorSpan").removeClass("errorSpanShow");
                        parentElement.find(".alternative-contact-information :input").val("").removeClass("error");
						parentElement.find('.alternative-contact-information').find('.col-xs-12 label').removeClass('error-msg');
                        parentElement.find("#altStaddr,#altcity,#altstate").removeAttr("data-required").removeAttr("aria-required");
                        parentElement.find("#altzip").removeAttr("data-required").removeAttr("aria-required").removeAttr("data-valid-type");
                    }
                });

                parentElement.find('#altLocations1').click(function () {
                    if (parentElement.find("#altLocations2").is(':checked')) {
                        parentElement.find("#altLocations2").trigger('click');
                    }
                });

                parentElement.find('#prtOrder1').click(function () {
                    if (parentElement.find("#prtOrder2").is(':checked')) {
                        parentElement.find("#prtOrder2").trigger('click');
                    }
                });

                parentElement.find('#prtOrder2').click(function () {
                    if (parentElement.find("#prtOrder1").is(':checked')) {
                        parentElement.find("#prtOrder1").trigger('click');
                    }
                });

                parentElement.find('#ParentOrGuardian').click(function () {
                    if ($(this).is(':checked')) {
                        parentElement.find("#childName,#parentName,#relChild").attr("data-required", "true").attr("aria-required", "true");
                        parentElement.find("#cphone").attr("data-required", "true").attr("aria-required", "true").attr("data-valid-type", "phone").addClass("validatePhone");
                        parentElement.find("#cemail").attr("data-required", "true").attr("aria-required", "true").attr("data-valid-type", "email").addClass('validateEmail');
                    }
                    else {
                        parentElement.find(".alternative-contact-information .form-user-grp").find('svg').css('fill', '#666');
                        parentElement.find(".parent-or-gaurdian").find(".errorSpan").removeClass("errorSpanShow");
                        parentElement.find(".parent-or-gaurdian :input").val("").removeClass("error");
                        parentElement.find("#childName,#parentName,#relChild").removeAttr("data-required").removeAttr("aria-required");
                        parentElement.find("#cphone").removeAttr("data-required").removeAttr("aria-required").removeAttr("data-valid-type").removeClass("validatePhone");
                        parentElement.find('.parent-or-gaurdian').find('.col-xs-12 label').removeClass('error-msg');
                        parentElement.find("#cemail").removeAttr("data-required").removeAttr("aria-required").removeAttr("data-valid-type").removeClass('validateEmail');
                    }
                });
							

                parentElement.find('#legalAttorney').click(function () {
                    if ($(this).is(':checked')) {
                        parentElement.find("#legalName,#relIndividual").attr("data-required", "true").attr("aria-required", "true");
                        parentElement.find("#bphone").attr("data-required", "true").attr("aria-required", "true").attr("data-valid-type", "phone").addClass("validatePhone");
                        parentElement.find("#bemail").attr("data-required", "true").attr("aria-required", "true").attr("data-valid-type", "email").addClass('validateEmail');
                    }
                    else {
                        parentElement.find(".alternative-contact-information .form-user-grp").find('svg').css('fill', '#666');
                        parentElement.find(".legal-representative").find(".errorSpan").removeClass("errorSpanShow");
                        parentElement.find(".legal-representative :input").val("").removeClass("error");
						parentElement.find('.legal-representative').find('label').removeClass('error-msg');
                        parentElement.find("#legalName,#relIndividual").removeAttr("data-required").removeAttr("aria-required");
                        parentElement.find("#bphone").removeAttr("data-required").removeAttr("aria-required").removeAttr("data-valid-type").removeClass("validatePhone");
                        parentElement.find("#bemail").removeAttr("data-required").removeAttr("aria-required").removeAttr("data-valid-type").removeClass('validateEmail');
                    }
                });
				
				parentElement.find("#ContactForm_DomesticViolence").find("select[name=submitted_user]").on("change", function () {
                    var submittedBy = $(this).val();
					if(submittedBy == "MO"){
						parentElement.find(".submitByContent").removeClass("hide");
					}
					else{
						 parentElement.find(".submitByContent").addClass("hide");
						 parentElement.find(".submitByContent :input").val("").removeClass('error');
					}
					
				});
				
                parentElement.find('#domesticViolenceFormSubmit').click(function (e) {
                    e.preventDefault();
                    validateZipCode();
                    if ($("#altLocations2").is(':checked')) {
                        if (parentElement.find("#altzip").val() == "" || parentElement.find("#altzip").val().length < 5 || isNaN(parentElement.find("#altzip").val())) {
                            parentElement.find("#altzip").addClass("error").parents(".col-xs-12").find(".errorSpan").addClass("errorSpanShow");
                        }
                        else {
                            parentElement.find("#altzip").removeClass("error").parents(".col-xs-12").find(".errorSpan").removeClass("errorSpanShow");
                        }
                    }

                    if ($("#ParentOrGuardian").is(':checked')) {
                        validateEmail();
                        validatePhone();
                    }

                    if ($("#legalAttorney").is(':checked')) {
                        var $this = parentElement.find("#bphone");
                        var val = parentElement.find("#bphone").val();
                        var re = /^([0-9]{3}[-][0-9]{3}[-][0-9]{4})$/;
                        if (val.match(re)) {
                            $this.parents(".col-xs-12").find(".errorSpan").removeClass("errorSpanShow");
                        }
                        else {
                            $this.parents(".col-xs-12").find(".errorSpan").addClass("errorSpanShow");
                        }

                        var emailObj = parentElement.find("#bemail");
                        var emailVal = parentElement.find("#bemail").val();
                        var emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\u00C0-\u017F\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
                        if (emailVal.match(emailRe)) {
                            emailObj.parents(".col-xs-12").find(".errorSpan").removeClass("errorSpanShow");
                        }
                        else {
                            emailObj.parents(".col-xs-12").find(".errorSpan").addClass("errorSpanShow");
                        }
                    }

                    parentElement.find(".change-email-section").find(".emptyCheck").removeClass("errorSpanShow");
                    var isValid = onFormSubmit($(this));

                    var dobFlag = false, altContactcheckFlag = false, productiveOrderCheckFlag = false, dobFlagPrimaryInsured=false;

                    var dobMonth = parentElement.find("#DOB1_id").val();
                    var dobDate = parentElement.find("#DOB2_id").val();
                    var dobYear = parentElement.find("#DOB3_id").val();
                    dobFlag = isDate(Trim(dobMonth) + "/" + Trim(dobDate) + "/" + Trim(dobYear));
                    parentElement.find("input[name=dob]").val(dobMonth + "/" + dobDate + "/" + dobYear);

					if(parentElement.find("#priName").val() != "")
					{							
						var dobMonthPrimaryInsured = parentElement.find("#DOB4").val();
						var dobDatePrimaryInsured = parentElement.find("#DOB5").val();
						var dobYearPrimaryInsured = parentElement.find("#DOB6").val();
						dobFlagPrimaryInsured = isDatePrmiaryInsured(Trim(dobMonthPrimaryInsured) + "/" + Trim(dobDatePrimaryInsured) + "/" + Trim(dobYearPrimaryInsured));
						parentElement.find("input[name=priDOB]").val(dobMonthPrimaryInsured + "/" + dobDatePrimaryInsured + "/" + dobYearPrimaryInsured);
					}
					else
					{
						parentElement.find(".primaryInsuredDateOfBirth").find(".errorSpan").removeClass("errorSpanShow");
						parentElement.find("#DOB4,#DOB5,#DOB6").parents('.form-field-groups').removeClass("form-field-custom-groups"); 
						dobFlagPrimaryInsured=true;
					}


                    var locationsVal;
                    if (parentElement.find("#altLocations2").is(':checked')) {
                        locationsVal = "Yes";
                    }
                    else {
                        locationsVal = "No";
                    }
                    parentElement.find("#altLocations").val(locationsVal);

                    if (parentElement.find("#legalAttorney").is(':checked')) {
                        legalAttorneyValue = "No";
                    }
                    else {
                        legalAttorneyValue = "Yes";
                    }
                    parentElement.find("#legalAttorneyValue").val(legalAttorneyValue);

                    if (parentElement.find(".alt-contact-check").is(':checked')) {
                        altContactcheckFlag = true;
                        parentElement.find(".alt-contact-check").parents(".alternative-contact-information").find(".errorCheckSpan").removeClass("errorSpanShow");
						parentElement.find(".alternative-contact-information").find(".alternative-contact-information-content").removeClass('product-order-error');
                    }
                    else {
                        parentElement.find(".alt-contact-check").parents(".alternative-contact-information").find(".errorCheckSpan").addClass("errorSpanShow");
						parentElement.find(".alternative-contact-information").find(".alternative-contact-information-content").addClass('product-order-error');
                    }

                    if (parentElement.find(".productive-order-check").is(':checked')) {
                        productiveOrderCheckFlag = true;
                        parentElement.find(".productive-order-check").parents(".productive-order-section").find(".errorCheckSpan").removeClass("errorSpanShow");
						parentElement.find(".productive-order-check").parents(".product-order-information").find(".product-order-content").removeClass('product-order-error');
                    }
                    else {
                        parentElement.find(".productive-order-check").parents(".productive-order-section").find(".errorCheckSpan").addClass("errorSpanShow");
						parentElement.find(".productive-order-check").parents(".product-order-information").find(".product-order-content").addClass('product-order-error');
                    }

                    if (parentElement.find(".product-info-check").is(':checked')) {
                        productiveOrderCheckFlag = true;
                        parentElement.find(".product-info-check").parents(".product-information-content").find(".errorCheckSpan").removeClass("errorSpanShow");
						parentElement.find(".product-info-check").parents(".product-information-content").find(".product-group-information").removeClass('product-information-error');
						parentElement.find(".product-group-information").find('.ml-form-field-checkboxes-group label').removeClass("error-bg");
                    }
                    else {
                        parentElement.find(".product-info-check").parents(".product-information-content").find(".errorCheckSpan").addClass("errorSpanShow");
						parentElement.find(".product-info-check").parents(".product-information-content").find(".product-group-information").addClass('product-information-error');
						parentElement.find(".product-group-information").find('.ml-form-field-checkboxes-group label').addClass("error-bg");
                    }

                    if (isValid && dobFlag && altContactcheckFlag && productiveOrderCheckFlag && dobFlagPrimaryInsured) {
						
                        parentElement.find("#domesticViolenceFormSubmit").attr("disabled", true);
                        parentElement.find("#domesticViolenceFormSubmit").html(parentElement.find("#domesticViolenceFormSubmit").attr("data-proctext"));
                        var formName = parentElement.find("#ContactForm_DomesticViolence").attr("name");
						var formObj=parentElement.find(".generic-form");
                        contentGroup = "Domestic Abuse";
                        subContentGroup = "";
                        contentGroupDirectory = "domestic-abuse";
                        subContentGroupDirectory = "";
                        audience = "about";
                        webFormMigrationProcessorSubmit(formName,formObj);
                    }
                    else {
                        $('html, body').animate({
                            'scrollTop': $(".page-title .wrapper").position().top
                        });
                    }
                });
				
				parentElement.find("#priName").on("keyup", function () {
                    if($(this).val() == "")
					{
						parentElement.find("#DOB4,#DOB5,#DOB6").removeClass("error");
						parentElement.find(".primaryInsuredDateOfBirth").find(".errorSpan").removeClass("errorSpanShow");
						parentElement.find("#DOB4,#DOB5,#DOB6").parents('.form-field-groups').removeClass("form-field-custom-groups"); 
					}
                });

                /* Code for Auto claim form */
                parentElement.find(".dobMonth, .dobYear").on("change", function () {
                    var parentId = $(this).parents('.dateOfBirth').attr('id');
                    populateDaysDropDown($("#" + parentId));
                });


                parentElement.find('#fraudWarningLink').click(function (e) {
                    $(".reports_and_prospectus_overlay").show();
                });

                parentElement.find('#injuryYesLable').click(function (e) {
                    $(".accident_injuries_overlay").show();
                });

                $(".accident_injuries_overlay .view-close,.accident_injuries_overlay .js-close-error-overlay").on("click", function (evt) {
                    evt.preventDefault();
                    $(this).closest(".rates-overlay").hide();
                    $("body").removeClass("modal-open");
                    $('html, body').animate({
                        'scrollTop': $(".wrapper.page-title").position().top
                    });
                });

                parentElement.find('input[name=injury]').click(function (e) {
                    if ($('input[name=injury]:checked').length <= 0) {
                        parentElement.find(".injury-radio").parents(".injury-radio-options").find(".errorCheckSpan").addClass("errorSpanShow");
						parentElement.find(".injury-radio").parents(".injury-radio-options").find(".col-xs-12").addClass("errorSection");
                    }
                    else {
                        parentElement.find(".injury-radio").parents(".injury-radio-options").find(".errorCheckSpan").removeClass("errorSpanShow");
                        parentElement.find(".injury-radio").parents(".injury-radio-options").find(".col-xs-12").removeClass("errorSection");
                    }
                });

                parentElement.find('.damaged-check').click(function (e) {
                    if (parentElement.find('.damaged-check:checked').length > 0) {
                        parentElement.find(".damaged-check").parents(".damaged-option-list").find(".errorCheckSpan").removeClass("errorSpanShow");
						parentElement.find(".damaged-check").parents(".damaged-group").removeClass('product-order-error');
						parentElement.find(".damaged-check").parents(".damaged-group").find('.car-damaged-parts label').removeClass('error-bg');
                    }
                    else {
                        parentElement.find(".damaged-check").parents(".damaged-option-list").find(".errorCheckSpan").addClass("errorSpanShow");
						parentElement.find(".damaged-check").parents(".damaged-group").addClass('product-order-error');
						parentElement.find(".damaged-check").parents(".damaged-group").find('.car-damaged-parts label').addClass('error-bg');
                    }
                });


                parentElement.find('#AutoClaimFormSubmit').click(function (e) {
                    e.preventDefault();
                    validateZipCode();
                    var isValid = onFormSubmit($(this));

                    var damagedCheckFlag = false, injuryCheckFlag = false;
                    if ($('input[name=injury]:checked').length <= 0) {
                        parentElement.find(".injury-radio").parents(".injury-radio-options").find(".errorCheckSpan").addClass("errorSpanShow");
                        parentElement.find(".injury-radio").parents(".injury-radio-options").find(".col-xs-12").addClass("errorSection");
                    }
                    else {
                        injuryCheckFlag = true;
                        parentElement.find(".injury-radio").parents(".injury-radio-options").find(".errorCheckSpan").removeClass("errorSpanShow");
                        parentElement.find(".injury-radio").parents(".injury-radio-options").find(".col-xs-12").removeClass("errorSection");
                    }


                    if (parentElement.find(".damaged-check").is(':checked')) {
                        damagedCheckFlag = true;
                        parentElement.find(".damaged-check").parents(".damaged-option-list").find(".errorCheckSpan").removeClass("errorSpanShow");
                        parentElement.find(".damaged-check").parents(".damaged-group").removeClass('product-order-error');
						parentElement.find(".damaged-check").parents(".damaged-group").find('.car-damaged-parts label').removeClass('error-bg');
                    }
                    else {
                        parentElement.find(".damaged-check").parents(".damaged-option-list").find(".errorCheckSpan").addClass("errorSpanShow");
						parentElement.find(".damaged-check").parents(".damaged-group").addClass('product-order-error');
						parentElement.find(".damaged-check").parents(".damaged-group").find('.car-damaged-parts label').addClass('error-bg');
                    }

                    if (isValid && damagedCheckFlag && injuryCheckFlag) {
                        parentElement.find(".errorAllFieldsSpan").removeClass("errorSpanShow");
                        parentElement.find("#AutoClaimFormSubmit").attr("disabled", true);
                        parentElement.find("#AutoClaimFormSubmit").html(parentElement.find("#AutoClaimFormSubmit").attr("data-proctext"));
                        var formName = parentElement.find("#ContactForm_autoClaim").attr("name");
						var formObj=parentElement.find(".generic-form");
                        contentGroup = "Insurance";
                        subContentGroup = "Auto Insurance";
                        contentGroupDirectory = "insurance";
                        subContentGroupDirectory = "auto-insurance";
                        audience = "individual";
                        webFormMigrationProcessorSubmit(formName,formObj);
                    }
                    else {
                        parentElement.find(".errorAllFieldsSpan").addClass("errorSpanShow");
                        $('html, body').animate({
                            'scrollTop': $(".wrapper.page-title").position().top
                        });
                    }
                });
				
				/* Code for Tri care form */

                parentElement.find('[data-submit-type="triCareFormSubmit"]').on('click', function (e) {
                    e.preventDefault();
                    validateEmail();
                    var isValid = onFormSubmit($(this));
                    if (isValid) {
                        parentElement.find("#triCareFormSubmit").attr("disabled", true);
                        parentElement.find("#triCareFormSubmit").html(parentElement.find("#triCareFormSubmit").attr("data-proctext"));
                        var formName = parentElement.find("#ContactForm_triCare").attr("name");
						var formObj=parentElement.find(".generic-form");
                        contentGroup = "Email";
                        subContentGroup = "";
                        contentGroupDirectory = "email";
                        subContentGroupDirectory = "";
                        audience = "tricare";
                        webFormMigrationProcessorSubmit(formName,formObj);
                    }
                    else {
                        $('html, body').animate({
                            'scrollTop': $(".wrapper.page-title").position().top
                        });
                    }
                });

                /* Code for Email unsubscribe form */

                parentElement.find('[data-submit-type="emailUnsubscribeFormSubmit"]').on('click', function (e) {
                    e.preventDefault();
                    validateEmail();
                    var isValid = onFormSubmit($(this));
                    if (isValid) {
                        parentElement.find("#emailUnsubscribeFormSubmit").attr("disabled", true);
                        parentElement.find("#emailUnsubscribeFormSubmit").html(parentElement.find("#emailUnsubscribeFormSubmit").attr("data-proctext"));
                        var formName = parentElement.find("#ContactForm_EmailUnsubscription").attr("name");
						var formObj=parentElement.find(".generic-form");
                        $.ajax({
                            type: "POST",
                            url: "/aps/us/proxy/webform/MCDNSSService/emailPost.do",
                            data: $("#" + formName).serialize(),
                            success: function (response, status, xhr) {
                                if (xhr.status == 200) {
                                    parentElement.find(".generic-form,.logo-trust").addClass("hide");
                                    parentElement.find(".contactSideThankyou").css("display", "block");
                                   $('html, body').animate({
										'scrollTop': parentElement.find(".web-form-container").position().top
									});
                                    var formValues = objectifyForm(formObj.serializeArray());
									AnalyticsDTM.formComplete(formName,formValues);
                                }
                                else {
                                    $(".error_message_overlay").show();
                                    $("body").addClass("modal-open");
                                    parentElement.find(".form-submit").attr('disabled', false).html("Unsubscribe");
                                    AnalyticsDTM.formError(formName);
                                }
                            },
                            error: function (errorMessage) {
                                $(".error_message_overlay").show();
                                $("body").addClass("modal-open");
                                parentElement.find(".form-submit").attr('disabled', false).html("Unsubscribe");
                                AnalyticsDTM.formError(formName);
                            }
                        });
                    }
                });

            }
        };
    })();
    webFormsMigrationModule.init();
}

$(document).on('focus' , ".form-field-container input",function(){
	$(this).parent().find("label").addClass("focus-state");
	$(this).parent().find("label").removeClass("error-msg");			 
	$(this).parents('.form-field-groups').removeClass('form-field-custom-groups');
}); 
$(document).on('blur' , ".form-field-container input",function(){
	if($(this).val()==''){
		$(this).parent().find("label").removeClass("focus-state");
		if($(this).attr('data-required') == 'true'){
			$(this).parents(".form-field-container").find("label").addClass("validation-failure");
			$(this).parents(".form-field-container").find("label").addClass("error-msg");
		}
	}else {
			$(this).parents(".form-field-container").find("label").removeClass("validation-failure");
			$(this).parents(".form-field-container").find("label").removeClass("error-msg");
	}
}); 
 $('[data-valid-type=phone]').on('blur', function (evt) {
	evt.preventDefault();
	var $this = $(this);	
	var attrDVS = $this.attr('data-required');
	if (typeof attrDVS !== typeof undefined && attrDVS !== false) {

	} else {
	   $this.parent().find('label').removeClass('error-msg');
	}
});
$(document).on('click',".form-field-container label", function(){
	if($(this).parent().find("select").length != 0){
		$(this).parent().find("select").focus();
	} else {
		if($(this).parent().find("input").length != 0){
			$(this).parent().find("input").focus();
		}
		else {
			if($(this).parent().find("textarea").length != 0){
			$(this).parent().find("textarea").focus();
		}
		}
	}
}); 
$(".form-field-container select").on("blur change", function() {
	if ($(this).val() == "") {
		$(this).parent().find("label").removeClass("focus-state");
		if ($(this).attr("data-required") == "true") {
			$(this).parents(".form-field-container").find("label").addClass("validation-failure")
		}
	}
	$(this).removeClass("select-focus")
});

// web forms


// master js

$(document).ready(function() {

    if($('.navstripWrap').length) {
        headerSticky();
    }

    adderrortoinputClass();
    popupSlide();
    showresumeForm();
    popupopen();
    plantypesTab();
    plantypestabActive();
    showmoreshowLess();
    generatequoteSlider();

    if($('.progressbarSec').length) {
        dynamiccounter();
    }

    availableplanmobileSlider();
    availableplandesktopSlider();

    nomineedetailsDatepicker();
    appointeedetailsDatepicker();
    homepageDob();
    showpassword();

    aadharmaskNumber();

    mobileSummary();

    otherproductdesktopSlider();
    otherproductmobileSlider();

    radioList();

    addhiddenClass();

    resendOtp();

    showapoineedetailsDiv();



});

$(window).on('load', function() {


    //customeplanScrollbar();

});

$(window).resize(function() {
    //generatequotemobileSlider();
    //generatequotedesktopSlider();
    
});




function popupopen() {

    //JS For Welcome Back Popup Start Here

    
    $(document).on('click', '.seriousillbtn', function() {
        setTimeout(function() {
            $('#seriousillnesspopup').addClass('is-visible');

        }, 200);
    });

    $(document).on('click', '.suitableclose', function() {
        $('#seriousillnesspopup').removeClass('is-visible');
    });

    $(document).on('click', '.suitablegoalblock', function() {
        $('.suitablegoalblock').removeClass('active')
        $(this).addClass('active');
    });

    //JS For Welcome Back Popup End Here

    //JS For OTP Popup Start Here

    $(document).on('click', '.otppopupBtn', function() {
        setTimeout(function() {
            $('#otpPopup').addClass('is-visible');
            otpCounter();
        }, 200);
    });

    $(document).on('click', '.suitableclose', function() {
        // clearInterval(interval);
        // $('.countDown').text('21');
        
        $('#otpPopup').removeClass('is-visible');
    });

    $(document).on('click', '.suitablegoalblock', function() {
        $('.suitablegoalblock').removeClass('active')
        $(this).addClass('active');
    });

    //JS For OTP Popup End Here


    //JS For Availbale Plans Popup Start Here

    
    $(document).on('click', '.availablepopupBtn', function() {
        setTimeout(function() {
            $('#availableplanPopup').addClass('is-visible');

        }, 200);
    });

    $(document).on('click', '.suitableclose', function() {
        $('#availableplanPopup').removeClass('is-visible');
    });

    

    //JS For Availbale Plans Popup End Here


    //JS For Update Details Popup Start Here

    
    $(document).on('click', '.updatedetailsBtn', function() {
        setTimeout(function() {
            $('#updatedetailsPopup').addClass('is-visible');

        }, 200);
    });

    $(document).on('click', '.suitableclose', function() {
        $('#updatedetailsPopup').removeClass('is-visible');
    });

    

    //JS For Update Details Popup End Here


    //JS For Age Limit Popup Start Here

    
    $(document).on('click', '.agelimitBtn', function() {
        setTimeout(function() {
            $('#agelimitPopup').addClass('is-visible');

        }, 200);
    });

    $(document).on('click', '.suitableclose', function() {
        $('#agelimitPopup').removeClass('is-visible');
    });

    

    //JS For Age Limit Popup End Here


    //JS For Payment Successful Popup Start Here

    
    $(document).on('click', '.paymentsuccessfulBtn', function() {
        setTimeout(function() {
            $('#paymentSuccessful').addClass('is-visible');

        }, 200);
    });

    $(document).on('click', '.suitableclose', function() {
        $('#paymentSuccessful').removeClass('is-visible');
    });

    

    //JS For Payment Successful Popup End Here


    //JS For Payment Fail Popup Start Here

    
    $(document).on('click', '.paymentfailBtn', function() {
        setTimeout(function() {
            $('#paymentFail').addClass('is-visible');

        }, 200);
    });

    $(document).on('click', '.suitableclose', function() {
        $('#paymentFail').removeClass('is-visible');
    });

    

    //JS For Payment Fail Popup End Here

    


}


// JS For OPT Counter Start Here

function otpCounter() {


    var counter = 21;
    var interval = setInterval(function() {
        counter--;
        if (counter <= 0) {
            clearInterval(interval);
            $('.didntReceive').removeClass('active');
            $('.resend').addClass('active');
            $('.resend').addClass('active');
            $('.otptimeSec p').hide();
            $('.otperrorTxt').show();
            
            return;
        } 

        else if (counter <= 9) {
            
            $('.zeroDigit').show();
            $('.countDown').text(counter);
            
        }

        else {

            $('.countDown').text(counter);

            
        }



        $(document).on('click', '.otppopupSec .suitableclose', function() {
            $('.zeroDigit').hide();
            clearInterval(interval)
            $('.otptimeSec p .countDown').html('21');
        });


    }, 1000);
}


function popupSlide() {
    $(document).on('click', '.js_nxtSlide', function() {

        $(this).parent('.popupContent').hide().next('.nxtslideContent').show();

    });
}


function showresumeForm() {

    $(document).on('click', '.js_showResumeform', function() {

        $('.getquoteWrap').hide();
        $('.resumeappWrap').show();
        $(this).parents('.resumenowSec').hide();
        $('.arrowSec').addClass('showIcon');

    });

    $(document).on('click', '.js_showquoteForm', function() {

        $('.getquoteWrap').show();
        $('.resumeappWrap').hide();
        $('.resumenowSec').show();
        $('.arrowSec').removeClass('showIcon');

    });

}


function headerSticky() {

    var num = $('.navstripWrap').offset().top - 67;

    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > num) {
            $('.navstripWrap').addClass('stickyHeader');
        } else {
            $('.navstripWrap').removeClass('stickyHeader');
        }
    });
    
}







function plantypesTab() {

    $(document).on('click', '.plantabList li a', function(e) {

        e.preventDefault();
        var tbvr = $(this).parent('li').index();

        $('.plantabContent .plantypeDetails').hide();
        $('.plantabContent .plantypeDetails').eq(tbvr).show();

    });
}

function plantypestabActive() {

    $(document).on('click', '.plantabList li', function(e) {
        e.preventDefault();
        $('.plantabList li').removeClass('activeplanTab');
        $(this).addClass('activeplanTab');

    });
}


function showmoreshowLess() {
    // Configure/customize these variables.
    var showChar = 300;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Read More";
    var lesstext = "Read Less";
    $('.js-readmore').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span><a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
}


function generatequoteSlider(){
    
  if ($(window).width() > 767) {  

        $('.plancarouselSec .suitlist').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        items: 4,
        dots:true,

        responsive: {
                  0: {
                    items: 1,
                    
                    
                    
                    
                  },
                  480: {
                    items: 1,
                    
                    
                  },

                  768: {
                    items: 2
                    
                  },
                  

                  992: {
                    items: 3
                    
                  },
                  1199: {

                    items: 4
                  }
                }

    });   
    }
else{
        $('.suitlist').owlCarousel('destroy');
        
    }
}



function dynamiccounter() {

    $(".progress-bar").loading();
}

function adderrortoinputClass() {

    $(document).on('blur', ".form-field-container input", function() {
        if ($(this).val() == '') {

            if ($(this).attr('data-required') == 'true') {
                $(this).addClass("error");
            }
        } else {
            $(this).removeClass("error-msg");
        }
    });
}


function availableplandesktopSlider(){

    var TotalLength = $('.availableplansWrap .suitlist .thumbmainlist').length;
  if ($(window).width() > 992) {  
    if(TotalLength > 2){
        $('.availableplansWrap .suitlistsection').addClass('suitcarouselList');
        $('.availableplansWrap .suitlist').addClass('suitdesktoplist');
        $('.availableplansWrap .suitdesktoplist').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        items: 2,
        dots:true,


        
    });
    }

    else{
        $('.availableplansWrap .suitdesktoplist').owlCarousel('destroy');
        $('.availableplansWrap .suitlist').removeClass('suitdesktoplist');

    }
}
}

function availableplanmobileSlider(){

if ($(window).width() < 992) {
    $('.availableplansWrap .suitlistsection').addClass('suitcarouselList');
     $('.availableplansWrap .suitdesktoplist').owlCarousel('destroy');
     $('.availableplansWrap .suitlist').removeClass('suitdesktoplist');
    $('.availableplansWrap .suitlist').addClass('suitmobilelist');
      $('.availableplansWrap .suitmobilelist').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        items: 1,
        dots:true,
    })
}
else {
   $('.availableplansWrap .suitmobilelist').owlCarousel('destroy');
   $('.availableplansWrap .suitlist').removeClass('suitmobilelist');
}
}



function nomineedetailsDatepicker() {

    $('#dob').datepicker({
        changeYear: true,
        changeMonth: true,
        yearRange: '1956:' + new Date().getFullYear(),
        defaultDate: "05/05/2003",
        format: 'yyyy/mm/dd',
        autoclose: true,
        // yearRange:'1960-1990',
        onSelect: function() {
            $(this).parent().find('label').removeClass('error-msg');
            $(this).parent().find('label').addClass('focus-state');
            $(this).parent().find('input').removeClass('error');
            $(this).next().val($(this).val());
            $(this).next().datepicker("option", "dateFormat", "yy-mm-dd");
            $(this).parent().find('.hiddenDob').val($(this).val());
            $(this).parent().find('.hiddenDob').datepicker("option", "dateFormat", "d M y");

            var dob1 = $('#dob').val();
            var currentYear1 = new Date().getFullYear();
            var domain1 = dob1.split('/');
            var dobYear1 = domain1[domain1.length - 1];
            var currentAge1 = currentYear1 - dobYear1;
            $(this).parents('.static-form-container').find('.years').html(currentAge1 + 'Yrs');
            $(this).parents('.static-form-container').find('.years').show();

            if($(this).hasClass('familyDob')){
                if(currentAge1 <= 18){
                    $('#appointeedetails').show();
                }else{
                    $('#appointeedetails').hide();
                }
            }
        },
        beforeShow: function(input, inst) {
        inst.dpDiv.css({
            marginTop: $('body').scrollTop() + 'px'
        });
    }




    }).on('changeDate', function(ev) {
        //alert('ddd');
    });

    
}

function appointeedetailsDatepicker() {

    $('#dob2').datepicker({
        changeYear: true,
        changeMonth: true,
        yearRange: '1956:2003',
        defaultDate: "05/05/2003",
        format: 'yyyy/mm/dd',
        autoclose: true,
        // yearRange:'1960-1990',
        onSelect: function() {
            $(this).parent().find('label').removeClass('error-msg');
            $(this).parent().find('label').addClass('focus-state');
            $(this).parent().find('input').removeClass('error');
            $(this).next().val($(this).val());
            $(this).next().datepicker("option", "dateFormat", "yy-mm-dd");
            $(this).parent().find('.hiddenDob').val($(this).val());
            $(this).parent().find('.hiddenDob').datepicker("option", "dateFormat", "d M y");

            var dob1 = $('#dob2').val();
            var currentYear1 = new Date().getFullYear();
            var domain1 = dob1.split('/');
            var dobYear1 = domain1[domain1.length - 1];
            var currentAge1 = currentYear1 - dobYear1;
            $(this).parents('.static-form-container').find('.years').html(currentAge1 + 'Yrs');
            $(this).parents('.static-form-container').find('.years').show();

            
        },
        beforeShow: function(input, inst) {
        inst.dpDiv.css({
            marginTop: $('body').scrollTop() + 'px'
        });
    }




    }).on('changeDate', function(ev) {
        //alert('ddd');
    });

    
}




function homepageDob() {

    $('#homepageDob').datepicker({
        changeYear: true,
        changeMonth: true,
        yearRange: '1956:2003',
        defaultDate: "05/05/2003",
        format: 'yyyy/mm/dd',
        autoclose: true,
        // yearRange:'1960-1990',
        onSelect: function() {
            $(this).parent().find('label').removeClass('error-msg');
            $(this).parent().find('label').addClass('focus-state');
            $(this).parent().find('input').removeClass('error');
            $(this).next().val($(this).val());
            $(this).next().datepicker("option", "dateFormat", "yy-mm-dd");
            $(this).parent().find('.hiddenDob').val($(this).val());
            $(this).parent().find('.hiddenDob').datepicker("option", "dateFormat", "d M y");

            var dob1 = $('#homepageDob').val();
            var currentYear1 = new Date().getFullYear();
            var domain1 = dob1.split('/');
            var dobYear1 = domain1[domain1.length - 1];
            var currentAge1 = currentYear1 - dobYear1;
            $(this).parents('.static-form-container').find('.years').html(currentAge1 + 'Yrs');
            $(this).parents('.static-form-container').find('.years').show();
        },
        beforeShow: function(input, inst) {
        inst.dpDiv.css({
            marginTop: $('body').scrollTop() + 'px'
        });
    }




    }).on('changeDate', function(ev) {
        //alert('ddd');
    });

    
}



function showpassword () {

    $(document).on('click', '.js_showpwd', function() {

        $(this).toggleClass('active');
        //$('#aadharNumber').attr('type', 'text');

        var pass = document.getElementById("aadharNumber");
            if (pass.type === "password") {
                pass.type = "text";
            }
            else {
                pass.type = "password";
            }

        var aadharNo = $('#aadharNumber').val();
        $('#aadharNumber').val() = aadharNo.substring(0, 0).replace(/\d/g, "*") + aadharNo.substring(0);


    });
};



function aadharmaskNumber() {

    // $("#aadharNumber").on('keyup', function () {
    //     var aadharNo = $(this).val();
    //     $(this).val(aadharNo.substring(0, 9).replace(/\d/g, "*") + aadharNo.substring(9));
    // });

    $('#aadharNumber').keyup(function() {

      var inputHyphen = $(this).val().split("-").join(""); // remove hyphens
      if (inputHyphen.length > 0) {
        inputHyphen = inputHyphen.match(new RegExp('.{1,4}', 'g')).join("-");
      }
      $(this).val(inputHyphen);


      var aadharNo = $(this).val();
      $(this).val(aadharNo.substring(0, 9).replace(/\d/g, "*") + aadharNo.substring(9));


      var length = $('#aadharNumber').val().length;

        if(length > 10) {

            $(this).attr('type', 'text');
        }
        else{
            $(this).attr('type', 'password');
        }
    });


}


function mobileSummary() {

    $(document).on('click', '.js_showsummerySec', function() {

        $(this).parents('.summurySec').toggleClass('active');
    })
}


function otherproductdesktopSlider(){

    var TotalLength = $('.otherproductCard .suitlist .thumbmainlist').length;
  if ($(window).width() > 992) {  
    if(TotalLength > 3){
        $('.otherproductCard .suitlistsection').addClass('suitcarouselList');
        $('.otherproductCard .suitlist').addClass('suitdesktoplist');
        $('.otherproductCard .suitdesktoplist').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        items: 3,
        dots:false,


        
    });
    }

    else{
        $('.otherproductCard .suitdesktoplist').owlCarousel('destroy');
        $('.otherproductCard .suitlist').removeClass('suitdesktoplist');
        $('.otherproductCard .suitlist .thumbmainlist').addClass('threeCards');
    }
}
}

function otherproductmobileSlider(){

if ($(window).width() < 992) {
    $('.otherproductCard .suitlistsection').addClass('suitcarouselList');
     $('.otherproductCard .suitdesktoplist').owlCarousel('destroy');
     $('.otherproductCard .suitlist').removeClass('suitdesktoplist');
    $('.otherproductCard .suitlist').addClass('suitmobilelist');
      $('.otherproductCard .suitmobilelist').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        items: 1,
        dots:true,
    })
}
else {
   $('.otherproductCard .suitmobilelist').owlCarousel('destroy');
   $('.otherproductCard .suitlist').removeClass('suitmobilelist');
}
}


function radioList() {

    $('.commAddress input[type="radio"]').click(function() {
       if($(this).attr('id') == 'no') {
            $('.addressDetailsCont').show();           
       }
       else {
            $('.addressDetailsCont').hide();   
       }
   });

    $('.residentCont .othercountrySec input[type="radio"]').click(function() {
       if($(this).attr('id') == 'no') {
            $('.residDetailsCont').show();
            $('.note2').hide();           
       }
       else {
            $('.residDetailsCont').hide(); 
            $('.note2').show();  
       }
   });


   //  $('.nomineedetailSec .customeradioBox input[type="radio"]').click(function() {
   //     if($(this).attr('id') == 'female') {
   //          $('.appointeedetailsSec').hide();           
   //     }
   //     else {
   //          $('.appointeedetailsSec').show();   
   //     }
   // });


    $('.accounttypesSec .customeradioBtn input[type="radio"]').click(function() {
       if($(this).attr('id') == 'noinsuranceAccount') {
            $('.einsuranceAccountno').hide();           
       }
       else {
            $('.einsuranceAccountno').show();   
       }
   });

    $('.familyDetails .customeradioBox input[type="radio"]').click(function() {
       if($(this).attr('id') == 'unmarried') {
            $('.spousenameInput').hide();           
       }
       else {
            $('.spousenameInput').show();   
       }
   });
}


/*JS For Selectpicker Start Here*/

function addhiddenClass() {

    $('.static-form-container select').each(function() {
        if($(this).val() === ''){
            $(this).parents('.form-field-container').find('label').addClass('hidden-label');
        }
    });


    $('.static-form-container select').change(function() {

        $(this).parents('.form-field-container').find('label').removeClass('hidden-label');

    });
}

/*JS For Selectpicker End Here*/


function resendOtp() {

    $(document).on('click', '.resend', function() {

            otpCounter();

            $('.zeroDigit').hide();
            $('.countDown').html('21');
            $('.otptimeSec p').show();
            $(this).removeClass('active');
            $('.didntReceive').addClass('active');
            $('.otperrorTxt').hide();
            
        });
}


function showapoineedetailsDiv(){


    $('.formElementsSec #dob').change(function() {

        if($(this).parents('.dateField').find('.years').val() < 15) {

            $('.appointeedetailsSec').show();
            //alert(100);
        }
        else{
            $('.appointeedetailsSec').hide();
            //alert(200);
        }
    })
}

// master js