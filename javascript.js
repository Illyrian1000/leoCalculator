function myFunction(){

    var name = document.getElementById("name1Index1").value;
    var name2 = document.getElementById("name2Index1").value;
    if (name.length > 0 && name2.length > 0 ){
        var x = Math.random() * 100;
    var y = Math.floor(x);

    document.getElementById("results").innerHTML = "Your love is " + y + "% strong";
    }
    
}

function myFunction2(){

    var name3 = document.getElementById("name1Index2").value;

    if (name3.length > 0){
        var x = Math.random() * 100;
        var y = Math.floor(x);

    document.getElementById("results").innerHTML = "Leo loves you with " + y + "% of his heart";
    }
    
}