document.addEventListener('DOMContentLoaded', function() {
    var sitemapBtn = document.querySelector('.sitemap_btn');

    sitemapBtn.addEventListener('click', function() {
        var activeCheckbox = document.querySelector('#active');

        activeCheckbox.checked = !activeCheckbox.checked;
    });
});


    document.addEventListener('DOMContentLoaded', function () {
        // sitemap_btn 클릭 이벤트 리스너
        document.querySelector('.sitemap_btn').addEventListener('click', function () {
            // wrapper의 display 상태 토글
            var wrapper = document.querySelector('.wrapper');
            wrapper.classList.toggle('active');
        });
    });

