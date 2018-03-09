$(document).ready(function () 
{

    // Global Variables
    //==================================================================================================
    var topics = ['elephant', 'giraffe', 'hippopotamus', 'lemur', 'zebra', 'rhinoceros', 'green mamba', 'hynena', 'cheetah', 'lion', 'gorilla', 'antelope', 'baboon', 'buffalo', 'crocodile', 'jackal', 'leopard', 'mongoose', 'ostrich', 'monkey', 'wildebeest', 'warthog', 'pangolin', 'serval'];
   
    var stillImg = '';
    var animatedImg = '';

    
    // Functions
    //==================================================================================================
    var createBtn = function () 
    {
        //removes all elements within the btn-section
        $('#btn-section').empty();
        //Create buttons based on elements in array
        for (var i = 0; i < topics.length; i++) 
        {
            //Create new buttons
            var newBtn = $('<button>');

    
            //Give button an attribute //COME BACK TO THIS******
            newBtn.attr('data-type', topics[i]);
            //Add class to button
            newBtn.attr('class', 'gif btn-success');
            //Give button name that reflex array
            newBtn.text(topics[i]);
            //Add button to DOM
            $('#btn-section').append(newBtn);
        }
    }      

    var submit = function () 
    {
    //This adds a new search as a button when submit is clicked
    $('#submit-btn').on('click', function(event){
        //prevent from the default form/input events from ocurring 
        event.preventDefault();
        //Get input text value
        var inputVal = $('#userInput').val();
        //push user input to array
        topics.push(inputVal);
        //create new buttons
        createBtn();
        //Testing
        console.log(inputVal);
        console.log(topics);
    });
    }

    var displayGif = function(){
    //Gets the value of the button that is clicked
    var btnVal = $(this).data('type');
    // API Url and key
    var apiKey = 'WO5h5OqOs3Pb0iRpuBjAUQ6KN4uaAQ89';
    var apiUrl = 'https://api.giphy.com/v1/gifs/search?q='+ btnVal + '&api_key=' + apiKey + '&limit=10';
    $.ajax({
        url: apiUrl,
        method: 'GET'
      }).done(function(response){
       
        $('.gifImg').empty;
                for (var i = 0; i < 10; i++)
                    {
                        stillImg = response['data'][i]['images']['fixed_height_still']['url'];
                        animatedImage = response['data'][i]['images']['fixed_height']['url'];
                        //Assign image element to newImg variable
                        var newImg = $('<img>');
                        //Give img element stillImg, animated $ src attributes
                        newImg.attr('data-still', stillImg);
                        newImg.attr('data-animate', animatedImg);
                        newImg.attr('src', stillImg);
                        newImg.addClass('gifImage');
                        //Add new images to the DOM
                        $('.gifImg').append(newImg);
                    }
                //Testing
                console.log('The button value is = ' + btnVal);
                console.log('Still Image Url = ' + stillImg);
                console.log('Animated Image Url = ' + animateImg);
            });
    }
    var gifAnimate = function(){
        var gifCondition = $(this).data('type');
        var stillUrl = $(this).data('still');
        var animateUrl = $(this).data('animate');
        if (gifCondition === 'still'){
            //Changes the gif to an animated image by switching the url
            $(this).attr('src', animateUrl);
            //Switches the data type to animate
            $(this).data('type', 'animate');
            //Testing
            console.log(gifCondition);
        }
        else if(gifCondition === 'animate'){
            //Change src to still
            $(this).attr('src', stillUrl);
            $(this).data('type', 'still');
            //Testing
            console.log(true);
        }
    }

//Main
//=================================================================================
createBtn();
submit();
$(document).on('click', '.gif', displayGif);

});


