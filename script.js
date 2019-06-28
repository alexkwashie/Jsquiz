
const correctAnswers = ['A','B','A','C'];

const form = document.querySelector('.quizform');

let textAnser = document.querySelector('.intro h5');

form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;

    const ans = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];

    //Check answers
    ans.forEach((ansr, index) => {
        if (ansr === correctAnswers[index]){
            score += 25;
        }
    });

    
    textAnser.textContent = `Your Score is: ${score}`;

    
});