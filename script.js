document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const snapContainer = document.querySelector('.snap-container');

    const scrollAmount = 300; // Độ dài cuộn khi nhấn nút

    prevButton.addEventListener('click', () => {
        snapContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    nextButton.addEventListener('click', () => {
        snapContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const prevButton1 = document.getElementById('prev-button1');
    const nextButton1 = document.getElementById('next-button1');
    const snapContainer1 = document.querySelector('.snap-container1');

    const scrollAmount = 300; // Độ dài cuộn khi nhấn nút

    prevButton1.addEventListener('click', () => {
        snapContainer1.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    nextButton1.addEventListener('click', () => {
        snapContainer1.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});

