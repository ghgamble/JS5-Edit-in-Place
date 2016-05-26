/*global $ */
$(document).ready(function() { //Added Jquery to JavaScript file
    $(".change-this").click(function(event){ //Creating a function called click taking the class of change-this
        console.log("clicked"); //Printing to the console to confirm that an html element 
        //Hide the <p>/.change-this
        var p = $(event.currentTarget); //Assigned a variable for the <p> tags that equals a function of selecting the line that was clicked
        p.addClass("hidden"); //We now want to hide the p variable by adding the hidden class from the css document
        //Un-hide the <input>/.input-box
        var id = p.attr("data-id"); //This assigns the variable id to the clicked <p> of the three available to click
        console.log(id); //This prints to the console the <p> that was clicked on
        var input = $("#" + id); //
        input.removeClass("hidden");
        input.select();
    });
    $(".input-box").blur(function(event){
        console.log("blurred");
        //Hide the <p>/.change-this
        var input = $(event.currentTarget);
        var changedText = input.val(); //Takes text that was input and saves as variable
        console.log(changedText);
        input.addClass("hidden");
        //Un-hide the <input>/.input-box
        var id = input.attr("id");
        console.log(id);
        var p = $("[data-id='" + id + "']");
        p.text(changedText);
        p.removeClass("hidden");
        
    });
});
