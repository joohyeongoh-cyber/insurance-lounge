// 보험저널 '2025 올해의 보험상품' 23개 부문 전체 수상작

export const awardProducts2025 = [
    // === 생명보험 12개 부문 ===
    
    // 1. 단기납종신보험(원화)
    {
        company: 'NH농협생명',
        product: '투스텝NH종신보험',
        category: '생명보험 - 단기납종신(원화)',
        icon: 'fa-umbrella',
        color: 'blue',
        reason: '20년납 또는 30년납으로 평생 보장을 완성하는 실속형 종신보험. 납입 기간 동안 사망보험금의 50%를 먼저 보장하고, 납입 완료 후 100% 보장으로 전환되는 투스텝 구조가 특징. 보험료 부담을 줄이면서도 평생 보장을 확보할 수 있어 30~40대 가장들에게 인기.',
        strengths: [
            '✅ 2단계 보장구조 (납입기간 50% → 납입완료 후 100%)',
            '✅ 20년/30년 단기납으로 조기 완납',
            '✅ 평생 사망보장 유지',
            '✅ 가족을 위한 경제적 준비'
        ],
        salesCardType: 'whole_life', // 종신보험 전용 카드
        targetAge: '30~50대',
        targetCustomer: '가족 책임이 큰 가장, 조기 완납 선호자',
        gaShare: 18.5,
        gaShareNote: 'GA 채널 단기납종신보험 시장점유율 (2024)',
        launchMonth: '2023.08'
    },
    
    // 2. 단기납종신보험(달러)
    {
        company: '메트라이프생명',
        product: '백만인을위한달러종신보험PLUS',
        category: '생명보험 - 단기납종신(달러)',
        icon: 'fa-dollar-sign',
        color: 'green',
        reason: '환헤지 효과와 평생 보장을 동시에 얻을 수 있는 달러 종신보험. 원화 가치 하락에 대비하며, 해외 자산 분산 효과도 기대 가능. 미국 금리 기반 설계로 안정적인 보장 제공.',
        strengths: [
            '✅ 달러 자산 보유 (환헤지 효과)',
            '✅ 원화 약세 대비 자산 분산',
            '✅ 미국 금리 기반 안정성',
            '✅ 평생 사망보장'
        ],
        salesCardType: 'whole_life_dollar',
        targetAge: '40~60대',
        targetCustomer: '해외자산 분산 관심자, 달러 투자자',
        gaShare: 24.3,
        gaShareNote: 'GA 채널 달러종신보험 시장점유율 (2024)',
        launchMonth: '2022.11'
    },
    
    // 3. 상속종신
    {
        company: '미래에셋생명',
        product: '헤리티지종신보험',
        category: '생명보험 - 상속종신',
        icon: 'fa-gift',
        color: 'purple',
        reason: '고액자산가를 위한 상속·증여 전문 종신보험. 사망보험금 비과세 혜택(최대 5억원)을 활용하여 자녀에게 세금 부담 없이 재산을 물려줄 수 있음. 상속세 절세 효과가 뛰어나 부유층에게 필수.',
        strengths: [
            '✅ 사망보험금 비과세 (최대 5억원)',
            '✅ 상속세 절세 효과',
            '✅ 합법적 자산 증여',
            '✅ 세금 없는 재산 이전'
        ],
        salesCardType: 'inheritance',
        targetAge: '50대 이상',
        targetCustomer: '고액자산가, 상속 계획 중인 부모',
        gaShare: 31.2,
        gaShareNote: 'GA 채널 상속종신보험 시장점유율 (2024)',
        launchMonth: '2023.05'
    },
    
    // 4. 7년 확정 100% 종신보험
    {
        company: 'DB생명',
        product: '백년친구700종신보험',
        category: '생명보험 - 7년확정100%종신',
        icon: 'fa-hourglass-half',
        color: 'orange',
        reason: '단 7년만 납입하면 사망보험금 100%를 평생 보장받는 초단기납 종신보험. 납입 기간이 짧아 조기 완납을 원하는 40~50대에게 최적. 납입 완료 후 즉시 100% 보장이 시작되어 안심.',
        strengths: [
            '✅ 7년 납입으로 평생 보장',
            '✅ 납입 즉시 100% 보장',
            '✅ 빠른 완납으로 부담 감소',
            '✅ 조기 완납 선호자 최적'
        ],
        salesCardType: 'whole_life_short',
        targetAge: '40~55세',
        targetCustomer: '고소득 직장인, 조기 완납 희망자',
        gaShare: 15.8,
        gaShareNote: 'GA 채널 7년납종신보험 시장점유율 (2024)',
        launchMonth: '2024.03'
    },
    
    // 5. 경영인정기보험
    {
        company: '푸본현대생명',
        product: 'MAX경영인정기보험 탑픽',
        category: '생명보험 - 경영인정기',
        icon: 'fa-briefcase',
        color: 'indigo',
        reason: '사업자·경영인을 위한 맞춤형 고액 정기보험. 사업 리스크에 대비하며, 법인 계약 시 보험료 손금 처리 가능. 사업 승계, 대출 담보, 핵심인력 보호 등 다목적 활용.',
        strengths: [
            '✅ 법인 계약 시 보험료 손금처리',
            '✅ 사업 리스크 대비',
            '✅ 대출 담보 활용 가능',
            '✅ 사업 승계 대비'
        ],
        salesCardType: 'business_term',
        targetAge: '30~60대',
        targetCustomer: '사업자, CEO, 자영업자',
        gaShare: 27.1,
        gaShareNote: 'GA 채널 경영인정기보험 시장점유율 (2024)',
        launchMonth: '2023.09'
    },
    
    // 6. 종합건강보험(표준체·건강고지형)
    {
        company: 'ABL생명',
        product: '건강N더보장종합보험',
        category: '생명보험 - 종합건강',
        icon: 'fa-heartbeat',
        color: 'red',
        reason: '암·뇌·심장·장기이식 등 중증질환을 두텁게 보장하는 종합건강보험. 질병별 세분화된 수술비 보장으로 실제 치료비 부담을 크게 줄여줌. 건강한 사람을 위한 표준체 요율 적용.',
        strengths: [
            '✅ 암·뇌·심장 3대 질병 집중 보장',
            '✅ 수술비 세분화 (200여종)',
            '✅ 장기이식 보장 추가',
            '✅ 표준체 저렴한 보험료'
        ],
        salesCardType: 'comprehensive_health',
        targetAge: '20~60대',
        targetCustomer: '건강한 성인, 중증질환 대비 희망자',
        gaShare: 12.4,
        gaShareNote: 'GA 채널 종합건강보험 시장점유율 (2024)',
        launchMonth: '2024.01'
    },
    
    // 7. 간편건강보험
    {
        company: '흥국생명',
        product: '3.10.5.5고당플러스간편건강보험',
        category: '생명보험 - 간편건강',
        icon: 'fa-procedures',
        color: 'teal',
        reason: '고혈압·당뇨 유병자도 가입 가능한 간편 건강보험. 3개 질문으로 간단 심사하며, 10대 암 진단비·5대 수술비·5대 생활자금을 보장. 유병자도 합리적 보험료로 보장받을 수 있어 50대 이상에게 필수.',
        strengths: [
            '✅ 고혈압·당뇨 유병자 가입 가능',
            '✅ 3개 질문 간편심사',
            '✅ 10대 암 진단비 보장',
            '✅ 5대 수술비 + 5대 생활자금'
        ],
        salesCardType: 'simple_health',
        targetAge: '50~75세',
        targetCustomer: '고혈압·당뇨 환자, 기존 보험 거절자',
        gaShare: 16.7,
        gaShareNote: 'GA 채널 간편건강보험 시장점유율 (2024)',
        launchMonth: '2023.10'
    },
    
    // 8. 암보험
    {
        company: 'KDB생명',
        product: '암만생각해도KDB암보험',
        category: '생명보험 - 암보험',
        icon: 'fa-ribbon',
        color: 'pink',
        reason: '모든 암을 두텁게 보장하는 전문 암보험. 일반암·소액암·고액암을 구분하여 실제 치료비에 맞게 보장금을 지급. 암 재발·전이 시에도 반복 보장받을 수 있어 장기 치료에 유리.',
        strengths: [
            '✅ 모든 암 종류 보장',
            '✅ 일반암·소액암·고액암 구분',
            '✅ 암 재발·전이 반복 보장',
            '✅ 장기 치료비 대비'
        ],
        salesCardType: 'cancer',
        targetAge: '30~65세',
        targetCustomer: '암 가족력, 흡연자, 암 걱정 많은 분',
        gaShare: 19.8,
        gaShareNote: 'GA 채널 암보험 시장점유율 1위 (2024)',
        launchMonth: '2024.02',
        gaShare: 19.8,
        gaShareNote: 'GA 채널 암보험 시장점유율 1위 (2024 기준)'
    },
    
    // 9. 치매간병
    {
        company: '라이나생명',
        product: '전에없던실속치매보험',
        category: '생명보험 - 치매간병',
        icon: 'fa-brain',
        color: 'cyan',
        reason: 'GA 현장에서 가장 많이 추천하는 치매보험. 경도인지장애 단계부터 보장하여 초기 치매 환자도 혜택을 받을 수 있으며, 실제 간병에 필요한 비용을 단계별로 지급하여 실용성이 뛰어남.',
        strengths: [
            '✅ 경도인지장애부터 즉시 보장',
            '✅ 단계별 맞춤 보장 (경증·중증)',
            '✅ 간병비+생활자금 이중 지급',
            '✅ 장기요양 1~5등급 연계',
            '✅ 해약환급금 없어 저렴'
        ],
        salesCardType: 'dementia',
        targetAge: '50~75세',
        targetCustomer: '치매 가족력, 50대 이상 예방 관심자',
        gaShare: 22.5,
        gaShareNote: 'GA 채널 치매간병보험 시장점유율 1위 (2024)',
        launchMonth: '2023.06',
        gaShare: 22.5,
        gaShareNote: 'GA 채널 치매간병보험 시장점유율 1위 (2024 기준)'
    },
    
    // 10. 변액연금보험(미보증형)
    {
        company: 'iM라이프생명',
        product: '마이솔루션AI변액연금보험',
        category: '생명보험 - 변액연금(미보증)',
        icon: 'fa-chart-line',
        color: 'emerald',
        reason: 'AI 기반 자산배분으로 연금 수익률을 극대화하는 변액연금. 시장 상황에 따라 자동으로 포트폴리오를 조정하여 안정성과 수익성을 동시에 추구. 원금 보증은 없지만 공격적 투자 가능.',
        strengths: [
            '✅ AI 자동 자산배분',
            '✅ 시장 대응 포트폴리오 조정',
            '✅ 높은 수익률 추구',
            '✅ 연금 수령 유연성'
        ],
        salesCardType: 'variable_pension',
        targetAge: '30~55세',
        targetCustomer: '적극적 투자자, 고수익 연금 희망자',
        gaShare: 14.2,
        gaShareNote: 'GA 채널 변액연금(미보증) 시장점유율 (2024)',
        launchMonth: '2024.04'
    },
    
    // 11. 변액연금보험(보증형)
    {
        company: '하나생명',
        product: '하나뿐인변액연금보험',
        category: '생명보험 - 변액연금(보증)',
        icon: 'fa-shield-alt',
        color: 'blue',
        reason: '원금 보장과 투자 수익을 동시에 누리는 안전형 변액연금. 납입원금 100% 보증으로 안심하고 투자할 수 있으며, 펀드 수익이 발생하면 추가 이익도 획득. 보수적 투자자에게 최적.',
        strengths: [
            '✅ 납입원금 100% 보증',
            '✅ 펀드 수익 추가 획득',
            '✅ 안전한 노후 준비',
            '✅ 연금 수령 보장'
        ],
        salesCardType: 'guaranteed_pension',
        targetAge: '40~60대',
        targetCustomer: '보수적 투자자, 안전한 연금 희망자',
        gaShare: 19.3,
        gaShareNote: 'GA 채널 변액연금(보증) 시장점유율 (2024)',
        launchMonth: '2023.12'
    },
    
    // 12. 일반연금보험
    {
        company: 'KB라이프생명',
        product: '트리플레벨업연금보험',
        category: '생명보험 - 일반연금',
        icon: 'fa-coins',
        color: 'yellow',
        reason: '3단계 금리 상승으로 노후 소득을 늘리는 확정형 연금보험. 납입 기간이 길어질수록 공시이율이 높아져 최종 연금액이 증가. 안정적 노후 준비를 원하는 분에게 추천.',
        strengths: [
            '✅ 3단계 금리 상승 구조',
            '✅ 확정 연금 수령',
            '✅ 노후 소득 보장',
            '✅ 종신연금 선택 가능'
        ],
        salesCardType: 'fixed_pension',
        targetAge: '35~55세',
        targetCustomer: '안정적 노후 준비, 공무원·직장인',
        gaShare: 16.9,
        gaShareNote: 'GA 채널 일반연금 시장점유율 (2024)',
        launchMonth: '2024.01'
    },
    
    // === 손해보험 11개 부문 ===
    
    // 13. 일반고지형 종합건강보험
    {
        company: '메리츠화재',
        product: '알파Plus보장보험',
        category: '손해보험 - 종합건강(일반고지)',
        icon: 'fa-hospital',
        color: 'red',
        reason: '건강한 사람을 위한 프리미엄 종합보장보험. 암·뇌·심장 3대 질병은 물론 골절·화상·교통사고까지 폭넓게 보장. 일상생활 위험을 총망라한 All-in-One 보험.',
        strengths: [
            '✅ 3대 질병 고액 보장',
            '✅ 일상 사고 폭넓게 보장',
            '✅ 골절·화상 세분화',
            '✅ 건강체 할인 적용'
        ],
        salesCardType: 'comprehensive_health',
        targetAge: '20~60대',
        targetCustomer: '건강한 성인, 종합보장 희망자',
        gaShare: 21.3,
        gaShareNote: 'GA 채널 종합건강(일반고지) 시장점유율 (2024)',
        launchMonth: '2023.07'
    },
    
    // 14. 건강고지형 종합건강보험
    {
        company: 'KB손해보험',
        product: 'KB5.10.10플러스건강보험',
        category: '손해보험 - 종합건강(건강고지)',
        icon: 'fa-plus-square',
        color: 'blue',
        reason: '5개 질문으로 가입하는 건강고지형 보험. 10대 질병·10대 수술을 집중 보장하며, 기존 질환이 있어도 가입 가능. 간편한 심사로 빠른 보장 시작.',
        strengths: [
            '✅ 5개 질문 건강고지',
            '✅ 10대 질병 보장',
            '✅ 10대 수술 보장',
            '✅ 기존 질환자 가입 가능'
        ],
        salesCardType: 'health_declaration',
        targetAge: '30~65세',
        targetCustomer: '기존 질환 있는 분, 빠른 가입 원하는 분',
        gaShare: 17.8,
        gaShareNote: 'GA 채널 건강고지형보험 시장점유율 (2024)',
        launchMonth: '2023.11'
    },
    
    // 15. 간편건강보험(3.0.5~3.5.5 고지)
    {
        company: 'DB손해보험',
        product: '나에게맞춘간편건강보험',
        category: '손해보험 - 간편건강(3.5고지)',
        icon: 'fa-check-circle',
        color: 'green',
        reason: '3개 질문으로 맞춤 보장을 설계하는 간편보험. 나이·성별·직업에 따라 필요한 보장만 선택 가능. 유병자도 합리적 보험료로 실속 보장.',
        strengths: [
            '✅ 3개 질문 간편심사',
            '✅ 맞춤형 보장 설계',
            '✅ 유병자 가입 가능',
            '✅ 실속형 보험료'
        ],
        salesCardType: 'simple_health',
        targetAge: '40~70대',
        targetCustomer: '유병자, 맞춤 보장 원하는 분',
        gaShare: 14.6,
        gaShareNote: 'GA 채널 간편건강(3.5고지) 시장점유율 (2024)',
        launchMonth: '2024.02'
    },
    
    // 16. 초경증 간편건강보험(3.6.5~3.10.10 고지)
    {
        company: '삼성화재',
        product: '간편보험3655 고고 새로고침100세',
        category: '손해보험 - 초경증간편(3.10고지)',
        icon: 'fa-user-shield',
        color: 'purple',
        reason: '중증 질환자도 가입 가능한 초경증 간편보험. 암·뇌출혈·심근경색 병력이 있어도 3년 경과 시 가입 가능. 100세까지 보장받을 수 있어 고령자에게 최적.',
        strengths: [
            '✅ 중증 질환 병력자 가입 가능',
            '✅ 3년 경과 후 가입',
            '✅ 100세까지 보장',
            '✅ 고령자 맞춤 설계'
        ],
        salesCardType: 'ultra_simple',
        targetAge: '50~85세',
        targetCustomer: '중증 질환 병력자, 고령자',
        gaShare: 12.1,
        gaShareNote: 'GA 채널 초경증간편 시장점유율 (2024)',
        launchMonth: '2023.09'
    },
    
    // 17. 암보험
    {
        company: '메리츠화재',
        product: '또걸려도또받는암간편한355보험',
        category: '손해보험 - 암보험',
        icon: 'fa-ribbon',
        color: 'pink',
        reason: '암 재발·전이 시에도 반복 보장받는 암보험. 첫 암 진단 후 2년 경과 시 재발암도 추가 보장. 3개 질문 간편심사로 유병자도 가입 가능.',
        strengths: [
            '✅ 암 재발·전이 반복 보장',
            '✅ 2년 후 재발암 추가 지급',
            '✅ 3개 질문 간편심사',
            '✅ 유병자 가입 가능'
        ],
        salesCardType: 'cancer_recurrence',
        targetAge: '40~75세',
        targetCustomer: '암 병력자, 재발 걱정하는 분',
        gaShare: 16.4,
        gaShareNote: 'GA 채널 암보험 시장점유율 2위 (2024)',
        launchMonth: '2024.01',
        gaShare: 16.4,
        gaShareNote: 'GA 채널 암보험 시장점유율 2위 (2024 기준)'
    },
    
    // 18. 자녀·어린이보험(15세 이하)
    {
        company: '현대해상',
        product: '굿앤굿어린이종합보험Q',
        category: '손해보험 - 어린이보험',
        icon: 'fa-child',
        color: 'cyan',
        reason: '0세부터 가입 가능한 어린이 종합보험. 출생 전 태아특약으로 선천이상·저체중아까지 보장. 자녀의 성장 단계별 위험을 100세까지 보장.',
        strengths: [
            '✅ 태아특약 가입 가능',
            '✅ 선천이상·저체중아 보장',
            '✅ 성장기 질병·사고 보장',
            '✅ 100세까지 장기 보장'
        ],
        salesCardType: 'children',
        targetAge: '0~15세',
        targetCustomer: '예비부모, 자녀 둔 부모',
        gaShare: 23.7,
        gaShareNote: 'GA 채널 어린이보험 시장점유율 (2024)',
        launchMonth: '2023.08'
    },
    
    // 19. MZ·청년보험(16세 이상)
    {
        company: '삼성화재',
        product: 'NEW내돈내삼1640건강보험',
        category: '손해보험 - MZ청년보험',
        icon: 'fa-user-friends',
        color: 'indigo',
        reason: '16세부터 40세까지 MZ세대 맞춤 보험. 저렴한 보험료로 실속 보장을 제공하며, 질병·사고·운전자보험을 통합. 사회 초년생의 경제적 부담을 줄여줌.',
        strengths: [
            '✅ MZ세대 맞춤 설계',
            '✅ 저렴한 보험료',
            '✅ 질병·사고·운전자 통합',
            '✅ 사회 초년생 최적'
        ],
        salesCardType: 'mz_youth',
        targetAge: '16~40세',
        targetCustomer: 'MZ세대, 사회 초년생',
        gaShare: 28.4,
        gaShareNote: 'GA 채널 MZ청년보험 시장점유율 (2024)',
        launchMonth: '2024.03'
    },
    
    // 20. 여성건강보험
    {
        company: '한화손해보험',
        product: '시그니처여성건강보험3.0',
        category: '손해보험 - 여성건강',
        icon: 'fa-female',
        color: 'pink',
        reason: '여성 특화 질병부터 출산·난임까지 보장하는 종합 여성보험. 유방암·자궁암 등 여성암 진단비를 최대 13회 반복 지급. 출산 시 최대 900만원 지원금 제공.',
        strengths: [
            '✅ 출산 지원금 최대 900만원',
            '✅ 유방암·자궁암 13회 반복',
            '✅ 난임 시술비 200만원 선지급',
            '✅ 출산 후 5년 중대질환 2배'
        ],
        salesCardType: 'women_health',
        targetAge: '20~45세',
        targetCustomer: '가임기 여성, 출산 계획 여성',
        gaShare: 19.2,
        gaShareNote: 'GA 채널 여성건강보험 시장점유율 (2024)',
        launchMonth: '2023.10'
    },
    
    // 21. 간병치매보험
    {
        company: 'NH농협손해보험',
        product: '치매간병시니어종합보험',
        category: '손해보험 - 간병치매',
        icon: 'fa-hands-helping',
        color: 'orange',
        reason: '시니어를 위한 치매·간병 종합보험. 표적 치매약물(레켐비) 2천만원 보장(업계 최초). 비갱신형으로 보험료 평생 고정. 장기요양 1~4등급 월 100만원 지급.',
        strengths: [
            '✅ 레켐비 2천만원 보장(최초)',
            '✅ 비갱신형 평생 고정 보험료',
            '✅ 장기요양 월 100만원',
            '✅ 주간보호센터 월 50만원'
        ],
        salesCardType: 'senior_care',
        targetAge: '40~80세',
        targetCustomer: '40~80대 시니어, 치매 대비 희망자',
        gaShare: 18.3,
        gaShareNote: 'GA 채널 치매간병보험 시장점유율 2위 (2024)',
        launchMonth: '2024.05',
        gaShare: 18.3,
        gaShareNote: 'GA 채널 치매간병보험 시장점유율 2위 (2024 기준)'
    },
    
    // 22. 운전자보험
    {
        company: 'DB손해보험',
        product: '참좋은운전자상해보험',
        category: '손해보험 - 운전자보험',
        icon: 'fa-car',
        color: 'blue',
        reason: '교통사고 가해자·피해자 모두 보장하는 운전자보험. 벌금·방어비용·합의금까지 실손 보상. 자동차보험으로 부족한 부분을 완벽하게 메워줌.',
        strengths: [
            '✅ 벌금·방어비용 실손 보상',
            '✅ 형사합의금 지원',
            '✅ 자동차보험 보완',
            '✅ 가해자·피해자 모두 보장'
        ],
        salesCardType: 'driver',
        targetAge: '20~70대',
        targetCustomer: '모든 운전자, 특히 영업직·출퇴근 장거리',
        gaShare: 22.6,
        gaShareNote: 'GA 채널 운전자보험 시장점유율 (2024)',
        launchMonth: '2023.12'
    },
    
    // 23. 펫보험
    {
        company: 'KB손해보험',
        product: 'KB금쪽같은펫보험(강아지·고양이)',
        category: '손해보험 - 펫보험',
        icon: 'fa-dog',
        color: 'emerald',
        reason: '업계 최고 의료비 한도(연 4천만원)를 자랑하는 펫보험. 입원·통원 각각 2천만원씩 보장하며, 2026년 신설 항암약물 담보 추가. 반려동물 치료비 부담을 크게 줄여줌.',
        strengths: [
            '✅ 의료비 한도 연 4천만원(최고)',
            '✅ 입원 2천만원+통원 2천만원',
            '✅ 항암약물 담보 신설',
            '✅ 재활·약물 보장 확대',
            '✅ 실손 최대 70~90%'
        ],
        salesCardType: 'pet',
        targetAge: '전 연령',
        targetCustomer: '반려동물 양육자, 고액 치료비 대비',
        gaShare: 35.2,
        gaShareNote: 'GA 채널 펫보험 시장점유율 1위 (2024)',
        launchMonth: '2024.04',
        gaShare: 35.2,
        gaShareNote: 'GA 채널 펫보험 시장점유율 1위 (2024 기준)'
    }
];
