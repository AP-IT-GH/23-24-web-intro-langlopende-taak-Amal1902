function initRecaptcha() {
    grecaptcha.ready(function() {
        grecaptcha.execute('6Le2ZdgpAAAAAM8cQ5l7x9Yr5HUJynYqeON2awSv', { action: 'submit' }).then(function(token) {
            // Voer hier een actie uit wanneer de reCAPTCHA met succes is voltooid, zoals het verzenden van het formulier
            console.log('reCAPTCHA voltooid: ' + token);
            document.getElementById("myForm").submit();
        });
    });
}
