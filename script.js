// Bottom Navigation Logic
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.section');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(nav => nav.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));

        item.classList.add('active');
        const target = document.getElementById(item.getAttribute('data-target'));
        target.classList.add('active');
    });
});

// Class Schedule Logic
const orarLectii = {
    'Monday': ["1. Ed. Civică / Cabinet : 223", "2. Fizica / Cabinet : 225", "3. L. Română / Cabinet : 329", "4. L. Română / Cabinet : 329", "5. Ed. fizică", "6. L. engleză / Cabinet : 139/329"],
    'Tuesday': ["1. Biologie / Cabinet : 324", "2. Informatica / Cabinet : 222/235", "3. Matematica / Cabinet : -", "4. L. Română / Cabinet : 329", "5. L. Română / Cabinet : 329", "6. Ed Tehnologica/ Cabinet : Fete/Baieti"],
    'Wednesday': ["1. Matematica / Cabinet : -", "2. Mate Aplicativa / Cabinet : ^", "3. Geografia/ Cabinet : 125", "4. Istoria / Cabinet : 121", "5. Ed. fizică", "6. Limba Rusa / Cabinet : -"],
    'Thursday': ["1. Biologie / Cabinet : 324", "2. Matematica / Cabinet : -", "3. Chimia / Cabinet : 325", "4. L. engleză / Cabinet : 139/329", "5. Istoria / Cabinet : 121"],
    'Friday': ["1. Chimia / Cabinet : 325", "2. Matematica / Cabinet : -", "3. L. Română / Cabinet : 329", "4. Limba Rusa / Cabinet : -", "5. Dez. Personala / Cabinet : 329", "6. Fizica / Cabinet : 225"]
};

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let currentDayIndex = 0;

document.getElementById('prev-day')?.addEventListener('click', () => {
    currentDayIndex = (currentDayIndex - 1 + days.length) % days.length;
    updateDay();
});

document.getElementById('next-day')?.addEventListener('click', () => {
    currentDayIndex = (currentDayIndex + 1) % days.length;
    updateDay();
});

function updateDay() {
    const currentDay = days[currentDayIndex];
    const currentDayElement = document.getElementById('current-day');
    if (currentDayElement) {
        currentDayElement.textContent = currentDay;
        populateSchedule(currentDay);
    }
}

function populateSchedule(day) {
    const lectiiList = document.getElementById('lectii-list');
    if (!lectiiList) return;
    
    lectiiList.innerHTML = '';

    if (orarLectii[day]) {
        orarLectii[day].forEach(subject => {
            const li = document.createElement('li');
            li.innerHTML = `<span class="subject">${subject}</span>`;
            lectiiList.appendChild(li);
        });
    }
}

// Weekly homework data structure
const weeklyHomework = {
    mate: [
        { 
            title: 'Exerciții pagina 70-71',
            description: '2,3 p 217 v2 ',
            priority: 'high'
        }
    ],
    romana: [
        {
            title: 'Cereread',
            description: 'p198  ex9,11,13',
            priority: 'medium'
        }
    ],
    biologie: [
        {
            title: 'Exerciții pagina 70',
            description: 'atoate notiuni p89 , ex6p92',
            priority: 'high'
        }
    ],
    civica: [
        {
            title: 'Formular',
            description: 'nimic',
            priority: 'high'
        }
    ],
    chimie: [
        {
            title: 'Studiu Sulf',
            description: 'nimic cred',
            priority: 'medium'
        }
    ],
    istorie: [
        {
            title: 'Lectură',
            description: 'TEXT ARGUMENTATIV: Capatarea independentei Republicii Moldova. Cale spre democratizarea societatii',
            priority: 'high'
        }
    ],
    fizica: [
        {
            title: 'Problemă',
            description: 'comunicare ( radiocomunicatii si undele radio) , terminam tabelul',
            priority: 'medium'
        }
    ],
    engleza: [
        {
             title: 'Grupa D.Angela',
            description: 'D. Natalia : terminam proiectul',
            priority: 'high'
        },
        {
            title: 'Grupa D.Angela',
            description: 'D.Angela : Do a survey on the topic.',
            priority: 'high'
        }
    ],
    geografie: [
        {
            title: 'Studiu de caz',
            description: 'nimic',
            priority: 'medium'
        }
    ],
    tehnologica: [
        {
            title: 'Fără teme',
            description: 'Nimic',
            priority: 'medium'
        }
    ],
    sport: [
        {
            title: 'Basketball',
            description: 'Gimnastica',
            priority: 'medium'
        }
    ],
    dezvoltare: [
        {
            title: 'Fără teme',
            description: 'Nimic',
            priority: 'medium'
        }
    ],
    mate_aplicativa: [
        {
            title: 'PROIECT',
            description: 'PROIECT ',
            priority: 'high'
        }
    ],
    rusa: [
        {
            title: 'Fără teme',
            description: 'nimic',
            priority: 'high'
        }
    ],
    informatica: [
        {
            title: 'Fără te',
            description: 'test',
            priority: 'high'
        }
    ]
};

