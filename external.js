function fetch(){
    console.log("btn clicked");

    //step
    var xhttp= new XMLHttpRequest();
    //STEP 2
    xhttp.open("GET","https://jsonplaceholder.typicode.com/users",true);
    //step 3
    xhttp.send();
    //step 4
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            console.log(this.responseText)
            var data=JSON.parse(this.responseText)  
            let val="";
            for(let i = 0;i < data.length;i++){
              val += `<tr><td>${data[i].name}</td>
              <td>${data[i].username}</td>
               <td>${data[i].address.city}</td></tr>`
              
              document.getElementById("tab1").innerHTML=val
            }
        }    

    }
}
