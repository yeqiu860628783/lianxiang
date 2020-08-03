<?php
header("content-type","text/html;charset=utf-8");
//1接收数据
$username = $_GET["username"];
//2、在数据库中查询
//1)、建立连接，并选择数据库
$conn = mysqli_connect("localhost","root","", 'shoppingcenter');
 //2)、执行SQL语句（查询）
$sqlStr="select * from vip where username='$username'";
$result=mysqli_query($conn,$sqlStr); 
//3、响应结果
//获得$result的行数
$rows = [];
while ($row = mysqli_fetch_assoc($result)) {
	$rows[] = $row;
};
$rowslength = count($rows); // 获取数组长度

//3)、关闭连接
mysqli_close($conn);
if ($rowslength > 0) { 
	echo json_encode($rows,JSON_UNESCAPED_UNICODE);
}else{  
	echo '没有查询的数据！'; 
}
?>