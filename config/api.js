//export const API_URL = "https://itunes.apple.com/";


// Google Credintial Rgsioter WOORkkkk  ✅☑✅☑✅☑✅☑✅☑


export const signup = async() =>{

    
    
         const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAgjuw8lj2jac8iG5KtlBpkfVFlhB9ZkNk',{
                method:"POST",
                headers:{
                    'Content-Type':"application/json"
                },
                body:JSON.stringify({
                    email:'maker@gmail.com',
                    password:'121244355656',
                    returnSecureToken:true
                })
            })

            if(!response.ok){
                throw new Error("Something went wrong! 🛢️ 🛢️ ❌🛢️ 🛢️ ❌🛢️ 🛢️ ❌🛢️ 🛢️ ❌")
            }

            const resData = await response.json()
            console.log(resData , '✔  🛒   ✔  🛒   ✔  🛒   ')

      
    }
