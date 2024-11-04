
function focusHabitName() {
    document.getElementById('habit-name').focus(); 
}

function resetForm() {
    document.getElementById('habit-form').reset(); 
    focusHabitName(); 
}

function trackHabit(event) {
    event.preventDefault(); 
    const habitName = document.getElementById('habit-name').value;
    const habitCount = document.getElementById('habit-count').value;
    const habitType = document.getElementById('habit-type').value;
    const frequencies = document.getElementsByName('habit-frequency');
    const selectedFrequencies = [];
    let i = 0;
    while (i < frequencies.length) {
        if (frequencies[i].checked) {
            selectedFrequencies.push(frequencies[i].value);
        }
        i++;
    }
    let difficulty;
    const difficulties = document.getElementsByName('habit-difficulty');
    for (let i = 0; i < difficulties.length; i++) {
        if (difficulties[i].checked) {
            difficulty = difficulties[i].value;
            break; 
        }
    }

    console.log('Habit Name:', habitName);
    console.log('Habit Count:', habitCount);
    console.log('Habit Type:', habitType);
    console.log('Selected Frequencies:', selectedFrequencies);
    console.log('Difficulty:', difficulty);

    resetForm();
}

document.getElementById('habit-form').addEventListener('submit', trackHabit);
const radioButtons = document.getElementsByName('habit-difficulty');
radioButtons.forEach(button => {
    button.addEventListener('change', function() {
        console.log('Selected Difficulty:', this.value);
    });
});

document.getElementById('habit-type').addEventListener('change', function() {
    console.log('Selected Habit Type:', this.value);
});
document.getElementById("boom-button").addEventListener("click", function() {
    window.location.href = "progress html.html";
});
