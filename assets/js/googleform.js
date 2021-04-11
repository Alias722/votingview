// send request to this form
// https://docs.google.com/forms/d/e/1FAIpQLSfVvMVxU5eKKaEzERBSxaeIZmnA8bNM1Ew3riQJHzbASEZdQg

$('#google-form').submit(function(form) {
    //prevent the form from submitting so we can post to the google form
    form.preventDefault();

    //AJAX request
    $.ajax({
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSfVvMVxU5eKKaEzERBSxaeIZmnA8bNM1Ew3riQJHzbASEZdQg/formResponse',     //The public Google Form url, but replace /view with /formResponse
        data: $('#google-form').serialize(), //Nifty jquery function that gets all the input data
        type: 'POST', //tells ajax to post the data to the url
        dataType: "json", //the standard data type for most ajax requests
        statusCode: {
            0: function(data) { //0 is when Google gives a CORS error, don't worry it went through
                //success
                alert("收到!!\n我們將會盡快回覆")
                location.replace('/')
            },
            200: function(data) {//200 is a success code. it went through!
                //success
                alert("收到!!\n我們將會盡快回覆")
                location.replace('/')
            },
            403: function(data) {//403 is when something went wrong and the submission didn't go through
                //error
                alert("喔不!!\n好像爛掉了\n如果方便的話，可以傳email給我ㄇ，謝謝\n信箱在旁邊");
                location.replace('/')
            }
        }
    });
});