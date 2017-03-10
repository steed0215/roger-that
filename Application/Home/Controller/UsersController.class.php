<?php

namespace Home\Controller;
use Think\Controller;

/**
 * Class UsersController
 * @package Home\Controller
 */
class UsersController extends Controller {
	/**
	 * get users list
	 */
	public function Users()
	{

	}

	public function getUserInfo()
	{
		//$q=$_GET["q"];
		//$list = M('users')->where('id='.$q)->select();
		$list = M('users')->where('Hometown="Quahog"')->select();
		//echo "steed is great!";
		var_dump($list);
		//echo '不统计多维数组：'.count($list,0);//count($arr,COUNT_NORMAL)
		//echo "<br/>";
		//echo '统计多维数组：'.count($list,1);//count($arr,COUNT_RECURSIVE)
			

		$count=count($list,0);
/*
		echo "<table border='1'>
			<tr>
			<th>Firstname</th>
			<th>Lastname</th>
			<th>Age</th>
			<th>Hometown</th>
			</tr>";
			
		for ($x=0; $x<$count; $x++) {
			echo "<tr>";
			echo "<td>" . $list[$x]['firstname'] . "</td>";
			echo "<td>" . $list[$x]['lastname'] . "</td>";
			echo "<td>" . $list[$x]['age'] . "</td>";
			echo "<td>" . $list[$x]['hometown'] . "</td>";
			echo "</tr>";
		}
			
		echo "</table>";
*/

			
	}
}