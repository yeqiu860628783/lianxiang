<?php
header('content-type:text/html;charset=utf8');
//2、在数据库中查询
//1)、建立连接，并选择数据库
$link = mysqli_connect("localhost","root","", "lianxiang");
mysqli_set_charset($link, 'utf8');
//2)、执行SQL语句（查询）
$sqlStr="select * from news";
$result = mysqli_query($link, $sqlStr);
$ar1 = [];
//遍历结果集中的所有信息
while ($row = mysqli_fetch_assoc($result)) {
    //把每条数据添加在数组中
    array_push($ar1, $row);
}
//3)、关闭连接
mysqli_close($link);
//把数组转为json字符串
echo json_encode($ar1);
?>

