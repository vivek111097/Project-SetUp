import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const Quote = () => {
    return (
        <section className="homepagesection topSpacing">
            <div className="container maxWidth static-form-container homecontainer">
                <div className="row plantitle">
                    <div className="col-md-12">
                        <div className="row alignRight">
                            <div className="col-lg-6 col-md-12">
                                <div className="uincontentSec">
                                    <p>
                                        Individual, Non-Linked, Non-participating, Savings Life
                                        Insurance Plan | UIN: IRDAI Sandbox application No.395
                                    </p>
                                </div>
                                <div className="resumeiconWrap">
                                    <div className="arrowSec">
                                        <a href="javascript:void(0);" className="js_showquoteForm">
                                            <img
                                                src="assets/images/left-arrow-icon.svg"
                                                className="img-fluid"
                                            />
                                        </a>
                                    </div>
                                    <div className="resumenowSec">
                                        <p>
                                            Been here before?{" "}
                                            <a href="javascript:void(0);" className="js_showResumeform">
                                                Resume Now
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className="innerhomequoteform bgbox">
                                    <form id="homepageForm" className="getquoteWrap formValid">
                                        <h3 className="innerhomequoteformtitle">
                                            Get a quick quote by filling in a few simple details.
                                        </h3>
                                        <div className="row policycolumn">
                                            <div className="col-md-6">
                                                <div className="col-xs-12">
                                                    <div className="form-user-grp form-field-container">
                                                        <label htmlFor="flname" className="">
                                                            First and Last Name*
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-user-ctrl alphabateOnly fullname required"
                                                            data-required="true"
                                                            aria-required="true"
                                                            id="flname"
                                                            name="flname"
                                                            defaultValue=""
                                                        />
                                                        <span className="errormsg">
                                                            Please Enter First and Last Name
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                {/* <div className="form-user-grp form-field-container dateField">
                                                    <label
                                                        htmlFor="homepageDob"
                                                        className="validation-failure"
                                                    >
                                                        Date Of Birth*
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-user-ctrl homedobInput required hasDatepicker"
                                                        data-required="true"
                                                        aria-required="true"
                                                        id="homepageDob"
                                                        name="homepageDob"
                                                        defaultValue=""
                                                        readOnly=""
                                                        autoComplete="off"
                                                    />
                                                    <span className="errormsg">
                                                        Please Enter Date Of Birth
                                                    </span>
                                                    <div className="dobWrap">
                                                        <span className="years">
                                                            <span className="yearsCount">15</span>
                                                            <span className="unit">Yrs</span>
                                                        </span>
                                                        <img
                                                            src="assets/images/Calendar.png"
                                                            alt="calendar"
                                                            className="calIcon"
                                                        />
                                                    </div>
                                                </div> */}

                                                <DatePicker/>
                                                {/* <div class="form-user-grp form-field-container dateField">
                                                          <label for="homepageDob" class="validation-failure">Date Of Birth</label>
                                                          <input type="text" class="form-user-ctrl  familyDob" data-required="true" aria-required="true" id="homepageDob" name="homepageDob" value="" readonly="" autocomplete="off">
                                                          <div class="dobWrap">
                                                              <span class="years"><span class="yearsCount">15</span><span class="unit">Yrs</span></span>
                                                              <img src="assets/images/Calendar.png" alt="calendar" class="calIcon">
                                                          </div>
                                                      </div> */}
                                            </div>
                                        </div>
                                        <div className="row policycolumn">
                                            <div className="col-md-6">
                                                <div className="form-user-grp form-field-container">
                                                    <label htmlFor="mobnumber" className="">
                                                        Mobile No.*
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-user-ctrl numbersOnly required mobileNumber"
                                                        data-required="true"
                                                        aria-required="true"
                                                        id="mobnumber"
                                                        name="mobnumber"
                                                        maxLength={10}
                                                        defaultValue=""
                                                    />
                                                    <span className="errormsg">
                                                        Please Enter Valid Mobile No.
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-user-grp form-field-container">
                                                    <label htmlFor="email" className="">
                                                        Email ID*
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-user-ctrl email required"
                                                        data-required="true"
                                                        aria-required="true"
                                                        id="email"
                                                        name="email"
                                                        defaultValue=""
                                                        autoComplete="off"
                                                    />
                                                    <span className="errormsg">
                                                        Please Enter Valid Email ID
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row policycolumn lessMargin">
                                            <div className="col-md-6">
                                                <div className="form-user-grp form-field-container">
                                                    <label htmlFor="pincode" className="">
                                                        Pin Code*
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-user-ctrl numbersOnly required pincode "
                                                        data-required="true"
                                                        aria-required="true"
                                                        id="pincode"
                                                        name="pincode"
                                                        defaultValue=""
                                                        autoComplete="off"
                                                        maxLength={6}
                                                    />
                                                    <span className="errormsg">
                                                        Please Enter Valid Pin Code
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-user-grp form-field-container">
                                                    <label htmlFor="empCode22" className="">
                                                        Employee Code*
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-user-ctrl alphabateOnly required"
                                                        data-required="true"
                                                        aria-required="true"
                                                        id="empCode22"
                                                        name="empCode22"
                                                        defaultValue=""
                                                        autoComplete="off"
                                                        maxLength={4}
                                                    />
                                                    <span className="errormsg">
                                                        Please Enter Employee Code
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row homesubmitblock">
                                            <div className="col-md-12">
                                                <div className="homesubmitcheck reqCheck tearmCondations">
                                                    <input
                                                        id="hometerms"
                                                        className="required"
                                                        type="checkbox"
                                                        name="hometerms"
                                                        defaultValue="terms"
                                                        defaultChecked=""
                                                    />
                                                    <label htmlFor="hometerms">
                                                        <p>
                                                            By submitting your details, you agree to PNB MetLife's{" "}
                                                            <a
                                                                href="/content/pnbmetlife/en/homepage/privacy-policy.html"
                                                                target="_blank"
                                                            >
                                                                Privacy Policy
                                                            </a>{" "}
                                                            and authorize PNB MetLife and/ or its authorized
                                                            service providers to verify the above information and/
                                                            or contact you to assist you with the policy purchase
                                                            and/ or servicing.The approval/ authorization provided
                                                            by you herein will supersede all authorizations/
                                                            approvals/ disaprovals/ registrations made by you in
                                                            this regard.
                                                        </p>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row brand-button-row innerhomequoteformbtn">
                                            <div className="col-md-12">
                                                <a
                                                    className="btn-brand-1st js_Submitform"
                                                    tabIndex={0}
                                                    target="_self"
                                                >
                                                    Get a Quote
                                                </a>
                                            </div>
                                        </div>
                                    </form>
                                    <div
                                        className="resumeappWrap dreamhomeSec"
                                        style={{ display: "none" }}
                                    >
                                        <div className="policyholderbox plantitle">
                                            <div className="resumeappSec">
                                                <h3>Resume your application</h3>
                                                <p className="policycontentpara">
                                                    Let’s continue your application process from where you
                                                    left off. Simply enter your mobile number for OTP
                                                    verification.
                                                </p>
                                            </div>
                                            <div className="policyowner">
                                                <div className="row policycolumn">
                                                    <div className="col-md-12">
                                                        <div className="form-user-grp form-field-container appField">
                                                            <label htmlFor="annualincome" className="">
                                                                *Mobile No.
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-user-ctrl numbersOnly"
                                                                data-required="true"
                                                                aria-required="true"
                                                                id="annualincome"
                                                                name="annualincome"
                                                                defaultValue=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="brand-button-row">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="proceedBtn">
                                                            <a
                                                                className="btn-brand-1st proceed"
                                                                tabIndex={0}
                                                                target="_self"
                                                            >
                                                                Proceed
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Quote