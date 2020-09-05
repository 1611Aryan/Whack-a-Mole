// JavaScript Document
var i=0;
var j=0;
var k=true;
var miss=0;
//intro
function disappear()
            {
                setTimeout((function(){
                    $('#start').hide();
                    $('#navBar').show();
                    $('#background').show();
                }),4000);
            }
 function build()
            {
                setTimeout((function(){
                    $('#countDown1').css("display","inline");
                }),1000);
                setTimeout((function(){
                    $('#countDown1').hide();
                    $('#countDown2').css("display","inline");
                }),2000);
                setTimeout((function(){
                    $('#countDown2').hide();
                    $('#countDown3').css("display","inline");
                }),3000);
            }
//if not clicked then vanish diglet
        function bye1()
            {
                if(!k)
                   {
                       delay2();
                       return;
                       
                   }
                else
                   {
                    $('#loc1').hide();
                    miss++;
                    delay2();
                   }
            }
         function bye2()
            {
                if(!k)
                   {
                       delay2();
                       return;
                   }
                else
                   {
                    $('#loc2').hide();
                    miss++;
                    delay2();
                   }
            }
         function bye3()
            {
                if(!k)
                   {
                       delay2();
                       return;
                   }
                else
                   {
                    $('#loc3').hide();
                    miss++;
                    delay2();
                   }
            }
         function bye4()
            {
                if(!k)
                   {
                        delay2();
                        return;
                   }
                else
                   {
                    $('#loc4').hide();
                    miss++;
                    delay2();
                   }
            }
         function bye5()
            {
                if(!k)
                   {
                        delay2();
                        return;
                   }
                else
                   {
                    $('#loc5').hide();
                    miss++;
                    delay2();
                   }
            }
         function bye6()
            {
                if(!k)
                   {
                        delay2();
                        return;
                   }
                else
                   {
                    $('#loc6').hide();
                    miss++;
                    delay2();
                   }
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
                    if(miss==3)
                        {
                            result();
                            return;
                        }
                    else
                        {
                            $('#loc1').show();
                            zzz1(); 
                            k=true;
                            j++;
                        }
                } 
                if (rand==2)
                {
                    if(miss==3)
                        {
                            result();
                            return;
                        }
                    else
                        {
                            $('#loc2').show();
                            zzz2(); 
                            k=true;
                            j++;
                        }
                } 
                 if (rand==3)
                {
                    if(miss==3)
                        {
                            result();
                            return;
                        }
                    else
                        {
                            $('#loc3').show();
                            zzz3(); 
                            k=true;
                            j++;
                        }
                } 
                 if (rand==4)
                {
                    if(miss==3)
                        {
                            result();
                            return;
                        }
                    else
                        {
                            $('#loc4').show();
                            zzz4(); 
                            k=true;
                            j++;
                        }
                } 
                 if (rand==5)
                {
                    if(miss==3)
                        {
                            result();
                            return;
                        }
                    else
                        {
                            $('#loc5').show();
                            zzz5(); 
                            k=true;
                            j++;
                        }
                } 
                 if (rand==6)
                {
                    if(miss==3)
                        {
                            result();
                            return;
                        }
                    else
                        {
                            $('#loc6').show();
                            zzz6(); 
                            k=true;
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
                $('#loc1').hide();
                i=i+1;
                k=false;
                $('#score').html(i);
                
            }
        function score2()
            {
                $('#loc2').hide();
                i=i+1;
                k=false;
                $('#score').html(i);
            
            }
        function score3()
            {
                $('#loc3').hide();
                i=i+1;
                k=false;
                $('#score').html(i);
            
            }
        function score4()
            {
                $('#loc4').hide();
                i=i+1;
                k=false;
                $('#score').html(i);
            
            }
        function score5()
            {
                $('#loc5').hide();
                i=i+1;
                k=false;
                $('#score').html(i);
            
            }
        function score6()
            {
                $('#loc6').hide();
                i=i+1;
                k=false;
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
        /*var timeLeft=34;
        var timer=setInterval(decrement,1000);
        function decrement()
            {
                if(timeLeft==0)
                    {
                        clearInterval(timer);
                        $('#time').html(timeLeft+'s');
                        aftermath();
                    }
                else
                {
                    $('#time').html(timeLeft+'s');
                    timeLeft--;
                }
            }*/
        function result()
            {
                $('#start').show();
                $('#countDown3').hide();
                $('#navBar').hide();
                $('#background').hide();
                $("#disclaimer").html("Your Score is: "+i+"/"+j);
                disappear();
            }
        disappear();
        build();
        delay();

