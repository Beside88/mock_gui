// <table>
//   <tr>
//     <th>Firstname</th>
//     <th>Lastname</th> 
//     <th>Points</th>
//   </tr>
//   <tr>
//     <td>Eve</td>
//     <td>Jackson</td> 
//     <td>94</td>
//   </tr>
// </table>
$(document).ready(function() {
	var $tableElement;
	var $dataModel = [];
	var $currentRows = 0;
	// Draw table method
	var renderTable = function(data,numberOfRows,button) {
		$tableElement = $('<table class="ui celled padded table">');
		// var $td = $('td');
		try{
			var keys = Object.keys(data[0]);
			// Create the header
			$tr = $('<tr>');
			for(var i=0; i <keys.length; i++) {
				var key = keys[i];
				var $th = $('<th class="single line">').attr('id', "header-" +i);
				// var $icon = $('<i class="folder icon">');
				// $th.append($icon);
				$tr.append($th.text(key.toUpperCase()));
			}

			$tableElement.append($tr);

			// Adding data to the table
			// var part = data.slice(0, numberOfRows);
			for (var i=0;i<numberOfRows;i++) {
				var $tr = $('<tr>');
				for (var j=0;j<keys.length;j++) {
					var key = keys[j];
					// console.log(key); 
					var $td = $('<td>').attr('id',key+"-"+i);
		        	$tr.append($td.text(data[i][key]));

				}
				// console.log(lastId);
		        $tableElement.append($tr);
			}
			$tableElement.appendTo('#container');
			$(button).removeClass("ui loading button").addClass("compact ui button");
		}

		catch(err) {
			$(button).removeClass("ui loading button").addClass("compact ui button");
    		console.log("Input Field is Empty");
			confirm("Please input the number of rows to be drawn");
		}




	};

	// Draws the table when loaded the page initially 
	$.get('http://jsonplaceholder.typicode.com/posts', function(response) {
		$dataModel = response.slice(0,5)
		renderTable(response, $dataModel.length);
	});

	// $.get('http://jsonplaceholder.typicode.com/posts', function(response) {
	// 	console.log('done');
	// });
	// console.log('here');


	// $.get('http://jsonplaceholder.typicode.com/albums', function(response) {
	// 	renderTable(response);
	// });

	var userId = 1;
	var newTitle = "Hello World";
	var newBody = "Have a great day";
	var newId = 101;
	var row = { id: newId, userId: userId, title: newTitle, body: newBody};

	// $dataModel = $.extend[posts, {uid: userId, id: newId, title: newTitle, body: newBody}];


	// Gets the data from the data table - JSON
	var getData = function(numberOfRows,button) {
		$.get('http://jsonplaceholder.typicode.com/posts', function(response) {
			// Limit the response based on number of rows
			$dataModel = response.slice(0,numberOfRows);
			// $dataModel.push(newRow);
			console.log($dataModel);
			console.log($dataModel.length);
			$tableElement.hide();
			$table = renderTable($dataModel,$dataModel.length,button);
		});
	};

	// Redrawn the table when the Regraw button is clicked
	$('#redrawbutton').on('click', function() {
		console.log('clicked!');
		button = $(this);
		$(button).removeClass("compact ui button").addClass("ui loading button");
		var numberOfRows = parseInt($('#numberrows').val());
		if(numberOfRows == 0 || numberOfRows.length == 0){
			$(button).removeClass("ui loading button").addClass("compact ui button");
			console.log("Input value is '0' or empty");
    		confirm("Please enter a valid number Of rows inside the text field");
		}
		else{
			$currentRows = numberOfRows;
			console.log(numberOfRows);
			getData(numberOfRows,button);
		}


	});

	// Adds a new random row to the end of the table
	$('#add-row').on('click', function(){
		console.log('Add Random Row is clicked!');
		button = $(this);
		$(button).removeClass("compact ui button").addClass("ui loading button");
		$.get('http://jsonplaceholder.typicode.com/posts', function(response) {
			if($('#hide-button').text() == "Hide Table"){
				// Limit the response based on number of rows
				// $dataModel = response.slice(0,$currentRows);
				$dataModel.push(row);
				console.log($dataModel);
				console.log($dataModel.length);
				$tableElement.hide();
				$table = renderTable($dataModel,$dataModel.length,button);
			}
			else{
				console.log("Table is hidden");
    			confirm("Table is hidden , make sure the table is visible to perform this operaion");
			}	
		});
	});

	// Remove the last row when the remove last row button is clicked
	$('#remove-last-row').on('click', function(){
		console.log('Add Random Row is clicked!');
		$.get('http://jsonplaceholder.typicode.com/posts', function(response) {
			// Limit the response based on number of rows
			// $dataModel = response.slice(0,$currentRows);
			if($('#hide-button').text() == "Hide Table"){
				try { 
					$dataModel.pop($dataModel.length-1);
	    			console.log($dataModel);
					console.log($dataModel.length);
					$tableElement.hide();
					$table = renderTable($dataModel,$dataModel.length);
	    		}
	    		catch(err) {
	        		console.log("Table is empty ");
    				confirm("Table is Empty , Please reload or Redraw");
	    		}
    		}
    		else{
    			console.log("Table is hidden");
    			confirm("Table is hidden , make sure the table is visible to perform this operaion");
    		}

		});
	});	

	$('#submit-row').on('click', function(){
		console.log('Submit Details button is clicked!');
		button = $(this);
		$(button).removeClass("compact ui button").addClass("ui loading button");
		var userId1 = parseInt($('#NewuserID').val());
		// console.log(userId1);
		var newTitle1 = $('#NewTitle').val();
		// console.log(newTitle1);
		var newBody1 = $('#NewBody').val();
		// console.log(newBody1);
		var NewId1 = parseInt($('#NewID').val());
		// console.log(NewID1);
		var row1 = { id: NewId1, userId: userId1, title: newTitle1, body: newBody1};
		// console.log(row1);

		$.get('http://jsonplaceholder.typicode.com/posts', function(response) {
			if($('#hide-button').text() == "Hide Table"){
				// Limit the response based on number of rows
				// $dataModel = response.slice(0,$currentRows);
				$dataModel.push(row1);
				console.log($dataModel);
				console.log($dataModel.length);
				$tableElement.hide();
				$table = renderTable($dataModel,$dataModel.length,button);
			}
			else{
				console.log("Table is hidden");
    			confirm("Table is hidden , make sure the table is visible to perform this operaion");
			}	
		});
	});


	var hideTable = function(){
		// $tableElement2 = $tableElement
		if($('#hide-button').text() == 'Hide Table'){
			$tableElement.hide();
			$('#hide-button').text('Show Table').append('<i class="unhide icon">');
			// $('#hide-button i').addClass('.unhide icon');

		}
		else{
			$tableElement.show();
			$('#hide-button').text("Hide Table").append('<i class="hide icon">');			
		}
		// $tableElement2.show();
	}; 

	// Hides the table when the hide table button is clicked and vice versa
	$('#hide-button').click(function() {
	   	console.log($(this).text());
	   	hideTable();
	});
	// Executed when the user click on an element

	// console.log($dataModel);

	console.log(row);
	// renderTable($dataModel,$dataModel.length);


});



// Experimental code
// var Table = function() {
// 	var _table = {};

	// options.data has the table rows data
// 	_table.draw = function(data, $targetElement) {
// 		var $tableElement = $('<div>').text('hello world');

// 		// $targetElement.empty();
// 		$targetElement.append($tableElement);
// 	};

// 	_table.test = function() {
// 		console.log('I exist');
// 	};

// 	return _table;
// };



// Use the table
// var table = new Table({data: [ 
// 		{name: 'john', age: 20},
// 		{name: 'test', age: 21}
// 	]
// });

// table.draw($('#container'));

// Add rows depending on user input


// (function() {
// 	var dfsadf = 5;

// 	var Table 


// })();