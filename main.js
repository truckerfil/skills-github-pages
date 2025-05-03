// this is the GDPR Quiz Questions Dataset, basically the questions that will be displayed on your screen
const questions = {
    HR: [
        {
            question: "Can HR share employee sickness records with team managers without consent?",
            options: ["Yes, if operational needs require", "No, without explicit consent", "Only anonymized data"],
            correct: 1,
            article: "GDPR Article 9 (Special Categories of Data)"
        },
        {
            question: "How long can HR keep a hold of interview notes for unsuccessful candidates?",
            options: ["Indefinitely", "Maximum 6 months", "Only as long as necessary for the recruitment process"],
            correct: 2,
            article: "GDPR Article 5(1)(e) (Storage Limitation)"
        },
        {
            question: "Is HR required to conduct Data Protection Impact Assessments (DPIAs) for employee monitoring systems?",
            options: ["Only for large companies", "Yes, if monitoring poses high risks", "Never required"],
            correct: 1,
            article: "GDPR Article 35"
        },
        {
            question: "Can HR use biometric data (e.g., fingerprint time clocks) without employee consent?",
            options: ["Yes, if justified for security", "No, explicit consent is mandatory", "Only if data is encrypted"],
            correct: 1,
            article: "GDPR Article 9 & Recital 51"
        },
        {
            question: "Scenario: A former employee emails requesting all personal data your company holds about them. According to GDPR, what is the maximum timeframe to respond?",
            options: [
                "90 calendar days from receiving the request",
                "30 calendar days from receiving the request",
                "14 business days from receiving the request",
                "48 hours from receiving the request"
            ],
            correct: 1,
            article: "Article 12(3) - Time limit for data subject request responses"
        }
    ],
    IT: [
        {
            question: "Is pseudonymized data (e.g., hashed emails) exempt from GDPR?",
            options: ["Yes", "No", "Only if encrypted"],
            correct: 1,
            article: "GDPR Recital 26"
        },
        {
            question: "What is the maximum time allowed to report a data breach to authorities?",
            options: ["24 hours", "72 hours", "1 week"],
            correct: 1,
            article: "GDPR Article 33"
        },
        {
            question: "Are IT teams required to implement 'data protection by design' for new systems?",
            options: ["Only for customer-facing systems", "Yes, for all systems", "Not legally required"],
            correct: 1,
            article: "GDPR Article 25"
        },
        {
            question: "Can IT store backup tapes containing personal data indefinitely?",
            options: ["Yes, if encrypted", "No, must follow retention policies", "Only for litigation holds"],
            correct: 1,
            article: "GDPR Article 5(1)(e)"
        },
        {
            question: "Scenario: You discover a data breach at 9 AM involving customer records. When is the latest you must notify the supervisory authority?",
            options: [
                "By end of the business day",
                "Within 72 hours of discovery",
                "Within 24 hours of discovery",
                "Within 7 days of discovery"
            ],
            correct: 1,
            article: "Article 33 - Notification of personal data breach to supervisory authority"
        }
    ],
    Marketing: [
        {
            question: "Can you purchase email lists for cold outreach under GDPR?",
            options: ["Yes, if the provider is reputable", "No, without explicit consent", "Only for B2B contacts"],
            correct: 1,
            article: "GDPR Article 6(1)(a) & Recital 32"
        },
        {
            question: "Is pre-ticked opt-in consent boxes compliant for newsletter signups?",
            options: ["Yes", "No", "Only for existing customers"],
            correct: 1,
            article: "GDPR Recital 32"
        },
        {
            question: "How long can you retain customer data for re-marketing purposes?",
            options: ["1 year", "As long as the business wants", "Only as long as necessary for the original purpose"],
            correct: 2,
            article: "GDPR Article 5(1)(b) (Purpose Limitation)"
        },
        {
            question: "Are cookies that track user behavior across websites allowed without consent?",
            options: ["Yes, if anonymized", "No, requires prior consent", "Only for analytics"],
            correct: 1,
            article: "ePrivacy Directive + GDPR Recital 30"
        },
        {
            question: "Scenario: Your marketing team wants to use existing customer email lists for a new product campaign. What is required before proceeding?",
            options: [
                "Nothing (implied consent covers new products)",
                "Notify customers but don't wait for consent",
                "Obtain fresh consent unless original consent was broad enough",
                "Only update the privacy policy"
            ],
            correct: 2,
            article: "Article 6(1)(a) and Article 7 - Conditions for consent"
        },
        {
            question: "Scenario: A customer requests their data be deleted, but you need some information for tax records. What's the correct response?",
            options: [
                "Deny the request entirely due to tax requirements",
                "Delete everything immediately as requested",
                "Delete non-essential data and provide a written explanation for retained data",
                "Delay deletion until tax records are no longer needed"
            ],
            correct: 2,
            article: "Article 17(3)(b) - Exceptions to right to erasure for legal obligations"
        }
    ],
    disasters: [
      {
        company: "SocialConnect (fictional)",
        question: "2023: Shared user behavioral data with advertisers without valid legal basis",
        fine: "€75M",
        options: [
          "This is permitted under legitimate interest (Article 6(1)(f))",
          "Requires explicit consent (Article 7)",
          "Only needs a privacy policy update"
        ],
        correct: 1,
        article: "Violated Articles 5(1)(a) and 7",
        solution: "Implement granular consent management system",
        year: 2023
      },
      {
        company: "HealthPlus (fictional)",
        question: "2022: Emailed unencrypted patient data to third-party vendors",
        fine: "€42M",
        options: [
          "Allowed if vendors are GDPR-compliant",
          "Permitted for urgent care purposes",
          "Violates data security and minimization principles"
        ],
        correct: 2,
        article: "Violated Articles 5(1)(f) and 32",
        solution: "Enforce encryption and vendor due diligence",
        year: 2022
      },
      {
        company: "EduCloud (fictional)",
        question: "2021: Retained student data indefinitely after course completion",
        fine: "€18M",
        options: [
          "Permitted if students are notified",
          "Violates storage limitation (Article 5(1)(e))",
          "Acceptable for alumni marketing"
        ],
        correct: 1,
        article: "Violated Article 5(1)(e)",
        solution: "Set data retention schedules and automatic deletion",
        year: 2021
      }
    ],
    Senior: [
      {
        question: "What is the maximum administrative fine under GDPR for severe violations?",
        options: [
          "€10 million or 2% of global turnover",
          "€20 million or 4% of global turnover",
          "€1 million or 1% of global turnover"
        ],
        correct: 1,
        article: "Article 83"
      },
      {
        question: "Under GDPR, when must a company appoint a Data Protection Officer?",
        options: [
          "Only for public companies",
          "When processing large-scale sensitive data",
          "Never, it's optional"
        ],
        correct: 1,
        article: "Article 37"
      },
      {
        question: "What is the main purpose of a Data Protection Impact Assessment (DPIA)?",
        options: [
          "To assess and mitigate privacy risks before starting high-risk processing",
          "To report data breaches to authorities",
          "To train employees on GDPR"
        ],
        correct: 0,
        article: "Article 35"
      },
      {
        question: "Which of the following is a recommended board-level GDPR compliance strategy?",
        options: [
          "Delegate all GDPR tasks to IT only",
          "Integrate GDPR into company-wide risk management and review regularly at board meetings",
          "Wait for a breach before acting"
        ],
        correct: 1,
        article: "Best Practice"
      },
      {
        question: "In recent real-world cases, what liability have CEOs faced for GDPR violations?",
        options: [
          "Personal criminal prosecution is common",
          "No liability at all",
          "Fines and reputational damage for the company, with potential personal accountability for negligence"
        ],
        correct: 2,
        article: "Article 83, Case Law"
      }
    ]
};

