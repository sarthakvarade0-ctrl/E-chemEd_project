function startQuiz(unitNumber, unitName) {
    // Skip inline quiz transition for Unit 1 if it directs to a dedicated HTML page, 
    // or handle it dynamically if desired.
    const dashboard = document.getElementById('dashboard-container');
    const quizContainer = document.getElementById('quiz-container');
    const quizTitle = document.getElementById('quiz-title');
    
    if (dashboard && quizContainer) {
        dashboard.classList.add('hidden');
        quizContainer.classList.remove('hidden');
        quizTitle.innerText = `Unit ${unitNumber}: ${unitName}`;
        
        loadSampleQuestion(unitNumber);
    }
}

function loadSampleQuestion(unitNum) {
    const questionBox = document.getElementById('question-box');
    const optionsBox = document.getElementById('options-box');
    
    questionBox.innerHTML = `<p style="font-size: 18px; font-weight: 600; margin-top: 10px;">Sample Question for Unit ${unitNum}: Which of the following is a primary concept covered?</p>`;
    optionsBox.innerHTML = `
        <button class="option-btn" onclick="selectOption(this, true)">A) Standard Engineering Chemistry Principles</button>
        <button class="option-btn" onclick="selectOption(this, false)">B) Quantum Chromodynamics</button>
        <button class="option-btn" onclick="selectOption(this, false)">C) Macroeconomic Policy Analysis</button>
    `;
}

function selectOption(button, isCorrect) {
    const options = document.querySelectorAll('.option-btn');
    options.forEach(btn => btn.disabled = true);
    
    if (isCorrect) {
        button.classList.add('correct');
    } else {
        button.classList.add('wrong');
    }
    
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
        nextBtn.classList.remove('hidden');
        nextBtn.onclick = () => {
            alert('Great job! Returning to dashboard.');
            location.reload();
        };
    }
}