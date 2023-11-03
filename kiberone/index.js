function calculateDifference() {
    const leftInputs = document.querySelectorAll('.left-input');
    const rightInputs = document.querySelectorAll('.right-input');

    let hashiv = 0;

    for (let i = 0; i < leftInputs.length; i++) {
        const leftValue = parseFloat(leftInputs[i].value) || 0;
        const rightValue = parseFloat(rightInputs[i].value) || 0;

        hashiv += leftValue - rightValue;
    }

    const patasxan = hashiv >= 0 ? "Left side is winning!" : "Right side is winning!";
    
    document.getElementById('hashiv').textContent = `Hashiv: ${hashiv}`;
    document.getElementById('patasxan').textContent = patasxan;
}

document.getElementById('compare').addEventListener('click', calculateDifference);
