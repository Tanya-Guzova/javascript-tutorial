console.log("it worked");

function loaded(){
    //get the access to the input box object
    let htmlctrl=document.getElementById("name");
    //set the default value to the text box
    htmlctrl.value="Tanya";
}

function buttonClicked(){
    let name=document.getElementById("name").value;
    console.log("The name is", name);
}
