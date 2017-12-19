// JavaScript Document
var canvas, my_context;
var mousePressed= false;
var lastX;
var lastY;
var x;
var y;

window.onload = function(){
redf();
redb();
greenf();
greenb();
yellowf();
yellowb();
orangef();
orangeb();
turquoisef();
turquoiseb();
pinkf();
pinkb();
blackf();
blackb();
indigof();
indigob();
pics();
}

function redf()
{
    document.getElementById("front").src = "Assets/red-front-controller.jpg";
}

function redb()
{
    document.getElementById("back").src ="Assets/red-back-controller.jpg";
} 

function greenf()
{
    document.getElementById("front").src ="Assets/green-front-controller.jpg";
} 

function greenb()
{
    document.getElementById("back").src ="Assets/green-back-controller.jpg";
}

function yellowf()
{
    document.getElementById("front").src ="Assets/yellow-front-controller.jpg";
} 

function yellowb()
{
    document.getElementById("back").src ="Assets/yellow-back-controller.jpg";
} 

function orangef()
{
    document.getElementById("front").src ="Assets/orange-front-controller.jpg";
} 

function orangeb()
{
    document.getElementById("back").src ="Assets/orange-back-controller.jpg";
} 

function turquoisef()
{
    document.getElementById("front").src ="Assets/turquoise-front-controller.jpg";
} 

function turquoiseb()
{
    document.getElementById("back").src ="Assets/turquoise-back-controller.jpg";
} 

function indigof()
{
    document.getElementById("front").src ="Assets/gamecube-3.jpg";
} 

function indigob()
{
    document.getElementById("back").src ="Assets/indigo-back-controller.jpg";
} 

function pinkf()
{
    document.getElementById("front").src ="Assets/pink-front-controller.jpg";
} 

function pinkb()
{
    document.getElementById("back").src ="Assets/pink-back-controller.jpg";
} 

function blackf()
{
    document.getElementById("front").src ="Assets/black-front-controller.jpg";
} 

function blackb()
{
    document.getElementById("back").src ="Assets/black-back-controller.jpg";
}


function pics(){

    $( "#1" ).click(function() {
    event.preventDefault();
    $( '#pic2' ).hide();
    });

    $( "#2" ).click(function() {
    event.preventDefault();
    $( '#pic2' ).show();
    });

    $( "#3" ).click(function() {
    event.preventDefault();
    $( '#pic4' ).hide();
    });

    $( "#4" ).click(function() {
    event.preventDefault();
    $( '#pic4' ).show();
    });

    $( "#5" ).click(function() {
    event.preventDefault();
    $( '#pic6' ).hide();
    });

    $( "#6" ).click(function() {
    event.preventDefault();
    $( '#pic6' ).show();
    });

    $( "#7" ).click(function() {
    event.preventDefault();
    $( '#pic8' ).hide();
    });

    $( "#8" ).click(function() {
    event.preventDefault();
    $( '#pic8' ).show();
    });

    $( "#9" ).click(function() {
    event.preventDefault();
    $( '#pic10' ).hide();
    $( '#pic11' ).hide();
    $( '#pic12' ).hide();
    });

    $( "#10" ).click(function() {
    event.preventDefault();
    $( '#pic10' ).show();
    $( '#pic11' ).hide();
    $( '#pic12' ).hide();

    });

    $( "#11" ).click(function() {
    event.preventDefault();
    $( '#pic11' ).show();
    $( '#pic10' ).hide();
    $( '#pic12' ).hide();
    });

    $( "#12" ).click(function() {
    event.preventDefault();
    $( '#pic12' ).show();
    $( '#pic10' ).hide();
    $( '#pic11' ).hide();
    });
}



