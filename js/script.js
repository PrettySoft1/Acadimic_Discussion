function increaseVote(e) {
    let vote = +e.nextElementSibling.innerText;
    e.nextElementSibling.innerText = vote + 1;

}

function decreaseVote(e) {
    let vote = +e.previousElementSibling.innerText;
    e.previousElementSibling.innerText = (vote - 1  < 0) ? 0 : vote - 1;

}