// these are the DOM elements basically is a way for the programs to interact with the actual webpages
const roleSelection = document.getElementById('role-selection');
const quizSection = document.getElementById('quiz-section');
const quizContainer = document.getElementById('quiz-container');
const progressBar = document.getElementById('progress-bar');
const roleButtons = document.querySelectorAll('.role-card');
const progressIndicator = document.getElementById('progress-indicator');
const celebration = document.getElementById('celebration');

let currentRole = null;
let currentQuestion = 0;
let score = 0;
let currentQuestions = [];
let quizStartedByKeyboard = false;
let userAnswers = [];

// these lines of code puts keyboard users focus on the first answer of the quiz 
//(i primarily wrote this as a bugfix as before this was implemented it would just highlight the answer without a mouse hover) and it made it looked unappealing
function focusFirstOption() {
    const firstOption = quizContainer.querySelector('.quiz-option');
    if (firstOption) firstOption.focus();
}

// --- Quiz Initialization ---
function initQuiz(role) {
    currentRole = role;
    currentQuestions = questions[role];
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    quizStartedByKeyboard = false;
    roleSelection && (roleSelection.hidden = true);
    quizSection && (quizSection.hidden = false);
    celebration && (celebration.hidden = true);
    if (quizContainer) quizContainer.innerHTML = '';
    if (progressIndicator) progressIndicator.textContent = '';
    if (progressBar) progressBar.style.width = '0%';
    showQuestion();
    updateProgressBar();
    updateProgressIndicator();
}

