$(document).ready(function(){
			var v1=Math.floor(Math.random() * 12)+1;
			var v2=Math.floor(Math.random() * 12)+1;
			var v3=Math.floor(Math.random() * 12)+1;
			var v4=Math.floor(Math.random() * 12)+1;
			var v=Math.floor(Math.random()*(120-18))+18;
			var total=0;
			var win=0;
			var loss=0;
			$("#addScore").text(total);
			$("#scoreToReach").text(v);
			$("#win").text(win);
			$("#loss").text(loss);
			$("#img1").click(function(){
				total+=v1;
				$("#addScore").text(total);
				check(total,v);
			});
			$("#img2").click(function(){
				total+=v2;
				$("#addScore").text(total);
				check(total,v);
			});
			$("#img3").click(function(){
				total+=v3;
				$("#addScore").text(total);
				check(total,v);
			});
			$("#img4").click(function(){
				total+=v4;
				$("#addScore").text(total);
				check(total,v);
			});
			function check(x,y){
				if(x>y){
					loss++;
					$("#loss").text(loss);
					reset();
				}
				else if(x==y){
					win++;
					$("#win").text(win);
					reset();
				}
			}
			function reset(){
				v1=Math.floor(Math.random() * 12)+1;
				v2=Math.floor(Math.random() * 12)+1;
				v3=Math.floor(Math.random() * 12)+1;
				v4=Math.floor(Math.random() * 12)+1;
				v=Math.floor(Math.random()*(120-18))+18;
				total=0;
				$("#addScore").text(total);
				$("#scoreToReach").text(v);
			}

		});