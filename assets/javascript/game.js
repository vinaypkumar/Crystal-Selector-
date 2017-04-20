
$(document).ready(function() {

	function reset(){
		var crystal1=$("#c1");
		var value1=(Math.floor(Math.random()*(12)+1));    
        crystal1.attr("data-value", value1);
        console.log(value1);

        var crystal2=$("#c2");
		var value2=(Math.floor(Math.random()*(12)+1));    
        crystal2.attr("data-value", value2);   
        console.log(value2); 

        var crystal3=$("#c3");
		var value3=(Math.floor(Math.random()*(12)+1));    
        crystal3.attr("data-value", value3);   
        console.log(value3);  

        var crystal4=$("#c4");
		var value4=(Math.floor(Math.random()*(12)+1));    
        crystal4.attr("data-value", value4);   
        console.log(value4);         

	}

		reset();

        var goal=Math.floor(Math.random()*(120)+19)
        $("#target").append(goal); 

        var score=0;
        $("#score").append(score); 

        var wins=0;
        $("#wins").append(wins);

        var losses=0;
        $("#losses").append(losses);

        $(".gem").on("click", function() {
        	var add=parseInt(($(this).attr("data-value")));
        	score=score+add;
        	$("#score").html(score);

        	if(score==goal){
        		
        		alert("You win! Can you do it again?");
        		wins++;
        		$("#wins").html(wins);

        		goal=Math.floor(Math.random()*(120)+19)
        		$("#target").html(goal); 

		        score=0;
		        $("#score").html(score);
        		reset();
        	}

        	else if(score>goal){
        		
        		alert("You lose! Wanna try again?");
        		losses++;
        		$("#losses").html(losses);

        		goal=Math.floor(Math.random()*(120)+19)
        		$("#target").html(goal); 

		        score=0;
		        $("#score").html(score);
        		reset();

        	}



      	});

         


});