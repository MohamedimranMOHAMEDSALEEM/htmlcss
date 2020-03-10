<!DOCTYPE html>
<html>
<body>

<h3>SElECT THE DATE</h3>

<input type="date" id="startDate" value="yyyy-mm-dd">
<p>TO</p>
<input type="date" id="endDate" value="yyyy-mm-dd">
<h3>Click Here To See The Date....</h3>
<button onclick="myFunction()">Try it</button>
<h1 id="demo1"></h1>
<h1 id="demo2"></h1>
<h1 id="demo3"></h1>
<script>
function myFunction() {
  var x = document.getElementById("startDate").value;
  var y = document.getElementById("endDate").value;
  document.getElementById("demo1").innerHTML = x;
  document.getElementById("demo2").innerHTML = y;
  var n = document.getElementById("startDate").getDate();
  document.getElementById("demo3").innerHTML = n;
}
</script>

</body>
</html>
