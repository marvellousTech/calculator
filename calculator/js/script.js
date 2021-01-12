function insert(num){
			document.form.textarea.value = document.form.textarea.value + num;
		}
		document.getElementById("demo1").onclick = function(){
			document.form.textarea.value = "";
		}
		document.getElementById("demo2").onclick = function(){
			document.form.textarea.value = "";
		}
		function back(){
			var back = document.form.textarea.value;
			document.form.textarea.value = back.substring(0, back.length -1);
		}
		function equal(){
			var exp = document.form.textarea.value;
			document.form.textarea.value = eval(exp);
		}
		function squareRoot(){
			var exp1 = document.form.textarea.value;
			document.form.textarea.value = "square root: " + Math.sqrt(exp1).toFixed(4);
		}