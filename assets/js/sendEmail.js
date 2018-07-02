function sendMail(contactForm) {
    emailjs.send("gmail", "my_cv", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "phone": contactForm.phone.value,
        "details": contactForm.details.value
    })
    .then(
        function(response) {
            $("input[type=text], textarea").val("");
            console.log("SUCCESS", response);
            $(".thanks").text("Thanks for contacting me. I'll be in touch.");
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}