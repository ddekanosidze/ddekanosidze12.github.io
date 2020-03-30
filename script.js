// fetch("https://reqres.in/api/users",{
    // method :"POST",
    // headers:{
    //     'Content-Type':'application/json'
    // },  
    // body:JSON.stringify({
    //     name1:'User 1'
    // })
// })
//     .then(res => {
//         if(res.ok){
//             console.log("succes")
//         }else{
//             console.log("notsucces")
//         }
//          return res.json()
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log("Error"))

// fetch('https://jsonplaceholder.typicode.com/users',{
//     method :"get",
//     headers:{
//         'Content-Type':'application/json'
//     },  
// })
//     .then(function(response) {
//        return response.json()
//     })
//     .then(function(data) {
//         console.log("the data",data)
//         console.log(data.length)
        
//     for(let i = 0 ;i < data.length;i++ ){
    
//         console.log(data[i].name)
// }
//     })
let submitSendButton = document.querySelector(".submit-button");
let submitInformationPopup = document.querySelector(".submit-information-popup");

submitSendButton.addEventListener("click",showHidePopup)

let container = document.querySelectorAll('.container');
for(let i = 0 ;i < container.length;i++ ){
    container[i].addEventListener("click",function(e){
        if(e.target.innerText == ''){
            return
        }
    })
}

function showHidePopup(){
    submitInformationPopup.style.display = "block"
    submitInformationPopup.style.opacity = "1"
    submitInformationPopup.style.transition ="0s ease-in-out";

    setTimeout(() => {
        submitInformationPopup.style.opacity = "0"
        submitInformationPopup.style.transition ="2s ease-in-out";
    }, 2000);
}