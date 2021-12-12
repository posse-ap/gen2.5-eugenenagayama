var title = '<p class="quiz_title">ガチで東京の人しか解けない！ #東京の難読地名クイズ</p>'

'<div class="quiz">'
    '<h1>1.この地名はなんて読む？</h1>'
    '<img src="image/1.png">'
    '<ul>'
        '<li id="answerlist_1_1" name="answerlist_1" class="answerlist" onclick="check(1,1,2)">こうわ</li>'
        '<li id="answerlist_1_2" name="answerlist_1" class="answerlist" onclick="check(1,2,2)">たかなわ</li>'
        '<li id="answerlist_1_3" name="answerlist_1" class="answerlist" onclick="check(1,3,2)">たかわ</li>'
        '<li id="answerbox_1" class="answerbox">'
            '<span id="answertext_1"></span><br>'
            '<span>正解は「たかなわ」です！</span>'
        '</li>'
    '</ul>'
'</div>'

'<div class="quiz">'
    '<h1>2.この地名はなんて読む？</h1>'
    '<img src="image/kameido.png">'

'</div>'



const false1 = document.getElementById("false1");
const true1  = document.getElementById("true1");
const true2  = document.getElementById("true2");




// document.getElementById("text-button1").onclick = function() {
//     const takawa =  document.getElementById("text-button1")

//     false1.style.display="block";
//     takawa.style.background ="red";
//     takawa.style.color = "white";
//   };


// document.getElementById("text-button2").onclick = function() {
//     const kouwa =  document.getElementById("text-button2")

//     false1.style.display="block";
//     kouwa.style.background ="red";
//     kouwa.style.color = "white";
//   };


// document.getElementById("text-button3").onclick = function() {
    
//     const takanawa =  document.getElementById("text-button3")
//     true1.style.display="block";
//     true2.style.display="inline-block";
//     takanawa.style.background ="blue";
//     takanawa.style.color = "white";
//   };
var button = document.getElementById("text-button3");

    function js_alert(){
    true1.style.display="block";
    true2.style.display="inline-block";
    button.style.background ="blue";
    button.style.color = "white";
}


var button1 = document.getElementById("text-button1");
var button2 = document.getElementById("text-button2");

    function js_alert1(){
    true1.style.display="block";
    true2.style.display="inline-block";
    button1.style.background ="red";
    button1.style.color = "white";
}

    function js_alert2(){
    true1.style.display="block";
    true2.style.display="inline-block";
    button2.style.background ="red";
    button2.style.color = "white";
}