// variables and arrays
var score = 0
var currentQuestion = 0
var questions = [

    {

        title: "Why is Michael Myers so attractive?",
        answers: ['His personality', 'The way his stomach sticks out', 'Those lips are just so scrumptious', 'All the above'],
        correct: 3

    },

    {
        title: "What does HTML stand for?",
        answers: ['Hey Tom Meet Linda', 'HyperText Markup Language', 'HyperText Missing Link', 'Harry Tom Making Lasagna'],
        correct: 1

    },

    {
        title: "What is CSS?",
        answers: ['Enhances your website with glorious Aesthetics', 'Gives your grandmother baking lessons', 'Orders pizza for you', 'Why is this even a question'],
        correct: 0

    },

    {
        title: "What is bootstrap?",
        answers: ['The pirate known as Bootstrap Jones, duh', 'Tying your boots together', 'Straps on your boots stooopid', 'A CSS Framework'],
        correct: 3

    },

    {
        title: "what's your Gf's/Bf's favorite food?",
        answers: ['Im his/her favorite snack', 'People still ask those questions', 'I eat everything', 'I dont eat, period'],
        correct: 0

    },

    {
        title: "what does the word NERD stand for",
        answers: ['Not Even Remotely Dorky', 'Nobody Ever Really Dies', 'Never Ending Research Dude', 'All the above'],
        correct: 3

    },

    {
        title: "Who is 007",
        answers: ['Michael Anthony Myers', 'James Bond', 'Chuck Norris', 'Big Bird'],
        correct: 1

    },

    {
        title: "What is the nastiest thing you've ever smelled",
        answers: ['Roses', 'My Grandmother', 'My own farts', 'Baby powder'],
        correct: 2

    },

    {
        title: "What is a sexy name",
        answers: ['Michael', 'Jeffrey', 'Jacoby', 'Linda'],
        correct: 0

    },

    {
        title: "I'm smart because",
        answers: ['I kill two stones with one bird', 'I can fart out the Alphabets', 'I can say 1000 words without opening my mouth', 'All the above'],
        correct: 3

    },

];


// Event Listener and functions

$(document).ready(function() {

    $('.start a').click(function(e) {
        e.preventDefault();
        $('.start').hide();
        $('.quiz').show();
        showQuestion();

    });

    $('.quiz ul').on('click', 'li', function() {
        $('.selected').removeClass('selected');
        $(this).addClass('selected')

    });

    $('.quiz a').click(function(e) {
        e.preventDefault();
        if ($('li.selected').length) {
            var randomGuess = parseInt($('li.selected').attr('id'));
            checkAnswer(randomGuess);
        } else {
            alert(" Select an Answer to continue ");
        }

    });

    $('.summary a').click(function(e) {
        e.preventDefault();
        $('.summary').hide();
        $('.quiz').show();
        score = 0
        currentQuestion = 0;
        showQuestion();

    });

});


function showQuestion() {
    c = 20;
    if (c < 1) {
        $('.quiz').hide();
        $('.summary').show();
        $('.summary p').text("You ran out of time");
        setInterval("timer()", 10000);
    }

    var question = questions[currentQuestion];
    $('.quiz h2').text(question.title);
    $('.quiz ul').html('');
    for (var i = 0; i < question.answers.length; i++) {
        $('.quiz ul').append("<li id='" + i + "'>" + question.answers[i] + "</li>")

    }

}

function checkAnswer(randomGuess) {
    var question = questions[currentQuestion];
    if (question.correct === randomGuess) {
        score++;

    }
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        showSummary();
    } else {
        showQuestion();

    }

}

//Timer Variable

var a = 0;
a++;
var b = 0;
b++;
var c = 20;
c++;

// Timer Function

function timer() {
    c = c - 1;
    if (c < 20) {
        time.innerHTML = c;

    }

    if (c < 1) {
        $('.quiz').hide();
        $('.summary').show();
        $('.summary p').text("You ran out of time");


    }
}

function showSummary() {
    $('.quiz').hide();
    $('.summary').show();
    $('.summary p').text("You Scored " + score + " out of " + questions.length + " points ");

}
setInterval("timer()", 1000 + 2);
if (distance < 0) {
    clearInterval("timer()");

}