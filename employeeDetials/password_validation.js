var validatePassword = (event) => {
        
    var userInputPwd = document.querySelector("#passwordInput").value;

    var noCount = 0;
    var specialCount = 0;
    var capitalCount = 0;
    var lowerCount = 0;
    var firstCount = false;

    // minimum size is 8 characters
    var stringSize = userInputPwd.length;
    applyColorBasedOnType(".minlength", stringSize >= 8);

    if (userInputPwd.length == 0) {

    }

    // first alphabet not an uppercase
    if (userInputPwd.length == 0) {
        document.querySelector(".notUpperCase").style.color = 'red';
        // if we speedily click backspace the color of all qualifications is red
        document.querySelector(".numCount").style.color = 'red';
        document.querySelector(".specialNo").style.color = 'red';
        document.querySelector(".capitalNo").style.color = 'red';
        document.querySelector(".lowerNo").style.color = 'red';

        // for image
        document.querySelector(".notUpperCaseImg").setAttribute("src", "images/not-match.jpg");
        document.querySelector(".numCountImg").setAttribute("src", "images/not-match.jpg");
        document.querySelector(".specialNoImg").setAttribute("src", "images/not-match.jpg");
        document.querySelector(".capitalNoImg").setAttribute("src", "images/not-match.jpg");
        document.querySelector(".lowerNoImg").setAttribute("src", "images/not-match.jpg");

    }
    else if (userInputPwd.charCodeAt(0) >= 65 && userInputPwd.charCodeAt(0) <= 90) {
        document.querySelector(".notUpperCase").style.color = 'red';
        document.querySelector(".notUpperCaseImg").setAttribute("src", "images/not-match.jpg");
    } else {
        document.querySelector(".notUpperCase").style.color = 'green';
        document.querySelector(".notUpperCaseImg").setAttribute("src", "images/match.jpg");
    }


    for (var i = 0; i < userInputPwd.length; i++) {

        // console.log(userInputPwd.charAt(i));

        // should have 2 numbers 
        if (userInputPwd.charCodeAt(i) >= 48 && userInputPwd.charCodeAt(i) <= 57) {
            noCount++;
        }
        applyColorBasedOnType('.numCount', noCount >= 2);



        // should have 2 uppercase alphabets
        if (userInputPwd.charCodeAt(i) >= 65 && userInputPwd.charCodeAt(i) <= 90) {
            // if (event.key == 'Shift' || event.key == 'CapsLock') {
            //     // capitalCount = 0;
            // } else {
            // }
            capitalCount++;
        }
        applyColorBasedOnType(".capitalNo", capitalCount >= 2);

        // console.log(capitalCount);

        // should have 2 lowercase alphabets
        if (userInputPwd.charCodeAt(i) >= 97 && userInputPwd.charCodeAt(i) <= 122) {
            lowerCount++;
        }
        applyColorBasedOnType(".lowerNo", lowerCount >= 2);


        // should have 2 special characters
        if (userInputPwd.charCodeAt(i) >= 32 && userInputPwd.charCodeAt(i) <= 47 || userInputPwd.charCodeAt(i) >= 58 && userInputPwd.charCodeAt(i) <= 64 || userInputPwd.charCodeAt(i) >= 91 && userInputPwd.charCodeAt(i) <= 96 || userInputPwd.charCodeAt(i) >= 123 && userInputPwd.charCodeAt(i) <= 126) {
            specialCount++;
        }
        applyColorBasedOnType(".specialNo", specialCount >= 2);
    }

}

var applyColorBasedOnType = (selector, isValid) => {
    if (isValid) {
        document.querySelector(selector).style.color = 'green';
        imageChange(selector);
    } else {
        document.querySelector(selector).style.color = 'red';
        notImageChange(selector);
    }
}


var validateRePassword = (event) => {

    document.querySelector(".matchPassword").style.display = "block";
    document.querySelector(".matchPasswordImg").style.display = "block";


    var rePassword = document.querySelector("#repeatPasswordInput").value;
    var stringSizeRepeat = rePassword.length;

    if (stringSizeRepeat == 0) {
        document.querySelector(".matchPassword").style.color = "red";
        document.querySelector(".lowerNoImg").setAttribute("src", "images/not-match.jpg");
    }

    if (document.querySelector(".minlength").style.color == 'green' && document.querySelector(".numCount").style.color == 'green' && document.querySelector(".specialNo").style.color == 'green' && document.querySelector(".notUpperCase").style.color == 'green' && document.querySelector(".capitalNo").style.color == 'green' && document.querySelector(".lowerNo").style.color == 'green') {

        var userInputPwdRe = document.querySelector("#passwordInput").value;
        var userInputPwdRepeat = document.querySelector("#repeatPasswordInput").value;

        if (userInputPwdRe == userInputPwdRepeat) {
            document.getElementById("button").disabled = false;
            document.querySelector(".matchPassword").style.color = "green";
            document.querySelector(".matchPasswordImg").setAttribute("src", "images/match.jpg");
        } else {
            document.getElementById("button").disabled = true;
            document.querySelector(".matchPassword").style.color = "red";
            document.querySelector(".matchPasswordImg").setAttribute("src", "images/not-match.jpg");
        }
    }
}

var buttonEvent = () => {

    var userInput = document.querySelector("#acctIdInput").value;

    if (userInput == 0) {
        alert("Account ID should not be empty");
        var userInputByPrompt = prompt("Enter Account ID");
        document.querySelector("#acctIdInput").value = userInputByPrompt;

    } else {
        alert("Validation Successful");
    }

}

var imageChange = (selector) => {
    selectorImg = selector + 'Img';
    document.querySelector(selectorImg).setAttribute("src", "images/match.jpg");
}

var notImageChange = (selector) => {
    selectorImg = selector + 'Img';
    document.querySelector(selectorImg).setAttribute("src", "images/not-match.jpg");
}


var showPassword = () => {
    var x = document.querySelector("#passwordInput");
    if (x.type === "password") {
        x.type = "text";
        document.querySelector("#showPassword").setAttribute("src", "images/eye-open.jpg");
    } else {
        x.type = "password";
        document.querySelector("#showPassword").setAttribute("src", "images/eye-close.jpg");
    }
}

var showConfirmPassword = () => {
    var x = document.querySelector("#repeatPasswordInput");
    if (x.type === "password") {
        x.type = "text";
        document.querySelector("#showConfirmPassword").setAttribute("src", "images/eye-open.jpg");
    } else {
        x.type = "password";
        document.querySelector("#showConfirmPassword").setAttribute("src", "images/eye-close.jpg");
    }
}