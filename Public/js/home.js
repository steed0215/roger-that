$(document).ready(
		function() {
			$("a#nav_model").click(function() {
				nav_model();
			});

			$("a#nav_firmware").click(
					function() {

						nav_firmware();

					});

			nav_model();
			// initFileInput("file-Portrait",
			// "http://192.168.119.98/tp323/public/upload/");

		});

function nav_model() {

	// $("div#func_nav").show();
	// showUser();
	$("div#banner_title").html('<a class="navbar-brand" href="#">机型管理</a>');

	// $("button#btn_1").text("删除");
	$("button#btn_1").hide();
	$("button#btn_2").text("添加新机型");

	// $("button#btn_del").attr("data-toggle", "modal");
	// $("button#btn_del").attr("data-target", "#modal_model_btn_del");
	// $("button#btn_del").click(function(){$("img").hide()})

	$("button#btn_2").attr("data-toggle", "modal");
	$("button#btn_2").attr("data-target", "#model_btn_add");

	$("button#model_btn_add_submit_btn")
			.click(
					function() {
						// alert($("div#model_btn_add_body form").serialize());
						$
								.ajax({
									type : 'post',
									url : 'http://192.168.119.98/tp323/index.php/home/ota/create_model',
									data : $("div#model_btn_add_body form")
											.serialize(),
									success : function(data) {
										// your code
										// alert("提交成功");
									}
								});
					});

	
			$.ajax({
				type : 'post',
				dataType : "json",
				url : 'http://192.168.119.98/tp323/index.php/home/ota/query_all_models',
				success : function(data) {

				}
			});

	initModelTable();

}

function initFileInput(ctrlName, uploadUrl) {
	var control = $('#' + ctrlName);

	control.fileinput({
		language : 'zh', // 设置语言
		uploadUrl : uploadUrl, // 上传的地址
		allowedFileExtensions : [ 'jpg', 'png', 'gif' ],// 接收的文件后缀
		showUpload : true, // 是否显示上传按钮
		showCaption : false,// 是否显示标题
		browseClass : "btn btn-primary", // 按钮样式
		layoutTemplates : "modal"
	});
}

function initModelTable() {
	// 先销毁表格
	$('#public_tab').bootstrapTable('destroy');
	// 初始化表格,动态从服务器加载数据
	$("#public_tab")
			.bootstrapTable(
					{
						method : "get", // 使用get请求到服务器获取数据
						url : "http://192.168.119.98/tp323/index.php/home/ota/query_all_models", // 获取数据的Servlet地址
						striped : true, // 表格显示条纹
						pagination : true, // 启动分页
						pageSize : 5, // 每页显示的记录数
						pageNumber : 1, // 当前第几页
						pageList : [ 1, 5, 10 ], // 记录数可选列表
						search : true, // 是否启用查询
						// toolbar: '#toolbar',
						// showToggle:true, //是否显示详细视图和列表视图的切换按钮
						showColumns : true, // 显示下拉框勾选要显示的列
						showRefresh : true, // 显示刷新按钮
						//detailView : true,
						sidePagination : "client", // 表示服务端请求
						//detailFormatter : detailFormatter,
						// 设置为undefined可以获取pageNumber，pageSize，searchText，sortName，sortOrder
						// 设置为limit可以获取limit, offset, search, sort, order
						// queryParamsType : "undefined",
						// queryParams: function queryParams(params) { //设置查询参数
						// var param = {
						// pageNumber: params.pageNumber,
						// pageSize: params.pageSize,
						// orderNum : $("#orderNum").val()
						// };
						// return param;
						// },
						onLoadSuccess : function() { // 加载成功时执行
							// alert("加载成功");
						},
						onLoadError : function() { // 加载失败时执行
							alert("加载数据失败");
						},
						columns : [
							{
							field : 'name',
							title : '名字'
						}, {
							field : 'operate',
							title : '操作',
							align : 'center',
							events : modelOperateEvents,
							formatter : modelOperateFormatter
						} ]
					});
}

function modelOperateFormatter(value, row, index) {
	return [ '<a class="like" href="javascript:void(0)" title="Like">',
			'<i class="glyphicon glyphicon-heart"></i>', '</a>  ',
			'<a class="remove" href="javascript:void(0)" title="Remove">',
			'<i class="glyphicon glyphicon-remove"></i>', '</a>' ].join('');
}

window.modelOperateEvents = {
	'click .like' : function(e, value, row, index) {
		alert('You click like action, row: ' + JSON.stringify(row));
	},
	'click .remove' : function(e, value, row, index) {
		$("#public_tab").bootstrapTable('remove', {
			field : 'id',
			values : [ row.id ]
		});

		$.ajax({
					type : 'post',
					data : {
						id : row.id
					},
					dataType : "json",
					url : 'http://192.168.119.98/tp323/index.php/home/ota/delete_model',
					success : function(data) {
						// your code
						alert("删除成功");

					}
				});

	}
};

function detailFormatter(index, row) {
	var html = [];
	$.each(row, function(key, value) {
		html.push('<p><b>' + key + ':</b> ' + value + '</p>');
	});

	var insertText = heredoc(function() {/*											  
											  <table class="table">
											  <caption>基本的表格布局</caption>
											  <thead> <tr> <th>名称</th> <th>城市</th>
											  </tr> </thead> <tbody> <tr> <td>Tanmay</td>
											  <td>Bangalore</td> </tr> <tr>
											  <td>Sachin</td> <td>Mumbai</td>
											  </tr> </tbody> </table>											  
											 
	*/});
	return insertText;


}

