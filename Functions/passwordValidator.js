function passwordValidator(pass) {
    let isValid = true;
    let digitCounter = 0;
    let invalidCounter = 0;
    if (pass.length < 6 || pass.length > 10) {
        isValid = false;
        console.log("Password must be between 6 and 10 characters");
    }
    for (let i = 0; i < pass.length; i++) {
        let currentChar = pass.charCodeAt(i);
        let IsValidChar = false;
        if (currentChar >= 48 && currentChar <= 57) {
            digitCounter++;
            IsValidChar = true;
        }
        if (currentChar >= 65 && currentChar <= 90) {
            IsValidChar = true;
        }
        if (currentChar >= 97 && currentChar <= 122) {
            IsValidChar = true;
        }
        if (!IsValidChar) {
            isValid = false;
            invalidCounter++;
        }
    }
    if(invalidCounter > 0) {
        console.log("Password must consist only of letters and digits");
    }
    if (digitCounter < 2) {
        isValid = false;
        console.log("Password must have at least 2 digits");
    }
    if (isValid) {
        console.log('Password is valid');
    }
}
//passwordValidator('logIn1');
//passwordValidator('MyPass123');
passwordValidator('Pa$s$s');