var readLineSunc = require('readline-sync')

const patternFirstName = RegExp('^[A-Z][a-z]{2,}$', 'gm')
const patternLastName = RegExp('^[A-Z][a-z]{2,}$', 'gm')
const patternEmail = RegExp('^[a-z0-9]+([._+-][a-z0-9]+)*(@)[0-9a-zA-Z]+[.]{1}[a-z]{2,3}([.][a-z]{2})?$', 'gm')
const patternPhoneNumber = RegExp('^[0-9]{2}[ ][0-9]{10}$', 'gm')
const patternPassword = RegExp('(?=.*[A-Z])(?=.*[0-9])(?=[^.,:;!@#$%^&*_+=]*[.,:;!@#$%^&*_+=][^.,:;!@#$%^&*_+=]*$).{8,}$')

const regexArray = [patternFirstName, patternLastName, patternEmail, patternPhoneNumber, patternPassword]
const inputArray = ["first name", "last name", "email ID", "phone number", "password"]

class Utility {

    //verify each detail
    detailVerification = (regexString, testingString) => {
        let name = readLineSunc.question(`\nWhat is your ${testingString} ? : `);
        if (regexString.test(name)) {
            console.log(`${testingString} is according to pattern.`)
            return 0
        }
        console.log("Error in input. Please try again.")
    }

    //take details input and verify
    inputDetails = () => {

        for (let i = 0; i < inputArray.length; i++)
            do {
                var result = this.detailVerification(regexArray[i], inputArray[i])
            } while (result != 0)

        console.log("\nDetails input successfully! \n")
    }

}

module.exports = new Utility();