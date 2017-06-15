var Timeout;

(function(){
    InterviewMath.Data.Questions = [InterviewMath.Data.Questions.shift()].concat(InterviewMath.Data.Questions.sort(function(){return 0.5 - Math.random()}));

    var bMobile;

    $(document).ready(function(){

        timer_tick();
        $('#timer').hide();

        $("#slider").click(function(){
            next_question();
        });

        $('.filter').click(function(){
            subCategory = $(this).text().toUpperCase();
            next_question();
        });

        $(document).keypress(function(e){
            switch (e.which){
                case 13:
                    next_question();
                    break;
            }
        });

        $('.sidebar_right').mouseenter(function(){
            if (! $('.sidebar').hasClass('.hide')){
                clearTimeout(Timeout);
                showFilters();
            }
        });

        $('.sidebar_right').mouseleave(function(){
            Timeout = setTimeout(hideFilters, 4000)
        });
    })
})();