function getSubjectIcon(subject) {
    const icons = {
        mate: '📐',
        romana: '📚',
        biologie: '🧬',
        civica: '📋',
        chimie: '🧪',
        istorie: '📜',
        fizica: '⚡',
        engleza: '🌍',
        geografie: '🌎',
        tehnologica: '🔧',
        sport: '🏀',
        dezvoltare: '🌱',
        mate_aplicativa: '🔢',
        rusa: '📖',
        informatica: '💻'
    };
    return icons[subject] || '📝';
}

function formatSubjectName(subject) {
    const subjectNames = {
        mate: 'Matematica',
        romana: 'Limba Română',
        biologie: 'Biologie',
        civica: 'Ed. Civică',
        chimie: 'Chimie',
        istorie: 'Istorie',
        fizica: 'Fizică',
        engleza: 'Limba Engleză',
        geografie: 'Geografie',
        tehnologica: 'Ed. Tehnologică',
        sport: 'Ed. Fizică',
        dezvoltare: 'Dezvoltare Personală',
        mate_aplicativa: 'Mate Aplicativă',
        rusa: 'Limba Rusă',
        informatica: 'Informatica'
    
    };
    return subjectNames[subject] || subject;
}

// Filter and tab functionality
function initializeHomeworkFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateHomeworkDisplay();
        });
    });

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateHomeworkDisplay();
        });
    });
}

function updateHomeworkDisplay() {
    const activeSubject = document.querySelector('.tab-btn.active')?.dataset.subject || 'all';
    const showImportant = document.getElementById('view-important')?.classList.contains('active') || false;
    const container = document.querySelector('.weekly-homework-container');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    Object.entries(weeklyHomework).forEach(([subject, tasks]) => {
        if (activeSubject === 'all' || activeSubject === subject) {
            tasks.forEach(task => {
                if (!showImportant || task.priority === 'high') {
                    const homeworkCard = createHomeworkCard(subject, task);
                    container.appendChild(homeworkCard);
                }
            });
        }
    });
}

function createHomeworkCard(subject, task) {
    const card = document.createElement('div');
    card.className = 'homework-card';
    
    const isEmptyTask = task.description.toLowerCase() === 'nimic';
    const contentClass = isEmptyTask ? 'homework-content empty' : 'homework-content';
    
    card.innerHTML = `
        <div class="subject-icon">${getSubjectIcon(subject)}</div>
        <div class="${contentClass}">
            <h3>${formatSubjectName(subject)}</h3>
            <p>${task.description}</p>
        </div>
        <div class="priority-badge ${task.priority}">${task.priority === 'high' ? 'Important' : 'Mediu'}</div>
    `;
    return card;
}

// Update tomorrow's homework based on schedule
function updateTomorrowDate() {
    const now = new Date();
    const currentHour = now.getHours();
    
    // If it's before 5 PM (17:00), show today's homework as "tomorrow"
    // If it's after 5 PM, show next day's homework
    const tomorrow = new Date();
    if (currentHour >= 15) {
        tomorrow.setDate(tomorrow.getDate() + 1);
    }
    
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const tomorrowDateElement = document.getElementById('tomorrow-date');
    if (tomorrowDateElement) {
        tomorrowDateElement.textContent = tomorrow.toLocaleDateString('ro-RO', options);
    }
    
    // Get tomorrow's day name in English for the schedule
    const tomorrowDay = tomorrow.toLocaleDateString('en-US', { weekday: 'long' });
    updateTomorrowHomework(tomorrowDay);
}

