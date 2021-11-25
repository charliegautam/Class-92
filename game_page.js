player_name1=localStorage.getItem("player1");
player_name2=localStorage.getItem("player2");
player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML = player_name1 + " : ";
document.getElementById("player2_name").innerHTML = player_name2 + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question Turn - "+player_name1;
document.getElementById("player_answer").innerHTML = "Answer Turn - "+player_name2;

function send(){
word = document.getElementById("word").value;
new_word = word.toLowerCase();
console.log("word in lowercase is "+new_word)

charAt1 = new_word.charAt(1);
console.log(charAt1);

length = Math.floor(new_word.length/2);
charAt2 = new_word.charAt(length);
console.log(charAt2);

length_minus_1 = new_word.length-1;
charAt3 = new_word.charAt(length_minus_1);
console.log(charAt3);

remove_charAt1 = new_word.replace(charAt1,"_");
remove_charAt2 = remove_charAt1.replace(charAt2,"_");
remove_charAt3 = remove_charAt2.replace(charAt3,"_");

question_word = "<h4 id='word_display'>Q."+remove_charAt3+"</h4>";
input = "<br> Answer: <input type='text' id='answer'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_word + input + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}

question_turn = "player1";
answer_turn = "player2";
function check(){
    get_word = document.getElementById("answer").value;
    answer = get_word.toLowerCase();
    console.log("answer in lowercase = "+ answer);

    if (answer == new_word){
        if (answer_turn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if (question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - "+player_name2;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - "+player_name1;
    }
    if (answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - "+player_name2;
    }
    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - "+player_name1;
    }
    document.getElementById("output").innerHTML = "";
}

