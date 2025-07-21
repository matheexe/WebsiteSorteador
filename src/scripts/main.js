document.addEventListener('DOMContentLoaded', function () {
    // Cria os elementos do cursor

    document.getElementById('headerForm').addEventListener('submit', function(e){
        e.preventDefault();
        let maxNumber = document.getElementById('maxNumber').value;
        maxNumber = parseInt(maxNumber)

        let randomNumber = Math.random() * maxNumber;
        randomNumber = Math.floor(randomNumber + 1);

        document.getElementById('resultValue').innerText = randomNumber;
        document.querySelector('.result').style.display = 'block';
    })

    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    document.body.appendChild(dot);

    const outline = document.createElement('div');
    outline.className = 'cursor-outline';
    document.body.appendChild(outline);

    // Mouse move
    document.addEventListener('mousemove', function (e) {
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';
        setTimeout(() => {
            outline.style.left = e.clientX + 'px';
            outline.style.top = e.clientY + 'px';
        }, 50);
    });

    // Hover em links, botões e spans do header
    const hoverElements = document.querySelectorAll('a, button, input,#headerSpan > span');
    hoverElements.forEach(function (el) {
        el.addEventListener('mouseenter', function () {
            outline.classList.add('link-hover');
            dot.classList.add('link-hover');
        });
        el.addEventListener('mouseleave', function () {
            outline.classList.remove('link-hover');
            dot.classList.remove('link-hover');
        });
    });

    // Hover em inputs
    const inputs = document.querySelectorAll('input');
    inputs.forEach(function (input) {
        input.addEventListener('mouseenter', function () {
            dot.classList.remove('cursor-dot');
        });
        input.addEventListener('mouseleave', function () {
            dot.classList.add('cursor-dot');
        });
    });
});