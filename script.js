// script.js

// -----------------------------
// 1. ショーケースクリックでお菓子リストを表示
// -----------------------------
const showcaseBox = document.querySelector('.showcase-box');
const sweetsList = document.querySelector('.sweets-list');
const clickMessage = document.querySelector('.click-message');

showcaseBox.addEventListener('click', () => {
    // お菓子リストを表示
    sweetsList.classList.remove('hidden');

    // 「クリックするとお菓子が並びます」メッセージを非表示
    clickMessage.style.display = 'none';

    // 簡単なアニメーション（ふわっと表示）
    sweetsList.querySelectorAll('.sweet').forEach((sweet, i) => {
        sweet.style.opacity = 0;
        sweet.style.transform = 'translateY(20px)';
        setTimeout(() => {
            sweet.style.transition = 'all 0.4s ease';
            sweet.style.opacity = 1;
            sweet.style.transform = 'translateY(0)';
        }, i * 150);
    });
});

// -----------------------------
// 2. お菓子をクリックしたら小説ページへ遷移
// -----------------------------
const sweets = document.querySelectorAll('.sweet');

sweets.forEach(sweet => {
    sweet.addEventListener('click', () => {
        const novelPage = sweet.dataset.novel;
        if (novelPage) {
            window.location.href = novelPage;
        }
    });
});

// -----------------------------
// 3. ホバーで説明文を表示（CSSでも可能だがJS保険）
// -----------------------------
sweets.forEach(sweet => {
    const desc = sweet.querySelector('.sweet-description');
    sweet.addEventListener('mouseenter', () => {
        if (desc) desc.classList.add('show');
    });
    sweet.addEventListener('mouseleave', () => {
        if (desc) desc.classList.remove('show');
    });
});


