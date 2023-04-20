function send(){
number_1 = document. getElementById("number_1").value;
number_2 = document .getElementById("number_2"). value;
actual_answer = parseInt (number_1) * parseInt (number_2);
question_number = "<h4>"+ number_1 + " X "+ number_2 +"</h4>";
text_input = "<input type='number' id='answer_input' class='form-control' placeholder='Enter the answer here'></input>";
check_button = "<button id='check_button' class='btn btn-info' onclick='check()'>CHECK</button>";
row = question_number + text_input + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("number_1").value = "";
document.getElementById("number_2").value = "";
}