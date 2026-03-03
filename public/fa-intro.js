// 전문가 소개 페이지 전용 JavaScript

// 전문가 프로필 로드
function loadFAProfiles() {
    const profiles = getStorageItem('fa_profiles', []);
    const container = document.getElementById('fa-profiles-container');
    const emptyState = document.getElementById('empty-state');

    console.log('========== 전문가 프로필 로드 ==========');
    console.log('전체 프로필 수:', profiles.length);
    console.log('프로필 데이터:', profiles);
    console.log('======================================');

    if (profiles.length === 0) {
        if (container) container.classList.add('hidden');
        if (emptyState) emptyState.classList.remove('hidden');
        console.log('⚠️ 등록된 전문가가 없습니다');
        return;
    }

    if (container) container.classList.remove('hidden');
    if (emptyState) emptyState.classList.add('hidden');

    console.log('✅ 전문가 카드 생성 중...');
    
    // Load reviews for filtering
    const allReviews = getStorageItem('fa_reviews', []);
    console.log('전체 리뷰 수:', allReviews.length);
    
    // Create compact cards
    const cardsHTML = profiles.map((profile, index) => {
        console.log(`카드 ${index + 1} 생성:`, profile.name);
        const profileReviews = allReviews.filter(r => r.faId === profile.id);
        const avgRating = profileReviews.length > 0 
            ? (profileReviews.reduce((sum, r) => sum + r.rating, 0) / profileReviews.length).toFixed(1)
            : 0;
        
        return `
        <div onclick="openExpertModal(${profile.id})" class="expert-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer">
            ${profile.photoUrl ? 
                `<img src="${profile.photoUrl}" alt="${profile.name}" class="w-full h-32 object-cover">` :
                `<div class="w-full h-32 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                    <i class="fas fa-user text-4xl text-indigo-300"></i>
                </div>`
            }
            <div class="p-3">
                <h3 class="text-base font-bold mb-1 truncate">${profile.name}</h3>
                ${profile.company ? `
                    <p class="text-xs text-gray-500 mb-2 truncate">
                        <i class="fas fa-building mr-1"></i>${profile.company}
                    </p>
                ` : ''}
                ${profileReviews.length > 0 ? `
                    <div class="flex items-center text-xs">
                        <span class="text-yellow-500">⭐</span>
                        <span class="font-semibold ml-1">${avgRating}</span>
                        <span class="text-gray-400 ml-1">(${profileReviews.length})</span>
                    </div>
                ` : '<div class="text-xs text-gray-400">리뷰 없음</div>'}
            </div>
        </div>
        `;
    }).join('');
    
    console.log('생성된 HTML 길이:', cardsHTML.length);
    if (container) {
        container.innerHTML = cardsHTML;
    }
    console.log('✅ 카드 표시 완료!');
}

