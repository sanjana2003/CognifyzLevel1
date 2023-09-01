const form = document.getElementById('myForm');
const output = document.getElementById('output');
const outputName = document.getElementById('outputName');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    outputName.textContent = name;
    
    form.classList.add('hidden');
    output.classList.remove('hidden');
});