function updateTomorrowHomework(tomorrowDay) {
    const tomorrowSchedule = orarLectii[tomorrowDay] || [];
    const homeworkCardsContainer = document.querySelector('.homework-cards');
    if (!homeworkCardsContainer) return;
    
    homeworkCardsContainer.innerHTML = '';
    
    // Updated mapping to include all variations of subject names
    const scheduleToSubject = {
        'Matematica': 'mate',
        'L. Română': 'romana',
        'Fizica': 'fizica',
        'Chimia': 'chimie',
        'Biologie': 'biologie',
        'Istoria': 'istorie',
        'Geografia': 'geografie',
        'L. engleză': 'engleza',
        'Limba Rusa': 'rusa',
        'Ed. p/u societate': 'civica',
        'Ed. Civică': 'civica',      // Added this line
        'Ed. fizică': 'sport',
        'Dez. Personala': 'dezvoltare',
        'Mate Aplicativa': 'mate_aplicativa',
        'Ed Tehnologica': 'tehnologica',
        'Informatica': 'informatica'
    };
    
    // Get unique subjects from tomorrow's schedule
    const tomorrowSubjects = new Set();
    tomorrowSchedule.forEach(scheduleItem => {
        // Extract subject name more accurately
        const fullSubject = scheduleItem.split('/')[0].trim();
        // Remove the number and dot at the start (e.g., "1. ")
        const subject = fullSubject.replace(/^\d+\.\s*/, '').trim();
        tomorrowSubjects.add(subject);
    });
    
    // Create homework cards for each subject that has homework
    tomorrowSubjects.forEach(subject => {
        const homeworkKey = scheduleToSubject[subject];
        if (homeworkKey && weeklyHomework[homeworkKey]) {
            weeklyHomework[homeworkKey].forEach(task => {
                const card = document.createElement('div');
                card.className = 'homework-card';
                card.innerHTML = `
                    <div class="subject-icon">${getSubjectIcon(homeworkKey)}</div>
                    <div class="homework-content">
                        <h3>${formatSubjectName(homeworkKey)}</h3>
                        <p>${task.description}</p>
                    </div>
                    <div class="priority-badge ${task.priority}">${task.priority === 'high' ? 'Important' : 'Mediu'}</div>
                `;
                homeworkCardsContainer.appendChild(card);
            });
        }
    });
    
    // If no homework cards were added, show a message
    if (homeworkCardsContainer.children.length === 0) {
        const noHomeworkCard = document.createElement('div');
        noHomeworkCard.className = 'homework-card';
        noHomeworkCard.innerHTML = `
            <div class="subject-icon">📝</div>
            <div class="homework-content">
                <h3>Nu sunt teme</h3>
                <p>Nu sunt teme pentru mâine</p>
            </div>
            <div class="priority-badge medium">Info</div>
        `;
        homeworkCardsContainer.appendChild(noHomeworkCard);
    }
}

// Stats and Progress Logic
let timeSpent = parseInt(localStorage.getItem('timeSpent')) || 0;
let streak = parseInt(localStorage.getItem('streak')) || 0;
let points = parseInt(localStorage.getItem('points')) || 0;

function updateStats() {
    const timeProgress = Math.min((timeSpent / 60) * 100, 100);
    const timeProgressElement = document.getElementById('time-progress');
    const timeValueElement = document.getElementById('time-value');
    const streakProgressElement = document.getElementById('streak-progress');
    const streakValueElement = document.getElementById('streak-value');
    const userPointsElement = document.getElementById('user-points');
    const userRankElement = document.getElementById('user-rank');

    if (timeProgressElement) timeProgressElement.style.width = `${timeProgress}%`;
    if (timeValueElement) timeValueElement.textContent = `${timeSpent} minute`;

    const streakProgress = Math.min((streak / 7) * 100, 100);
    if (streakProgressElement) streakProgressElement.style.width = `${streakProgress}%`;
    if (streakValueElement) streakValueElement.textContent = `${streak} zile`;

    if (userPointsElement) userPointsElement.textContent = points;
    if (userRankElement) userRankElement.textContent = calculateRank(points);
}

function calculateRank(points) {
    if (points >= 650) return 'Expert';
    if (points >= 400) return 'Avansat';
    if (points >= 150) return 'Intermediar';
    return 'Începător';
}

