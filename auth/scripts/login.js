let form=document.querySelector("form")

let data ;

function loadData(){
    let savedData=JSON.parse(localStorage.getItem("data"))
    if(savedData){
        data=savedData
    }
}

function handleFormSubmit(event){
    event.preventDefault()
    let targetElement=event.target
    let email=targetElement[0].value
    let password=targetElement[1].value

//console.log(data)
let narr=data.filter(function(ele,i){
    return (ele.email===email)  && (ele.password===password)
})
//console.log(narr)
if(narr.length>0){
    alert("logged in successfull")
window.location.href="home.html"
}else{
    alert("wrong credential")
}
}

form.addEventListener("submit", function(event){
handleFormSubmit(event)
})

loadData()