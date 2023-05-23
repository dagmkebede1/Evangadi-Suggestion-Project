//  * user name validation 

let user_first_name = "rediat"
let user_last_name  = "terefe"

let trimed_frist_name = user_first_name.trim();
let trimed_last_name = user_last_name.trim();

let nameValidator = /^[A-Za-z\\s]+$/
if(!nameValidator.test(trimed_frist_name) || !nameValidator.test(trimed_last_name)){
     console.log("name not right")
}else{
    console.log('valid name')
}

//* email validator 
let userEmail = 'red.terefe@gmail.com'
let trimmedEmail = userEmail.trim()
let emailValidator = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/;
if(!emailValidator.test(trimmedEmail)){
    console.log("provide valid email")
}else{
    verifiedInfo ={
        ...verifiedInfo,
        verified_email:user_email
     }
}
// * password(one uppercase , one lowercase, one number,one special character and length of 8)
let passwordFromUser = 'Password@1234';
let trimmedUserPassword = passwordFromUser.trim();
let passwordValidator = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
if(!passwordValidator.test(trimmedUserPassword)){
    console.log("not valid password")
}else{
    verifiedInfo ={
        ...verifiedInfo,
        verified_password:user_password
     }
};