function updateStreak() {
    const lastVisit = localStorage.getItem('lastVisit');
    const today = new Date().toDateString();

    if (lastVisit) {
        const last = new Date(lastVisit);
        const current = new Date();
        
        // Reset hours, minutes, seconds, and milliseconds for accurate day comparison
        last.setHours(0, 0, 0, 0);
        current.setHours(0, 0, 0, 0);
        
        const diffTime = current - last;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
            // Consecutive day, increment streak
            streak++;
            points += 10; // Bonus points for maintaining streak
        } else if (diffDays > 1) {
            // Streak broken, reset to 1
            streak = 1;
        }
        // If diffDays === 0, it's the same day, don't change the streak
    } else {
        // First visit ever
        streak = 1;
    }

    localStorage.setItem('streak', streak);
    localStorage.setItem('lastVisit', today);
    localStorage.setItem('points', points);
    updateStats(); // Update the UI immediately
}

// Theme and Dark Mode Logic
const darkModeToggle = document.getElementById('dark-mode-toggle');
const themeSelector = document.getElementById('theme-selector');

const savedTheme = localStorage.getItem('theme');
const savedDarkMode = localStorage.getItem('dark-mode');

if (savedTheme && themeSelector) {
    document.body.classList.add(savedTheme);
    themeSelector.value = savedTheme;
}

if (savedDarkMode === 'enabled' && darkModeToggle) {
    document.body.classList.add('dark-mode');
    darkModeToggle.checked = true;
}

darkModeToggle?.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
});

themeSelector?.addEventListener('change', (e) => {
    document.body.classList.remove('instagram-theme', 'diva-theme', 'default-theme');
    if (e.target.value === 'instagram') {
        document.body.classList.add('instagram-theme');
    } else if (e.target.value === 'diva') {
        document.body.classList.add('diva-theme');
    }
    localStorage.setItem('theme', e.target.value);
});

