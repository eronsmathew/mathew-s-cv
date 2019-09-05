  
    var x = document.forms["myforms"]["name"].value;
    var y = documentforms["myforms"]["email"].value;
    var z = document.forms["myforms"]["title"].value;
    var m = document.forms["myforms"]["message"].value;
    var atPosition = x.indexOf("@");
    var dotPosition = x.lastindexOf(".");
    var btn = document.getElementById("my-btn");
    
    function checkvalidity(){

    //using the if statement to validate these inputs

    if(x.length < 4){
        alert("Enter name with at least four characters!");
        document.myforms.name.focus();
        return false;
     //defining the @ and dot position in the email section
     
    }if(atPosition  < 1 || dotPosition < atPosition + 2 || dotPosition + 2 > x.length){
        alert("Please enter valid e-mail address");
        document.myforms.email.focus();
        return false;

    }if(z == ""){
        alert("Please provide a title!");
        document.myforms.title.focus();
        return false;
    }

    if(m == ""){
        alert("Please a message is needed!");
        document.myforms.message.focus();
        return false;
    }

    return (true);
}

    btn.addEventListener("click", checkvalidity());

