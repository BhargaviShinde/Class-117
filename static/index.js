//Create date variable
var date = new Date()
var showDate = date.toLocaleDateString()

//Load HTML DOM
$(document).ready(function(){
    $('#display_date').html(showDate)
})
//Define variable to store predicted emotion

//HTML-->JavaScript--->Flask
//Flask--->JavaScript--->HTML

//jQuery selector and click action

$(function () {
    $("#predict_button").click(function () {
        //AJAX call
        var inputData = {
            'text':$('#text').val()
        }
        $.ajax({
            type:'POST',
            url: '/predict-emotions',
            data: JSON.stringify(inputData),
            dataType: 'json',
            contentType: 'application/json',
            success: function(result){
                emo = result.data.pemo
                emoPath = result.data.pemopath
                $('#prediction').html(emo)
                $('#emo_img_url').attr('src',emoPath)
            },
            error:function(error){
                alert(error.responseJSON.message)
            }
            
        });
    });
})