// shows the current question
function showQuestion() {
    updateProgressIndicator();
    // Show loading spinner
    quizContainer.innerHTML = '<div class="spinner" aria-label="Loading"></div>';
    setTimeout(() => {
        const q = currentQuestions[currentQuestion];
        const qId = `question-${currentQuestion + 1}`;
        if (currentRole === 'disasters') {
          // Render as a visual case study card
          quizContainer.innerHTML = `
            <div class="disaster-card" role="region" aria-labelledby="${qId}">
              <div class="disaster-card-header">
                <span class="disaster-company">💥 <strong>${q.company}</strong></span>
                <span class="disaster-year">(${q.year})</span>
              </div>
              <div class="disaster-details">
                <ul class="disaster-violations">
                  <li>${q.question}</li>
                </ul>
                <div class="disaster-meta-row">
                  <span class="disaster-article">⚖️ <strong>${q.article}</strong></span>
                  <span class="disaster-fine">💶 <strong>${q.fine}</strong></span>
                </div>
              </div>
            </div>
            <div class="quiz-options" role="list" aria-labelledby="${qId}">
              ${q.options.map((opt, i) => `
                <button class="quiz-option" data-index="${i}" role="listitem" aria-label="${opt}" tabindex="0">
                  <span>${opt}</span>
                  <span class="feedback-icon" aria-hidden="true"></span>
                </button>
              `).join('')}
            </div>
          `;
        } else {
          let extraInfo = '';
          if (currentRole === 'disasters') {
            extraInfo = `
              <div class="disaster-meta" style="margin-bottom:0.5rem;">
                <strong>Company:</strong> ${q.company} &nbsp;|&nbsp; <strong>Year:</strong> ${q.year} &nbsp;|&nbsp; <strong>Fine:</strong> ${q.fine}
              </div>
            `;
          }
          quizContainer.innerHTML = `
          ${extraInfo}
          <h2 class="quiz-question" id="${qId}">${q.question}</h2>
          <div class="quiz-options" role="list" aria-labelledby="${qId}">
            ${q.options.map((opt, i) => `
              <button class="quiz-option" data-index="${i}" role="listitem" aria-label="${opt}" tabindex="0">
                <span>${opt}</span>
                <span class="feedback-icon" aria-hidden="true"></span>
              </button>
            `).join('')}
          </div>
        `;
        }
        // Keyboard navigation for options
        const optionButtons = quizContainer.querySelectorAll('.quiz-option');
        optionButtons.forEach(btn => {
            btn.addEventListener('click', handleOptionClick);
            btn.addEventListener('keydown', e => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    btn.click();
                }
                // Arrow key navigation
                if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                    e.preventDefault();
                    const next = btn.nextElementSibling || optionButtons[0];
                    next.focus();
                }
                if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                    e.preventDefault();
                    const prev = btn.previousElementSibling || optionButtons[optionButtons.length - 1];
                    prev.focus();
                }
            });
        });
        if (quizStartedByKeyboard) {
            focusFirstOption();
        }
    }, 300);
}

