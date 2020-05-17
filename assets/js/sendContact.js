let form = document.querySelector('.contact-form');
let responseMessage = document.querySelector('.contact-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let message = {
        name: form[0].value,
        email: form[1].value,
        message: form[2].value
    };
    
    console.log(message);

    fetch('https://bd-portfolio-api.herokuapp.com/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    }).then((response) => {
        if(response.status === 200) {
            form[0].value = '';
            form[1].value = '';
            form[2].value = '';

            responseMessage.innerHTML = "Thank you for your message! I'll be in contact, shortly.";
        } else {
            responseMessage.innerHTML = "Something went wrong, sorry!";
        }
        console.log(response);
    });




    /*var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            if(xhr.status === 200) {
                form[0].value = "";
                form[1].value = "";
                form[2].value = "";

                responseMessage.innerHTML = JSON.parse(xhr.responseText).message;
            } else {
                responseMessage.innerHTML = "Something went wrong, sorry!";
            }
        }
    };

    xhr.open('POST', 'https://bd-portfolio-api.herokuapp.com/contact', true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(message));*/

});