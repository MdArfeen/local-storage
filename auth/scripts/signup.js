let form=document.querySelector("#form")
let data=[]

//function savedData(key , arr){
  //  localStorage.setItem(ket, JSON.stringify(arr))
//}

function savedData(){
    localStorage.setItem("data", JSON.stringify(data))
}

function loadData(){
    let savedData=JSON.parse(localStorage.getItem("data"))
    if(savedData){
        data=savedData
    }
}

function handleFormsubmit(e){
    e.preventDefault()
    let targetElement=e.target
    console.log(targetElement)
    let username=targetElement[0].value
    let email=targetElement[1].value
    let password=targetElement[2].value
    let confirm=targetElement[3].value

    if(password==confirm){
        let narr=data.filter(function(ele,i){
            return ele.user==username
        })
        console.log(narr)
        if(narr.length>0){
            alert("username is already taken")
        }
        else{
            let obj={
                user:username,
                email:email,
                password:password
            }
        
        data.push(obj)
       // savedData("data", data)
       savedData()
        console.log(data)
        alert("Registration Succesfull")
        window.location.href="login.html"
        }
    }else{
        alert("paasword not matching")
     }
  }
form.addEventListener("submit", function(event){
    handleFormsubmit(event)
})

loadData()