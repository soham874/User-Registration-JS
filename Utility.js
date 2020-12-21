var readLineSunc = require('readline-sync')

class Utility {

    //verify the first name
    firstNameVerification() {
        let name = readLineSunc.question("What is your first name ? : ");

        var patternName = RegExp('^[A-Z][a-z]{2,}$', 'gm')
        var test = patternName.test(name)
        if (test == true) {
            console.log("First Name is according to pattern")
            return 0
        }

        console.log("Error in input. Please try again.")
        this.firstNameVerification()
    }

    //verify the last name
    lastNameVerification() {
        let name = readLineSunc.question("What is your last name ? : ");

        var patternName = RegExp('^[A-Z][a-z]{2,}$', 'gm')
        var test = patternName.test(name)
        if (test == true) {
            console.log("Last Name is according to pattern")
            return 0
        }

        console.log("Error in input. Please try again.")
        this.lastNameVerification()
    }

    //verify the email id
    emailVerification() {
        let name = readLineSunc.question("What is your email ID ? : ");

        var patternEmail = RegExp('^[a-z0-9]+([._+-][a-z0-9]+)*(@)[0-9a-zA-Z]+[.]{1}[a-z]{2,3}([.][a-z]{2})?$', 'gm')
        var test = patternEmail.test(name)
        if (test == true) {
            console.log("Email ID is according to pattern")
            return 0
        }

        console.log("Error in input. Please try again.")
        this.emailVerification()
    }

    //verify phone number
    phoneNumberVerification() {
        let name = readLineSunc.question("What is your phone number ? : ");

        var patternPhoneNumber = RegExp('^[0-9]{2}[ ][0-9]{10}$', 'gm')
        var test = patternPhoneNumber.test(name)
        if (test == true) {
            console.log("Phone number is according to pattern")
            return 0
        }

        console.log("Error in input. Please try again.")
        this.phoneNumberVerification()
    }

    //verify password
    passwordVerification() {
        let name = readLineSunc.question("What is your password ? : ");

        var patternPassword = RegExp('(?=.*[A-Z]{1})(?=.*[0-9]{1}).{8,}')
        var test = patternPassword.test(name)
        if (test == true) {

            var special = "^.,:;!@#$%^&*_+="
            var flag = 0
            var i
            for (i = 0; i < special.length; i++){
                var parts = name.split(special.charAt(i)).length
                if (parts == 2)
                    flag++
                if(parts == 1 && ( name.charAt(0) == special.charAt(i) || name.charAt(name.length - 1) == special.charAt(i)))
                    flag++

                if (flag == 1) {
                    console.log("Password is according to pattern")
                    return 0
                }
            }
        }      

        console.log("Error in input. Please try again.")
        this.passwordVerification()
    }

    //take details input and call corresponding functions
    inputDetails() {
        this.firstNameVerification()
        this.lastNameVerification()
        this.emailVerification()
        this.phoneNumberVerification()
        this.passwordVerification()
    }

}

module.exports = new Utility();