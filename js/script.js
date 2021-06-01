$(document).ready(function(){
$('h1').click(function(){
    alert("This is a heading tag")
});

$('#para1').click(function(){
    alert("This is a paragraph")
});

$('img').click(function(){
    alert("This is an image")
});
});

$(document).ready(function(){
    $("p").click(function(){
        $(".image").show();
    });
});

$(document).ready(function(){
    $(".clickable").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
    });
});

