"use strict";
$(document).ready(function () {
    // The following hard-coded for demo only!
    let EMAIL_ADDRESS = "foobar@test.com";
    let PASSWORD_VALUE = "password";

    let loginForm = $("#loginForm");
    let email = $("#email");
    let password = $("#password");
    let errMsg = $("#errMsg");

    $(loginForm).submit((e) => {
        e.preventDefault();

        if ($(email).val() == '' || $(password).val() == '') {
            $(errMsg).html("All fields are required.");
            $(errMsg).show();
            $(email).focus();
        } else if ($(email).val() != EMAIL_ADDRESS || $(password).val() != PASSWORD_VALUE) {
            $(errMsg).html("Invalid credentials.");
            $(errMsg).show();
            $(email).focus();
        } else {
            // This should be secure, but it's good enough for this CI / CD Demo
            document.location.href = "contacts.html";
        }
    });

    $("#clear").click(function () {
        $(errMsg).hide();
        $(errMsg).html("");

        $(email).val('');
        $(password).val('');
        $(email).focus();
    });
});