var myRequest = new XMLHTTPRequest();
myRequest.open("GET", "https:/jsonplaceholder.typicode.com/todos)
myRequest.onload(
        function myFunction(){
		   var data = JSON.parse(myRequest.responseText);
		   console.log(data[0])
	}
myRequest.send();