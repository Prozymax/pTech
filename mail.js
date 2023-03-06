
var formDetails = {
    'fullname': document.querySelector('#name').value,
    'email': document.querySelector('#email').value,
    'phone': document.querySelector('#phone').value,
    'company': document.querySelector('#comapny'),
    'subject': document.querySelector('#subject'),
    'message': document.querySelector('#message')
}

document.getElementsByTagName('button')[0].onclick = () => {
    alert('hello')
}

/*
function sendEmail() { 
    Email.send({ 
        Host: "smtp.gmail.com", 
        Username: "", 
        Password: "", 
        To: '', 
        From: "", 
        Subject: "", 
        Body: "",  // send entered values from input box
    }) 
        .then(function (message) { 
        alert("Mail has been sent successfully") 
        }); 
    } 

*/
