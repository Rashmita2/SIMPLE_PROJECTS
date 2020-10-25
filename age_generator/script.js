function ageinhours() {
    var birthyear = prompt('What is your date of birth');
    var answer = (2020 - birthyear) * 365 * 24;
    var h2 = document.createElement('h2');
    var textanswer = document.createTextNode("You are " + answer + " hours old.");
    h2.setAttribute('id', 'ageinhours');
    h2.appendChild(textanswer);
    document.getElementById('results').appendChild(h2);
}

function resetage() {
    document.getElementById('ageinhours').remove();
}