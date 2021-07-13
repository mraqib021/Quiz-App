var questions = [
    {
        question: "What Come after 'A'",
        Option: ["C", "E", "B", "I"],
        ans: 2
    },
    {
        question: "What Come after 'I'",
        Option: ["R", "H", "M", "J"],
        ans: 3
    },
    {
        question: "What Come after 'P'",
        Option: ["C", "Q", "B", "M"],
        ans: 1
    },
    {
        question: "What Come after 'T'",
        Option: ["A", "E", "U", "W"],
        ans: 2
    },
    {
        question: "What Come after 'Q'",
        Option: ["R", "E", "Z", "I"],
        ans: 0
    },
    {
        question: "What Come after 'W'",
        Option: ["Z", "S", "B", "X"],
        ans: 3
    },
    {
        question: "What Come after 'K'",
        Option: ["L", "M", "J", "O"],
        ans: 0
    },
    {
        question: "What Come after 'Y'",
        Option: ["X", "Z", "V", "R"],
        ans: 1
    },
    {
        question: "What Come after 'D'",
        Option: ["C", "E", "B", "I"],
        ans: 1
    },
    {
        question: "What Come after 'O'",
        Option: ["R", "E", "P", "I"],
        ans: 2
    },
]

// var count = document.getElementById("countdown");
// var mint = 1;
// var sec = 59
// var x = setInterval(function()  {
//     y = mint
//     z = sec--
//     count.innerHTML = ( y + ":"+  z);
//         if (z == 0 ){
//             y--
//             z = 59
//             count.innerHTML = ( y + ":" + z--);
//         }else if (z < 10){
//             count.innerHTML = ( y + ":" + 0 + sec);
//         }
// },1000)


var index = 0;
var score = 0;
var totalq = questions.length;


var container = document.getElementById("main");
var nxt = document.getElementById("next");
var q = document.getElementById("q");
var opt1 = document.getElementById("option1");
var opt2 = document.getElementById("option2");
var opt3 = document.getElementById("option3");
var opt4 = document.getElementById("option4");
var result = document.getElementById("result");


q.innerHTML = ("Q No "+ " : " + questions[index].question + "?");
opt1.innerHTML = (questions[0].Option[0]);
opt2.innerHTML = (questions[0].Option[1]);
opt3.innerHTML = (questions[0].Option[2]);
opt4.innerHTML = (questions[0].Option[3]);


function next() {
    q.innerHTML = ("Q No : "+ questions[index].question + "?");
    opt1.innerHTML = (questions[index].Option[0]);
    opt2.innerHTML = (questions[index].Option[1]);
    opt3.innerHTML = (questions[index].Option[2]);
    opt4.innerHTML = (questions[index].Option[3]);
};

function nextQ() {
    var x = document.querySelector('input[type=radio]:checked');
    if (!x){
        alert("Lollly")
        return
    }
    var answer = x.value;
    console.log(answer)
    if(questions[index].ans == answer){
        score += 10;
    }
    x.checked  = false;
    index++;
    if(index == totalq - 1){
        nxt.textContent = "Finish";
    }
    if(index == totalq){
        container.style.display="none"
        nxt.style.display="none";
        result.style.display="";
        result.textContent = "Your Score Is : "+ score;
        return;
    }
    next()
}
next(); 