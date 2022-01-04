$(document).ready(() => {
    $(".login-form").submit((e) => {
        e.preventDefault();
        console.log("Nothing will ever happen");

        $.post("/", {
            "username": $("#username").val(),
            "password": $("#password").val()
        },
        (data, status) => {
            console.log(`data: ${data} \nstatus: ${status}`);
        })

        // window.location.href = "success";
    })
})