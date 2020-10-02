define([
    'jquery',
    'jquery-cookie'
], function($) {
    function body(){
        $(function(){

            $("#small").mouseenter(function(){
                $("#mark,#big").show()
            }).mouseleave(function(){
                $("#mark,#big").hide();
            }).mousemove(function(ev){
                var l = ev.pageX - $(this).offset().left - 100
                var t = ev.pageY - $(this).offset().top - 100

                l = Math.max(0 ,l)
                l = Math.min(300,l)
                t = Math.max(0 ,t)
                t = Math.min(300,t)

                $("#mark").css({
                    left:l,
                    top:t
                })

                $("#big img").css({
                    left:-2 * l,
                    top:-2 * t
                })

            })
        
            var alis = $("#ul ul li")
            alis.each(function(index,item){
                $(item).mouseenter(function(){
                    $("#small img").css("z-index","1").eq($(this).index()).css("z-index","5")
                    //$("this").css()

                   // $(`#small #${a}`).css("z-index","6")

                    $("#big img").css("z-index","1").eq($(this).index()).css("z-index","5")
                   // $(`#bog #${a}`).css("z-index","6")
                })
            })

         
        })

       
    }
    return{
        body:body
    }
})