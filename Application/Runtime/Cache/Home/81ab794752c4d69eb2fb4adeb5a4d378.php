<?php if (!defined('THINK_PATH')) exit();?><html>
<head>
<script src="/tp323/Public/js/selectuser.js" type="text/javascript"></script>
</head>
<body>

<form> 
Select a User:
<select name="users" onchange="showUser(this.value)">
<option value="1">Peter Griffin</option>
<option value="2">Lois Griffin</option>
<option value="3">Glenn Quagmire</option>
<option value="4">Joseph Swanson</option>
</select>
</form>

<p>
<div id="txtHint"><b>User info will be listed here.</b></div>
</p>

</body>
</html>