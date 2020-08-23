/// <reference path="typings/globals/jquery/index.d.ts" />
/****************    Typing Script     **************************/
var typed = new Typed('#typed',{
    stringsElement: '#typed-strings',
    backSpeed: 40,
    typeSpeed: 40,
    loop: true,
});
$(function(){

// Up Button
    $(window).scroll(function(){
        if ($(window).scrollTop()>700){
            $(".up").fadeIn()
        } else{
            $(".up").fadeOut();
        }
    })
    $(".up").on("click",function(e){
        e.preventDefault();
        $("html").animate({
            scrollTop: 0
        });
    });
//Loading Page 
$(window).ready(function () {
    $(".load .sk-chase").fadeOut(2000, function () {
      $(this).parent().fadeOut(2000, function () {
          $("body").css("overflow", "auto");
          $(this).remove();
        });
    });
  });

//Color Switcher 
function switchColor() {
    var listLi = $(".color ul li");
    listLi
      .eq(0)
      .css("backgroundColor", "#fb9a1b")
      .end()
      .eq(1)
      .css("backgroundColor", "#730099")
      .end()
      .eq(2)
      .css("backgroundColor", "#E41B17")
      .end()
      .eq(3)
      .css("backgroundColor", "#00b7c2")
      .end()
}
switchColor();

$(".color ul li").on("click", function () {
    var path = $(this).data("path");
    $("#color-switcher").attr("href", path);
});

$(".option").on("click",function () {
    $(".color").fadeToggle();
});

  
//header size
$("header").innerHeight($(window).innerHeight())

//Animating Skills Section
$(window).scroll(function(){
    if($(window).scrollTop()>$(".education").offset().top -100){
        $(".prog span").addClass("active");
    } else {
        $(".prog span").removeClass("active");
    }
});
//Navbar fixed
$(window).scroll(function(){
    if ($(window).scrollTop() > $(".navbar-light").innerHeight()){
        $(".navbar-light").addClass("fixed");
    } else {
        $(".navbar-light").removeClass("fixed");
    }
    $("section").each(function(){
        if($(window).scrollTop() < $("header").innerHeight()){
                $(".navbar-nav li[data-index=home").addClass("active").siblings().removeClass("active");
        } else {
            if ($(this).offset().top - $(".navbar-light").innerHeight() -1 < $(window).scrollTop()){
                $(".navbar-nav li[data-index="+$(this).attr("id") +"]").addClass("active").siblings().removeClass("active");
            }
        }
    });
});

//Navbar Click
$(".nav-link").on("click",function(e){
    e.preventDefault();
    let newLink = $(this).parent().data("index");
    if(newLink === "home"){
        $("html").animate({
            scrollTop: 0
         },1000);
    } else {
        $("html").animate({
            scrollTop: $("#"+newLink).offset().top - $(".navbar-brand").innerHeight()
         },1000);
    }
})

//Navbar Collapse
function Collapsing(){
    if($(window).innerWidth()<992){
        $(".nav-link").on("click",function(){
            $(".navbar-collapse").removeClass("show")
        })
    }
}
Collapsing();
$(window).resize(function(){
    if($(window).innerWidth()<992){
        $(".nav-link").on("click",function(){
            $(".navbar-collapse").removeClass("show")
        })
    }
});

// Click Btn
$(".myBtn").on("click", function(){
    $("html").animate({
        scrollTop: $("#about").offset().top - $(".navbar-brand").innerHeight()
    },1500);
});

//Counter Up
$(".counter").countUp({
    "time": 1500,
    "delay": 10
});

//NiceScroll 
$("body").niceScroll({
    cursorcolor:"#fb9a1b",
    cursorwidth:"6px",
    zindex:"10",
    cursorborder:"none"
  });

//Mixer
let mixer = mixitup('#projects .row');

//WOW
new WOW().init();
});
