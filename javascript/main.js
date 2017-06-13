var Timeout;

(function(){
    InterviewMath.Data.Questions = [InterviewMath.Data.Questions.shift()].concat(InterviewMath.Data.Questions.sort(function(){return 0.5 - Math.random()}));
    InterviewMath.Data.Tips.sort(function(){return 0.5 - Math.random()});

    $(document).ready(function(){

        timer_tick();
        $('#timer').hide();

        $('#dropdown_selector').click(function(event){
            $(this).toggleClass('active');
        })

        var $cat = $('filter:last-child');

        $('.filter').addClass('text-grey');
        $(this).removeClass('text-grey');

        subCategory = $(this).text().toUpperCase();
        if($('.desktop_controls').css('display') == "none" && $('.mobile_controls').css('display') == "none"  && $(this).text() !== 'ALL CATEGORIES'){
            next_question();
        }

        $cat.detach();

        $(document).click(function(e){
            if (e.target !== $('#current_selector')[0]){
                if ($('#dropdown_selector').hasClass('active')){
                    $('#dropdown_selector').removeClass('active');
                    return 0;
                }
            }
        })

        $("#slider").click(function(e){
            if (e.target === $(this)[0]){
                if ($('#dropdown_selector').hasClass('active')){
                    $('#dropdown_selector').removeClass('active');
                    return 0;
                }
                else {
                    next_question();
                }
            }
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
