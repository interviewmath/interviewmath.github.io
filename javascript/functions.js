var subCategory = "ALL CATEGORIES"

function next_question(){

    if ($('.sidebar').hasClass('hide')){
        $('.sidebar').removeClass('hide');
        showFilters();
        Timeout = setTimeout(hideFilters, 5000)
    }

    $('.desktop_controls').hide();
    $('.mobile_controls').hide();

    var newQuestion = InterviewMath.Data.Questions.shift();

    if (newQuestion){

        var question = newQuestion['question'];
        var sTag = newQuestion['tag'];
        var sSource = newQuestion['src'];

        $('#question_text').text(question);
        $('#question').removeClass('hide');
        $('#timer').show();
        $('#answer').removeClass('hide');
        $('#end').addClass('hide');

        if (subCategory == "ALL CATEGORIES" || sTag == subCategory){
            $('#question_text').text(question);
            timer_restart();
        }
        else {
            InterviewMath.Data.Passed.push(newQuestion);
            next_question();
        }

        $('#answer').addClass('hide');

        InterviewMath.Data.Questions = InterviewMath.Data.Passed;
        InterviewMath.Data.Passed = [];

        timer_stop();
        $('#end').removeClass('hide');

        if (InterviewMath.Data.Questions.length == 0){
            $('#end').children('h1').text("All questions answered.")
        }
    }
}

function showFilters(){
    $('.filter').each(function(index){
        animateIn($(this), index*100)
    })
}

function hideFilters(){
    var filter = $('.filter').length
    $('.filter').each(function(index){
        animateOut($(this), (filter - index - 1)*100)
    })
}

function animateIn($filter, delay){
    setTimeout(function(){
        $filter.css({"margin-right": "0px"})
    }, delay)
}

function animateOut($filter, delay){
    setTimeout(function(){
        $filter.css({"margin-right": "-400px"})
    }, delay)
}

// Timer Functions

var timer = 0;

function timer_tick(){

    timer = timer + 1;

    var seconds = timer%60;

    if (seconds < 10){
        seconds = '0' + seconds;
    }

    var minutes = (timer - seconds)/60;
    $('#timer').html(minutes + ':' + seconds);

    setTimeout('timer_tick();', 1000);
}

function timer_restart(){
    timer = 0;

    $('#timer').html('0:00');
    $('#timer').show();
}

function timer_stop(){
    $('.link').addClass('end');
}
