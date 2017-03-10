
	  $(document).ready(function(){
		  $("a#nav_model").click(function(){
			  
			  //$("div#func_nav").show();
			  //showUser();
			  $("div#banner_title").html('<a class="navbar-brand" href="#">机型管理</a>');

			  $("button#btn_del").attr("data-toggle", "modal");
			  $("button#btn_del").attr("data-target", "#modal_model_btn_del");
			  $("button#btn_del").click(function(){$("img").hide()})
			  
			  
		  });
		  
		  $("a#nav_home").click(function(){
			  
			  $("div#func_nav").hide();
			  $("div#txtHint").html("<h3>主页内容...</h3>");
			  
		  });
		  
		  $("div#func_nav").hide();
		  
		});
	  
