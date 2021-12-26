var title = '<p class="quiz_title">ガチで東京の人しか解けない! #東京の難読地名クイズ</p>'



// // document.getElementById("text-button1").onclick = function() {
// //     const takawa =  document.getElementById("text-button1")

// //     false1.style.display="block";
// //     takawa.style.background ="red";
// //     takawa.style.color = "white";
// //   };


// // document.getElementById("text-button2") = function() {
// //     const kouwa =  document.getElementById("text-button2")

// //     false1.style.display="block";
// //     kouwa.style.background ="red";
// //     kouwa.style.color = "white";
// //   };


// // document.getElementById("text-button3").onclick = function() {
    
// //     const takanawa =  document.getElementById("text-button3")
// //     true1.style.display="block";
// //     true2.style.display="inline-block";
// //     takanawa.style.background ="blue";
// //     takanawa.style.color = "white";
// //   };


// var button = document.getElementById("text-button3");

// function js_alert(){
//     true1.style.display="block";
//     trueBox.style.display="block";
//     answer.style.display="block";
//     button.style.background ="blue";
//     button.style.color = "white";
// }


// var button1 = document.getElementById("text-button1");
// var button2 = document.getElementById("text-button2");

// function js_alert1(){
//     true1.style.display="block";
//     makeMistake.style.display="block";
//     falseMistake.style.display="block";
//     button1.style.background ="red";
//     button1.style.color = "white";
// }

// function js_alert2(){
//     true1.style.display="block";
//     makeMistake.style.display="block";
//     falseMistake.style.display="block";
//     button2.style.background ="red";
//     button2.style.color = "white";
// }





const choosebox = [
    ['たかなわ','こうわ','たかわ'],
    ['かめいど','かめと','かめど'],
    ['こうじまち','おかとまち','かゆまち'],
    ['おなりもん','おかどまん','ごせいもん'],
]

const answerbox = [
    ['たかなわ','かめいど','こうじまち','おなりもん']
]

var boxContainer = document.createElement("div");
boxContainer.id='quizContainer';
document.body.appendChild(boxContainer);

let main = "";

for (let i = 0; i < choosebox.length; i++) {

    var button1 = document.getElementById(`text-button1_${i+1}`);
    var button2 = document.getElementById(`text-button2_${i+1}`);
    var button = document.getElementById(`text-button3_${i+1}`);

    const false1 = document.getElementById(`false1_${i+1}`);
    const true1  = document.getElementById(`true1_${i+1}`);
    const trueBox = document.getElementById(`correctBox_${i+1}`);
    const answer = document.getElementById(`answer1_${i+1}`);
    const falseMistake = document.getElementById(`answer2_${i+1}`);

    main+= 
    '<div class="quiz box-container">'
            +`<h2>${i+1}. この地名はなんて読む？</h2>`


            +`<div class="quiz-image-container">
                <img class="quiz-image" src=images1/${i+1}.png  alt="高輪">
            </div>`
            +'<ul>'
                +`<li id ="text-button1_${i+1}" >${choosebox[i][1]}</li>`
                +`<li id ="text-button2_${i+1}" >${choosebox[i][2]}</li>`
                +`<li id ="text-button3_${i+1}">${choosebox[i][0]}</li>`
            +'</ul>'

            +`<div id="answer1_${i+1}" class="quiz-result">`
                +`<p id="true1_${i+1}"><span id="correctBox_${i+1}" class="true-box1">正解!</span>正解は${answerbox[i]}です!</p>`
            +'</div>'
            +`<div id="answer2_${i+1}" class="quiz-result">`
                +`<p id="true1_${i+1}"><span id="false1_${i+1}" class="false-box">不正解!</span>正解は${answerbox[i]}です!</p>`
            +'</div>'
    +'</div>'

    button.addEventListener('click',() => { 
        true1.style.display="block";
        trueBox.style.display="block";
        answer.style.display="block";
        button.style.background ="blue";
        button.style.color = "white";
    });

    
    button1.addEventListener("click",() => { 
        true1.style.display="block";
        false1.style.display="block";
        falseMistake.style.display="block";
        button1.style.background ="red";
        button1.style.color = "white";
    });
    
    button2.addEventListener("click",() => { 
        true1.style.display="block";
        false1.style.display="block";
        falseMistake.style.display="block";
        button2.style.background ="red";
        button2.style.color = "white";
    });
}

document.getElementById('quizContainer').insertAdjacentHTML('beforeend',main);

