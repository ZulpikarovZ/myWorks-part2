const quizData = [
  {
    question: 'На каком инструменте, как считается, играл древнерусский певец и сказитель Боян?',
    a: 'На гуслях',
    b: 'На виолончели',
    c: 'На баяне',
    d: 'На гитаре',
    correct: 'a'
  },
  {
    question: 'В какой из этих стран один из официальных языков - французский?',
    a: 'Республика Гаити',
    b: 'Кения',
    c: 'Эквадор',
    d: 'Венесуэла',
    correct: 'a'
  },
  {
    question: 'В каком из этих фильмов не снимался Александр Абдулов?',
    a: 'Карнавал',
    b: 'Московские каникулы',
    c: 'Чародеи',
    d: 'Убить дракона',
    correct: 'b'
  },
  {
    question: 'В каком году произошла Куликовская битва?',
    a: '1380',
    b: '1569',
    c: '1616',
    d: '1773',
    correct: 'a'
  },
  {
    question: 'Кто автор музыки к детской песенке Чунга-Чанга?',
    a: 'Шаинский',
    b: 'Зацепин',
    c: 'Дербенёв',
    d: 'Шпиц',
    correct: 'a'
  },
  {
    question: 'Какая картина Малевича находится в Русском музее?',
    a: 'Красный квадрат',
    b: 'Белый квадрат',
    c: 'Чёрный квадрат',
    d: 'Точильщик',
    correct: 'a'
  },
  {
    question: 'Шкала Сковилла - это шкала оценки...',
    a: 'Качества атмосферного воздуха',
    b: 'Привлекательности женщин',
    c: 'Остроты перца',
    d: 'Уровня моря',
    correct: 'c'
  },
  {
    question: 'Какой титул имел Дон Кихот?',
    a: 'Барон',
    b: 'Маркиз',
    c: 'Идальго',
    d: 'Вождь',
    correct: 'c'
  },
  {
    question: 'Кто автор антиутопического романа "О дивный новый мир"?',
    a: 'Олдос Хаксли',
    b: 'Рэй Брэдбери',
    c: 'Джордж Оруэлл',
    d: 'Сомерсет Моэм',
    correct: 'a'
  },
  {
    question: 'Как называется самая глубокая точка поверхности Земли, находящаяся на дне Марианской впадины?',
    a: 'Филиппинская плита',
    b: 'Бездна Челленджера',
    c: 'Кермадек',
    d: 'Черное Логово',
    correct: 'b'
  },
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  uncheckRadio()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function checkRadio() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
          answer = answerEl.id;
      }
  });

  return answer;
}

function uncheckRadio() {
  answerEls.forEach(el => {
    el.checked = false
  })
}

submitBtn.addEventListener('click', () => {
  const answer = checkRadio()

  if(answer) {
    if(answer === quizData[currentQuiz].correct) {
      score++
    }

    currentQuiz++

    return (currentQuiz < quizData.length) ?
      loadQuiz() :
      quiz.innerHTML = `
        <h2>Вы ответили верно на ${score} из ${quizData.length} вопросов.
        <button onclick="location.reload()">К началу</button>
      `
  }
})