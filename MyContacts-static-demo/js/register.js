"use strict";
$(document).ready(function () {
     // The following hard-coded for demo only!
     let EMAIL_ADDRESS = "foobar@test.com";

     let regForm = $("#regForm");
     let email = $("#email");
     let password = $("#password");
     let confirm = $("#confirm");
     let errMsg = $("#errMsg");

     $(regForm).submit((e) => {
          e.preventDefault();

          if ($(email).val() == '' || $(password).val() == '' || $(confirm).val() == '') {
               $(errMsg).html("All fields are required.");
               $(errMsg).show();
               $(email).focus();
          } else if ($(password).val() != $(confirm).val()) {
               $(errMsg).html("Passwords must match.");
               $(errMsg).show();
               $(password).focus();
          } else if ($(email).val() == EMAIL_ADDRESS ) {
               $(errMsg).html("Invalid registration.");
               $(errMsg).show();    
          } else {
               document.location.href = "login.html";
          }
     });

     $("#clear").click(function () {
          $(errMsg).hide();
          $(errMsg).html("");

          $(email).val('');
          $(password).val('');
          $(confirm).val('');
          $(email).focus();
     });
});