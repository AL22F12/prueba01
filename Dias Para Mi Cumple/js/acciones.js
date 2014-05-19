// JavaScript Document
$(document).ready(function(e) {
	var Nombre;
	$('#Siguiente_Nombre').click(function(e){
  Nombre=$('#TxtNombre').val();
  alert(nombre);  
});//click siguiente nombre

$('#Siguiente_Fecha').click(function(e){
	
	var Fecha = new Date();
	alert(Fecha.getDate());
	alert(Fecha.getMonth());
	alert(Fecha.getFullYear());

	var FechaA =new Date(Fecha.getFullYear()+'/'+(Fecha.getMonth()+1)+'/'+Fecha.getDate());
		alert(FechaA);
		var DiaC = $('#DiaCumple').val();
		var MesC = $('#MesCumple').val();
		var YearC = $('#YearCumple').val();
		
		
		var fechaC =new Date(Fecha.getFullYear()+'/'+MesC+'/'+DiaC);
		var fechaCA = fechaC;
				alert(fechaC);
		if(fechaC < FechaA)
		{
			var fechaC =new Date ((Fecha.getFullYear()+1)+'/'+MesC+'/'+DiaC);
		}
  		    result=fechaC-FechaA;
			alert(result);
			Total=((((result/1000)/60)/60)/24);
			alert(Total);
			
			$('#MNombre').text(Nombre + ' Faltan');
			$('#MDias').text(Total);
			if(Total==1)
			{
				$('MCumple').text('Dia para tu Cumpleaños');
			}
			else
			{
				$('#MCumple').text('Dias para tu cumpleaños');
			}
			$('#MFelicidades').text('Felicidades!')
			
			var Edad=Fecha.getFullYear()-YearC;
			
			if (fechaCA > FechaA)
			{
				Edad = Edad - 1;
				
			}
			
		$('#MEdad').text(' Tienes ' + Edad + ' ños de Edad'); 

});//click siguiente fecha
});//click ready
