const five_syllables = [
    "where has the time gone?",
    "the night becomes young",
    "man, I hate growing",
    "the leaves fall faster",
    "emotionally",
    "argumentation",
    "occasionally",
    "negotiation",
    "gratification",
    "inappropriate",
    "laboriously",
    "occasionally",
    "extravaganza",
    "mediocrity",
    "oh, give me a break!",
    "the truth is out there",
    "we are not alone",
    "have you tried the pie?",
    "old habits die hard",
    "practice makes perfect",
    "what's in it for me?",
    "national interests",
    "live long and prosper",
    "my head is in pain",
    "do you like hotdogs?",
    "I hate tomatoes",
    "banana pudding",
    "where are my people?",

];

const seven_syllables = [
    "everything you know is wrong",
    "money changes everything",
    "my heart says to keep going",
    "where have you been all my life?",
    "what is the soup of the day?",
    "I can stop at any time",
    "let's agree to disagree",
    "oh no, the trees are speaking",
    "it was the best of times, NOT.",
    "the night was dark and stormy",
    "once upon a time I slept",
    "the story ends with a kiss",
    "it was raining cats and dogs",
    "there is a chill in the air",
    "imagine there's no people",
    "why am I the one who eats?",
    "I need a comfy pillow",
    "the pizza was really good",
    "I'm really in need of sleep",

];

$(".haiku-button").click(function() {
    var first_line_index = Math.floor(Math.random() * five_syllables.length);
    var second_line_index = Math.floor(Math.random() * seven_syllables.length);
    var third_line_index = Math.floor(Math.random() * five_syllables.length);
    // get different index if they are the same line
    while (third_line_index == first_line_index) {
        third_line_index = Math.floor(Math.random() * five_syllables.length);
    }
    $(".line1").text(five_syllables[first_line_index]);
    $(".line2").text(seven_syllables[second_line_index]);
    $(".line3").text(five_syllables[third_line_index]);
})