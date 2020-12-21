var readLineSunc = require('readline-sync')

class Utility {

    //verify the first name
    firstNameVerification(){
        let name = readLineSunc.question("What is your first name ? : ");

        var patternName = RegExp('^[A-Z][a-z]{2,}$','gm')
        var test = patternName.test(name)
        if( test == true){
            console.log("First Name is according to pattern")
            return 0
        }
            
        console.log("Error in input. Please try again.")
        this.firstNameVerification()        
    }

    //verify the last name
    lastNameVerification(){
        let name = readLineSunc.question("What is your last name ? : ");

        var patternName = RegExp('^[A-Z][a-z]{2,}$','gm')
        var test = patternName.test(name)
        if( test == true){
            console.log("Last Name is according to pattern")
            return 0
        }
            
        console.log("Error in input. Please try again.")
        this.lastNameVerification()        
    }

    //take details input and call corresponding functions
    inputDetails(){
        this.firstNameVerification()
        this.lastNameVerification()
        
    }

}

module.exports = new Utility();