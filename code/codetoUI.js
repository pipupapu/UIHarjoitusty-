document.getElementById("confirm").onclick=function(){
    //click button, read inputdata
    let allergy = document.getElementById("comment").value;
    let name = document.getElementById("forname").value;
    let name2 = document.getElementById("lastname").value;
    const date = new Date();
    

    if(name.length > 0 & name2.length > 0 & allergy.length > 0){
        //if all info, green
        document.getElementById("ok").style.display="block";
        document.getElementById("error").style.display="none";
    }
    else{
        //if all textfields are not filled, background is red
        document.getElementById("error").style.display="block";
        document.getElementById("ok").style.display="none";
    }
    //name + allergy + date + local time
    document.getElementById("result", "date").innerHTML+=
    " Nimi: " + name + " " + name2 + "<br>" + " Ruoka-aineallergiat: " + allergy + "<br>" + date + "<br>"; 
    return false;
}

