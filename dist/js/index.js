

//amd

define(["jquery" , "jquery-cookie"] , function($){
    function body(){
        $(function () {
            var oul = $("#play").find("ul");
            var inow = 1;
            var timer = null;
            var abtns = $("#play").find("ol li");

            $(".play").mouseenter(function(){
                clearInterval(timer)
            })

            $(".play").mouseleave(function(){
                timer = setInterval(function(){
                    inow++;
                    tab()
                } , 2000)
            })

            abtns.click(function(){
                inow = $(this).index() + 1
               tab()
                //console.log(inow)
            })
           

            function tab(){
                abtns.removeClass("active")
                if(inow == abtns.size() + 1){
                    abtns.eq(0).addClass("active")
                } else if(inow == 0){
                    abtns.eq(abtns.size() - 1).addClass("active")
                }else{
                    abtns.eq(inow - 1).addClass("active")
                }

               // isrunning = true;
               oul.animate(
                   {
                   left:inow * -1536,
               },
               500,
               function () {
                   if(inow === abtns.size() + 1){
                        inow = 1;
                        oul.css("left" , -1536);
                    }else if(inow === 0){
                        inow = 4;
                        oul.css("left" ,-1536 * inow)
                    }
               }

               
               )
                

            }

            $("#xn_c_index_292_inner").find("a").eq(0).mouseenter(
                function(){
                    $('#mark1').css("display" ,"block")
                    $("#xn_c_index_292_inner").find("a").eq(0).css("color" , "#919191")
                }
            ).mouseleave(
                function(){
                    $('#mark1').css("display" ,"none")
                    $("#xn_c_index_292_inner").find("a").eq(0).css("color" , "white")

                }
            )

            $("#xn_c_index_292_inner").find("a").eq(1).mouseenter(
                function(){
                    $('#mark2').css("display" ,"block")
                    $("#xn_c_index_292_inner").find("a").eq(1).css("color" , "#919191")
                }
            ).mouseleave(
                function(){
                    $('#mark2').css("display" ,"none")
                    $("#xn_c_index_292_inner").find("a").eq(1).css("color" , "white")

                }
            )

            $("#xn_c_index_292_inner").find("a").eq(3).mouseenter(
                function(){
                    $('#mark3').css("display" ,"block")
                    $("#xn_c_index_292_inner").find("a").eq(3).css("color" , "#919191")
                }
            ).mouseleave(
                function(){
                    $('#mark3').css("display" ,"none")
                    $("#xn_c_index_292_inner").find("a").eq(3).css("color" , "white")

                }
            )

            $("#xn_c_index_292_inner").find("a").hover(function(){
                this.style.color = '#919191'
                },function(){
                    //this.style.color = "white"
                    $(this).css("color" , "white")
                })
            
            
          

            
  
        });
    }
    return {
        body:body
    }
})