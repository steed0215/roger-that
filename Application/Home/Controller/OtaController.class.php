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
	
	public function upload(){
		//$id=$_POST['id'];
		//\Think\Log::record('id=');
		//\Think\Log::record($id);
		$upload = new \Think\Upload();// 实例化上传类
		$upload->maxSize   =     0 ;// 设置附件上传大小
		$upload->exts      =     "";// 设置附件上传类型
		$upload->rootPath  =     './'; // 设置附件上传根目录
		$upload->savePath  =     'Public/upload/'; // 设置附件上传（子）目录
		$upload->saveName = date('Y-m-d').'_'.mt_rand();//array('date','Y-m-d');
		$upload->autoSub = false;
		// 上传文件
		$info = $upload->upload();
		if(!$info) {// 上传错误提示错误信息
			//$this->error($upload->getError());
			\Think\Log::record('error!!!!!!!!');
			\Think\Log::record($info);
			\Think\Log::record($upload->getError());
		}else{// 上传成功
			//$this->success('上传成功！');
			\Think\Log::record('sucess!!!!!!!!');
			$model = M('package');
			$data['size'] = $info[0]['size'];
			$data['file_url'] = " http://192.168.119.98/tp323/".$info[0]['savepath'].$info[0]['savename'];

			//$model->where("id=$id")->save($data); // 根据条件更新记录
			$result = $model->add($data);
		}
		//$this->ajaxReturn(json_encode(new stdClass));
		$toClient['id']  = $result;
		$toClient['error']  = $upload->getError();
		$this->ajaxReturn($toClient);
	}
	
	public function create_diff()
	{
		
		$id=$_POST['id'];
		\Think\Log::record('id=');
		\Think\Log::record($id);
		// 实例化User模型
		$User = M('package');
		// 根据表单提交的POST数据创建数据对象
		$User->create();
		$data['source_version'] = $_POST['source_version'];
		$data['target_version'] = $_POST['target_version'];
		$data['status'] = 1;
		$data['description'] = $_POST['description'];
		$data['datetime'] = date("Y-m-d H:i:s");
		//var_dump($data);
		$User->where("id=$id")->save($data);
		
	}
	
	
	
	public function query_diffs()
	{
		$version=$_GET['version'];
		\Think\Log::record('version=');
		\Think\Log::record($version);
		$User = M('package');
		$list =  $User->where("target_version=".'"'.$version.'"')->select();
	
		$this->ajaxReturn($list);
	
	}
	
	public function change_status()
	{
	
		$id=$_POST['id'];

		$User = M('package');

		$User->create();

		$data['status'] = $_POST['status'];

		$User->where("id=$id")->save($data);
	
	}
	
	public function check_update()
	{
		$model_name = $_POST['model_name'];
		$source_version = $_POST['source_version'];
		//$model_name = "R3";
		//$source_version = "R3_D10_140901";
		$Model = D("OtaView");
		$list = $Model->where("source_version=".'"'.$source_version.'"'."AND model=".'"'.$model_name.'"')->select();
		//$list = $Model->where("source_version=$source_version AND model=$model_name")->select();

		//\Think\Log::record($Model->getLastSql());
		//var_dump($list);
		
		if($list != null){
		$tmpdate = $list[0]["datetime"];
		//\Think\Log::record($tmpdate);
		//\Think\Log::record(strtotime($tmpdate));
		$newest = 0;
		for($i=0;$i<count($list);$i++){
			//\Think\Log::record($i);
			if(strtotime($list[$i]["datetime"])>strtotime($tmpdate)){
				//\Think\Log::record('find bigger one!!!!');
				$newest = $i;
			}
		}
		}
		//\Think\Log::record('------------steed----------------');
		//var_dump($list[$newest]);
		
		$this->ajaxReturn($list[$newest]);

	}
	
	
}