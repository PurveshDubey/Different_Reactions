let sounds = ['applause', 'tada', 'victory', 'boo', 'wrong', 'gasp'];

sounds.forEach(sound => {
    btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;
    btn.addEventListener('click', () => {
        stopSound();
        document.getElementById(sound).play();
        document.querySelector('.reaction-container').style.backgroundImage = `url(reactions/${sound}.gif)`;
    });

    document.getElementById('buttons').appendChild(btn);
});

function stopSound() {
    sounds.forEach(sound => {
        let song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    });
}