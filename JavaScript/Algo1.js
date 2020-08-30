// JavaScript Document
        var i=0;
        //if not clicked then vanish
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
            setTimeout(bye1,1000);
        }
        function zzz2()
        {
            setTimeout(bye2,1000);
        }
        function zzz3()
        {
            setTimeout(bye3,1000);
        }
        function zzz4()
        {
            setTimeout(bye4,1000);
        }
        function zzz5()
        {
            setTimeout(bye5,1000);
        }
        function zzz6()
        {
            setTimeout(bye6,1000);
        }
        
        function appear()
            {
                var rand=Math.floor(Math.random()*6) +1;
                if (rand==1)
                {
                    $('#loc1').css("display","block");
                    zzz1(); 
                } 
                if (rand==2)
                {
                    $('#loc2').css("display","block"); 
                    zzz2();    
                } 
                if (rand==3)
                {
                    $('#loc3').css("display","block");
                    zzz3();   
                } 
                if (rand==4)
                {
                    $('#loc4').css("display","block"); 
                    zzz4();    
                } 
                if (rand==5)
                {
                    $('#loc5').css("display","block");
                    zzz5();   
                } 
                if (rand==6)
                {
                    $('#loc6').css("display","block"); 
                    zzz6();   
                }
                }
        function delay2()
            {
                setTimeout(appear,Math.random()*500);
            }

        //Upon Clicking
        $('#loc1').click(function(){
            $('#loc1').fadeOut("fast","swing");
            clearTimeout(zzz1);
            i=i+1;
            alert("1");
            //delay1();
        });
        $('#loc2').click(function(){
            $('#loc2').fadeOut("fast","swing");
            clearTimeout(zzz2);
            i=i+1;
            //delay1();
        });
        $('#loc3').click(function(){
            $('#loc3').fadeOut("fast","swing");
            clearTimeout(zzz3);
            i-i+1;
        });
        $('#loc4').click(function(){
            $('#loc4').fadeOut("fast","swing");
            clearTimeout(zzz4);
            i=i+1;
            //delay1();
        });
        $('#loc5').click(function(){
            $('#loc5').fadeOut("fast","swing");
            clearTimeout(zzz5);
            i=i+1;
            //delay1();
        });
        $('#loc6').click(function(){
            $('#loc6').fadeOut("fast","swing");
            clearTimeout(zzz6);
            i=i+1;
            //delay1();
        });

        function delay()
        {
                setTimeout(appear,2000);
                setTimeout((function(){$('#score').html(i);}),12000);
        }

        delay();
        