// this handles anything related to the answer selection
function handleOptionClick(e) {
    const selected = Number(e.currentTarget.dataset.index);
    const q = currentQuestions[currentQuestion];
    const isCorrect = selected === q.correct;
    if (isCorrect) score++;
    userAnswers[currentQuestion] = selected;
    localStorage.setItem('gdpr-answers', JSON.stringify(userAnswers));
    // Visual feedback with CSS classes
    quizContainer.querySelectorAll('.quiz-option').forEach((btn, idx) => {
        btn.disabled = true;
        btn.classList.remove('correct', 'incorrect');
        const icon = btn.querySelector('.feedback-icon');
        if (idx === q.correct) {
            btn.classList.add('correct');
            icon.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="var(--correct)"/><path d="M6 10.5l3 3 5-5" stroke="#fff" stroke-width="2"/></svg>`;
        } else if (idx === selected) {
            btn.classList.add('incorrect');
            icon.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="var(--incorrect)"/><path d="M7 7l6 6m0-6l-6 6" stroke="#fff" stroke-width="2"/></svg>`;
        } else {
            icon.innerHTML = '';
        }
        btn.style.transform = idx === selected ? 'scale(0.96)' : 'scale(0.98)';
    });
    // Show feedback and GDPR article
    const feedback = document.createElement('div');
    feedback.className = 'quiz-feedback';
    feedback.textContent = isCorrect ? 'Correct!' : 'Incorrect.';
    const article = document.createElement('div');
    article.className = 'quiz-article';
    article.innerHTML = `Reference: <a href="https://gdpr-info.eu/art-${q.article.match(/\d+/)}-gdpr/" target="_blank" rel="noopener noreferrer">${q.article}</a>`;
    quizContainer.appendChild(feedback);
    quizContainer.appendChild(article);
    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'quiz-next-btn';
    nextBtn.textContent = currentQuestion < currentQuestions.length - 1 ? 'Next' : 'Finish';
    nextBtn.onclick = () => {
        if (currentQuestion < currentQuestions.length - 1) {
            nextQuestion();
        } else {
            showResults();
        }
    };
    quizContainer.appendChild(nextBtn);
    nextBtn.focus();
}

// Go to next question or show results
function nextQuestion() {
    currentQuestion++;
    updateProgressBar();
    updateProgressIndicator();
    showQuestion();
}

// Show quiz results
function showResults() {
    const finalScore = score / currentQuestions.length;
    localStorage.setItem('gdpr-finalScore', finalScore);
    localStorage.setItem('gdpr-role', currentRole);
    // Confetti for high scores, then delay redirect
    if (finalScore >= 0.8) {
        showConfetti(() => {
            window.location.href = `results.html?score=${encodeURIComponent(finalScore.toFixed(4))}&role=${encodeURIComponent(currentRole)}`;
        });
    } else {
        window.location.href = `results.html?score=${encodeURIComponent(finalScore.toFixed(4))}&role=${encodeURIComponent(currentRole)}`;
    }
}

// Show confetti/celebration animation
function showConfetti(callback) {
    const confetti = document.createElement('div');
    confetti.innerHTML = `
        <style>
            @keyframes confetti-fall { 0% { transform: translateY(-100vh) rotate(0deg); } 100% { transform: translateY(100vh) rotate(360deg); } }
            .confetti-piece { position: fixed; width: 12px; height: 12px; opacity: 0.8; animation: confetti-fall linear forwards; z-index: 9999; }
        </style>
    `;
    for (let i = 0; i < 30; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = `${Math.random() * 100}vw`;
        piece.style.animationDuration = `${Math.random() * 3 + 2}s`;
        piece.style.background = `hsl(${Math.random() * 360}, 100%, 60%)`;
        piece.style.borderRadius = ['50%', '0'][Math.floor(Math.random() * 2)];
        confetti.appendChild(piece);
    }
    document.body.appendChild(confetti);
    setTimeout(() => {
        confetti.remove();
        if (callback) callback();
    }, 2000);
}
// Update progress bar
function updateProgressBar() {
    const percent = ((currentQuestion) / currentQuestions.length) * 100;
    progressBar.style.width = percent + '%';
}

// Update progress indicator (e.g., "Question 1 of 2")
function updateProgressIndicator() {
    if (!currentQuestions.length) {
        progressIndicator.textContent = '';
        return;
    }
    progressIndicator.textContent = `Question ${Math.min(currentQuestion + 1, currentQuestions.length)} of ${currentQuestions.length}`;
}

