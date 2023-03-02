let btn = document.getElementById('delete').onclick = function(){
    var demo = document.getElementById('delete').value;
    console.log(demo);
}

function addUser(){
    var name = document.getElementById('AddUsername').value;
    var lastName = document.getElementById('AddUserlastName').value;
    var email = document.getElementById('AddUserEmail').value;
    var phone = document.getElementById('AddUserNumber').value;
    var address = document.getElementById('AddUserAddress').value;

    if(name.length < 2 || name.length > 10){
        var NamealertBox = document.getElementById('NameError');
        NamealertBox.innerHTML = "Name Must Be More Than 2 and Lessthan 10 character";
        NamealertBox.style.fontSize = "12px";
    }else{
        var NamealertBox = document.getElementById('NameError');
        NamealertBox.innerHTML = "";
    }

    if(lastName.length < 2 || lastName.length > 10){
        var __lastNamealertBox = document.getElementById('lastNameError');
        __lastNamealertBox.innerHTML = "Last Name Must Be More Than 2 and Lessthan 10 character";
        __lastNamealertBox.style.fontSize = "12px";
    }else{
        var __lastNamealertBox = document.getElementById('lastNameError');
        __lastNamealertBox.innerHTML = "";
    }

    //How to email validation apply in js
    if(email.indexOf("@") == -1 || email.indexOf(".") == -1){
        var EmailalertBox = document.getElementById('EmailError');
        EmailalertBox.innerHTML = "Email Must Be Valid";
        EmailalertBox.style.fontSize = "12px";
    }else{
        var EmailalertBox = document.getElementById('EmailError');
        EmailalertBox.innerHTML = "";
    }
    
    
    var user = {
        name: name,
        lastName: lastName,
        email: email,
        phone: phone,
        address: address
    }
    console.log(user);
}