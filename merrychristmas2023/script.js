
document.addEventListener('DOMContentLoaded', function () {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 100,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#ffffff'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: false
            },
            move: {
                enable: true,
                speed: 0.2,
                direction: 'bottom',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        }
    });
});

document.addEventListener('click', throwSnowball);

function throwSnowball(event) {
    const snowball = document.createElement('div');
    snowball.classList.add('snowball');
    document.body.appendChild(snowball);

    // Set initial position of the snowball
    snowball.style.left = getRandomNumber(-200, window.innerWidth + 200) + 'px';
    snowball.style.top = getRandomNumber(-200, window.innerHeight + 200) + 'px';

    // Animate the snowball
    anime({
        targets: snowball,
        left: event.clientX,
        top: event.clientY,
        scale: 1,
        duration: 200, // Adjust the duration as needed
        easing: 'easeOutQuad',
        complete: () => {
            // Animation complete callback
            createSnowballPieces(event.clientX, event.clientY);
        }
    });
}

function createSnowballPieces(x, y) {
    const numPieces = 30;

    for (let i = 0; i < numPieces; i++) {
        const piece = document.createElement('div');
        piece.classList.add('snowball');
        piece.style.backgroundColor = '#fff';
        document.body.appendChild(piece);

        anime({
            targets: piece,
            translateX: -getRandomNumber(-200, 200), // Reverse the X direction
            translateY: -getRandomNumber(-200, 200), // Reverse the Y direction
            rotate: getRandomNumber(0, 360),
            scale: 0,
            duration: 2000,
            easing: 'easeOutQuad',
            complete: () => {
                piece.remove();
            }
        });

        piece.style.left = x + 'px';
        piece.style.top = y + 'px';
    }
}

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