// Scroll to About Section
function scrollToAbout() {
    const aboutSection = document.getElementById('about-section');
    const homeSection = document.getElementById('home');
    
    if (aboutSection && homeSection) {
        document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
        homeSection.classList.add('active');
        
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        document.querySelector('[data-target="home"]')?.classList.add('active');
        
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Update time spent every minute
setInterval(() => {
    timeSpent++;
    localStorage.setItem('timeSpent', timeSpent);
    if (timeSpent % 1 === 0) {
        points++;
        localStorage.setItem('points', points);
    }
    updateStats();
}, 60000);

// Check for homework updates every minute
setInterval(updateTomorrowDate, 60000);

// Initialize everything when the DOM is loaded
function init() {
    updateTomorrowDate();
    updateStreak();
    updateStats();
    initializeHomeworkFilters();
    updateHomeworkDisplay();
    themeSelector?.dispatchEvent(new Event('change'));
    updateDay();
}

document.addEventListener('DOMContentLoaded', init);

// Profile and Badges Logic
const badges = {
    time: [
        { id: 'time-1', name: 'Time Novice', icon: '⏱️', description: 'Spent 1 hour on the site', requirement: 60 },
        { id: 'time-2', name: 'Time Explorer', icon: '⌚', description: 'Spent 5 hours on the site', requirement: 300 },
        { id: 'time-3', name: 'Time Master', icon: '🕰️', description: 'Spent 10 hours on the site', requirement: 600 }
    ],
    rank: [
        { id: 'rank-1', name: 'Beginner', icon: '🌱', description: 'Reached Beginner rank', requirement: 0 },
        { id: 'rank-2', name: 'Intermediate', icon: '🌿', description: 'Reached Intermediate rank', requirement: 150 },
        { id: 'rank-3', name: 'Advanced', icon: '🌳', description: 'Reached Advanced rank', requirement: 400 },
        { id: 'rank-4', name: 'Expert', icon: '🎓', description: 'Reached Expert rank', requirement: 650 }
    ],
    streak: [
        { id: 'streak-1', name: 'Streak Starter', icon: '🔥', description: '3 day streak', requirement: 3 },
        { id: 'streak-2', name: 'Streak Keeper', icon: '🌟', description: '7 day streak', requirement: 7 },
        { id: 'streak-3', name: 'Streak Master', icon: '⭐', description: '14 day streak', requirement: 14 }
    ]
};

let level = parseInt(localStorage.getItem('level')) || 1;
const XP_PER_LEVEL = 100;

function calculateLevel(points) {
    return Math.floor(points / XP_PER_LEVEL) + 1;
}

function updateProfileStats() {
    const profileLevel = document.getElementById('profile-level');
    const profilePoints = document.getElementById('profile-points');
    const profileStreak = document.getElementById('profile-streak');
    const levelProgress = document.getElementById('level-progress');
    const levelInfo = document.getElementById('level-info');

    if (profileLevel) profileLevel.textContent = level;
    if (profilePoints) profilePoints.textContent = points;
    if (profileStreak) profileStreak.textContent = streak;

    const currentLevelPoints = points % XP_PER_LEVEL;
    const progressPercentage = (currentLevelPoints / XP_PER_LEVEL) * 100;

    if (levelProgress) levelProgress.style.width = `${progressPercentage}%`;
    if (levelInfo) levelInfo.textContent = `Level ${level} • ${currentLevelPoints}/${XP_PER_LEVEL} XP`;

    updateBadges();
}

function createBadge(badge, earned) {
    const badgeElement = document.createElement('div');
    badgeElement.className = `badge ${earned ? 'earned' : 'locked'}`;
    badgeElement.innerHTML = `
        <div class="badge-icon">${badge.icon}</div>
        <div class="badge-info">
            <h4>${badge.name}</h4>
            <p>${badge.description}</p>
        </div>
    `;
    return badgeElement;
}

function updateBadges() {
    const timeBadgesContainer = document.getElementById('time-badges');
    const rankBadgesContainer = document.getElementById('rank-badges');
    const streakBadgesContainer = document.getElementById('streak-badges');

    if (timeBadgesContainer) {
        timeBadgesContainer.innerHTML = '';
        badges.time.forEach(badge => {
            const earned = timeSpent >= badge.requirement;
            timeBadgesContainer.appendChild(createBadge(badge, earned));
        });
    }

    if (rankBadgesContainer) {
        rankBadgesContainer.innerHTML = '';
        badges.rank.forEach(badge => {
            const earned = points >= badge.requirement;
            rankBadgesContainer.appendChild(createBadge(badge, earned));
        });
    }

    if (streakBadgesContainer) {
        streakBadgesContainer.innerHTML = '';
        badges.streak.forEach(badge => {
            const earned = streak >= badge.requirement;
            streakBadgesContainer.appendChild(createBadge(badge, earned));
        });
    }
}

// Profile Picture Upload
const profileUpload = document.getElementById('profile-upload');
const profilePicture = document.getElementById('profile-picture');

profileUpload?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
            const imageData = event.target.result;
            localStorage.setItem('profilePicture', imageData);
            if (profilePicture) profilePicture.src = imageData;
        };
        reader.readAsDataURL(file);
    }
});

// Load saved profile picture
const savedProfilePicture = localStorage.getItem('profilePicture');
if (savedProfilePicture && profilePicture) {
    profilePicture.src = savedProfilePicture;
}

// Update level when points change
function updateLevel() {
    const newLevel = calculateLevel(points);
    if (newLevel !== level) {
        level = newLevel;
        localStorage.setItem('level', level);
    }
}

// Modify existing updateStats function to include profile updates
const originalUpdateStats = updateStats;
updateStats = function() {
    originalUpdateStats();
    updateLevel();
    updateProfileStats();
};

// Initialize profile when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    init();
    updateProfileStats();
});


// Add this code after the profile picture logic

// Username Logic
const editUsernameBtn = document.getElementById('edit-username-btn');
const usernameText = document.getElementById('username-text');
const usernameEdit = document.getElementById('username-edit');
const usernameInput = document.getElementById('username-input');
const saveUsernameBtn = document.getElementById('save-username');
const cancelUsernameBtn = document.getElementById('cancel-username');

// Load saved username
const savedUsername = localStorage.getItem('username') || 'User';
usernameText.textContent = savedUsername;
usernameInput.value = savedUsername;

// Edit username button click handler
editUsernameBtn?.addEventListener('click', () => {
    usernameEdit.classList.remove('hidden');
    usernameInput.value = usernameText.textContent;
    usernameInput.focus();
});

