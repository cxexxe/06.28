document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('main > section');
    const dots = document.querySelectorAll('.navigation-indicator .dot');
    
    let options = {
        root: null, // 뷰포트를 root로 설정
        rootMargin: '0px',
        threshold: 0.5 // 섹션이 화면의 50% 이상 보일 때 콜백이 실행되도록 설정
    };

    // IntersectionObserver 콜백 함수
    let observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            // 섹션이 화면에 나타나면 해당하는 동그라미의 색상을 변경
            if(entry.isIntersecting){
                const sectionIndex = Array.from(sections).indexOf(entry.target);
                dots.forEach((dot, index) => {
                    if(index === sectionIndex){
                        dot.style.backgroundColor = '#43FF5C'; // 현재 섹션에 해당하는 동그라미를 초록색으로 변경
                    } else {
                        dot.style.backgroundColor = ''; // 다른 동그라미는 기본 색상으로 변경
                    }
                });
            }
        });
    }, options);

    // 각 섹션에 대해 관찰자를 설정
    sections.forEach(section => {
        observer.observe(section);
    });
});
