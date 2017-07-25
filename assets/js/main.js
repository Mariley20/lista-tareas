//document javascript
var tareas = [
  {
    "id": 1,
    "title": "delectus aut autem",
  },
  {
    "id": 2,
    "title": "quis ut nam facilis et officia qui"
  },
  {
    "id": 3,
    "title": "fugiat veniam minus"
  },
  {
    "id": 4,
    "title": "et porro tempora"
  },
  {
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum"
  },
  {
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis"
  },
  {
    "id": 7,
    "title": "illo expedita consequatur quia in"
  },
  {
    "id": 8,
    "title": "quo adipisci enim quam ut ab"
  },
  {
    "id": 9,
    "title": "molestiae perspiciatis ipsa"
  },
  {
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut"
  }]

imprimirHTML();
var tachar_id;

function imprimirHTML (){
  var tareaHtml = "";
  for(var i = 0; i < tareas.length; i++){
 	tareaHtml += "<li id='"+tareas[i].id+"'>"+tareas[i].id+"- "+tareas[i].title+"</li>";
}
  listaTarea.innerHTML = tareaHtml;
  
}

var filas = document.getElementsByTagName('li');
	for(var i = 0; i < filas.length; i++){
		filas[i].addEventListener('click', function(event){
			tachar_id = event.target.id
			document.getElementById(tachar_id).style.textDecoration = "line-through";
		console.log(tachar_id);
	});
}

var agregarTarea = document.getElementById('agregarTarea');
agregarTarea.onclick = function(){
	var tareaNueva = document.getElementById('tarea').value;
	if(tareaNueva != ""){
		tareas[tareas.length] = {
			"id" : tareas.length + 1,
			"title" : tareaNueva
		}
		console.log(tareas);
	}
	imprimirHTML();
}