function heredoc(fn) {
	return fn.toString().split('\n').slice(1, -1).join('\n') + '\n'
}



function nav_firmware() {


	$("div#banner_title").html('<a class="navbar-brand" href="#">固件管理</a>');

	// $("button#btn_1").text("删除");
	$("button#btn_1").hide();
	$("button#btn_2").text("添加新版本");

	// $("button#btn_del").attr("data-toggle", "modal");
	// $("button#btn_del").attr("data-target", "#modal_model_btn_del");
	// $("button#btn_del").click(function(){$("img").hide()})

	$("button#btn_2").attr("data-toggle", "modal");
	$("button#btn_2").attr("data-target", "#firmware_btn_add");
	
	$.ajax({
		type : 'post',
		dataType : "json",
		url : 'http://192.168.119.98/tp323/index.php/home/ota/query_all_models',
		success : function(data) {
			
			if(data != ""){
				var sid = document.getElementById("ddlResourceType");		
				sid.options.length=0;
				for(var i=0;i<data.length;i++)
					{								
					sid.options.add(new Option(data[i].name,i));
					}
			}
		}
	});
	


	$("button#firmware_btn_add_submit_btn")
			.click(
					function() {
					    
					    
						 //alert($("div#firmware_btn_add_body form").serialize());
						$.ajax({
									type : 'post',
									url : 'http://192.168.119.98/tp323/index.php/home/ota/create_version',
									data : 'model_name='+$("#ddlResourceType").find("option:selected").text()+'&'+$("div#firmware_btn_add_body form")
											.serialize(),
									success : function(data) {
										// your code
										// alert("提交成功");
									}
								});
					});

	
			$.ajax({
				type : 'post',
				dataType : "json",
				url : 'http://192.168.119.98/tp323/index.php/home/ota/query_all_models',
				success : function(data) {

				}
			});

			initFirmwareTable();

}

function initFirmwareTable() {
	// 先销毁表格
	$('#public_tab').bootstrapTable('destroy');
	// 初始化表格,动态从服务器加载数据
	$("#public_tab")
			.bootstrapTable(
					{
						method : "get", // 使用get请求到服务器获取数据
						url : "http://192.168.119.98/tp323/index.php/home/ota/query_all_versions", // 获取数据的Servlet地址
						striped : true, // 表格显示条纹
						pagination : true, // 启动分页
						pageSize : 5, // 每页显示的记录数
						pageNumber : 1, // 当前第几页
						pageList : [ 1, 5, 10 ], // 记录数可选列表
						search : true, // 是否启用查询
						// toolbar: '#toolbar',
						// showToggle:true, //是否显示详细视图和列表视图的切换按钮
						showColumns : true, // 显示下拉框勾选要显示的列
						showRefresh : true, // 显示刷新按钮
						detailView : true,
						sidePagination : "client", // 表示服务端请求
						detailFormatter : detailFormatter,
						// 设置为undefined可以获取pageNumber，pageSize，searchText，sortName，sortOrder
						// 设置为limit可以获取limit, offset, search, sort, order
						// queryParamsType : "undefined",
						// queryParams: function queryParams(params) { //设置查询参数
						// var param = {
						// pageNumber: params.pageNumber,
						// pageSize: params.pageSize,
						// orderNum : $("#orderNum").val()
						// };
						// return param;
						// },
						onLoadSuccess : function() { // 加载成功时执行
							// alert("加载成功");
						},
						onLoadError : function() { // 加载失败时执行
							alert("加载数据失败");
						},
						columns : [ 
						{
							field : 'model',
							title : '机型'
						}, {
							field : 'version',
							title : '版本号'
						}, {
							field : 'datetime',
							title : '创建时间'
						},{
							field : 'operate',
							title : '操作',
							align : 'center',
							events : firmwareOperateEvents,
							formatter : firmwareOperateFormatter
						},{
							field : 'diff_packet',
							title : '差分包',
							align : 'center',
							events : diffOperateEvents,
							formatter : diffOperateFormatter
						} ]
					});
}

function firmwareOperateFormatter(value, row, index) {
	return ['<a class="remove" href="javascript:void(0)" title="Remove">',
			'<i class="glyphicon glyphicon-remove"></i>', '</a>' ].join('');
}

window.firmwareOperateEvents = {
		'click .remove' : function(e, value, row, index) {
		$("#public_tab").bootstrapTable('remove', {
			field : 'id',
			values : [ row.id ]
		});

		$.ajax({
					type : 'post',
					data : {
						id : row.id
					},
					dataType : "json",
					url : 'http://192.168.119.98/tp323/index.php/home/ota/delete_version',
					success : function(data) {
						// your code
						alert("删除成功");

					}
				});

	}
};

function diffOperateFormatter(value, row, index) {
	return ['<a class="diff" href="javascript:void(0)" title="Diff">',
			'<i class="glyphicon glyphicon-transfer"></i>', '</a>' ].join('');
}


window.diffOperateEvents = {
		'click .diff' : function(e, value, row, index) {
		$("#public_tab").bootstrapTable('remove', {
			field : 'id',
			values : [ row.id ]
		});

		$.ajax({
					type : 'post',
					data : {
						id : row.id
					},
					dataType : "json",
					url : 'http://192.168.119.98/tp323/index.php/home/ota/delete_version',
					success : function(data) {
						// your code
						alert("删除成功");

					}
				});

	}
};