// Role selection event listeners
document.addEventListener('DOMContentLoaded', () => {
    const roleButtons = document.querySelectorAll('.role-card');
    
    roleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const role = btn.dataset.role;
            if (role) {
                window.location.href = `quiz.html?role=${encodeURIComponent(role)}`;
            }
        });
        
        btn.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                btn.click();
            }
            // Arrow key navigation
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                const next = btn.nextElementSibling || roleButtons[0];
                next.focus();
            }
            if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                const prev = btn.previousElementSibling || roleButtons[roleButtons.length - 1];
                prev.focus();
            }
        });
    });

    // If we're on the quiz page, initialize it
    if (window.location.pathname.endsWith('quiz.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const role = urlParams.get('role');
        if (role && questions[role]) {
            // Restore answers if present
            const savedAnswers = localStorage.getItem('gdpr-answers');
            if (savedAnswers) {
                userAnswers = JSON.parse(savedAnswers);
            }
            initQuiz(role);
        } else {
            window.location.href = 'index.html';
        }
    }

    // Results page init
    if (window.location.pathname.endsWith('results.html')) {
        displayResultsPage();
        const cheatsheetBtn = document.getElementById('view-cheatsheet');
        const cheatsheetDiv = document.getElementById('gdpr-cheatsheet');
        const urlParams = new URLSearchParams(window.location.search);
        const role = urlParams.get('role');
        function renderCheatsheet(role) {
          // Map role to correct cheatsheet key
          let cheatsheetKey = role;
          if (role === 'Senior') cheatsheetKey = 'Senior_Management';
          // Prefer HTML cheatsheet if available
          if (gdprCheatsheetTips[cheatsheetKey] && typeof gdprCheatsheetTips[cheatsheetKey] === 'string') {
            return gdprCheatsheetTips[cheatsheetKey];
          }
          let tips = gdprCheatsheetTips[cheatsheetKey] || [];
          let roleLabel = role ? role.charAt(0).toUpperCase() + role.slice(1) : '';
          return `
            <section aria-labelledby="cheatsheet-role-title">
              <h2 id="cheatsheet-role-title" style="color:var(--accent);font-size:1.2rem;">${roleLabel} GDPR Quick Guide</h2>
              <ul style="margin:0;padding-left:1.2em;">
                ${tips.map(t => `<li style="margin-bottom:0.7em;"><strong>${t.article}:</strong> ${t.tip}</li>`).join('')}
              </ul>
            </section>
          `;
        }
        if (cheatsheetBtn && cheatsheetDiv) {
          cheatsheetBtn.addEventListener('click', function() {
            const expanded = cheatsheetBtn.getAttribute('aria-expanded') === 'true';
            if (!expanded) {
              cheatsheetDiv.innerHTML = renderCheatsheet(role);
              cheatsheetDiv.hidden = false;
              cheatsheetDiv.setAttribute('aria-hidden', 'false');
              cheatsheetBtn.setAttribute('aria-expanded', 'true');
              cheatsheetDiv.focus();
            } else {
              cheatsheetDiv.hidden = true;
              cheatsheetDiv.setAttribute('aria-hidden', 'true');
              cheatsheetBtn.setAttribute('aria-expanded', 'false');
              cheatsheetBtn.focus();
            }
          });
          cheatsheetBtn.addEventListener('keydown', function(e) {
            if ((e.key === 'Enter' || e.key === ' ') && document.activeElement === cheatsheetBtn) {
              e.preventDefault();
              cheatsheetBtn.click();
            }
          });
          cheatsheetDiv.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
              cheatsheetDiv.hidden = true;
              cheatsheetDiv.setAttribute('aria-hidden', 'true');
              cheatsheetBtn.setAttribute('aria-expanded', 'false');
              cheatsheetBtn.focus();
            }
          });
        }
    }
});

/**
 * Displays detailed GDPR feedback for the results page.
 * @param {string} role - The quiz role (HR, IT, Marketing)
 * @param {number} score - The quiz score as a decimal
 */
window.displayDetailedFeedback = function(role, score) {
    console.log('[Debug] displayDetailedFeedback called with:', { role, score });
    
    const feedbackContainer = document.getElementById('detailed-feedback');
    if (!feedbackContainer || !questions[role]) {
        console.error('[Debug] Invalid container or role:', { 
            hasContainer: !!feedbackContainer, 
            hasQuestions: !!questions[role] 
        });
        return;
    }

    const roleQuestions = questions[role];
    feedbackContainer.innerHTML = ''; // Clear existing content

    roleQuestions.forEach((q, idx) => {
        console.log('[Debug] Processing question:', idx + 1);
        const item = document.createElement('div');
        item.className = 'feedback-item';
        item.innerHTML = `
            <h3>Question ${idx + 1}</h3>
            <p class="question-text">${q.question}</p>
            <p class="correct-answer"><strong>Correct Answer:</strong> ${q.options[q.correct]}</p>
            <p class="gdpr-reference"><strong>GDPR Reference:</strong> ${q.article}</p>
        `;
        feedbackContainer.appendChild(item);
    });
};

