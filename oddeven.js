function Check(){
    var n = document.getElementById("num").value;
    if(n%2 == 0){
        document.write(n+" is an even number");
    }else{
        document.write(n+" is an odd number");
    }
}
Check();