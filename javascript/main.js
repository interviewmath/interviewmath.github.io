var Timeout;

(function(){
    InterviewMath.Data.Questions = [InterviewMath.Data.Questions.shift()].concat(InterviewMath.Data.Questions.sort(function(){return 0.5 - Math.random()}));
    InterviewMath.Data.Tips.sort(function(){return 0.5 - Math.random()});

    var bMobile;

    $(document).ready(function(){

        timer_tick();
        $('#timer').hide();

        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            bMobile = true;
            $('.mobile_controls').show();
            $('.desktop_controls').hide();
        }

        var $cat = $('filter:last-child');

        $('.filter').addClass('text-grey');
        $(this).removeClass('text-grey');

        subCategory = $(this).text().toUpperCase();

        if($('.desktop_controls').css('display') == "none" && $('.mobile_controls').css('display') == "none"  && $(this).text() !== 'ALL CATEGORIES'){
            next_question();
        }

        $cat.detach();

        $("#slider").click(function(e){
            next_question();
        });

        $(document).keypress(function(e){
            switch (e.which){
                case 13:
                    next_question();
                    break;
            }
        });

        $('.sidebar_right').mouseleave(function(){
            Timeout = setTimeout(hideFilters, 5000)
        })
    })
})();
