// 보험 LOUNGE 공통 JavaScript 함수

// 성함 마스킹 함수 (홍길동 → 홍**)
function maskName(name) {
    if (!name || name.length === 0) return '익명';
    if (name.length === 1) return name + '**';
    return name.charAt(0) + '**';
}

// localStorage 안전 읽기
function getStorageItem(key, defaultValue = []) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
        console.error(`localStorage 읽기 실패 (${key}):`, e);
        return defaultValue;
    }
}

// localStorage 안전 쓰기
function setStorageItem(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (e) {
        console.error(`localStorage 쓰기 실패 (${key}):`, e);
        return false;
    }
}

// 날짜 포맷팅 (YYYY-MM-DD)
function formatDate(date) {
    const d = new Date(date);
    return d.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// 모바일 메뉴 토글
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    
    if (btn && menu) {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // 이벤트 전파 중지
            menu.classList.toggle('hidden');
        });
        
        // 메뉴 외부 클릭 시 닫기
        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && !btn.contains(e.target)) {
                menu.classList.add('hidden');
            }
        });
        
        // 메뉴 링크 클릭 시 메뉴 닫기
        const menuLinks = menu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });
    }
}

// 로딩 표시
function showLoading(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = `
            <div class="text-center py-16">
                <div class="loading-spinner"></div>
                <p class="text-gray-500 mt-4">로딩 중...</p>
            </div>
        `;
    }
}

// 빈 상태 표시
function showEmptyState(containerId, message, icon = 'fa-inbox') {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = `
            <div class="text-center py-16">
                <i class="fas ${icon} text-gray-300 text-6xl mb-4"></i>
                <p class="text-gray-500 text-lg">${message}</p>
            </div>
        `;
    }
}

// 에러 표시
function showError(containerId, message) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = `
            <div class="text-center py-16">
                <i class="fas fa-exclamation-triangle text-red-400 text-6xl mb-4"></i>
                <p class="text-red-600 text-lg font-semibold">${message}</p>
            </div>
        `;
    }
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
    // 모바일 메뉴 초기화
    initMobileMenu();
    
    console.log('✅ 공통 JavaScript 로드 완료');
});
