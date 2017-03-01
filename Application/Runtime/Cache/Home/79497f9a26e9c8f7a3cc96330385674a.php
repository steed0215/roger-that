<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>调度台控制系统</title>
<link href="/tp323/Public/adminlte/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
<link href="css/bootstrap/css/bootstrap-theme.min.css" rel="stylesheet" />
<script src="/tp323/Public/adminlte/plugins/jQuery/jQuery-2.1.4.min.js" type="text/javascript"></script>
<script src="/tp323/Public/adminlte/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
<script src="/tp323/Public/js/home.js" type="text/javascript"></script>
<script src="/tp323/Public/js/selectuser.js" type="text/javascript"></script>
<script>

</script>
</head>
<body>
	<div class="container">
		<h1>调度台控制系统V1.0</h1>
		<nav class="navbar navbar-inverse">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed"
					data-toggle="collapse" data-target="#navbar-menu"
					aria-expanded="false">
					<span class="sr-only">Toggle navigation</span> <span
						class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#">方元</a>
			</div>
			<div id="navbar-menu" class="collapse navbar-collapse">
				<ul class="nav navbar-nav">
					<li class="active"><a href="#" id="nav_home">主页</a></li>
					<li><a href="#" id="nav_users">用户管理</a></li>
					<li><a href="#" id="nav_msg">消息</a></li>
				</ul>
			</div>
		</nav>
		<div id="content" class="row-fluid">
	
        <div id="func_nav" class="col-md-3">
                <h4>操作</h4>
    <ul class="nav nav-tabs nav-stacked">
        <li><a href='#'>新建用户</a></li>
        <li><a href='#'>编辑用户</a></li>
        <li><a href='#'>删除用户</a></li>
    </ul>   
        </div>
        <div id="txtHint" class="col-md-9">
            <h3>主页内容...</h3>  
        </div>
   		 </div>
    
	</div>

</body>
</html>