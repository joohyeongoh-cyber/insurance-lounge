// Vercel Serverless Function
// https://vercel.com/docs/functions/serverless-functions

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get year from URL path
  const { year } = req.query;

  // 2025년 데이터
  if (year === '2025') {
    const awardProducts2025 = [
      {
        company: "NH농협생명",
        product: "투스텝NH종신보험",
        category: "생명보험 - 단기납종신(원화)",
        icon: "fa-umbrella",
        color: "blue",
        reason: "단기납 종신보험의 새로운 기준을 제시하며, 2단계 보장구조(50%→100%)로 차별화",
        strengths: ["2단계 보장구조(납입기간 50%, 완납 후 100%)", "20년/30년 단기납 선택", "평생 사망보장", "가족 경제적 준비"],
        salesCardType: "whole_life",
        targetAge: "30~50대",
        targetCustomer: "가족 책임이 큰 가장, 단기납 선호 고객",
        gaShare: 18.5,
        gaShareNote: "GA 채널 단기납종신보험 시장점유율 (2024)",
        launchMonth: "2023.08"
      },
      {
        company: "메트라이프생명",
        product: "백만인을위한달러종신보험PLUS",
        category: "생명보험 - 단기납종신(외화)",
        icon: "fa-dollar-sign",
        color: "green",
        reason: "달러 표시 종신보험으로 환헷지 효과와 자산 분산 동시 실현",
        strengths: ["달러 자산 확보(환헷지)", "원화 가치 하락 대비", "미국 금리 기반 안정성", "평생 사망보장"],
        salesCardType: "whole_life",
        targetAge: "40~60대",
        targetCustomer: "해외 자산 분산에 관심 있는 고객",
        gaShare: 24.3,
        gaShareNote: "GA 채널 달러종신보험 시장점유율 (2024)",
        launchMonth: "2022.11"
      },
      {
        company: "미래에셋생명",
        product: "헤리티지종신보험",
        category: "생명보험 - 상속종신",
        icon: "fa-gift",
        color: "purple",
        reason: "상속 전용 종신보험으로 비과세(5억) 및 상속세 절감 효과 탁월",
        strengths: ["사망보험금 5억까지 비과세", "상속세 절감 효과", "합법적 자산 증여", "세금 없는 자산 이전"],
        salesCardType: "whole_life",
        targetAge: "50대 이상",
        targetCustomer: "상속 대비 자산가, 부모",
        gaShare: 31.2,
        gaShareNote: "GA 채널 상속종신보험 시장점유율 (2024)",
        launchMonth: "2023.05"
      },
      {
        company: "DB생명",
        product: "백년친구700종신보험",
        category: "생명보험 - 단기납종신(원화)",
        icon: "fa-hourglass-half",
        color: "orange",
        reason: "7년납 100% 종신보험으로 빠른 완납 후 평생 보장 실현",
        strengths: ["7년 납입 후 100% 보장", "단기간 납입 완료", "평생 사망보장", "경제적 부담 최소화"],
        salesCardType: "whole_life",
        targetAge: "40~55세",
        targetCustomer: "고소득 직장인, 빠른 완납 선호",
        gaShare: 15.8,
        gaShareNote: "GA 채널 7년납종신보험 시장점유율 (2024)",
        launchMonth: "2024.03"
      },
      {
        company: "푸본현대생명",
        product: "MAX경영인정기보험 탑픽",
        category: "생명보험 - 경영인정기",
        icon: "fa-briefcase",
        color: "indigo",
        reason: "경영인 전용 정기보험으로 법인 보험료 손금 처리 및 사업 리스크 대비",
        strengths: ["법인 보험료 세금 처리", "사업 리스크 대비", "대출 담보 활용", "승계 계획 수립"],
        salesCardType: "term_life",
        targetAge: "30~60대",
        targetCustomer: "사업자, 법인 대표, CEO",
        gaShare: 27.1,
        gaShareNote: "GA 채널 경영인정기보험 시장점유율 (2024)",
        launchMonth: "2023.09"
      },
      {
        company: "ABL생명",
        product: "건강N더보장종합보험",
        category: "생명보험 - 종합건강(일반고지)",
        icon: "fa-heartbeat",
        color: "red",
        reason: "암·뇌·심장·장기이식 등 망라한 종합건강보험으로 세밀한 수술비 보장",
        strengths: ["암·뇌·심장 통합 보장", "장기이식 대비", "세밀한 수술비", "표준체 보험료"],
        salesCardType: "health",
        targetAge: "20~60대",
        targetCustomer: "건강한 성인, 종합 보장 선호",
        gaShare: 12.4,
        gaShareNote: "GA 채널 종합건강보험 시장점유율 (2024)",
        launchMonth: "2024.01"
      },
      {
        company: "흥국생명",
        product: "3.10.5.5고당플러스간편건강보험",
        category: "생명보험 - 간편건강(고혈압/당뇨)",
        icon: "fa-procedures",
        color: "teal",
        reason: "고혈압·당뇨 환자도 3문항 고지로 가입 가능, 10대암·5수술·5생활비 보장",
        strengths: ["고혈압·당뇨 가입 가능", "3문항 간편 고지", "10대암+5수술+5생활비", "표준 나이 확대"],
        salesCardType: "health",
        targetAge: "50~75세",
        targetCustomer: "고혈압·당뇨 환자, 간편 가입 선호",
        gaShare: 16.7,
        gaShareNote: "GA 채널 간편건강보험 시장점유율 (2024)",
        launchMonth: "2023.10"
      },
      {
        company: "KDB생명",
        product: "암만생각해도KDB암보험",
        category: "생명보험 - 암보험",
        icon: "fa-ribbon",
        color: "pink",
        reason: "전체 암 보장, 실제 치료비 수준의 차등 지급(일반암·소액암·대액암), 재발·전이 반복보장",
        strengths: ["전체 암 보장", "암 종류별 구분(일반·소액·대액)", "재발·전이 반복보장", "장기 치료비 지원"],
        salesCardType: "cancer",
        targetAge: "30~65세",
        targetCustomer: "가족력 있는 고객, 흡연자, 암 걱정 고객",
        gaShare: 19.8,
        gaShareNote: "GA 채널 암보험 시장점유율 1위 (2024)",
        launchMonth: "2024.02"
      },
      {
        company: "라이나생명",
        product: "전에없던실속치매보험",
        category: "생명보험 - 치매간병",
        icon: "fa-brain",
        color: "cyan",
        reason: "GA 사이트 최다 추천 치매보험, 경도인지부터 보장, 단계별 간병비 지급",
        strengths: ["경도인지 즉시 보장", "단계별 맞춤 보장(경증·중증)", "간병비+생활비 이중 지급", "장기요양 1~5등급 연계", "무해지환급형 저렴"],
        salesCardType: "dementia",
        targetAge: "50~75세",
        targetCustomer: "치매 가족력, 50대 이상 예방 관심 고객",
        gaShare: 22.5,
        gaShareNote: "GA 채널 치매간병보험 시장점유율 1위 (2024)",
        launchMonth: "2023.06"
      },
      {
        company: "한화생명",
        product: "마이솔루션AI변액연금보험",
        category: "생명보험 - 변액연금(미보증)",
        icon: "fa-chart-line",
        color: "amber",
        reason: "AI 기반 자산배분 변액연금으로 시장 변동 대응력 우수",
        strengths: ["AI 자산배분 자동화", "연금 수령 다양화", "수익률 최적화", "세액공제 혜택"],
        salesCardType: "annuity",
        targetAge: "30~50대",
        targetCustomer: "노후 준비, 변액연금 관심 고객",
        gaShare: 14.2,
        gaShareNote: "GA 채널 변액연금(미보증) 시장점유율 (2024)",
        launchMonth: "2024.04"
      },
      {
        company: "삼성생명",
        product: "하나뿐인변액연금보험",
        category: "생명보험 - 변액연금(보증)",
        icon: "fa-shield-alt",
        color: "slate",
        reason: "최저 보증 변액연금으로 원금 보호 + 수익 추구 동시 실현",
        strengths: ["최저 보증 기능", "원금 보호", "수익 추구", "연금 안정성"],
        salesCardType: "annuity",
        targetAge: "40~60대",
        targetCustomer: "안정적 노후, 원금 보호 선호",
        gaShare: 19.3,
        gaShareNote: "GA 채널 변액연금(보증) 시장점유율 (2024)",
        launchMonth: "2023.12"
      },
      {
        company: "교보생명",
        product: "트리플레벨업연금보험",
        category: "생명보험 - 일반연금",
        icon: "fa-coins",
        color: "yellow",
        reason: "3단계 연금 증액 구조로 장수 리스크 대비 및 생활비 상승 반영",
        strengths: ["3단계 연금 증액", "장수 리스크 대비", "생활비 상승 반영", "평생 연금 수령"],
        salesCardType: "annuity",
        targetAge: "40~60대",
        targetCustomer: "노후 장수 대비 고객",
        gaShare: 16.9,
        gaShareNote: "GA 채널 일반연금 시장점유율 (2024)",
        launchMonth: "2024.01"
      },
      {
        company: "AIA생명",
        product: "알파Plus보장보험",
        category: "손해보험 - 종합건강(일반고지)",
        icon: "fa-hospital-alt",
        color: "sky",
        reason: "일반 고지 종합건강보험으로 암·뇌·심장 통합 보장 + 수술비 세밀화",
        strengths: ["암·뇌·심장 통합", "수술비 세밀화", "입원비 실손", "표준체 보험료"],
        salesCardType: "health",
        targetAge: "20~60대",
        targetCustomer: "건강한 성인, 종합 보장 선호",
        gaShare: 21.3,
        gaShareNote: "GA 채널 종합건강(일반고지) 시장점유율 (2024)",
        launchMonth: "2023.07"
      },
      {
        company: "KB손해보험",
        product: "KB5.10.10플러스건강보험",
        category: "손해보험 - 건강고지형",
        icon: "fa-notes-medical",
        color: "lime",
        reason: "건강 고지형으로 5문항+10대암+10수술 보장, 간편하면서도 실속",
        strengths: ["5문항 간편 고지", "10대암 보장", "10수술 보장", "실속형 보험료"],
        salesCardType: "health",
        targetAge: "30~70세",
        targetCustomer: "간편 가입 선호, 실속 보장",
        gaShare: 17.8,
        gaShareNote: "GA 채널 건강고지형보험 시장점유율 (2024)",
        launchMonth: "2023.11"
      },
      {
        company: "현대해상",
        product: "나에게맞춘간편건강보험",
        category: "손해보험 - 간편건강(3.5고지)",
        icon: "fa-file-medical-alt",
        color: "rose",
        reason: "3.5고지 간편건강보험으로 고혈압·당뇨·고지혈증 환자 가입 가능",
        strengths: ["3.5문항 초간편", "고혈압·당뇨 가입 가능", "암·수술·입원 보장", "표준 나이 확대"],
        salesCardType: "health",
        targetAge: "40~80세",
        targetCustomer: "기저질환 고객, 초간편 가입 선호",
        gaShare: 14.6,
        gaShareNote: "GA 채널 간편건강(3.5고지) 시장점유율 (2024)",
        launchMonth: "2024.02"
      },
      {
        company: "롯데손해보험",
        product: "간편보험3655 고고 새로고침100세",
        category: "손해보험 - 초경증간편",
        icon: "fa-hand-holding-medical",
        color: "violet",
        reason: "초경증 간편 보험으로 3문항+6대암+5수술+5생활비 보장, 100세까지",
        strengths: ["초경증 간편(3문항)", "6대암+5수술+5생활비", "100세까지 보장", "저렴한 보험료"],
        salesCardType: "health",
        targetAge: "50~85세",
        targetCustomer: "고령층, 초간편 가입 선호",
        gaShare: 12.1,
        gaShareNote: "GA 채널 초경증간편 시장점유율 (2024)",
        launchMonth: "2023.09"
      },
      {
        company: "메리츠화재",
        product: "또걸려도또받는암간편한355보험",
        category: "손해보험 - 암보험(재발)",
        icon: "fa-ribbon",
        color: "pink",
        reason: "암 재발·전이 반복보장 전문, 2년 후 추가 지급, 3문항 간편 가입",
        strengths: ["재발·전이 반복보장", "2년 후 추가 지급", "3문항 간편고지", "암 병력자 가입 가능"],
        salesCardType: "cancer_recurrence",
        targetAge: "40~75세",
        targetCustomer: "암 병력 고객, 재발 걱정 고객",
        gaShare: 16.4,
        gaShareNote: "GA 채널 암보험 시장점유율 2위 (2024)",
        launchMonth: "2024.01"
      },
      {
        company: "삼성화재",
        product: "굿앤굿어린이종합보험Q",
        category: "손해보험 - 어린이보험",
        icon: "fa-child",
        color: "blue",
        reason: "어린이 전용 종합보험으로 암·질병·상해 통합 보장 + 교육자금 지원",
        strengths: ["어린이 맞춤 보장", "암·질병·상해 통합", "교육자금 지원", "부모 안심"],
        salesCardType: "child",
        targetAge: "0~20세",
        targetCustomer: "자녀 둔 부모, 어린이 보험 가입 고객",
        gaShare: 23.7,
        gaShareNote: "GA 채널 어린이보험 시장점유율 (2024)",
        launchMonth: "2023.08"
      },
      {
        company: "DB손해보험",
        product: "NEW내돈내삼1640건강보험",
        category: "손해보험 - MZ청년보험",
        icon: "fa-user-friends",
        color: "emerald",
        reason: "MZ 세대 맞춤 보험으로 16세~40세 타겟, 저렴한 보험료 + 실속 보장",
        strengths: ["MZ 맞춤 보장", "16~40세 타겟", "저렴한 보험료", "실속 보장"],
        salesCardType: "youth",
        targetAge: "16~40세",
        targetCustomer: "MZ 세대, 청년층, 사회초년생",
        gaShare: 28.4,
        gaShareNote: "GA 채널 MZ청년보험 시장점유율 (2024)",
        launchMonth: "2024.03"
      },
      {
        company: "흥국화재",
        product: "시그니처여성건강보험3.0",
        category: "손해보험 - 여성건강보험",
        icon: "fa-female",
        color: "pink",
        reason: "여성 전용 건강보험으로 유방암·자궁암·난소암 집중 보장 + 출산 지원",
        strengths: ["여성 맞춤 보장", "유방암·자궁암·난소암", "출산 지원", "여성 질환 특화"],
        salesCardType: "women",
        targetAge: "20~60대",
        targetCustomer: "여성 고객, 출산 계획 고객",
        gaShare: 19.2,
        gaShareNote: "GA 채널 여성건강보험 시장점유율 (2024)",
        launchMonth: "2023.10"
      },
      {
        company: "NH농협손해보험",
        product: "치매간병시니어종합보험",
        category: "손해보험 - 간병치매",
        icon: "fa-brain",
        color: "cyan",
        reason: "레켐비 약제비 최대 2천만원 보장(업계 최초), 갱신 없이 평생 고정 보험료",
        strengths: ["레켐비 약제비 최대 2천만원", "갱신 없는 평생 보험료", "장기요양 1~4등급 월 100만원", "주간보호센터 월 50만원"],
        salesCardType: "dementia",
        targetAge: "40~80세",
        targetCustomer: "시니어, 치매 간병 대비 고객",
        gaShare: 18.3,
        gaShareNote: "GA 채널 치매간병보험 시장점유율 2위 (2024)",
        launchMonth: "2024.05"
      },
      {
        company: "하나손해보험",
        product: "참좋은운전자상해보험",
        category: "손해보험 - 운전자보험",
        icon: "fa-car",
        color: "indigo",
        reason: "운전자 전용 상해보험으로 교통사고 벌금·변호사 비용 + 자동차사고 부상 치료",
        strengths: ["교통사고 벌금 보장", "변호사 비용 지원", "자동차사고 부상 치료", "운전자 맞춤"],
        salesCardType: "driver",
        targetAge: "20~70세",
        targetCustomer: "모든 운전자, 특히 영업직·장거리 출퇴근",
        gaShare: 22.6,
        gaShareNote: "GA 채널 운전자보험 시장점유율 (2024)",
        launchMonth: "2023.12"
      },
      {
        company: "KB손해보험",
        product: "KB금쪽같은펫보험(강아지·고양이)",
        category: "손해보험 - 펫보험",
        icon: "fa-dog",
        color: "emerald",
        reason: "업계 최고 의료비 한도 연 4천만원(입원 2천+통원 2천), 2026년부터 항암제 보장 추가",
        strengths: ["연 4천만원 한도(업계 최고)", "입원 2천만원+통원 2천만원", "항암제 보장(2026년~)", "재활·약제비 확대", "70~90% 실손"],
        salesCardType: "pet",
        targetAge: "전 연령",
        targetCustomer: "반려동물 보호자, 고액 치료비 걱정 고객",
        gaShare: 35.2,
        gaShareNote: "GA 채널 펫보험 시장점유율 1위 (2024)",
        launchMonth: "2024.04"
      }
    ];

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

  // 다른 년도는 준비 중
  return res.status(200).json({
    year: year || 'unknown',
    message: `${year}년 데이터는 준비 중입니다.`,
    availableYears: ['2025'],
    products: []
  });
}
