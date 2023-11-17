function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Perform validation here if needed

    var confirmationMessage = 'Thank you, ' + name + '! Your message has been received.';
    document.getElementById('confirmation').textContent = confirmationMessage;
}
