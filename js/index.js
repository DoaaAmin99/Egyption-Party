
$("a[href^='#']").click((eventInfo)=>{
    let aHref = $(eventInfo.target).attr('href')
    let sectionOffset = $(aHref).offset().top;
    $('html,body').animate({scrollTop:sectionOffset},100)
})

let sideBarInnerwidth = $('.sideBar-inner').innerWidth();
$("#sideBar").css('left',-sideBarInnerwidth)
function closSideBar(){
    $('#sideBar').animate({left:-sideBarInnerwidth},1000);
    $("#home i").animate({left:'0px'},1000)
}

$('#home i').click(function(){
    if($("#sideBar").css('left') == '0px'){
        closSideBar();
    }
    else{
        $('#sideBar').animate({left:"0px"},1000)
        $('#home i').animate({left:sideBarInnerwidth},1000)
        
    }
})
$('#sideBar i').click(function(){
    closSideBar();
})

$('#details h3').click(function(eventInfo){
    $(eventInfo.target).next().slideToggle(1000);
    $('#details div').not($(eventInfo.target).next()).slideUp(1000)
})

function countDown(){
    let todayDate = new Date();
    let eventDate = new Date(2023, 4, 3);

    let todayTime = todayDate.getTime(); // milliseconds
    let eventTime = eventDate.getTime();

    let remainingTime = eventTime-todayTime;

    let seconds = Math.floor(remainingTime/1000);
    let minutes = Math.floor(seconds/60);
    let hours = Math.floor(minutes/60);
    let days = Math.floor(hours/24)-30;

    hours%=24;
    minutes%=60;
    seconds%=60;

    hours= (hours<10) ? '0' + hours : hours; 
    minutes= (minutes<10) ? '0' + minutes : minutes; 
    seconds= (seconds<10) ? '0' + seconds : seconds; 

    document.getElementById("days").innerHTML = "<h3>" + days + " D" + "</h3>";

    document.getElementById("hours").innerHTML = "<h3>" + hours + " h" + "</h3>";
    document.getElementById("minutes").innerHTML = "<h3>" + minutes + " m" + "</h3>";
    document.getElementById("seconds").innerHTML = "<h3>" + seconds + " s" + "</h3>";
    setTimeout(countDown, 1000);
}
countDown();


    var max = 100;
    $("textarea").keyup(function () {
        var length = $(this).val().length;
        var character = max - length;
        console.log(character)
        if (character <= 0) {
            $("#char").text("your available character finished");
        } else {
            $("#char").text(character);
        }
    });
