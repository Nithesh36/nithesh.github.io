var count;
var d;
var wrong;
let showans=document.getElementById('show');
let f=showans.addEventListener('click',(ev)=>{
	let g=document.getElementsByClassName('a');
for (let i=0;i<3;i++){

	//getelementsbyclassName return a nodelist ,so we need to iterate each item in a node list
	 g[i].style.visibility= 'visible';

		console.log(f);
	}
})


var checkans=document.getElementById('check');
var ff=checkans.addEventListener('click',()=>{
	 var v=document.querySelector('#ad')
	 let val=v.getAttribute('value');
	 var e = document.getElementById("select");
 var strUser = e.options[e.selectedIndex].value;

if(strUser==val){
 		document.getElementById('right').style.visibility='visible';
 		d=true;
 	}
 	
 	else
 		{ 		document.getElementById('wrong').style.visibility='visible';
 	 wrong=null;
	}


	
	

});


function change()
{
	if(d==true){
		var score=1;
		 document.getElementById("myButton1").value=score; 
	}
	else if(wrong==null){
		 document.getElementById("myButton1").value='0'; 
	}

   
}