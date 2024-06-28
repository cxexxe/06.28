document.addEventListener('DOMContentLoaded', function() {
    const btnListup = document.querySelector('.btnListup');
    const sortOptions = document.querySelectorAll('.listSort input[type="radio"]');

    sortOptions.forEach(option => {
        option.addEventListener('change', function() {
            const sortType = this.value;
            sortProducts(sortType);
        });
    });

    function sortProducts(sortType) {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            let products = Array.from(section.querySelectorAll('.product'));
            
            // 추천순으로 정렬
            if (sortType === 'recommend') {
                products.sort((a, b) => b.getAttribute('data-recommend') - a.getAttribute('data-recommend'));
            }
            // 신제품순으로 정렬
            else if (sortType === 'new') {
                products.sort((a, b) => b.getAttribute('data-release').localeCompare(a.getAttribute('data-release')));
            }
            
            // 정렬된 제품들을 다시 DOM에 추가
            const productWrapper = section.querySelector('.card_wrapper');
            productWrapper.innerHTML = '';
            products.forEach(product => {
                productWrapper.appendChild(product);
            });
        });
    }
});
