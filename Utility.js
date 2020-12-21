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

        var patternName = RegExp('^[a-z0-9]+([._+-][a-z0-9]+)*(@)[0-9a-zA-Z]+[.]{1}[a-z]{2,3}([.][a-z]{2})?$', 'gm')
        var test = patternName.test(name)
        if (test == true) {
            console.log("Email ID is according to pattern")
            return 0
        }

        console.log("Error in input. Please try again.")
        this.emailVerification()
    }

    //take details input and call corresponding functions
    inputDetails() {
        this.firstNameVerification()
        this.lastNameVerification()
        this.emailVerification()
    }

}

module.exports = new Utility();