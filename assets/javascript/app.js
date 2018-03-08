$(document).ready(function () 
{

    // Global Variables
    //==================================================================================================
    var topics = ['elephant', 'giraffe', 'hippopotamus', 'lemur', 'zebra', 'rhinoceros', 'green mamba', 'hynena', 'cheetah', 'lion', 'gorilla', 'antelope', 'baboon', 'buffalo', 'crocodile', 'jackal', 'leopard', 'mongoose', 'ostrich', 'monkey', 'wildebeest', 'warthog', 'pangolin', 'serval'];
   //console.log(topics);
    var stillImgUrl = '';
    var animateImgUrl = '';

    // Functions
    //==================================================================================================
    var createBtn = function () 
    {
        //removes all elements within the btn-section
        $('#btn-section').empty();
        //Create buttons based on elements in array
        for (var i = 0; 1 < topics.length; i++) 
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
console.log(createBtn);
    }
    var submit = function () 
    {
    //When submit button is clicked..........
    $('#submit-btn').on('click', function(event){
        //prevent from the default form/input events from ocurring //""""COME BACK TO THIS
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

    var displayGif = function()
    {
    //Gets the value of the button that is clicked
    var btnVal = $(this).data('type');
    // API Url and key
    var apiKey = 'WO5h5OqOs3Pb0iRpuBjAUQ6KN4uaAQ89';
    var apiUrl = 'https://api.giphy.com/v1/gifs/search?q='+btnVal + '&api_key=' + apiKey;
        $.ajax
        ({
            url: apiUrl,
            method: 'GET'
        }).done(function(response)
            {
                for (var i = 0; i < 10; i++)
                    {
                        stillIngUrl = response['data'][i]['images']['fixed_height_still']['url'];
                        animateUrl = response['data'][i]['images']['fixed_height']['url'];
                        //Assign image element to newImg variable
                        var newImg = $('<img>');
                        //Give img element stillImgUrl, animated $ src attributes
                        newImg.attr('data-still', stillImgUrl);
                        newImg.attr('data-animate', animateImgUrl);
                    };
                //Testing
                console.log('The button value is = ' + btnVal);
                console.log('Still Image Url = ' + stillImgUrl);
                console.log('Animated Image Url = ' + animateImgUrl);
            });
    }

});
