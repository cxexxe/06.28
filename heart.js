// 모든 하트 아이콘을 선택합니다.
const heartIcons = document.querySelectorAll('.fa-heart');

// 각 하트 아이콘에 클릭 이벤트 리스너를 추가합니다.
heartIcons.forEach(heart => {
    heart.addEventListener('click', function() {
        // 현재 하트 아이콘의 색상을 확인합니다.
        const isWhite = this.style.color === 'rgb(255, 255, 255)'; // CSS에서 설정한 색상이 #ffffff이므로, 이를 rgb 값으로 비교합니다.
        
        // 색상을 토글합니다. 만약 현재 색상이 흰색이면 빨간색으로, 그렇지 않으면 흰색으로 변경합니다.
        this.style.color = isWhite ? 'red' : '#ffffff'; // 빨간색으로 변경하고 싶은 경우 'red'를, 다시 흰색으로 변경하고 싶은 경우 '#ffffff'를 사용합니다.
    });
});

