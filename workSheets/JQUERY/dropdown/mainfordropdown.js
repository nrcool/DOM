/* let btn=document.getElementById('btn');
let dropdown=document.querySelector(".dropdown");
btn.addEventListener("mouseover",function(){
    dropdown.style.display="block";
});
btn.addEventListener("mouseout",function(){
    dropdown.style.display="none";
})
 */

      $("document").ready(function(){
          $("#btn").on("mouseleave mouseenter ", function(e){
             if(e.type==="mouseleave"){
                 $(".dropdown").css("display","none");
             }else if(e.type==="mouseenter"){
                $(".dropdown").css("display","block");
            }
          })
      })
  