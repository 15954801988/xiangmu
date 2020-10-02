define(["jquery" , "jquery-cookie"],function($){
    function body(){
        $(function(){
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

                // 在页面加载所有数据
               $.ajax({
                   url:"data/data.json",
                   success:function(arr){
                    var str = ``
                    for(var i = 0 ; i < arr.length ; i++){
                        str += `<div id="xn1">

                        <div id = "xn2">
                          <img src="${arr[i].img}" alt="" class = "c">
                            <img src="images/jiaru.png" alt="" class = "d" id = "${arr[i].id}">

                          <div>
                          <span class="a">c87</span>
                          <span class="b">PBT键帽、内置加厚钢板、德国原厂Cherry轴，手感舒适。</span>
                        </div>
                        </div>
                        </div>`
                    }

                    $("#xn").html(str)
                   },
                   error:function(msg){
                       console.log(msg)
                   }
               }) 

               //点击添加到购物车
               //以json数据形式存储，[{id:1 , num :1},{id : 2 , num :2}]

               $("#xn").on("click" , ".d" , function(){

                    //获取 按钮上的 id 
                    var id = this.id;
                   console.log(id)
                    var first = !($.cookie("cookies"))
                    //如果是第一次，把数据存进去
                    if(first){
                        $.cookie("cookies" , JSON.stringify([{id:id,num:1}]) , {expires:7})
                        //设置数量为1
                    }else{
                        //第二次存数据
                        var cookieArr = JSON.parse($.cookie("cookies"))

                        var same = false  // 假设不相同

                        for(var i = 0 ; i < cookieArr.length; i++){
                            if(cookieArr[i].id == id){
                                same = true
                                break;  //结束循环，找到了相同的数据
                            }
                        }
                        same ? cookieArr[i].num++ : cookieArr.push({id:id , num:1})

                        // 把他重新存进cookie
                        $.cookie("cookies" , JSON.stringify(cookieArr),{
                            expires:7
                        })

                        alert("加入成功")
                    }
               })
    
        })
    }
    return{
        body:body
    }
})