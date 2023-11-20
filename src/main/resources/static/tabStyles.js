$(document).ready(function () {
    // Переключение табов при загрузке страницы
    var activeTab = localStorage.getItem('activeTab');
    if (activeTab) {
        $("#bodyNav button.nav-link").removeClass("active");
        $("#" + activeTab + "Tab").addClass("active");

        $("#bodyTabContent div.tab-pane").removeClass("show active");
        $("#" + activeTab).addClass("show active");
    }

    // Обработка клика по табу
    $("#bodyNav button.nav-link").click(function () {
        // Убираем класс "active" с всех кнопок навигации
        $("#bodyNav button.nav-link").removeClass("active");

        // Добавляем класс "active" только к нажатой кнопке
        $(this).addClass("active");

        // Убираем классы "show" и "active" со всех вкладок
        $("#bodyTabContent div.tab-pane").removeClass("show active");

        // Добавляем классы "show" и "active" к целевой вкладке
        $("#" + $(this).data("tab")).addClass("show active");

        // Сохраняем активный таб в локальное хранилище
        localStorage.setItem('activeTab', $(this).data("tab"));
    });

    // Обработка клика по кнопкам внутри вкладок
    $("#bodyTabContent button.btn").click(function () {
        let action = $(this).data("user-action");
        $("#modalLabel").text(action === 'delete' ? "Подтвердите удаление пользователя" : "Внесите изменения");
    });

    // Выделение активной панели в навигации
    // Выделение активной панели в навигации
    $("nav #user-panel-link").toggleClass("active", window.location.pathname.includes("/user") && !window.location.pathname.includes("/admin"));
    $("nav #admin-panel-link").toggleClass("active", window.location.pathname.includes("/admin") && !window.location.pathname.includes("/user"));

});
