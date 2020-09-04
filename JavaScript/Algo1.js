        // JavaScript Document
        var i=0;
        var j=0;
        //intro
        function disappear()
            {
                setTimeout((function(){
                    $('#start').css("display","none");
                    $('#navBar').css("display","block");
                    $('#background').css("display","block");
                }),4000);
            }
        function build()
            {
                setTimeout((function(){
                    $('#countDown1').css("display","inline");
                }),1000);
                setTimeout((function(){
                    $('#countDown1').css("display","none");
                    $('#countDown2').css("display","inline");
                }),2000);
                setTimeout((function(){
                    $('#countDown2').css("display","none");
                    $('#countDown3').css("display","inline");
                }),3000);
            }
        //if not clicked then vanish diglet
        function bye1()
            {
                    $('#loc1').css("display","none");
                    delay2();
            }
        function bye2()
            {
                    $('#loc2').css("display","none");
                    delay2();
            }
        function bye3()
            {
                    $('#loc3').css("display","none");
                    delay2();
            }
        function bye4()
            {
                    $('#loc4').css("display","none");
                    delay2();
            }
        function bye5()
            {
                    $('#loc5').css("display","none");
                    delay2();
            }
        function bye6()
            {
                    $('#loc6').css("display","none");
                    delay2();
            }
        //Vanish AFTER
        function zzz1()
        {
            var zz1=setTimeout(bye1,1000);
        }
        function zzz2()
        {
            var zz2=setTimeout(bye2,1000);
        }
        function zzz3()
        {
            var zz3=setTimeout(bye3,1000);
        }
        function zzz4()
        {
            var zz4=setTimeout(bye4,1000);
        }
        function zzz5()
        {
            var zz5=setTimeout(bye5,1000);
        }
        function zzz6()
        {
            var zz6=setTimeout(bye6,1000);
        }
        
        function appear()
            {
                var rand=Math.floor(Math.random()*6) +1;
                if (rand==1)
                {
                    if(timeLeft==0)
                        {
                            return;
                        }
                    else
                        {
                            $('#loc1').css("display","block");
                            zzz1(); 
                            j++;
                        }
                } 
                if (rand==2)
                {
                    if(timeLeft==0)
                        {
                            return;
                        }
                    else
                        {
                            $('#loc2').css("display","block");
                            zzz2(); 
                            j++;
                        }
                } 
                 if (rand==3)
                {
                    if(timeLeft==0)
                        {
                            return;
                        }
                    else
                        {
                            $('#loc3').css("display","block");
                            zzz3(); 
                            j++;
                        }
                } 
                 if (rand==4)
                {
                    if(timeLeft==0)
                        {
                            return;
                        }
                    else
                        {
                            $('#loc4').css("display","block");
                            zzz4(); 
                            j++;
                        }
                } 
                 if (rand==5)
                {
                    if(timeLeft==0)
                        {
                            return;
                        }
                    else
                        {
                            $('#loc5').css("display","block");
                            zzz5(); 
                            j++;
                        }
                } 
                 if (rand==6)
                {
                    if(timeLeft==0)
                        {
                            return;
                        }
                    else
                        {
                            $('#loc6').css("display","block");
                            zzz6(); 
                            j++;
                        }
                } 
                
                }
        function delay2()
            {
                setTimeout(appear,Math.random()*500);
            }
        function score1()
        {
            $('#loc1').fadeOut("fast","swing");
            i=i+1;
            $('#score').html(i);
        }
        function score2()
        {
            $('#loc2').fadeOut("fast","swing");
            i=i+1;
            $('#score').html(i);
        }
        function score3()
        {
            $('#loc3').fadeOut("fast","swing");
            i=i+1;
            $('#score').html(i);
        }
        function score4()
        {
            $('#loc4').fadeOut("fast","swing");
            i=i+1;
            $('#score').html(i);
        }
        function score5()
        {
            $('#loc5').fadeOut("fast","swing");
            i=i+1;
            $('#score').html(i);
        }
        function score6()
        {
            $('#loc6').fadeOut("fast","swing");
            i=i+1;
            $('#score').html(i);
        }
        function reload()
        {
            setTimeout(location.reload(),500);
        }
        function delay()
        {
            setTimeout(appear,5000);
        } 
        var timeLeft=34;
        var timer=setInterval(decrement,1000);
        function decrement()
        {
            if(timeLeft==0)
                {
                    clearInterval(timer);
                    
                    $('#time').html(timeLeft+'s');
                }
            else
            {
                $('#time').html(timeLeft+'s');
                timeLeft--;
            }
        }
        disappear();
        build();
        delay();