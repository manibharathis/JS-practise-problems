document.querySelector("#grandparent")
    .addEventListener('click',()=>{
        console.log("grandparent clicked")
    },true)

document.querySelector("#parent")
    .addEventListener('click',()=>{
        console.log("parent clicked")
    })
document.querySelector("#child")
    .addEventListener('click',(e)=>{
        console.log("child clicked")
        e.stopPropagation()
    })
    