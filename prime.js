function Check(){
    var n = document.getElementById("num").value;
    var i = 1, temp = 0;
    while(i<=n){
        if(n%i == 0){
            temp = temp+1;
        }
        i=i+1;
    }
    if(temp == 2){
        document.write(n+" is prime number");
    }else{
        document.write(n+" is not prime number");
    }
}
Check();