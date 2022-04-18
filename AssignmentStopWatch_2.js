/*global $*/
$(document).ready(function(){
 
 var mse =0;
 var sec =0;
 var min =0;
 var hou =0;
 var timer =0;
 
 
 $("mse").html(mse);
 $("sec").html(sec);
 $("min").html(min);
 $("hou").html(hou);
 
 /*スタートボタン*/
 $('.start').click(function(){
  
   $(this).prop('disabled',true);
   $('.stop').prop('disabled',false);
   $('.reset').prop('disabled',false);
   
   timer = setInterval(function(){
     
     $(".mse").html(mse);
     $(".sec").html(sec);
     $(".min").html(min);
     $(".hou").html(hou);
     
     mse++;
     
     if(mse === 10){
       mse=0;
       sec++;
     };
     if(sec === 60){
       sec=0;
       min++;
     };
     if(min === 60){
       min=0;
       hou++;
     };
     
   },100);
 });
 
 /*ストップボタン*/
 $('.stop').click(function(){
  $(this).prop('disabled',true);
  $('.start').prop('disabled',false);
  $('.reset').prop('disabled',false);
  
  clearInterval(timer);
  
 });
 
 /*リセットボタン*/
 $('.reset').click(function(){
  $(this).prop('disabled',true);
  $('.start').prop('disabled',false);
  $('.stop').prop('disabled',false);
  
  clearInterval(timer);
  
  mse =0;
  sec =0;
  min =0;
  hou =0;
  
  $('mse').html(mse);
  $('sec').html(sec);
  $('min').html(min);
  $('hou').html(hou);
 });
 
});
