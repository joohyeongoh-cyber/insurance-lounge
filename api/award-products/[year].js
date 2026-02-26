// Vercel Serverless Function for award products

// 보험저널 2025 전체 23개 수상작 데이터
const awardProducts2025 = [
    // 생명보험 12개
    {
        company: 'NH농협생명',
        product: '투스텝NH종신보험',
        category: '생명보험 - 단기납종신(원화)',
        icon: 'fa-umbrella',
        color: 'blue',
        reason: '20년납 또는 30년납으로 평생 보장을 완성하는 실속형 종신보험. 납입 기간 동안 사망보험금의 50%를 먼저 보장하고, 납입 완료 후 100% 보장으로 전환되는 투스텝 구조가 특징.',
        strengths: ['2단계 보장구조 (50%→100%)', '20년/30년 단기납', '평생 사망보장', '가족 경제적 준비'],
        salesCardType: 'whole_life',
        targetAge: '30~50대',
        targetCustomer: '가족 책임이 큰 가장'
    },
    {
        company: '메트라이프생명',
        product: '백만인을위한달러종신보험PLUS',
        category: '생명보험 - 단기납종신(달러)',
        icon: 'fa-dollar-sign',
        color: 'green',
        reason: '환헤지 효과와 평생 보장을 동시에 얻을 수 있는 달러 종신보험. 원화 가치 하락에 대비하며, 해외 자산 분산 효과도 기대 가능.',
        strengths: ['달러 자산 보유', '환헤지 효과', '미국 금리 기반', '평생 사망보장'],
        salesCardType: 'whole_life_dollar',
        targetAge: '40~60대',
        targetCustomer: '해외자산 분산 관심자'
    },
    {
        company: '미래에셋생명',
        product: '헤리티지종신보험',
        category: '생명보험 - 상속종신',
        icon: 'fa-gift',
        color: 'purple',
        reason: '고액자산가를 위한 상속·증여 전문 종신보험. 사망보험금 비과세 혜택(최대 5억원)을 활용하여 세금 부담 없이 재산 이전.',
        strengths: ['사망보험금 비과세 5억', '상속세 절세', '합법적 자산 증여', '세금 없는 이전'],
        salesCardType: 'inheritance',
        targetAge: '50대 이상',
        targetCustomer: '고액자산가'
    },
    {
        company: 'DB생명',
        product: '백년친구700종신보험',
        category: '생명보험 - 7년확정100%종신',
        icon: 'fa-hourglass-half',
        color: 'orange',
        reason: '단 7년만 납입하면 사망보험금 100%를 평생 보장받는 초단기납 종신보험. 납입 완료 후 즉시 100% 보장 시작.',
        strengths: ['7년 납입 평생 보장', '즉시 100% 보장', '빠른 완납', '조기 완납자 최적'],
        salesCardType: 'whole_life_short',
        targetAge: '40~55세',
        targetCustomer: '고소득 직장인'
    },
    {
        company: '푸본현대생명',
        product: 'MAX경영인정기보험 탑픽',
        category: '생명보험 - 경영인정기',
        icon: 'fa-briefcase',
        color: 'indigo',
        reason: '사업자·경영인을 위한 맞춤형 고액 정기보험. 법인 계약 시 보험료 손금 처리 가능.',
        strengths: ['보험료 손금처리', '사업 리스크 대비', '대출 담보 활용', '사업 승계 대비'],
        salesCardType: 'business_term',
        targetAge: '30~60대',
        targetCustomer: '사업자, CEO'
    },
    {
        company: 'ABL생명',
        product: '건강N더보장종합보험',
        category: '생명보험 - 종합건강',
        icon: 'fa-heartbeat',
        color: 'red',
        reason: '암·뇌·심장·장기이식 등 중증질환을 두텁게 보장. 질병별 세분화된 수술비 보장.',
        strengths: ['3대 질병 집중', '수술비 세분화 200종', '장기이식 보장', '표준체 저렴'],
        salesCardType: 'comprehensive_health',
        targetAge: '20~60대',
        targetCustomer: '건강한 성인'
    },
    {
        company: '흥국생명',
        product: '3.10.5.5고당플러스간편건강보험',
        category: '생명보험 - 간편건강',
        icon: 'fa-procedures',
        color: 'teal',
        reason: '고혈압·당뇨 유병자도 가입 가능한 간편 건강보험. 3개 질문 간단 심사.',
        strengths: ['고혈압·당뇨 가능', '3개 질문', '10대 암', '5대 수술+생활자금'],
        salesCardType: 'simple_health',
        targetAge: '50~75세',
        targetCustomer: '유병자'
    },
    {
        company: 'KDB생명',
        product: '암만생각해도KDB암보험',
        category: '생명보험 - 암보험',
        icon: 'fa-ribbon',
        color: 'pink',
        reason: '모든 암을 두텁게 보장하는 전문 암보험. 재발·전이 시에도 반복 보장.',
        strengths: ['모든 암 보장', '일반·소액·고액 구분', '재발·전이 반복', '장기 치료 대비'],
        salesCardType: 'cancer',
        targetAge: '30~65세',
        targetCustomer: '암 가족력'
    },
    {
        company: '라이나생명',
        product: '전에없던실속치매보험',
        category: '생명보험 - 치매간병',
        icon: 'fa-brain',
        color: 'cyan',
        reason: 'GA 현장 최다 추천 치매보험. 경도인지장애부터 보장하여 초기 치매 환자도 혜택.',
        strengths: ['경도인지장애 즉시', '단계별 맞춤', '간병비+생활자금', '장기요양 1~5등급', '저렴한 보험료'],
        salesCardType: 'dementia',
        targetAge: '50~75세',
        targetCustomer: '치매 가족력'
    },
    {
        company: 'iM라이프생명',
        product: '마이솔루션AI변액연금보험',
        category: '생명보험 - 변액연금(미보증)',
        icon: 'fa-chart-line',
        color: 'emerald',
        reason: 'AI 기반 자산배분으로 연금 수익률 극대화. 시장 상황 자동 조정.',
        strengths: ['AI 자산배분', '포트폴리오 조정', '높은 수익률', '연금 유연성'],
        salesCardType: 'variable_pension',
        targetAge: '30~55세',
        targetCustomer: '적극적 투자자'
    },
    {
        company: '하나생명',
        product: '하나뿐인변액연금보험',
        category: '생명보험 - 변액연금(보증)',
        icon: 'fa-shield-alt',
        color: 'blue',
        reason: '원금 보장과 투자 수익을 동시에. 납입원금 100% 보증.',
        strengths: ['원금 100% 보증', '펀드 수익 추가', '안전한 노후', '연금 보장'],
        salesCardType: 'guaranteed_pension',
        targetAge: '40~60대',
        targetCustomer: '보수적 투자자'
    },
    {
        company: 'KB라이프생명',
        product: '트리플레벨업연금보험',
        category: '생명보험 - 일반연금',
        icon: 'fa-coins',
        color: 'yellow',
        reason: '3단계 금리 상승으로 노후 소득 증가. 확정형 연금.',
        strengths: ['3단계 금리 상승', '확정 연금', '노후 소득', '종신연금 가능'],
        salesCardType: 'fixed_pension',
        targetAge: '35~55세',
        targetCustomer: '공무원·직장인'
    },
    
    // 손해보험 11개
    {
        company: '메리츠화재',
        product: '알파Plus보장보험',
        category: '손해보험 - 종합건강(일반고지)',
        icon: 'fa-hospital',
        color: 'red',
        reason: '건강한 사람을 위한 프리미엄 종합보장. 3대 질병부터 일상 사고까지.',
        strengths: ['3대 질병 고액', '일상 사고 폭넓게', '골절·화상 세분화', '건강체 할인'],
        salesCardType: 'comprehensive_health',
        targetAge: '20~60대',
        targetCustomer: '건강한 성인'
    },
    {
        company: 'KB손해보험',
        product: 'KB5.10.10플러스건강보험',
        category: '손해보험 - 종합건강(건강고지)',
        icon: 'fa-plus-square',
        color: 'blue',
        reason: '5개 질문 건강고지형. 10대 질병·10대 수술 집중.',
        strengths: ['5개 질문', '10대 질병', '10대 수술', '기존 질환자 가능'],
        salesCardType: 'health_declaration',
        targetAge: '30~65세',
        targetCustomer: '기존 질환자'
    },
    {
        company: 'DB손해보험',
        product: '나에게맞춘간편건강보험',
        category: '손해보험 - 간편건강(3.5고지)',
        icon: 'fa-check-circle',
        color: 'green',
        reason: '3개 질문 맞춤 보장 설계. 유병자 합리적 보험료.',
        strengths: ['3개 질문', '맞춤형 설계', '유병자 가능', '실속 보험료'],
        salesCardType: 'simple_health',
        targetAge: '40~70대',
        targetCustomer: '유병자'
    },
    {
        company: '삼성화재',
        product: '간편보험3655 고고 새로고침100세',
        category: '손해보험 - 초경증간편(3.10고지)',
        icon: 'fa-user-shield',
        color: 'purple',
        reason: '중증 질환자도 가입 가능. 3년 경과 시 가입, 100세까지 보장.',
        strengths: ['중증 병력자 가능', '3년 경과 가입', '100세 보장', '고령자 맞춤'],
        salesCardType: 'ultra_simple',
        targetAge: '50~85세',
        targetCustomer: '중증 병력자'
    },
    {
        company: '메리츠화재',
        product: '또걸려도또받는암간편한355보험',
        category: '손해보험 - 암보험',
        icon: 'fa-ribbon',
        color: 'pink',
        reason: '암 재발·전이 반복 보장. 2년 후 재발암 추가.',
        strengths: ['재발·전이 반복', '2년 후 재발', '3개 질문', '유병자 가능'],
        salesCardType: 'cancer_recurrence',
        targetAge: '40~75세',
        targetCustomer: '암 병력자'
    },
    {
        company: '현대해상',
        product: '굿앤굿어린이종합보험Q',
        category: '손해보험 - 어린이보험',
        icon: 'fa-child',
        color: 'cyan',
        reason: '0세부터 가입. 태아특약 선천이상·저체중아까지 100세 보장.',
        strengths: ['태아특약 가능', '선천이상 보장', '성장기 질병·사고', '100세 장기'],
        salesCardType: 'children',
        targetAge: '0~15세',
        targetCustomer: '예비부모'
    },
    {
        company: '삼성화재',
        product: 'NEW내돈내삼1640건강보험',
        category: '손해보험 - MZ청년보험',
        icon: 'fa-user-friends',
        color: 'indigo',
        reason: '16~40세 MZ세대 맞춤. 저렴한 보험료로 질병·사고·운전자 통합.',
        strengths: ['MZ 맞춤', '저렴한 보험료', '질병·사고·운전 통합', '초년생 최적'],
        salesCardType: 'mz_youth',
        targetAge: '16~40세',
        targetCustomer: 'MZ세대'
    },
    {
        company: '한화손해보험',
        product: '시그니처여성건강보험3.0',
        category: '손해보험 - 여성건강',
        icon: 'fa-female',
        color: 'pink',
        reason: '여성 특화 질병부터 출산·난임까지. 출산 시 최대 900만원.',
        strengths: ['출산 900만원', '유방암 13회', '난임 200만원 선지급', '출산 후 5년 2배'],
        salesCardType: 'women_health',
        targetAge: '20~45세',
        targetCustomer: '가임기 여성'
    },
    {
        company: 'NH농협손해보험',
        product: '치매간병시니어종합보험',
        category: '손해보험 - 간병치매',
        icon: 'fa-hands-helping',
        color: 'orange',
        reason: '시니어 치매·간병 종합. 레켐비 2천만원(업계 최초), 비갱신형.',
        strengths: ['레켐비 2천만원(최초)', '비갱신 평생 고정', '장기요양 월 100만원', '주간보호 월 50만원'],
        salesCardType: 'senior_care',
        targetAge: '40~80세',
        targetCustomer: '40~80대 시니어'
    },
    {
        company: 'DB손해보험',
        product: '참좋은운전자상해보험',
        category: '손해보험 - 운전자보험',
        icon: 'fa-car',
        color: 'blue',
        reason: '교통사고 가해자·피해자 모두 보장. 벌금·방어비용·합의금 실손.',
        strengths: ['벌금·방어비용', '형사합의금', '자동차보험 보완', '가해·피해 모두'],
        salesCardType: 'driver',
        targetAge: '20~70대',
        targetCustomer: '모든 운전자'
    },
    {
        company: 'KB손해보험',
        product: 'KB금쪽같은펫보험(강아지·고양이)',
        category: '손해보험 - 펫보험',
        icon: 'fa-dog',
        color: 'emerald',
        reason: '업계 최고 의료비 한도 연 4천만원. 항암약물 담보 신설.',
        strengths: ['의료비 4천만원(최고)', '입원 2천+통원 2천', '항암약물 신설', '재활·약물 확대', '실손 70~90%'],
        salesCardType: 'pet',
        targetAge: '전 연령',
        targetCustomer: '반려동물 양육자'
    }
];

export default function handler(req, res) {
    // CORS 설정
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    // URL에서 year 파라미터 추출
    const { year } = req.query;
    
    if (year === '2025') {
        return res.status(200).json({
            year: '2025',
            source: '보험저널 2025 올해의 보험상품',
            totalProducts: 23,
            categories: {
                life: 12,
                nonLife: 11
            },
            products: awardProducts2025
        });
    }
    
    // 다른 연도
    return res.status(200).json({
        year,
        message: `${year}년 데이터는 준비 중입니다.`,
        products: []
    });
}
