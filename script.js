      
console.log("hello from JS")


const button = document.getElementById("toggle-on-off")



function btnclick() {
    console.log(" I am clicked")
}



button.onclick = () => {

    const my_name = document.getElementById("my-name")
    const name_bg = document.getElementById("name-bg")

    if(button.innerHTML == 'ON'){
    console.log(my_name, name_bg)
    my_name.innerHTML = "<h1>Hello</h1>"
    name_bg.style.backgroundColor = "pink"
    button.innerHTML = "off"
}
else{
    my_name.innerHTML = "<h1>Snehal Gaikwad</h1>"
    name_bg.style.backgroundColor = "#fff"
    button.innerHTML = "ON"
}

}



