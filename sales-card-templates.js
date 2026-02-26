// 보험 종류별 특화 세일즈카드 템플릿

// 공통 헤더
function getCardHeader(product) {
    return `
        <div style="text-align: center; margin-bottom: 40px;">
            <div style="display: inline-block; background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%); color: white; padding: 10px 30px; border-radius: 50px; font-size: 14px; font-weight: bold; margin-bottom: 20px;">
                보험저널 검증 상품
            </div>
            <h1 style="font-size: 36px; font-weight: bold; color: #1f2937; margin-bottom: 10px;">
                ${product.company}
            </h1>
            <h2 style="font-size: 28px; color: #06b6d4; margin-bottom: 20px;">
                ${product.product}
            </h2>
            <p style="color: #6b7280; font-size: 16px; line-height: 1.6;">
                ${product.reason}
            </p>
        </div>
    `;
}

// 공통 푸터
function getCardFooter(product) {
    return `
        <div style="border-top: 2px solid #e5e7eb; padding-top: 20px; text-align: center; margin-top: 30px;">
            <p style="color: #6b7280; font-size: 14px; margin-bottom: 10px;">
                <i class="fas fa-certificate" style="color: #f59e0b; margin-right: 5px;"></i>
                <strong>${product.category}</strong> 부문 수상
            </p>
            ${product.targetAge ? `<p style="color: #6b7280; font-size: 13px; margin-bottom: 10px;">
                <i class="fas fa-users" style="color: #06b6d4; margin-right: 5px;"></i>
                추천 연령: ${product.targetAge} | 대상: ${product.targetCustomer}
            </p>` : ''}
            <p style="color: #9ca3af; font-size: 12px;">
                본 자료는 보험저널이 선정한 검증 상품 정보를 기반으로 제작되었습니다.
            </p>
            <p style="color: #9ca3af; font-size: 12px; margin-top: 5px;">
                생성일: ${new Date().toLocaleDateString('ko-KR')} | 보험 LOUNGE
            </p>
        </div>
    `;
}

// 주요 강점 섹션
function getStrengthsSection(strengths) {
    return `
        <div style="background: #f9fafb; border-radius: 15px; padding: 30px; margin-bottom: 30px;">
            <h3 style="font-size: 22px; font-weight: bold; color: #1f2937; margin-bottom: 20px; display: flex; align-items: center;">
                <i class="fas fa-star" style="color: #f59e0b; margin-right: 10px;"></i>
                주요 강점
            </h3>
            ${strengths.map((strength, index) => `
                <div style="display: flex; align-items: start; margin-bottom: 15px;">
                    <div style="min-width: 30px; height: 30px; background: #06b6d4; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px;">
                        ${index + 1}
                    </div>
                    <p style="color: #374151; font-size: 16px; line-height: 1.6; flex: 1;">
                        ${strength.replace('✅ ', '')}
                    </p>
                </div>
            `).join('')}
        </div>
    `;
}

// 1. 종신보험 - 1억 만들기 플랜
export function getWholeLifeCard(product) {
    const monthlyPremium = Math.round(100000000 / 240 / 12); // 20년납
    const totalPremium = monthlyPremium * 12 * 20;
    
    return getCardHeader(product) + getStrengthsSection(product.strengths) + `
        <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-radius: 15px; padding: 30px; margin-bottom: 30px;">
            <h3 style="font-size: 22px; font-weight: bold; color: #92400e; margin-bottom: 20px; display: flex; align-items: center;">
                <i class="fas fa-piggy-bank" style="color: #f59e0b; margin-right: 10px;"></i>
                1억 만들기 플랜 (예시)
            </h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                <div style="background: white; border-radius: 10px; padding: 20px; text-align: center;">
                    <p style="color: #6b7280; font-size: 14px; margin-bottom: 5px;">월 납입액</p>
                    <p style="font-size: 28px; font-weight: bold; color: #06b6d4;">${monthlyPremium.toLocaleString()}원</p>
                </div>
                <div style="background: white; border-radius: 10px; padding: 20px; text-align: center;">
                    <p style="color: #6b7280; font-size: 14px; margin-bottom: 5px;">납입기간</p>
                    <p style="font-size: 28px; font-weight: bold; color: #06b6d4;">20년</p>
                </div>
                <div style="background: white; border-radius: 10px; padding: 20px; text-align: center;">
                    <p style="color: #6b7280; font-size: 14px; margin-bottom: 5px;">총 납입액</p>
                    <p style="font-size: 28px; font-weight: bold; color: #10b981;">${totalPremium.toLocaleString()}원</p>
                </div>
                <div style="background: white; border-radius: 10px; padding: 20px; text-align: center;">
                    <p style="color: #6b7280; font-size: 14px; margin-bottom: 5px;">보장금액</p>
                    <p style="font-size: 28px; font-weight: bold; color: #ef4444;">1억원</p>
                </div>
            </div>
            <p style="color: #92400e; font-size: 12px; margin-top: 15px; text-align: center;">
                ※ 위 금액은 예시이며, 실제 보험료는 나이·성별·건강상태에 따라 달라질 수 있습니다.
            </p>
        </div>
    ` + getCardFooter(product);
}

