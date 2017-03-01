
	  $(document).ready(function(){
		  $("a#nav_users").click(function(){
			  
			  $("div#func_nav").show();
			  showUser();
			  
		  });
		  
		  $("a#nav_home").click(function(){
			  
			  $("div#func_nav").hide();
			  $("div#txtHint").html("<h3>主页内容...</h3>");
			  
		  });
		  
		  $("div#func_nav").hide();
		  
		});
	  
