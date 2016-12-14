$(function(){
	var kwadrat = $(".kwadrat");
	
	
	
	$(".przycisk").click(function() {
		
		
		kwadrat.animate( {  
				left:'100px',
				width:'100px',
				height:'100px'
				}, 3000, function() {
    		console.log("Animation complete.");
  		});
		
		kwadrat.animate({  
				backgroundColor: "rgb( 0, 0, 255 )"
				}, 5000, function() {
    		$("h2").html("Gratulacje, animacja zakończona ")
  		});
		
		
		

		
	});
	
});
	
