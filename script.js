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
    let container = document.querySelectorAll('.container');
    for(let i = 0 ;i < container.length;i++ ){
        container[i].addEventListener("click",function(e){
            if(e.target.innerText == ''){
                return
            }
        })
       }


