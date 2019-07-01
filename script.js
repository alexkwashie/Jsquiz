
const correctAnswers = ['A','B','A','C'];

const form = document.querySelector('.quizform');

let textAnser = document.querySelector('.container p span');

let showAns = document.querySelector('.result');

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

    //enables scroll to top
    scrollTo(0,0);

    showAns.classList.remove('d-none');

    let i = 0;
    let timer= setInterval(()=>{
        i++
        textAnser.textContent = `${i}%`;
        if(i === score){
            clearInterval(timer);
        }
    }, 25);

});

//Calls function after 3 sec
    // setTimeout(()=>{
    // alert('Oshaei');
    // }, 3000)

