$(document).ready(function() {

$('#steph').hover(function() {
   $(this).attr('src', 'images/stephanierollover.jpg');
   },
   function() {
   $(this).attr('src', 'images/stephanie.jpg');
   });

$('#cupcakesimg').hover(function() {
     $(this).fadeTo(500, 0.75);
   },
   function() {
     $(this).fadeTo(500, 1);
   });

$('#cupcakes').hover(function() {
    $('#cupcakes img').attr('src', 'images/cupcakes.gif');
   },
   function() {
    $('#cupcakes img').attr('src', 'images/cupcakes.png');
   });

$('#celebration').hover(function() {
    $('#celebration img').attr('src', 'images/celebration.gif');
   },
   function() {
    $('#celebration img').attr('src', 'images/celebration.png');
   });

$('#deserts').hover(function() {
    $('#deserts img').attr('src', 'images/brownies.gif');
   },
   function() {
    $('#deserts img').attr('src', 'images/brownies.png');
   });

$('#bread').hover(function() {
    $('#bread img').attr('src', 'images/bread.gif');
   },
   function() {
    $('#bread img').attr('src', 'images/bread.png');
   });

$('#sweets').hover(function() {
    $('#sweets img').attr('src', 'images/cookie.gif');
   },
   function() {
    $('#sweets img').attr('src', 'images/cookie.png');
   });

$('#flavours').hover(function() {
    $('#flavours img').attr('src', 'images/icing.gif');
   },
   function() {
    $('#flavours img').attr('src', 'images/icing.png');
   });

let now = new Date();
    let thisYear = now.getFullYear();
    let thisMonth = now.getMonth();
    let thisDay = now.getDate();

    switch (thisMonth)
    {
case 0:
monthname = "January";
break;
case 1:
monthname = "February";
break;
case 2:
monthname = "March";
break;
case 3:
monthname = "April";
break;
case 4:
monthname = "May";
break;
case 5:
monthname = "June";
break;
case 6:
monthname = "July";
break;
case 7:
monthname = "August";
break;
case 8:
monthname = "September";
break;
case 9:
monthname = "October";
break;
case 10:
monthname = "November";
break;
case 11:
monthname = "December";
break;
}
    $(".ui.footer").append(thisDay + ' ' + monthname + ' ' + thisYear);

});