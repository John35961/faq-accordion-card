const faqTitles = document.querySelectorAll('.question__title');

faqTitles.forEach((faqTitle) => {
    faqTitle.addEventListener('click', () => {
        if (faqTitle.classList.contains('question__title--active')) {
            faqTitle.classList.remove('question__title--active');
        } else {
            const openFaqTitles = document.querySelectorAll(".question__title--active");
            openFaqTitles.forEach((openFaqTitle) => {
                openFaqTitle.classList.remove('question__title--active');
            });
            faqTitle.classList.add('question__title--active');
        };
    });
});