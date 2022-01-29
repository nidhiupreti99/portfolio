$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 1){
            $('.navbar').addClass("sticky");

        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrllY>500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");

        }
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active")
    })
})