export default window.check_mark = function() {
    // Показываем галочку при нажатии на кнопку
    const statusElement = document.getElementById('check-mark_button');
    statusElement.style.display = 'inline';
    
    // Скрываем галочку через 3 секунды
    setTimeout(function() {
        statusElement.style.display = 'none';
    }, 5000); // Скрыть через 5 секунд
}
