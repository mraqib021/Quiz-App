var question = [
    {
        Question : "What's Come After 'A' "
   },
   {
        Question : "What's Come After 'f' "
}
]
var q = document.getElementById("Q")
var h5 = document.createElement("h5");
q.appendChild(h5);
q.innerHTML =("Q No 1 : " + question[1].Question)
console.log(q)
function next(){
}