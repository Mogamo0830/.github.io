// script.js

// ショーケースクリックでお菓子リストを表示
const showcaseBox = document.querySelector('.showcase-box');
const sweetsList = document.querySelector('.sweets-list');
const clickMessage = document.querySelector('.click-message');

showcaseBox.addEventListener('click', () => {
    sweetsList.classList.remove('hidden');
    clickMessage.style.display = 'none';
});

// お菓子をクリックしたら小説ページへ遷移
const sweets = document.querySelectorAll('.sweet');
sweets.forEach(sweet => {
    sweet.addEventListener('click', () => {
        const novelPage = sweet.dataset.novel;
        window.location.href = novelPage;
    });
});

// ホバーで説明を表示（CSSで実現する予定だが保険でJSも）
sweets.forEach(sweet => {
    const desc = sweet.querySelector('.sweet-description');
    sweet.addEventListener('mouseenter', () => {
        desc.classList.add('show');
    });
    sweet.addEventListener('mouseleave', () => {
        desc.classList.remove('show');
    });
});
