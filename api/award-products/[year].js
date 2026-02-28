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
        reason: "높은 환급률로 소비자에게 큰 호응. 5년납 7년시점 99.4%, 10년시점 123.4% 환급률 달성. 스마트페이 납입방식으로 유연한 재정관리 가능",
        strengths: ["5년납 10년시점 123.4% 환급률", "7년납 7년시점 99.4% 환급", "스마트페이/일반페이 선택", "2단계 보장구조", "가입나이 만15~75세"],
        companyRanking: "NH농협생명 - 단기납종신보험 주력",
        salesCardType: "whole_life",
        targetAge: "30~50대",
        targetCustomer: "가족 책임이 큰 가장, 단기납 선호 고객, 높은 환급률 원하는 고객",
        launchMonth: "2023.08"
      },
      {
        company: "메트라이프생명",
        product: "백만인을위한달러종신보험PLUS",
        category: "생명보험 - 단기납종신(외화)",
        icon: "fa-dollar-sign",
        color: "green",
        reason: "달러 표시 종신보험으로 환헷지 효과 + 종신보장 동시 실현. 가입금액에 따라 맞춤형 생활서비스(전문 컨시어지) 제공으로 만족도 높음",
        strengths: ["달러 자산 확보(환헷지)", "최저보증이율 제공", "5~20년납 선택 가능", "가입금액별 컨시어지 서비스", "미국 금리 기반 안정성"],
        companyRanking: "메트라이프생명 - 달러종신보험 대표 상품",
        salesCardType: "whole_life",
        targetAge: "40~60대",
        targetCustomer: "해외 자산 분산 관심 고객, 달러 자산 확보 원하는 고객",
        launchMonth: "2022.11"
      },
      {
        company: "미래에셋생명",
        product: "헤리티지종신보험",
        category: "생명보험 - 상속종신",
        icon: "fa-gift",
        color: "purple",
        reason: "상속·증여세 마련 전용 종신보험. 2025년 5월 재출시. 사망보험금 5배 보장으로 상속세 자금 확보. 유병자·고연령층(만80세)까지 가입 가능해 실용성 높음",
        strengths: ["상속·증여세 마련 전용", "사망보험금 최대 5배", "유병자·만80세까지 가입", "확정금리형 안정성", "상속 자금 확보"],
        companyRanking: "미래에셋생명 - 상속종신보험 특화",
        salesCardType: "whole_life",
        targetAge: "50대 이상",
        targetCustomer: "상속 대비 자산가, 고연령층, 유병자도 가입 가능",
        launchMonth: "2023.05 (2025.05 재출시)"
      },
      {
        company: "DB생명",
        product: "백년친구700종신보험",
        category: "생명보험 - 단기납종신(원화)",
        icon: "fa-hourglass-half",
        color: "orange",
        reason: "7년 시점 주계약 기납입보험료 100% 해약환급금. 단기 환급 + 장기 보장 구조로 빠른 완납 후 평생 보장 실현",
        strengths: ["7년시점 100% 환급", "단기 환급형 구조", "장기 보장 제공", "빠른 납입 완료", "평생 사망보장"],
        salesCardType: "whole_life",
        targetAge: "40~55세",
        targetCustomer: "고소득 직장인, 빠른 완납 선호",
        launchMonth: "2024.03"
      },
      {
        company: "푸본현대생명",
        product: "MAX경영인정기보험 탑픽",
        category: "생명보험 - 경영인정기",
        icon: "fa-briefcase",
        color: "indigo",
        reason: "CEO 유고 리스크 대비 전용 상품. 금리확정형으로 가입 5년 후부터 매년 사망보험금 증액. 법인 보험료 손금 처리 가능",
        strengths: ["5년 후 매년 사망보험금 증액", "금리확정형 안정성", "법인 보험료 손금 처리", "CEO 유고 대비", "경영 리스크 관리"],
        salesCardType: "term_life",
        targetAge: "30~60대",
        targetCustomer: "사업자, 법인 대표, CEO",
        launchMonth: "2023.09"
      },
      {
        company: "ABL생명",
        product: "건강N더보장종합보험",
        category: "생명보험 - 종합건강(일반고지)",
        icon: "fa-heartbeat",
        color: "red",
        reason: "2025년 1월 출시. 유병자도 특약 선택 가능한 간편심사형 도입. 질병수술비 세분화, 시니어 특약 신설(2025.7)로 맞춤형 보장 설계 가능",
        strengths: ["유병자 특약 선택 가능", "간편심사형/일반심사형", "만15~80세 가입", "질병수술비 세분화", "시니어 특약 신설"],
        salesCardType: "health",
        targetAge: "20~60대",
        targetCustomer: "건강한 성인, 종합 보장 선호",
        launchMonth: "2024.01"
      },
      {
        company: "흥국생명",
        product: "3.10.5.5고당플러스간편건강보험",
        category: "생명보험 - 간편건강(고혈압/당뇨)",
        icon: "fa-procedures",
        color: "teal",
        reason: "2025년 9월 출시. 고혈압·당뇨 고지 항목 추가로 보험료 최대 10% 경감. 3개월·10년·최근 5년 고혈압·당뇨 고지로 성실 관리자 혜택",
        strengths: ["보험료 최대 10% 경감", "고혈압·당뇨 고지 항목", "3.10.5.5 고지 구조", "10대암+5수술+5생활비", "성실 관리자 우대"],
        salesCardType: "health",
        targetAge: "50~75세",
        targetCustomer: "고혈압·당뇨 환자, 간편 가입 선호",
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
        launchMonth: "2024.02"
      },
      {
        company: "라이나생명",
        product: "전에없던실속치매보험",
        category: "생명보험 - 치매간병",
        icon: "fa-brain",
        color: "cyan",
        reason: "체증형 재가·시설급여 구조로 10년 후 지급금액 50% 상승. 경도인지부터 중증치매까지 단계별 보장으로 장기 간병 대비 특화",
        strengths: ["10년 후 급여 50% 상승", "체증형 구조", "경도이상치매진단금", "중증치매진단금", "재가·시설급여"],
        salesCardType: "dementia",
        targetAge: "50~75세",
        targetCustomer: "치매 가족력, 50대 이상 예방 관심 고객",
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
        launchMonth: "2023.12"
      },
      {
        company: "KB손해보험",
        product: "KB금쪽같은펫보험(강아지·고양이)",
        category: "손해보험 - 펫보험",
        icon: "fa-dog",
        color: "emerald",
        reason: "업계 최고 수준 보장 한도(하루 최대 30만원, 연간 최대 4천만원)로 대폭 상향. 2024년 10월 개정으로 항암 약물치료 보장 신설, 노령기 질환 대비 강화. 2025년 한국서비스품질지수(KSQI) 수상",
        why선정: "2023년 출시 첫 달 1억원 이상 판매. 2024년 4월·10월 두 차례 개정으로 보장 한도를 업계 최고 수준으로 끌어올림. 반려동물 의료비 하루 최대 30만원, 연간 최대 4천만원 보장. 업계 최초 반려동물 장례비용 지원비 신설. 심장사상충 수술비 500만원 보장(고액보장형). 펫보험 시장 선도 주자로 평가.",
        strengths: ["연 4천만원 한도(업계 최고)", "하루 최대 30만원", "항암 약물치료 보장 신설(2024.10)", "반려동물 장례비용 지원(업계 최초)", "심장사상충 500만원", "70~90% 실손"],
        companyRanking: "KB손해보험 - 펫보험 시장 선도 (메리츠화재와 경쟁)",
        salesCardType: "pet",
        targetAge: "전 연령",
        targetCustomer: "반려동물 보호자, 고액 치료비 걱정 고객, 노령 반려동물",
        launchMonth: "2023.06 (2024.04/10 개정)"
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
