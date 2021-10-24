document.getElementById('submit-btn').addEventListener('click', function() {
    const emailField = document.getElementById('email-user');
    const userEmail = emailField.value;
    const passField = document.getElementById('password-user');
    const userPass = passField.value;

    if (userEmail == "rabiulazim430@gmail.com" && userPass == "azim105383") {
        window.location.href = 'bank-site.html';
    }

})

//deposit-btn