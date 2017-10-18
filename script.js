var s ="";
var n = 0;
var operator = ["+","-","*","/"];
for(var i = 0; i <=9; i++){
	button = document.getElementById(i+"");
	button.addEventListener("click", function(){
		if(s.length <= 10){
			s+=this.innerText;
			content.value = s;
		}
	});
}
plus  = document.getElementById("+");
dot  = document.getElementById(".");
minus  = document.getElementById("-");
equals = document.getElementById("=");
divide = document.getElementById("/");
time = document.getElementById("x");
plus.addEventListener("click", function(){
	s = s+"+";
	content.value = s;
	
});
dot.addEventListener("click", function(){
	s = s+".";
	content.value = s;
	
});
minus.addEventListener("click", function(){
	s = s+"-";
	content.value = s;
});
time.addEventListener("click", function(){
	s = s+"*";
	content.value = s;
});
divide.addEventListener("click", function(){
	s = s+"/";
	content.value = s;
});
equals.addEventListener("click", function(){
	s = calcul(s);
	content.value = s;
	
});
function calcul(s){
	var i = 0;
	var j = 0;
	var n = 0;
	var tmp = 0;
	while((n = s.indexOf("*")) != -1){
		i = leftNumber(s,n);
		j = rightNumber(s,n);
		tmp = parseFloat(s.substring(i,n),10)*parseFloat(s.substring(n+1,j+1),10);
		if(j == s.length -1 && i != 0 ){
			s = s.substring(0,i) +tmp;
		}

		else if(i == 0 && j != s.length -1){
			s  = tmp +s.substring(j+1,s.length);
		}else if(i == 0 && j == s.length-1){
			s = tmp +"";
		}else{
		s = s.substring(0,i)+tmp+s.substring(j+1,s.length);
		}
		
	}
	while((n = s.indexOf("+")) != -1){
		i = leftNumber(s,n);
		j = rightNumber(s,n);
		tmp = parseFloat(s.substring(i,n),10)+parseFloat(s.substring(n+1,j+1),10);
		if(j == s.length -1 && i != 0 ){
			s = s.substring(0,i) +tmp;
		}

		else if(i == 0 && j != s.length -1){
			s  = tmp +s.substring(j+1,s.length);
		}else if(i == 0 && j == s.length-1){
			s = tmp +"";
		}else{
		s = s.substring(0,i)+tmp+s.substring(j+1,s.length);
		}
		
	}
	while((n = s.indexOf("-")) != -1){
		i = leftNumber(s,n);
		j = rightNumber(s,n);
		tmp = parseFloat(s.substring(i,n),10)-parseFloat(s.substring(n+1,j+1),10);
		if(j == s.length -1 && i != 0 ){
			s = s.substring(0,i)+tmp;
		}

		else if(i == 0 && j != s.length -1){
			s  = tmp +s.substring(j+1,s.length);
		}else if(i == 0 && j == s.length-1){
			s = tmp +"";
		}else{
		s = s.substring(0,i)+tmp+s.substring(j+1,s.length);
		}
		
	}
	while((n = s.indexOf("/")) != -1){
		i = leftNumber(s,n);
		j = rightNumber(s,n);
		tmp = parseFloat(s.substring(i,n),10)/parseFloat(s.substring(n+1,j+1),10);
		if(j == s.length -1 && i != 0 ){
			s = s.substring(0,i)+tmp;
		}

		else if(i == 0 && j != s.length -1){
			s  = tmp +s.substring(j+1,s.length);
		}else if(i == 0 && j == s.length-1){
			s = tmp +"";
		}else{
		s = s.substring(0,i)+tmp+s.substring(j+1,s.length);
		}
		
	}
	return s;
}
function leftNumber(s, i){
	var j = i-1;
	while(j>=0 && operator.indexOf(s.substring(j,j+1)) == -1){
		j--;
	}
	return j+1;
}
function rightNumber(s, i){
	var j = i+1;
	while(j<s.length && operator.indexOf(s.substring(j,j+1)) == -1){
		j++;
	}
	return j-1;
}