// Save username button click handler
saveUsernameBtn?.addEventListener('click', () => {
    const newUsername = usernameInput.value.trim();
    if (newUsername) {
        usernameText.textContent = newUsername;
        localStorage.setItem('username', newUsername);
        usernameEdit.classList.add('hidden');
    }
});

// Cancel username edit button click handler
cancelUsernameBtn?.addEventListener('click', () => {
    usernameEdit.classList.add('hidden');
    usernameInput.value = usernameText.textContent;
});

// Handle Enter key in username input
usernameInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        saveUsernameBtn.click();
    }
});

// Handle Escape key to cancel editing
usernameInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        cancelUsernameBtn.click();
    }
});

// Add this code after your existing JavaScript

// Pomodoro Timer Logic
let timerInterval;
let timeLeft;
let isTimerRunning = false;
let currentMode = 'focus'; // 'focus' or 'break'

const timerMinutes = document.getElementById('timer-minutes');
const timerSeconds = document.getElementById('timer-seconds');
const timerMode = document.getElementById('timer-mode');
const timerStart = document.getElementById('timer-start');
const timerReset = document.getElementById('timer-reset');

const FOCUS_TIME = 25 * 60; // 25 minutes in seconds
const BREAK_TIME = 5 * 60; // 5 minutes in seconds

function initializeTimer() {
    timeLeft = FOCUS_TIME;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerMinutes.textContent = minutes.toString().padStart(2, '0');
    timerSeconds.textContent = seconds.toString().padStart(2, '0');
}

function toggleTimer() {
    if (isTimerRunning) {
        clearInterval(timerInterval);
        timerStart.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            Start
        `;
    } else {
        timerInterval = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();
            
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                if (currentMode === 'focus') {
                    timeLeft = BREAK_TIME;
                    currentMode = 'break';
                    timerMode.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-coffee"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/></svg>
                        Break
                    `;
                } else {
                    timeLeft = FOCUS_TIME;
                    currentMode = 'focus';
                    timerMode.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>
                        Focus
                    `;
                }
                updateTimerDisplay();
                isTimerRunning = false;
                timerStart.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    Start
                `;
                // Play notification sound or show notification
                new Audio('https://actions.google.com/sounds/v1/alarms/beep_short.ogg').play();
            }
        }, 1000);
        timerStart.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pause"><rect width="4" height="16" x="6" y="4"/><rect width="4" height="16" x="14" y="4"/></svg>
            Pause
        `;
    }
    isTimerRunning = !isTimerRunning;
}

timerStart?.addEventListener('click', toggleTimer);
timerReset?.addEventListener('click', () => {
    clearInterval(timerInterval);
    isTimerRunning = false;
    currentMode = 'focus';
    timerMode.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>
        Focus
    `;
    timerStart.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        Start
    `;
    initializeTimer();
});

// To-Do List Logic
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

// Load saved todos
let todos = JSON.parse(localStorage.getItem('todos')) || [];

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function createTodoElement(todo) {
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.innerHTML = `
        <div class="todo-checkbox ${todo.completed ? 'checked' : ''}">${
            todo.completed ? `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><polyline points="20 6 9 17 4 12"/></svg>` : ''
        }</div>
        <span class="todo-text ${todo.completed ? 'completed' : ''}">${todo.text}</span>
        <button class="delete-todo">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
        </button>
    `;

    const checkbox = li.querySelector('.todo-checkbox');
    checkbox.addEventListener('click', () => toggleTodo(todo.id));

    const deleteBtn = li.querySelector('.delete-todo');
    deleteBtn.addEventListener('click', () => deleteTodo(todo.id));

    return li;
}

function addTodo(text) {
    if (text.trim()) {
        const todo = {
            id: Date.now(),
            text: text.trim(),
            completed: false
        };
        todos.push(todo);
        saveTodos();
        todoList.appendChild(createTodoElement(todo));
        todoInput.value = '';
    }
}

function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        saveTodos();
        renderTodos();
    }
}

function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    saveTodos();
    renderTodos();
}

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach(todo => {
        todoList.appendChild(createTodoElement(todo));
    });
}

addTodoBtn?.addEventListener('click', () => addTodo(todoInput.value));
todoInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo(todoInput.value);
    }
});

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    initializeTimer();
    renderTodos();
});
