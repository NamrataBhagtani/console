
	name_of_the_student_array =[];// to create empty array
	
	function submit()
	{
        
        var name_1 = document.getElementById("name_of_the_student_1").value;  //store the inputs from user in a new variable
        var name_2 = document.getElementById("name_of_the_student_2").value;
        var name_3 = document.getElementById("name_of_the_student_3").value;
        var name_4 = document.getElementById("name_of_the_student_4").value;

        name_of_the_student_array.push(name_1); // push the new variable in empty array
        name_of_the_student_array.push(name_2);
        name_of_the_student_array.push(name_3);
        name_of_the_student_array.push(name_4);

		console.log(name_of_the_student_array);
		
        document.getElementById("display_name").innerHTML = name_of_the_student_array; // to display the values stored in array
        document.getElementById("submit_button").style.display = "none";// to hide submit button
        document.getElementById("sort_button").style.display = "inline-block"; // to bring sort button on top

	}

function sorting()
{
	name_of_the_student_array.sort();// sorting alphabetically
    console.log(name_of_the_student_array);
	document.getElementById("display_name").innerHTML = name_of_the_student_array; //display sorted names
}
