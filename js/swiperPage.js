var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    on: {
        slideChangeTransitionStart: function (swiper) {
            console.log(this.realIndex);
            if(this.realIndex==1){
                $('#canvas').addClass('out30');
                $('#canvas').prev().addClass('out10');
            }
            if(this.realIndex==2){
                $('#main').addClass('out30');
                $('#main').prev().addClass('out10');
            }
            if(this.realIndex==3){
                $('#click').children().eq(0).addClass('out10');
                $('#click').children().eq(1).addClass('out20');
                $('#click').children().eq(2).addClass('out30');
            }
        }
    },

});