// 2. 치매간병보험 - 단계별 보장금액
export function getDementiaCard(product) {
    return getCardHeader(product) + getStrengthsSection(product.strengths) + `
        <div style="background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); border-radius: 15px; padding: 30px; margin-bottom: 30px;">
            <h3 style="font-size: 22px; font-weight: bold; color: #1e3a8a; margin-bottom: 20px; display: flex; align-items: center;">
                <i class="fas fa-hand-holding-heart" style="color: #3b82f6; margin-right: 10px;"></i>
                치매 단계별 보장 플랜 (예시)
            </h3>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px;">
                <div style="background: white; border-radius: 10px; padding: 20px; text-align: center;">
                    <p style="color: #6b7280; font-size: 13px; margin-bottom: 5px;">경도인지장애</p>
                    <p style="font-size: 24px; font-weight: bold; color: #06b6d4;">500만원</p>
                </div>
                <div style="background: white; border-radius: 10px; padding: 20px; text-align: center;">
                    <p style="color: #6b7280; font-size: 13px; margin-bottom: 5px;">경증 치매</p>
                    <p style="font-size: 24px; font-weight: bold; color: #3b82f6;">1천만원</p>
                </div>
                <div style="background: white; border-radius: 10px; padding: 20px; text-align: center;">
                    <p style="color: #6b7280; font-size: 13px; margin-bottom: 5px;">중등도 치매</p>
                    <p style="font-size: 24px; font-weight: bold; color: #f59e0b;">2천만원</p>
                </div>
                <div style="background: white; border-radius: 10px; padding: 20px; text-align: center;">
                    <p style="color: #6b7280; font-size: 13px; margin-bottom: 5px;">중증 치매</p>
                    <p style="font-size: 24px; font-weight: bold; color: #ef4444;">3천만원</p>
                </div>
            </div>
            <div style="margin-top: 20px; background: white; border-radius: 10px; padding: 20px;">
                <h4 style="font-size: 16px; font-weight: bold; color: #1f2937; margin-bottom: 15px;">
                    <i class="fas fa-plus-circle" style="color: #10b981; margin-right: 5px;"></i>
                    추가 보장
                </h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                    <p style="color: #374151; font-size: 14px;">• 간병비: 월 100만원</p>
                    <p style="color: #374151; font-size: 14px;">• 생활자금: 월 50만원</p>
                    <p style="color: #374151; font-size: 14px;">• 장기요양 1~5등급 연계</p>
                    <p style="color: #374151; font-size: 14px;">• 주간보호센터 월 50만원</p>
                </div>
            </div>
            <p style="color: #1e3a8a; font-size: 12px; margin-top: 15px; text-align: center;">
                ※ 위 금액은 예시이며, 실제 보장금액은 가입금액에 따라 달라질 수 있습니다.
            </p>
        </div>
    ` + getCardFooter(product);
}

