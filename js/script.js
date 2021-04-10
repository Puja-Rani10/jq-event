
$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });

   $("h4").dblclick(function(){
    $(this).hide();
   });

    $("#p1").mouseenter(function(){
    alert("You entered p1!");
  });

 $("#p2").mouseleave(function(){
    alert("Bye! You now leave p1!");
  });
  
 $("#p3").mousedown(function(){
    alert("Mouse down over p1!");
  });

});
