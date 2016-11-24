$(document).ready(function(){
  $(".showForm1").click(function(){
    
      $(".searchForm1").fadeToggle();
  });

  $(".showForm2").click(function(){

      $(".searchForm2").fadeToggle();
  });

  $('[data-toggle="tooltip"]').tooltip(); 

 
  $(".carousel-inner").click(function(){


      //var w = window.open("file:///C:/Users/bilki/Desktop/Frontline_Freelancers/about.html","_self");
      //w.location = "../about.html"; 
      
  });

  $('.mylink').click(function(event) {

    // This will prevent the default action of the anchor and prevent jumping whilst the page has empty links
    event.preventDefault();

 

});
  
});