$(document).ready(() => {
    $(".login-form").submit((e) => {
        e.preventDefault();
        console.log("Nothing will ever happen");
        window.location.href = "success.html";
    })
})