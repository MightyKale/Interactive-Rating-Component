const buttons = document.querySelectorAll('.score');
const finalScore = document.querySelector('.final-score');
const scoringPage = document.getElementById('scoring-page');
const thankYouPage = document.getElementById('thankYouPage');
const submitBtn = document.getElementById('submit-button');

let selectedScore = "";

function buttonClicked(){
    this.classList.add('clicked')
    selectedScore = this.textContent;
}

// Switch to thank you page
function changePage(){
    finalScore.textContent = `You selected ${selectedScore} out of 5`
    scoringPage.hidden = true;
    thankYouPage.hidden = false;
}


// Event Listeners for scoring buttons
buttons.forEach((button)=>{
    button.addEventListener('click', buttonClicked)})

// Event Listener for submit buttons
submitBtn.addEventListener('click', changePage);