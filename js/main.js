


// function getApi(){
//     var xhttp = new XMLHttpRequest;
//     xhttp.onreadystatechange = function(){
//         if(this.readyState==4 && this.status==200){
//             document.querySelector("#demo").innerHTML = this.responseText;
//         }
//     }
//     xhttp.open("GET",'https://jsonplaceholder.typicode.com/photos',true);
//     xhttp.send();
// }



// ==================================================================================
// ==================================================================================
// ==================================================================================


// fetch("https://jsonplaceholder.typicode.com/photos")
// .then (function(ahmed){
//     return ahmed.json()
// })
// .then(function(element){
//     document.querySelector(".test img").src = element[0].url
//     document.querySelector(".test h4").innerHTML = element[0].title
//     document.querySelector(".test h6").innerHTML = element[0].id
// })


// ===================================================================================
// ===================================================================================
// ===================================================================================


(async function getApi() {
    var ahmed = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
    var mohamed = await ahmed.json();
    var element = mohamed.recipes;
      var myText = "";
    for(var i=0; i<element.length; i++){
        var cartona = `<div class="col-md-4">
        <img src="${element[i].image_url}" style ="height:300px" class="img-fluid">
        <h4>${element[i].title}</h4>
        <h6>${element[i].publisher}</h6>
      </div>
      `;
      myText = myText + cartona
    }
 
    document.querySelector('.test').innerHTML = myText
})();