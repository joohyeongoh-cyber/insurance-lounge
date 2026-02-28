// Vercel Serverless Function
export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { year } = req.query;

  if (year === '2026') {
    const trendingProducts2026 = [
      {
        company: "다수 보험사",
        product: "통합건강보험 (치료비 중심)",
        date: "2026.01",
        newsUrl: "https://www.insnews.co.kr/news/articleView.html?idxno=88431",
        news: "2026년 생명보험 시장은 사망보험금 유동화 확산과 함께 주력상품 지형도가 변화 중...",
        reason: "기존 단일 질병 중심 보험에서 벗어나 암·뇌·심장질환 등을 통합 보장하는 상품이 대세"
      },
      {
        company: "메리츠화재",
        product: "장기인보험 시장 선두",
        date: "2026.02",
        newsUrl: "https://www.insjournal.co.kr/news/articleView.html?idxno=30084",
        news: "2026년 1월 손보사 GA채널 장기인보험 시장이 절반 수준으로 급감. 메리츠화재가 약 65억원(추정)으로 1위 유지.",
        reason: "시장 전체가 위축되는 상황에서도 메리츠화재는 안정적 판매 유지"
      },
      {
        company: "다수 보험사",
        product: "IFRS17 대응 상품",
        date: "2026.02",
        newsUrl: "https://v.daum.net/v/20260226053150919",
        news: "IFRS17 도입 2년만에 실적 부풀리기가 꺾이며 순익 규제 쇼크. 보험사들은 자본적정성 유지에 집중.",
        reason: "회계 기준 변화로 보험사들이 상품 구조와 수익 모델을 재조정 중"
      },
      {
        company: "다수 생보사",
        product: "5세대 실손보험",
        date: "2026.01",
        newsUrl: "https://www.youtube.com/watch?v=aa-QXP6mpjU",
        news: "2026년 1월 생손보사 신상품 이슈 총정리. 보장 내용과 보험료 변화 주목.",
        reason: "실손보험 세대 교체로 보장 범위와 보험료 구조가 개편되며 시장 재편"
      }
    ];

    return res.status(200).json({
      year: '2026',
      products: trendingProducts2026
    });
  }

  return res.status(200).json({
    year: year || 'unknown',
    products: []
  });
}
