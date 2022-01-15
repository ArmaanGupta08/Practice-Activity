function get_score(){
    var score=localStorage.getItem("scorie")
document.getElementById("score").innerHTML="Score: "+score  
}
function back(){
    window.location="activity_1.html"
}