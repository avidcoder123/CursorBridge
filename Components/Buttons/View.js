document.getElementById("HTML").addEventListener("click", function(){
    
        if (document.getElementById("CSScontent").style.display == 'block' || document.getElementById("Imgcontent").style.display == 'block' || document.getElementById("SVGcontent").style.display == 'block') {
            document.getElementById("CSScontent").style.display = 'none';
            document.getElementById("Imgcontent").style.display = 'none';
            document.getElementById("SVGcontent").style.display = 'none';
        }
        document.getElementById("HTMLcontent").style.display = 'block';
        
    }
);

document.getElementById("CSS").addEventListener("click", function(){

        if (document.getElementById("HTMLcontent").style.display == 'block' ||
        document.getElementById("Imgcontent").style.display == 'block'||
        document.getElementById("SVGcontent").style.display == 'block') {
            document.getElementById("HTMLcontent").style.display = 'none';
            document.getElementById("Imgcontent").style.display = 'none';
            document.getElementById("SVGcontent").style.display = 'none';
        }
        document.getElementById("CSScontent").style.display = 'block';
        
    }
);

document.getElementById("IMG").addEventListener("click", function(){
    
        if (document.getElementById("HTMLcontent").style.display == 'block' ||
        document.getElementById("CSScontent").style.display == 'block' ||
        document.getElementById("SVGcontent").style.display == 'block') {
            document.getElementById("HTMLcontent").style.display = 'none';
            document.getElementById("CSScontent").style.display = 'none';
            document.getElementById("SVGcontent").style.display = 'none';
        }
        document.getElementById("Imgcontent").style.display = 'block';
        
    }
);

document.getElementById("SVG").addEventListener("click", function(){
    
    if (document.getElementById("HTMLcontent").style.display == 'block' ||
     document.getElementById("CSScontent").style.display == 'block' ||
    document.getElementById("Imgcontent").style.display == 'block') {
        document.getElementById("HTMLcontent").style.display = 'none';
        document.getElementById("CSScontent").style.display = 'none';
        document.getElementById("Imgcontent").style.display = 'none';
    }
    document.getElementById("SVGcontent").style.display = 'block';
    
}
);