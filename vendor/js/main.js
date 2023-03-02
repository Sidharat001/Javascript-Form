function addUser(e){
    // e.preventdefault();
    var name = document.getElementById('AddUsername').value;
    var lastName = document.getElementById('AddUserlastName').value;
    var email = document.getElementById('AddUserEmail').value;
    var phone = document.getElementById('AddUserNumber').value;
    var address = document.getElementById('AddUserAddress').value;

    //  Name Validation Apply
    if(name.length < 2 || name.length > 10){
        var NamealertBox = document.getElementById('NameError');
        NamealertBox.innerHTML = "Name Must Be More Than 2 and Lessthan 10 character";
        NamealertBox.style.fontSize = "12px";
        console.log(name);
    }else{
        var NamealertBox = document.getElementById('NameError');
        NamealertBox.innerHTML = "";
    }

    //  LastName Validation Apply
    if(lastName.length < 2 || lastName.length > 10){
        var __lastNamealertBox = document.getElementById('lastNameError');
        __lastNamealertBox.innerHTML = "Last Name Must Be More Than 2 and Lessthan 10 character";
        __lastNamealertBox.style.fontSize = "12px";
    }else{
        var __lastNamealertBox = document.getElementById('lastNameError');
        __lastNamealertBox.innerHTML = "";
    }

    //  email validation apply
    if(email.indexOf("@") == -1 || email.indexOf(".") == -1){
        var EmailalertBox = document.getElementById('EmailError');
        EmailalertBox.innerHTML = "Email Must Be Valid";
        EmailalertBox.style.fontSize = "12px";
    }else{
        var EmailalertBox = document.getElementById('EmailError');
        EmailalertBox.innerHTML = "";
    }

    // apply phone validation in
    if(phone.length!= 10){
        var PhonealertBox = document.getElementById('PhoneError');
        PhonealertBox.innerHTML = "Phone Number Must Be 10 digit";
        PhonealertBox.style.fontSize = "12px";
    }else{
        var PhonealertBox = document.getElementById('PhoneError');
        PhonealertBox.innerHTML = "";
    }
    
    //address validation
    if (address.length < 5 || address.length > 50) {
        var AddressalertBox = document.getElementById('AddressError');
        AddressalertBox.innerHTML = "Address Must Be More Than 5 and Lessthan 50 character";
        AddressalertBox.style.fontSize = "12px";
    } else {
        var AddressalertBox = document.getElementById('AddressError');
        AddressalertBox.innerHTML = "";
    }
    
    
    var user = {
        name: name,
        lastName: lastName,
        email: email,
        phone: phone,
        address: address
    }
    console.log(user);

    // Store User Object In Databse by Jquery 
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/users",
        data: JSON.stringify(user),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            console.log(data);
        },
        error: function (err) {
            console.log(err);
        }
    });
}