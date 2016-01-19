var	ti_obj = document.getElementById("ti");
var sp_1_obj = document.getElementById("sp_1");
var div_table_obj = document.getElementById("table"),trap=0;
var but_1_obj = document.getElementById("but_1"),
 	but_2_obj = document.getElementById("but_2"),
 	but_3_obj = document.getElementById("but_3"),
 	but_4_obj = document.getElementById("but_4"),n,m;
var inp_1_obj = document.getElementById("inp_1"),
 	inp_2_obj = document.getElementById("inp_2"),t;

function log10(arg) {  
    return Math.log(arg)/Math.log(10);  
}

function start(){
	ti_obj.innerHTML = "ПРИВЕТ";
}

but_1_obj.onclick = function but_1_click(){
	ti_obj.innerHTML = "Кнопка нажата";
}
but_2_obj.onclick = function but_2_click(){
	sp_1_obj.innerHTML = "Кнопка 2 нажата";
}
but_3_obj.onclick = function but_3_click(){
 if(trap==0){
	var tbody = document.createElement('tbody'),i,j,tr,td;

	t = document.createElement('table');
 	n = inp_1_obj.value,
 	m = inp_2_obj.value;
	for (i = 0;i<n;i++) {
    	tr = document.createElement('tr');
		for (j = 0;j<m;j++) {
    		td = document.createElement('td');
    		td.innerHTML = i + j;
    		tr.appendChild(td);
		}
	tbody.appendChild(tr);
	}
	t.appendChild(tbody);
	div_table_obj.appendChild(t);
	t.id = "tab_1";
	trap=1;
 }
}

but_4_obj.onclick = function but_4_click(){
	var i,j,z;
	znm=Math.ceil(log10(n*m));
	for (i = 0; i < n; i++) {
		for (j = 0; j < m;  j++) {
			if(i==0) z=j;
			else z = i / j;
			t.rows[i].cells[j].innerHTML ="&nbsp;" + z.toFixed(3);
		}
	}
}
