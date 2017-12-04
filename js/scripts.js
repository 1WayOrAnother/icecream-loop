$(document).ready(function() {
var flavors = ["chocolate ", "vanilla ", "strawberry "];
// this is array loop calling for each element
   flavors.forEach(function(flavor){
     // this is for-each method calling for  each elementof the array
     $("#p").append(flavor)
     // this is the id which being added to the next one 
   });
});
