var score=0
function score_update(){
score=score+1
document.getElementById("score").innerHTML= "Score: "+score
}
function score_save(){
localStorage.setItem("scorie",score)
}
function page_next(){
window.location="activity_2.html"
}
