function genSecu() {
    const seed = parseInt(document.getElementById('seed').value);
    const sequence = generarMat(seed);
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<p>Largo de la secuencia: ${sequence.length}</p>`;
    outputDiv.innerHTML += `<p>Mayor numero encontrado: ${Math.max(...sequence)}</p>`;
}

function generarMat(seed) {
    const sequence = [seed];
    let current = seed;
    while (true) {
        if (current % 2 === 0) {
            current = current / 2;
        } else {
            current = 3 * current + 1;
        }
        sequence.push(current);
        if (current === 1) {
            break;
        }
    }
    return sequence;
}
