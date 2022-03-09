menu = ()=>{
   let dis = document.getElementById("show-hide");

   if(!dis.style.display){
    // dis.style.display = 'block';
        second.style.display = 'none'
        first.style = "transform: rotate(45deg); transition: 1s; position: relative; right:-.5px; top:3.5px "
        third.style = "transform: rotate(-45deg); transition: 1s; ";
    
    }
    else{
        // dis.style.display = 'none';
        second.style.display = 'block'
        first.style = "transform: rotate(0deg); transition: 1s; position: relative; right:0px; top:0px "
        third.style = "transform: rotate(0deg); transition: 1s; "
   
    }
   
}

$(document).ready(function(){
    $(".menu").click(function(){
      $("#show-hide").slideToggle("slow");
    });
  });