// 전문가 상세 모달 열기
function openExpertModal(expertId) {
    const profiles = getStorageItem('fa_profiles', []);
    const profile = profiles.find(p => p.id === expertId);
    if (!profile) return;

    const allReviews = getStorageItem('fa_reviews', []);
    const profileReviews = allReviews.filter(r => r.faId === profile.id);
    const avgRating = profileReviews.length > 0 
        ? (profileReviews.reduce((sum, r) => sum + r.rating, 0) / profileReviews.length).toFixed(1)
        : 0;

    const modalContent = document.getElementById('expert-modal-content');
    if (!modalContent) return;

    modalContent.innerHTML = `
        <div class="grid md:grid-cols-2 gap-6 mb-6">
            <div>
                ${profile.photoUrl ? 
                    `<img src="${profile.photoUrl}" alt="${profile.name}" class="w-full rounded-xl shadow-lg object-cover">` :
                    `<div class="w-full h-64 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center">
                        <i class="fas fa-user text-8xl text-indigo-300"></i>
                    </div>`
                }
            </div>
            <div>
                <div class="flex justify-between items-start mb-4">
                    <h3 class="text-3xl font-bold text-gray-800">${profile.name}</h3>
                    ${profileReviews.length > 0 ? `
                        <div class="text-right">
                            <div class="text-2xl">
                                <span class="text-yellow-500">⭐</span>
                                <span class="font-bold">${avgRating}</span>
                            </div>
                            <div class="text-sm text-gray-500">${profileReviews.length}개 리뷰</div>
                        </div>
                    ` : ''}
                </div>
                
                ${profile.introduction ? `
                    <p class="text-gray-600 mb-4 leading-relaxed">${profile.introduction}</p>
                ` : ''}
                
                ${profile.company ? `
                    <div class="mb-3 flex items-center text-gray-700">
                        <i class="fas fa-building w-6 text-indigo-600"></i>
                        <span class="font-medium">${profile.company}</span>
                    </div>
                ` : ''}
                
                ${profile.region ? `
                    <div class="mb-3 flex items-center text-gray-700">
                        <i class="fas fa-map-marker-alt w-6 text-indigo-600"></i>
                        <span>${profile.region}${profile.branch ? ' ' + profile.branch : ''}</span>
                    </div>
                ` : ''}
                
                ${profile.email ? `
                    <div class="mb-3 flex items-center text-gray-700">
                        <i class="fas fa-envelope w-6 text-indigo-600"></i>
                        <span>${profile.email}</span>
                    </div>
                ` : ''}
                
                ${profile.phone ? `
                    <div class="mb-4 flex items-center text-gray-700">
                        <i class="fas fa-phone w-6 text-indigo-600"></i>
                        <span>${profile.phone}</span>
                    </div>
                ` : ''}
                
                ${profile.specialties ? `
                    <div class="mb-4">
                        <div class="text-sm font-semibold mb-2 text-gray-700">전문 분야</div>
                        <div class="flex flex-wrap gap-2">
                            ${profile.specialties.split(',').map(s => `<span class="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">${s.trim()}</span>`).join('')}
                        </div>
                    </div>
                ` : ''}
                
                ${profile.kakaoLink ? `
                    <a href="${profile.kakaoLink}" target="_blank" class="block w-full bg-yellow-400 text-gray-800 px-6 py-3 rounded-lg hover:bg-yellow-500 font-bold text-center text-lg shadow-md">
                        <i class="fas fa-comment mr-2"></i>카카오톡 오픈채팅 상담하기
                    </a>
                ` : ''}
            </div>
        </div>
        
        ${profileReviews.length > 0 ? `
            <div class="border-t pt-6">
                <h4 class="text-xl font-bold mb-4 text-gray-800">고객 리뷰 (${profileReviews.length}건)</h4>
                <div class="space-y-3 max-h-96 overflow-y-auto">
                    ${profileReviews.map(review => `
                        <div class="bg-gray-50 rounded-lg p-4">
                            <div class="flex justify-between mb-2">
                                <span class="font-semibold text-gray-800">${maskName(review.author)}</span>
                                <span class="text-yellow-500 text-lg">${'⭐'.repeat(review.rating)}</span>
                            </div>
                            <p class="text-gray-700 leading-relaxed">${review.content}</p>
                            <div class="text-xs text-gray-500 mt-2">${formatDate(review.createdAt)}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : '<div class="border-t pt-6 text-center text-gray-500">아직 등록된 리뷰가 없습니다</div>'}
    `;

    const modal = document.getElementById('expert-modal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.querySelector('.bg-white').classList.add('modal-fade-in');
        document.body.style.overflow = 'hidden';
    }
}

// 전문가 모달 닫기
function closeExpertModal() {
    const modal = document.getElementById('expert-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// 모달 배경 클릭 시 닫기
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('expert-modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeExpertModal();
            }
        });
    }
    
    // 전문가 프로필 로드
    loadFAProfiles();
});
