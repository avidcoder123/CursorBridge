document.getElementById("HTML").addEventListener("click", function(){
    
    if (document.getElementById("CSScontent").style.display == "block") {
        document.getElementById("CSScontent").style.display = "none";
    }
    document.getElementById("HTMLcontent").style.display = "block";

});

document.getElementById("CSS").addEventListener("click", function(){

    if (document.getElementById("HTMLcontent").style.display == "block") {
        document.getElementById("HTMLcontent").style.display = "none";
    }
    document.getElementById("CSScontent").style.display = "block";
});