// 3. 암보험 - 암 종류별 보장금액
export function getCancerCard(product) {
    return getCardHeader(product) + getStrengthsSection(product.strengths) + `
        <div style="background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%); border-radius: 15px; padding: 30px; margin-bottom: 30px;">
            <h3 style="font-size: 22px; font-weight: bold; color: #831843; margin-bottom: 20px; display: flex; align-items: center;">
                <i class="fas fa-shield-virus" style="color: #ec4899; margin-right: 10px;"></i>
                암 종류별 보장 플랜 (예시)
            </h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px; margin-bottom: 20px;">
                <div style="background: white; border-radius: 10px; padding: 20px; text-align: center;">
                    <p style="color: #6b7280; font-size: 13px; margin-bottom: 5px;">일반암</p>
                    <p style="font-size: 24px; font-weight: bold; color: #ec4899;">3천만원</p>
                </div>
                <div style="background: white; border-radius: 10px; padding: 20px; text-align: center;">
                    <p style="color: #6b7280; font-size: 13px; margin-bottom: 5px;">소액암</p>
                    <p style="font-size: 24px; font-weight: bold; color: #f59e0b;">1천만원</p>
                </div>
                <div style="background: white; border-radius: 10px; padding: 20px; text-align: center;">
                    <p style="color: #6b7280; font-size: 13px; margin-bottom: 5px;">고액암</p>
                    <p style="font-size: 24px; font-weight: bold; color: #ef4444;">5천만원</p>
                </div>
            </div>
            <div style="background: white; border-radius: 10px; padding: 20px;">
                <h4 style="font-size: 16px; font-weight: bold; color: #1f2937; margin-bottom: 15px;">
                    <i class="fas fa-check-double" style="color: #10b981; margin-right: 5px;"></i>
                    재발·전이 보장
                </h4>
                <div style="border-left: 4px solid #ec4899; padding-left: 15px;">
                    <p style="color: #374151; font-size: 14px; line-height: 1.8;">
                        ✓ 암 진단 후 2년 경과 시 재발암 추가 보장<br>
                        ✓ 전이암도 동일 금액 보장<br>
                        ✓ 최대 3회 반복 보장 가능<br>
                        ✓ 암 치료비·입원비·수술비 실손 보장
                    </p>
                </div>
            </div>
            <p style="color: #831843; font-size: 12px; margin-top: 15px; text-align: center;">
                ※ 위 금액은 예시이며, 실제 보장금액은 가입금액 및 암 종류에 따라 달라질 수 있습니다.
            </p>
        </div>
    ` + getCardFooter(product);
}

// 4. 펫보험 - 의료비 한도 및 보장 항목
export function getPetCard(product) {
    return getCardHeader(product) + getStrengthsSection(product.strengths) + `
        <div style="background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%); border-radius: 15px; padding: 30px; margin-bottom: 30px;">
            <h3 style="font-size: 22px; font-weight: bold; color: #065f46; margin-bottom: 20px; display: flex; align-items: center;">
                <i class="fas fa-paw" style="color: #10b981; margin-right: 10px;"></i>
                의료비 한도 (연간)
            </h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                <div style="background: white; border-radius: 10px; padding: 25px; text-align: center;">
                    <p style="color: #6b7280; font-size: 14px; margin-bottom: 5px;">입원 의료비</p>
                    <p style="font-size: 32px; font-weight: bold; color: #10b981;">2천만원</p>
                </div>
                <div style="background: white; border-radius: 10px; padding: 25px; text-align: center;">
                    <p style="color: #6b7280; font-size: 14px; margin-bottom: 5px;">통원 의료비</p>
                    <p style="font-size: 32px; font-weight: bold; color: #3b82f6;">2천만원</p>
                </div>
            </div>
            <div style="background: white; border-radius: 10px; padding: 20px;">
                <h4 style="font-size: 16px; font-weight: bold; color: #1f2937; margin-bottom: 15px;">
                    <i class="fas fa-clipboard-list" style="color: #06b6d4; margin-right: 5px;"></i>
                    주요 보장 항목
                </h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                    <p style="color: #374151; font-size: 14px;">✓ 항암 약물치료 (2026 신설)</p>
                    <p style="color: #374151; font-size: 14px;">✓ 재활치료 (물리치료 등)</p>
                    <p style="color: #374151; font-size: 14px;">✓ 약물치료 보장 확대</p>
                    <p style="color: #374151; font-size: 14px;">✓ 실손 보장 최대 70~90%</p>
                    <p style="color: #374151; font-size: 14px;">✓ 장례비용 지원</p>
                    <p style="color: #374151; font-size: 14px;">✓ 배상책임 보장</p>
                </div>
            </div>
            <p style="color: #065f46; font-size: 12px; margin-top: 15px; text-align: center;">
                ※ 실제 보장 비율은 플랜에 따라 50~90%로 다를 수 있습니다.
            </p>
        </div>
    ` + getCardFooter(product);
}

