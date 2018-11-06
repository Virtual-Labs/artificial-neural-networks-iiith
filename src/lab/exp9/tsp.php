<html>
<?php 
 $graph = $_POST["graph"];
 $Nnodes= $_POST["Nnodes"];
 $nodeloc = $_POST["nodeloc"];
 $initflag = $_POST["initflag"];
 $annealflag = $_POST["annealflag"];

/*
echo $Nnodes.'<br>';
echo $nodeloc.'<br>';
echo $initflag.'<br>';
echo $annealflag.'<br>';
echo $graph.'<br>';
*/

if($graph=='') $graph='4';
if($Nnodes=='') $Nnodes=4;
if($nodeloc=='') $nodeloc='[1 1;3 3;0 4;2 6]';
if($initflag=='') $initflag=0;
if($annealflag=='') $annealflag=0;

function InitGraph(){
global  $nodeloc;

$out=exec("rm -f tmp/*.png tmp/result.txt tmp/log*.txt 1> tmp/log1.txt 2>&1",$result,$status);

$cmd="octave --eval 'init_wmp(".$nodeloc.");quit;' 1> tmp/log2.txt 2>&1 ";
//sleep(1);
$out=exec($cmd,$status);
//echo $cmd.':'.$out.':'.$result.':'.$status;
}

function StartAnnealing(){
global $Nnodes, $nodeloc;

$cmd="octave --eval 'anneal_wmp_mean(".$nodeloc.");quit;' 1> tmp/log3.txt 2>&1 ";
$out=exec($cmd,$results,$status);
//echo $cmd.':'.$out.':'.$result.':'.$status;
}

?>

<script type="text/javascript">

function jsinit(){
	document.myform.initflag.value=1;
	//alert("I am here " + document.myform.graph.value);
}

function jsanneal(){
	document.myform.annealflag.value=1;
	document.myform.output.style.visibility='visible';
	//document.myform.currimage.src = 'images/g8bp.png';
}

function jsreset(){
	document.myform.initflag.value=0;
	document.myform.annealflag.value=0;
}

function jschangegraph(){

var N=document.myform.graph.value;
var i=0;
var rnum;
var nloc='[';
for(i=0;i<N;i=i+1){
	rnum = Math.round(Math.random()*10);
	nloc = nloc + rnum + ' ';
	rnum = Math.round(Math.random()*10);
	nloc = nloc + rnum + '; ';
}
nloc = nloc + ']';

	switch (document.myform.graph.value){
	case "new":
		document.myform.Nnodes.removeAttribute('readonly');
		document.myform.nodeloc.removeAttribute('readonly');
		document.myform.Nnodes.value='';
		document.myform.nodeloc.value='';
		break;
	default: 
		document.myform.Nnodes.setAttribute('readonly','readonly');
		document.myform.nodeloc.setAttribute('readonly','readonly');
		document.myform.Nnodes.value=document.myform.graph.value;
		document.myform.nodeloc.value=nloc;
		break;
	}
alert(document.myform.graph.value + nloc);

}

</script>

<form name="myform" action="<?php echo $_SERVER['PHP_SELF'];?>" method="post">

<h1> Weighted matching problem</h1>
<h3> Solution by mean-field annealing </h3>

<table>
<tr><td width=200>Select a graph:</td><td>
<select name=graph onchange="jschangegraph();" >
  <option value="4" <?php if($graph=='4') echo 'selected=selected';?> >Sample graph 1: 4 nodes</option>
  <option value="5"  <?php if($graph=='5') echo 'selected=selected';?> >Sample graph 2: 5 nodes</option>
  <option value="6" <?php if($graph=='6') echo 'selected=selected';?>>Sample graph 3: 6 nodes</option>
  <option value="7" <?php if($graph=='7') echo 'selected=selected';?>>Sample graph 4: 7 nodes</option>
  <option value="new" <?php if($graph=='new') echo 'selected=selected';?>>Create your own graph</option>
</select>
</td></tr>
<tr><td>No. of nodes:</td>
<td><input type=text name=Nnodes readonly value="<?php echo $Nnodes;?>"></td></tr>

<tr><td>Node locations:</td>
<td><input type=text size=80 name=nodeloc readonly value="<?php echo $nodeloc;?>"></td></tr>

</table>
<input type=submit value="Init" onclick="jsinit();">
<input type=submit value='Reset' onclick='jsreset();'>
<!--
<input type=hidden name=Anneal value="Anneal" onclick='jsanneal();'>
<br>

<table><tr>
<td><img name=input width=400 src=tmp/input.png style="visibility:hidden"></td>
<td><img name=output width=400 src=tmp/output.png style="visibility:hidden"></td>
-->
</tr></table>

<?php
//echo $initflag . ' ' . $annealflag;

if($initflag | $annealflag){
	echo "<input type=submit name=Anneal value=Anneal onclick='jsanneal();'>";
	echo '<table><tr align=center><td>';
	echo 'Input nodes<br>';
	echo '<img name=inputimage id=inputimage width=500 src="tmp/wmpinput.png" >';
	if($initflag){
		InitGraph();
	}
	if($annealflag){
		StartAnnealing();
		echo '<td>';
		echo 'Weighted matched pairs<br>';
		echo '<img name=outputimage id=outputimage width=500 src="tmp/wmpoutput.png" >';
		echo '</td>';
	}
	echo '</td></tr></table>';
	echo '<br><br>';
	if($annealflag){
		echo nl2br(implode('',file('tmp/result.txt')));
	}
}

?>

<input type="hidden" name="initflag" value=0>
<input type="hidden" name="annealflag" value=0>

</form>

</html>
