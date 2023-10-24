let question_turn = "player1";
let answer_turn = "player2";
let player1_score = 0; // You should declare and initialize player scores
let player2_score = 0;
let player1_name = "Player 1"; // You should declare player names
let player2_name = "Player 2";
let actual_answer = "correct_answer"; // You should define the correct answer

function check() {
    let get_answer = document.getElementById("input_check_box").value;

    if (get_answer == actual_answer) {
        if (answer_turn == "player1") {
            let update_player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        } else {
            let update_player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = update_player2_score;
        }
        if (question_turn == "player1") {
            question_turn = "player2";
            document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
        } else {
            question_turn = "player1";
            document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
        }
    }
}
