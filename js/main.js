// Основные скрипты для сайта
document.addEventListener('DOMContentLoaded', function() {
    // Навигация между вкладками входа/регистрации
    const tabBtns = document.querySelectorAll('.tab-btn');
    const authForms = document.querySelectorAll('.auth-form');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Убираем активный класс у всех кнопок и форм
            tabBtns.forEach(b => b.classList.remove('active'));
            authForms.forEach(f => f.classList.remove('active'));
            
            // Добавляем активный класс текущей кнопке и форме
            this.classList.add('active');
            document.getElementById(tabId + '-form').classList.add('active');
        });
    });
    
    // Обработка формы обратной связи
    const feedbackForm = document.getElementById('feedback-form');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Отправка формы на сервер
            alert('Ваше сообщение отправлено!');
            this.reset();
        });
    }
    
    // Обработка форм входа/регистрации
    const loginForm = document.getElementById('login');
    const registerForm = document.getElementById('register');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Авторизация пользователя
        });
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Регистрация нового пользователя
        });
    }
    
    // Фильтрация расписания по дням
    const daySelector = document.getElementById('day-selector');
    if (daySelector) {
        daySelector.addEventListener('change', function() {
            // Загрузка расписания для выбранного дня
        });
    }
    
    // Фильтрация архива по категориям
    const archiveCategory = document.getElementById('archive-category');
    if (archiveCategory) {
        archiveCategory.addEventListener('change', function() {
            // Фильтрация архива по выбранной категории
        });
    }
});