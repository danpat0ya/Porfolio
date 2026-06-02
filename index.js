// index.js
document.addEventListener('DOMContentLoaded', () => {
    console.log("포트폴리오 페이지가 성공적으로 로드되었습니다.");

    // 외부 링크 클릭 시 새 창 열기 보안 속성 관리 및 확인용 로그
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            console.log(`사용자가 다음 링크로 이동합니다: ${e.target.href}`);
        });
    });
});