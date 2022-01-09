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
const shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


for (let i = 0; i < chooseBox.length; i++) {

    const shuffleBoxes = shuffle([...chooseBox[i]]); //シャッフルした選択肢を要素とする新たな配列

    let main = "";

    main+= 
    '<div class="quiz box-container">'
            +`<h2>${i+1}. この地名はなんて読む？</h2>`


            +`<div class="quiz-image-container">
                <img class="quiz-image" src=images1/${i+1}.png  alt="写真">
            </div>`
            +`<ul class="choose-selection" id="selection${i+1}">`
            +'</ul>'
            + `<div class="result-box" id="result-box${i+1}">`
            + `<p class="answer" id="result${i+1}"></p>`
            + `<p class="answer-introduction" id="introduction${i+1}"></p>`
            + '</div>'
    +'</div>';

document.getElementById('quizContainer').insertAdjacentHTML('beforeend',main);


//ulに子要素であるliを追加して中身をシャッフルした選択肢にする&各選択肢に適切なclassとidをつける
shuffleBoxes.forEach(shuffleChoice => {
    const selection = document.getElementById(`selection${i+1}`);
    const li = document.createElement('li');
    li.className = 'choice';
    li.textContent = shuffleChoice;
    switch(shuffleChoice){
        case `${chooseBox[i][0]}`:
            li.id = `textButton1_${i+1}`;
            break;
        case `${chooseBox[i][1]}`:
            li.id = `textButton2_${i+1}-1`;
            break;
        default:
            li.id = `textButton3_${i+1}-2`;
    }
    selection.appendChild(li);
})


    const trueAnswer = document.getElementById(`textButton1_${i+1}`);
    const answerMistake = document.getElementById(`textButton2_${i+1}-1`);
    const correctAnswer = document.getElementById(`textButton3_${i+1}-2`);
    const resultbox = document.getElementById(`result-box${i+1}`); //正解の際に表示されるボックス
    const result = document.getElementById(`result${i+1}`); //「正解!」を表示する部分
    const introduction = document.getElementById(`introduction${i+1}`); //正解の場合に表示される説明文


//鹿骨だけは正解表示が異なるため条件分岐する
if (i == 8){
    trueAnswer.addEventListener('click',() => {
        trueAnswer.classList.add('succeed'); //正解の選択肢の背景を青、文字を白にする
        resultbox.style.display = 'block'; //正解表示
        result.textContent = '正解！';
        introduction.textContent = '江戸川区にあります。';
        introduction.scrollIntoView({behavior: 'smooth', block: 'center'}); //正解表示がブラウザの真ん中に来るように自動スクロール
        answerMistake.classList.add('notclick');
        correctAnswer.classList.add('notclick'); //他の選択肢のクリック無効化
    });

    answerMistake.addEventListener('click',() => {
        answerMistake.classList.add('failed'); //背景が赤、文字が白に変化
        resultbox.style.display = 'block'; //正解表示
        result.textContent = '不正解！';
        result.classList.add('incorrect-answer'); //不正解の時はアンダーラインが赤になるように上書き
        introduction.textContent = '江戸川区にあります。';
        introduction.scrollIntoView({behavior: 'smooth', block: 'center'}); //正解表示がブラウザの真ん中に来るように自動スクロール
        trueAnswer.classList.add('succeed'); //正解の選択肢の背景が青、文字が白
        correctAnswer.classList.add('notclick'); 
        trueAnswer.classList.add('notclick'); //他の選択肢のクリック無効化
    });

    correctAnswer.addEventListener('click',() => {
        correctAnswer.classList.add('failed'); //背景が赤、文字が白に変化
        resultbox.style.display = 'block'; //正解表示
        result.textContent = '不正解！';
        result.classList.add('incorrect-answer'); //不正解の時はアンダーラインが赤になるように上書き
        introduction.textContent = '江戸川区にあります。';
        introduction.scrollIntoView({behavior: 'smooth', block: 'center'}); //正解表示がブラウザの真ん中に来るように自動スクロール
        trueAnswer.classList.add('succeed'); //正解の選択肢の背景が青、文字が白
        answerMistake.classList.add('notclick'); 
        trueAnswer.classList.add('notclick'); //他の選択肢のクリック無効化
    });

}else{
    trueAnswer.addEventListener('click',() => {
        trueAnswer.classList.add('succeed'); //正解の選択肢の背景を青、文字を白にする
        resultbox.style.display = 'block'; //正解表示
        result.textContent = '正解！';
        introduction.textContent = `正解は「${answerBox[i]}」です！`;
        introduction.scrollIntoView({behavior: 'smooth', block: 'center'}); //正解表示がブラウザの真ん中に来るように自動スクロール
        answerMistake.classList.add('notclick');
        correctAnswer.classList.add('notclick'); //他の選択肢のクリック無効化
    });

    answerMistake.addEventListener('click',() => {
        answerMistake.classList.add('failed'); //背景が赤、文字が白に変化
        resultbox.style.display = 'block'; //正解表示
        result.textContent = '不正解！';
        result.classList.add('incorrect-answer'); //不正解の時はアンダーラインが赤になるように上書き
        introduction.textContent = `正解は「${answerBox[i]}」です！`;
        introduction.scrollIntoView({behavior: 'smooth', block: 'center'}); //正解表示がブラウザの真ん中に来るように自動スクロール
        trueAnswer.classList.add('succeed'); //正解の選択肢の背景が青、文字が白
        correctAnswer.classList.add('notclick'); 
        trueAnswer.classList.add('notclick'); //他の選択肢のクリック無効化
    });

    correctAnswer.addEventListener('click',() => {
        correctAnswer.classList.add('failed'); //背景が赤、文字が白に変化
        resultbox.style.display = 'block'; //正解表示
        result.textContent = '不正解！';
        result.classList.add('incorrect-answer'); //不正解の時はアンダーラインが赤になるように上書き
        introduction.textContent = `正解は「${answerBox[i]}」です！`;
        introduction.scrollIntoView({behavior: 'smooth', block: 'center'}); //正解表示がブラウザの真ん中に来るように自動スクロール
        trueAnswer.classList.add('succeed'); //正解の選択肢の背景が青、文字が白
        answerMistake.classList.add('notclick'); 
        trueAnswer.classList.add('notclick'); //他の選択肢のクリック無効化
    });
};
}