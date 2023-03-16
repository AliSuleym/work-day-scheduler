var Hours = [9, 10, 11, 12, 13, 14, 15, 16, 17,]

var TimeBlock = $("tr")

var ContainerEL = $(".container")

var CurrentHour = moment().format("HH")

var storedEvent = []

var TimeEL;

var saveBtnEL;

var InputEl;

var InputEventField;

/*let index = 0



Function DisplayDailyPlanner(){
    
    for (var i = 0; i < Hours.length; i++ ){
    
    var NewTimeblock = $("<tr>")

    NewTimeblock.addClass("row")

    NewTimeblock.attr("id", Hours[i])

    ContainerEL.append(NewTimeblock);

}

console.log(CurrentHour)/*

/* for(var i = 0; i <= Hours.length; i++){

    
if(TimeBlock.attr("id") < CurrentHour) {

    TimeBlock.addClass("past")

    console.log(CurrentHour)

}

else{

    TimeBlock.addClass("future")

    console.log(CurrentHour)

}

if(TimeBlock.attr("id") == CurrentHour) {

    TimeBlock.addClass("present")

    console.log(CurrentHour)

} 

console.log(ContainerEL.children().eq(0).attr("id"))


}*/    

/*$.each( TimeBlock, function(){

    if(TimeBlock.attr("id") < CurrentHour) {

        TimeBlock.addClass("past")
    
        console.log(CurrentHour)
    
    }
    
    else{
    
        TimeBlock.addClass("future")
    
        console.log(CurrentHour)
    
    }
    
    if(TimeBlock.attr("id") == CurrentHour) {
    
        TimeBlock.addClass("present")
    
        console.log(CurrentHour)
    
    } 

})

}

*/

function DisplayDailyPlanner(hour, storedEvent){

    var NewTimeblock = $("<tr>")

    NewTimeblock.addClass("Description border p-2")
   
    var meridiem = hour >= 12 ? "AM": "PM";

    var Digitalto12Hour = (hour % 12) || 12;
    
    var InputEl = $("<td>").addClass("p-2 col-8 col-lg-10")

    if (CurrentHour > hour){

        InputEl.addClass("past")
    }

    if(CurrentHour < hour){

        InputEl.addClass("future")
    }

    if(CurrentHour == hour){

        InputEl.addClass("present")
    };

    var TimeEL = $("<td>").addClass("p-4 hour").text(Digitalto12Hour+ meridiem)

    const x = {

        TimeEL : TimeEL
    }
    
    var InputEventField = $("<textarea>").text(JSON.parse(localStorage.getItem(hour)))

    console.log(localStorage.getItem(9))

    InputEventField.attr("name", hour)

    InputEventField.attr("value", storedEvent)

    InputEventField.addClass("col-lg-11")

    InputEl.append(InputEventField);

    var saveBtnEL = $("<td>").addClass(" p-2 col-lg-10 SaveEL")

    var SaveButton = $("<button>").addClass("p-4 Btn saveBtn")

    var buttonIcon = $("<i>").addClass("fas fa-save")

    SaveButton.append(buttonIcon)

    saveBtnEL.append(SaveButton)

    NewTimeblock.append (TimeEL, InputEl, saveBtnEL);

    ContainerEL.append(NewTimeblock);

}

for (var i = 0; i < Hours.length; i++){

    if(storedEvent = true){

        DisplayDailyPlanner(Hours[i], storedEvent[i])
    }

    else{
        DisplayDailyPlanner(Hours[i], "")
    }
}


 var dateTodayEl = $('#currentDay')

function dateToday(){

 var today = moment().format("MMMM Do YYYY, h:mm:ss a");

 dateTodayEl.text(today)

}

 /*$(".saveBtn").on("click", function (e) {

    e.preventDefault();

    var NewInputNumber = $(this).siblings('.p-2').children().attr("name");

    var NewInput = $(this).siblings('.p-2').children().val();

    localStorage.setItem(JSON.stringify(NewInputNumber), JSON.stringify(NewInput));


}); */

$(".SaveEL").on("click", function (e) {

    e.preventDefault();

    var NewInputNumber = $(this).siblings('.p-2').children().attr("name");

    var NewInput = $(this).siblings('.p-2').children().val();

    console.log(NewInputNumber)
    console.log(NewInput)
    
    localStorage.setItem(NewInputNumber, JSON.stringify(NewInput));

});




setInterval(dateToday, 1000)

