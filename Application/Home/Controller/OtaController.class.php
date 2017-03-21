<?php

namespace Home\Controller;
use Think\Controller;

class OtaController extends Controller {
	
	public function Ota()
	{
		return $this->fetch();
	}
	
	public function create_model()
	{
		// 实例化User模型
		$User = M('model');
		// 根据表单提交的POST数据创建数据对象
		$User->create();
		$data['name'] = $_POST['modelname'];
		//var_dump($data);
		$User->add($data);
	}
	
	public function query_all_models()
	{
		$User = M('model');
		$list = $User->select();
		
		$this->ajaxReturn($list);

	}
	
	public function delete_model()
	{
		$User = M('model');
		$User->delete($_POST['id']);
		
	}
	
	public function select_model()
	{
		$User = M('model');
		$data = $User->where('status=1 AND name="thinkphp"')->find();
		dump($data);
	}
	
	
	public function create_version()
	{
		// 实例化User模型
		$User = M('firmware_version');
		// 根据表单提交的POST数据创建数据对象
		$User->create();
		$data['model'] = $_POST['model_name'];
		$data['version'] = $_POST['version_name'];
		$data['datetime'] = date("Y-m-d H:i:s");
		//var_dump($data);
		$User->add($data);
	}
	
	public function query_all_versions()
	{
		$User = M('firmware_version');
		$list = $User->select();
	
		$this->ajaxReturn($list);
	
	}
	
	public function delete_version()
	{
		$User = M('firmware_version');
		$User->delete($_POST['id']);
	
	}
	
	
	
}