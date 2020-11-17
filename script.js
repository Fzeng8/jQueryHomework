const app = {
    initialize: function () {

        //click functions
        $('.logo').dblclick(function () {
            $('.buisnessDes').toggleClass('appear');
        });
        $('.pandoraImg').click(function () {
            $('.pandoraDes').toggleClass('appear');
        });
        $('.averyImg').click(function () {
            $('.averyDes').toggleClass('appear');
        });

        //hover functions

        $('.firstImg').hover(function () {
            $(this).toggleClass('firstTransform');
        });
        $('.secondImg').hover(function () {
            $(this).toggleClass('secondTransform');
        });

    },
}