// --- Results Page Logic ---
function displayResultsPage() {
    const score = parseFloat(new URLSearchParams(window.location.search).get('score'));
    const role = new URLSearchParams(window.location.search).get('role');
    const answers = JSON.parse(localStorage.getItem('gdpr-answers') || '[]');
    // Personalized feedback
    let message = '';
    if (score >= 0.8) message = 'Excellent! You have strong GDPR knowledge.';
    else if (score >= 0.5) message = 'Good effort! Review the missed questions below.';
    else message = 'Keep practicing! Review the explanations below to improve.';
    // Show score, message, and time
    const scoreEl = document.getElementById('score');
    if (scoreEl) scoreEl.textContent = `${Math.round(score * 100)}%`;
    const perfMsg = document.querySelector('.performance-message');
    if (perfMsg) perfMsg.textContent = message;
    // Show review
    const feedbackContainer = document.getElementById('detailed-feedback');
    if (feedbackContainer) {
        feedbackContainer.innerHTML = '';
        questions[role].forEach((q, idx) => {
            const userIdx = answers[idx];
            const isCorrect = userIdx === q.correct;
            const item = document.createElement('div');
            item.className = 'review-item ' + (isCorrect ? 'correct' : 'incorrect');
            item.innerHTML = `
                <h3>Question ${idx + 1}</h3>
                <p class="question-text">${q.question}</p>
                <p class="correct-answer"><strong>Correct Answer:</strong> ${q.options[q.correct]}</p>
                <p class="your-answer"><strong>Your Answer:</strong> ${userIdx !== undefined ? q.options[userIdx] : '<em>No answer</em>'}</p>
                <p class="gdpr-reference"><strong>GDPR Reference:</strong> <a href="https://gdpr-info.eu/art-${q.article.match(/\d+/)}-gdpr/" target="_blank" rel="noopener noreferrer">${q.article}</a></p>
            `;
            feedbackContainer.appendChild(item);
        });
    }
}

// GDPR Cheatsheet Data
const gdprCheatsheetTips = {
  HR: [
    { article: 'Article 5: Data Minimization', tip: 'Only collect employee data needed for specific purposes.' },
    { article: 'Article 9: Special Categories', tip: 'Extra protection for sensitive data like health or biometrics. Get explicit consent before processing.' },
    { article: 'Article 17: Right to Erasure', tip: 'Employees can request deletion of their data when it\'s no longer needed.' }
  ],
  IT: [
    { article: 'Article 25: Data Protection by Design', tip: 'Build privacy and security into all systems from the start.' },
    { article: 'Article 32: Security of Processing', tip: 'Keep personal data secure with encryption, access controls, and regular testing.' },
    { article: 'Article 33: Breach Notification', tip: 'Report data breaches to authorities within 72 hours.' }
  ],
  Marketing: [
    { article: 'Article 6: Lawful Basis for Processing', tip: 'Always have a valid reason (like consent) before using customer data.' },
    { article: 'Article 7: Conditions for Consent', tip: 'Consent must be clear, specific, and easy to withdraw. No pre-ticked boxes.' },
    { article: 'Article 21: Right to Object', tip: 'People can opt out of marketing communications at any time.' }
  ],
  disasters: [
    { article: 'Article 5(1)(a): Lawfulness, Fairness, Transparency', tip: 'Always have a valid legal basis and clear consent for data sharing.' },
    { article: 'Article 32: Security of Processing', tip: 'Encrypt sensitive data and vet third-party vendors for compliance.' },
    { article: 'Article 5(1)(e): Storage Limitation', tip: 'Set clear data retention schedules and delete data when no longer needed.' },
    { article: 'Article 7: Conditions for Consent', tip: 'Granular, explicit consent is required for processing personal data.' }
  ],
  Senior_Management: `
<div class="cheatsheet-content">
  <h3>Senior Management Quick Reference</h3>
  
  <div class="priority-list">
    <h4>⚠️ Critical Responsibilities:</h4>
    <div><strong>Article 5.2</strong> Document compliance measures</div>
    <div><strong>Article 37</strong> Appoint DPO for high-risk processing</div>
    <div><strong>Article 83</strong> Personal liability for fines (up to 4% revenue)</div>
  </div>

  <div class="case-studies">
    <h4>💼 Real-World Consequences:</h4>
    <div>Meta: €1.2B fine for illegal data transfers</div>
    <div>H&M: €35M for employee surveillance</div>
  </div>

  <div class="actions">
    <h4>✅ Your Action Plan:</h4>
    <div>Quarterly compliance reviews</div>
    <div>Annual staff training budget</div>
    <div>Document all data decisions</div>
  </div>
</div>
`
};


