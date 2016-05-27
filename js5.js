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
        var input = $("#" + id); //This assigns a variable called input that is a function of the variable id combined with an id assignment
        input.removeClass("hidden"); //This removes the class of hidden from the input tag so that it is now visible
        input.select(); //This selects the input that will be edited with new text
    });
    $(".input-box").blur(function(event){ //Creating a function called blur taking the class of input-box
        console.log("blurred"); //This prints to the console the line that has been focused on by clicking in the input box to acknowledge what line has been focused on
        //Hide the <p>/.change-this
        var input = $(event.currentTarget); //This creates a variable called input which is the function of the event of a user clicking on one of the input boxes
        var changedText = input.val(); //Takes text that was input and saves as variable
        console.log(changedText); //This prints to the console the the changed text that was in the input box that the user selected
        input.addClass("hidden"); //This hides the input box that was edited
        //Un-hide the <input>/.input-box
        var id = input.attr("id"); //This assigns a new variable called id that equals the attribute id of the associated input box
        console.log(id); //This prints to the console the new variable that equals the attribute assigned to the input box that the user selected
        var p = $("[data-id='" + id + "']"); //This assigns a new variable called p which equals the newly updated p line
        p.text(changedText); //This updates the p with the new text that was entered in the input
        p.removeClass("hidden"); //This un-hides the p so that the new text is now visible
        
    });
});
