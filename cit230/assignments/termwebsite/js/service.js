function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<tr><td>' + arr[i].name + '</td><td>' +
        arr[i].price + '$'+ '</td></tr>' ;
    }
    document.getElementById("servicepg").innerHTML = out ;
}