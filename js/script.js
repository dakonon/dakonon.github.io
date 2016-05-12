$(document).ready(function(){
	$('#language').on('change',function(){
		var language = $('#language option:selected').attr('value')
		var lista = $('.nav li a');
		var secciones = $('section h2');
		var table_head = $('.table-responsive th');
		$.each(lista,function(i,value){
			var a = value;
			a.text = data[language].menu[i];
		});
		$.each(secciones,function(i,value){
			var a = value;
			console.log(a);
			a.innerHTML = data[language].seccion[i];
		});
		$.each(table_head,function(i,value){
			if(i%2==0)
			{
				var a = value;
				a.innerHTML = data[language].menu_head[0];
			}
			else
			{
				var a = value;
				a.innerHTML = data[language].menu_head[1];
			}
		});
	});
});
