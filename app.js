var title = '<p class="quiz_title">ガチで東京の人しか解けない! #東京の難読地名クイズ</p>'


const chooseBox = [
    ['たかなわ','こうわ','たかわ'],
    ['かめいど','かめと','かめど'],
    ['こうじまち','おかとまち','かゆまち'],
    ['おなりもん','おかどまん','ごせいもん'],
    ['とどろき','たたりき','たたら'],
    ['しゃくじい','せきこうい','いじい'],
    ['ぞうしき','ざっしき','ざっしょく'],
    ['おかちまち','みとちょう','ごしろちょう'],
    ['ししぼね','しこね','ろっこつ'],
    ['こぐれ','こばく','こしゃく']
]

const answerBox = [
    'たかなわ','かめいど','こうじまち','おなりもん','とどろき','しゃくじい','ぞうしき','おかちまち','ししぼね','こぐれ'
]

//シャッフル関数
function shuffle([...array]) {
    for (let h = array.length - 1; h >= 0; h--) {
      const j = Math.floor(Math.random() * (h + 1));
      [array[h], array[j]] = [array[j], array[h]];
    }
    return array;
}
chooseBox.map(shuffle);

// console.log(chooseBox[2])

for (let i = 0; i < chooseBox.length; i++) {

    let main = "";

    main+= 
    '<div class="quiz box-container">'
            +`<h2>${i+1}. この地名はなんて読む？</h2>`


            +`<div class="quiz-image-container">
                <img class="quiz-image" src=images1/${i+1}.png  alt="写真">
            </div>`
            +'<ul id="selection${i+1}">'
                +`<li id ="textButton1_${i+1}" >${chooseBox[i][1]}</li>`
                +`<li id ="textButton2_${i+1}" >${chooseBox[i][2]}</li>`
                +`<li id ="textButton3_${i+1}">${chooseBox[i][0]}</li>`
            +'</ul>'

            +`<div id="answer1_${i+1}" class="quiz-result">`
                +`<p id="true1_${i+1}"><span id="correctBox_${i+1}" class="true-box1">正解!</span>正解は${answerBox[i]}です!</p>`
            +'</div>'
            +`<div id="answer2_${i+1}" class="quiz-result">`
                +`<p id="true2_${i+1}"><span id="false1_${i+1}" class="false-box">不正解!</span>正解は${answerBox[i]}です!</p>`
            +'</div>'
    +'</div>';

document.getElementById('quizContainer').insertAdjacentHTML('beforeend',main);


    let falseAnswer = document.getElementById(`textButton1_${i+1}`);
    let answerMistake = document.getElementById(`textButton2_${i+1}`);
    let correctAnswer = document.getElementById(`textButton3_${i+1}`);

    let falseChoices = document.getElementById(`false1_${i+1}`);
    let trueChoices  = document.getElementById(`true1_${i+1}`);
    let trueSuggest = document.getElementById(`true2_${i+1}`);
    let trueBox = document.getElementById(`correctBox_${i+1}`);
    let answerContainer = document.getElementById(`answer1_${i+1}`);
    let falseMistake = document.getElementById(`answer2_${i+1}`);


    correctAnswer.addEventListener('click',() => { 
        trueChoices.style.display="block";
        trueBox.style.display="block";
        answerContainer.style.display="block";
        correctAnswer.style.background ="blue";
        correctAnswer.style.color = "white";
        falseAnswer.classList.add('notclick');
        answerMistake.classList.add('notclick');
    });



    
    falseAnswer.addEventListener("click",() => { 
        trueSuggest.style.display="block";
        falseChoices.style.display="block";
        falseMistake.style.display="block";
        falseAnswer.style.background ="red";
        falseAnswer.style.color = "white";
        correctAnswer.classList.add('notclick');
        answerMistake.classList.add('notclick');
    });
    
    answerMistake.addEventListener("click",() => { 
        trueSuggest.style.display="block";
        falseChoices.style.display="block";
        falseMistake.style.display="block";
        answerMistake.style.background ="red";
        answerMistake.style.color = "white";
        falseAnswer.classList.add('notclick');
        correctAnswer.classList.add('notclick');
    });
}