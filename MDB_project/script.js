window.addEventListener('DOMContentLoaded', function () {

    let alphabet = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж',
      'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с',
      'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', "щ", "ъ", "ы", "ь", "э", "ю", "я"
    ];

    let categories, // Array of topics
      chosenCategory, // Selected catagory
      word, // Selected word
      geusses = [], // Stored geusses
      lives, // Lives
      counter, // Count correct geusses
      space; // Number of spaces in word '-'

    // Get elements
    let showLives = document.getElementById("mylives"),
      showCatagory = document.getElementById("scatagory"),
      getHint = document.getElementById("hint"),
      showClue = document.getElementById("clue");



    // create alphabet ul
    function buttons() {
      myButtons = document.getElementById('buttons');
      letters = document.createElement('ul');

      for (let i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
      }
    }


    // Select Catagory
    function selectCat() {
      if (chosenCategory === categories[0]) {
        catagoryName.innerHTML = "Выбранная категория: Premier League Football Teams";
      } else if (chosenCategory === categories[1]) {
        catagoryName.innerHTML = "Выбранная категория: Films";
      } else if (chosenCategory === categories[2]) {
        catagoryName.innerHTML = "Выбранная категория: Cities";
      }
    }

    // Create geusses ul
    function result() {
      wordHolder = document.getElementById('hold');
      correct = document.createElement('ul');

      for (let i = 0; i < word.length; i++) {
        correct.setAttribute('id', 'my-word');
        guess = document.createElement('li');
        guess.setAttribute('class', 'guess');
        //если слово содержит пробел - ставим тире, если нет - псевдо _
        if (word[i] === "-") {
          guess.innerHTML = "-";
          space = 1;
        } else {
          guess.innerHTML = "_";
      }

        geusses.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
      }
    }

    // Show lives
    function comments() {
      showLives.innerHTML = `У вас ${lives} жизней`;
      if (lives < 1) {
        showLives.innerHTML = "Игра окончена";
      }
      //Если пробелы+угаданные  равны длине слова - победа
      for (let i = 0; i < geusses.length; i++) {
        if (counter + space === geusses.length) {
          showLives.innerHTML = "Вы победили!";
        }
      }
    }

    // Animate man
    function animate() {
      var drawMe = lives;
      drawArray[drawMe]();
    }


    // Hangman
    canvas = function () {

      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.strokeStyle = "#fff";
      context.lineWidth = 2;
    };
    //Используем функциональные выражения для передачи в массив
    head = function () {
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.arc(60, 25, 10, 0, Math.PI * 2, true);
      context.stroke();
    }

    draw = function ($pathFromx, $pathFromy, $pathTox, $pathToy) {

      context.moveTo($pathFromx, $pathFromy);
      context.lineTo($pathTox, $pathToy);
      context.stroke();
    }

    frame1 = function () {
      draw(0, 150, 150, 150);
    };

    frame2 = function () {
      draw(10, 0, 10, 600);
    };

    frame3 = function () {
      draw(0, 5, 70, 5);
    };

    frame4 = function () {
      draw(60, 5, 60, 15);
    };

    torso = function () {
      draw(60, 36, 60, 70);
    };

    rightArm = function () {
      draw(60, 46, 100, 50);
    };

    leftArm = function () {
      draw(60, 46, 20, 50);
    };

    rightLeg = function () {
      draw(60, 70, 100, 100);
    };

    leftLeg = function () {
      draw(60, 70, 20, 100);
    };

    drawArray = [rightLeg, leftLeg, rightArm, leftArm, torso, head, frame4, frame3, frame2, frame1];


    // OnClick Function
    // Проверяем буквы
    function check() {
      list.addEventListener('click', function () {
        let context = (this.innerHTML);
        this.setAttribute("class", "active");
        for (let i = 0; i < word.length; i++) {
          if (word[i] === context) {
            geusses[i].innerHTML = context;
            counter += 1;
          }
        }
        let j = word.indexOf(context);
        //Если буква не найдена
        if (j === -1) {
          lives -= 1;
          comments();
          animate();
        } else {
          comments();
        }
      })
    }


    // Play
    function play() {
      categories = [
        ["шахтер", "динамо", "рубин", "арсенал"],
        ["чужой", "терминатор", "гладиатор", "в-поисках-немо", "челюсти"],
        ["керчь", "харьков", "мадрид", "амстердам", "ростов-на-дону"]
      ];

      chosenCategory = categories[Math.floor(Math.random() * categories.length)];
      word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
      word = word.replace(/\s/g, "-"); //все пробелы глобально меняем на -
      console.log(word);
      buttons();

      geusses = []; //Выбранное слово
      lives = 10;
      counter = 0; //Угаданные
      space = 0;
      result();
      comments();
      selectCat();
      canvas();
    }

    play();

      // Hint
       hint.addEventListener('click', function () {

         hints = [
           ["Based in Mersyside", "Based in Mersyside", "First Welsh team to reach the Premier Leauge", "Owned by A russian Billionaire", "Once managed by Phil Brown", "2013 FA Cup runners up", "Gazza's first club"],
           ["Science-Fiction horror film", "1971 American action film", "Historical drama", "Anamated Fish", "Giant great white shark"],
           ["Northern city in the UK", "Home of AC and Inter", "Spanish capital", "Netherlands capital", "Czech Republic capital"]
         ];

         let categoryIndex = categories.indexOf(chosenCategory);
         let hintIndex = chosenCategory.indexOf(word);
         showClue.innerHTML = "Подсказка: - " + hints[categoryIndex][hintIndex];
       });

       // Reset
       let reset = document.getElementById('reset');
       reset.addEventListener('click', function () {
         correct.parentNode.removeChild(correct);
         letters.parentNode.removeChild(letters);
         showClue.innerHTML = "";
         context.clearRect(0, 0, 400, 400);
         play();
       });
});