// 5. 여성건강보험 - 출산 + 여성암
export function getWomenHealthCard(product) {
    return getCardHeader(product) + getStrengthsSection(product.strengths) + `
        <div style="background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%); border-radius: 15px; padding: 30px; margin-bottom: 30px;">
            <h3 style="font-size: 22px; font-weight: bold; color: #831843; margin-bottom: 20px; display: flex; align-items: center;">
                <i class="fas fa-baby-carriage" style="color: #ec4899; margin-right: 10px;"></i>
                출산 지원금 (예시)
            </h3>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-bottom: 20px;">
                <div style="background: white; border-radius: 10px; padding: 20px; text-align: center;">
                    <p style="color: #6b7280; font-size: 13px; margin-bottom: 5px;">첫째</p>
                    <p style="font-size: 24px; font-weight: bold; color: #06b6d4;">100만원</p>
                </div>
                <div style="background: white; border-radius: 10px; padding: 20px; text-align: center;">
                    <p style="color: #6b7280; font-size: 13px; margin-bottom: 5px;">둘째</p>
                    <p style="font-size: 24px; font-weight: bold; color: #f59e0b;">300만원</p>
                </div>
                <div style="background: white; border-radius: 10px; padding: 20px; text-align: center;">
                    <p style="color: #6b7280; font-size: 13px; margin-bottom: 5px;">셋째</p>
                    <p style="font-size: 24px; font-weight: bold; color: #ef4444;">500만원</p>
                </div>
            </div>
            <div style="background: white; border-radius: 10px; padding: 20px; margin-bottom: 15px;">
                <h4 style="font-size: 16px; font-weight: bold; color: #1f2937; margin-bottom: 15px;">
                    <i class="fas fa-ribbon" style="color: #ec4899; margin-right: 5px;"></i>
                    여성암 보장
                </h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                    <p style="color: #374151; font-size: 14px;">✓ 유방암 최대 13회 반복 보장</p>
                    <p style="color: #374151; font-size: 14px;">✓ 자궁암·난소암 보장</p>
                    <p style="color: #374151; font-size: 14px;">✓ 갑상선암 보장</p>
                    <p style="color: #374151; font-size: 14px;">✓ 출산 후 5년 중대질환 2배</p>
                </div>
            </div>
            <div style="background: white; border-radius: 10px; padding: 20px;">
                <h4 style="font-size: 16px; font-weight: bold; color: #1f2937; margin-bottom: 15px;">
                    <i class="fas fa-heart" style="color: #f43f5e; margin-right: 5px;"></i>
                    난임 지원
                </h4>
                <p style="color: #374151; font-size: 14px; line-height: 1.8;">
                    ✓ 난자동결 시술비 200만원 선지급<br>
                    ✓ 인공수정·체외수정 비용 지원<br>
                    ✓ 출산 전후 합병증 보장
                </p>
            </div>
            <p style="color: #831843; font-size: 12px; margin-top: 15px; text-align: center;">
                ※ 출산 지원금은 최대 3회까지 지급되며, 쌍둥이는 1회로 간주합니다.
            </p>
        </div>
    ` + getCardFooter(product);
}

// 기본 템플릿 (종류 파악 안될 때)
export function getDefaultCard(product) {
    return getCardHeader(product) + getStrengthsSection(product.strengths) + getCardFooter(product);
}
