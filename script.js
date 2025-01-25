function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let number =0;
	let flag =0;
	let up_case =s1.toUpperCase();
	let sub_up_case =s2.toUpperCase();
	let fisrt_occ_sub = sub_up_case.charAt(0);
	for(let i=0;i<s1.length;i++){
		if(up_case.charAt(i)==fisrt_occ_sub){
	         number +=i;
			flag =1;
		}
	}
	if(flag!=0){
	return number;
		}
	else{
      return -1;
	}
	
}


// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
