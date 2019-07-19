$(document).ready(function() {
$("#call-to-action").on("click",function(event){
 console.log(event);
 $("#p-banner-content").css("marginBottom","-25px");
 $("#p-banner-content").html("Organize your ideas!");
 $("#banner-figure").attr("src","./images/bannerbook2.jpeg");
 $("#banner-figure").attr("alt","organized books");
 $("#call-to-action").hide();
 });
});