console.log('connected');
//*********** 
// first method for making drum kit issues
// 1 if we change transition timing we wont see the effect as keyup event immdeiately removes
// playing class

// so method


//******** 
// window.addEventListener('keydown', function(e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //audio element is selected dynamically and then corresponding sounds play.
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);


//     console.log(key);
//     console.log(audio);
//     if (!audio) return; //stops running of the function
//     audio.currentTime = 0; //rewinds the sound to the start so that we can play it multiple times.
//     audio.play();

//     key.classList.add('playing');


// });

// window.addEventListener('keyup', function(e) {
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//     key.classList.remove('playing');
// });
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) {
        return;
    }
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    console.log(audio);
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') {
        return;
    }
    this.classList.remove('playing');
}


window.addEventListener('keydown', playSound);
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
console.log(keys);


//one problem on continous holding of key class does not grt remove.