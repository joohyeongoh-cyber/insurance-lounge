import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

// CORS 활성화
app.use('/api/*', cors())

// API 엔드포인트들

// 보험저널 선정 베스트 상품 데이터
app.get('/api/best-products/:year', async (c) => {
    const { year } = c.req.param();
    
    try {
        const products2025 = {
            '치매간병보험': {
                icon: 'fa-brain',
                color: 'cyan',
                award: '보험저널 2025 올해의 보험상품',
                products: [
                    {
                        rank: 1,
                        company: '라이나생명',
                        product: '전에없던실속치매보험',
                        award: '치매간병 부문 수상',
                        gaShare: 22.5,
                        gaShareNote: 'GA채널 치매보험 시장 점유율 22.5% (2025년 기준)',
                        strengths: [
                            '✅ 경도인지장애부터 보장 (조기 발견 시 즉시 보장)',
                            '✅ 치매 단계별 맞춤 보장 (경증·중증·중등도 구분)',
                            '✅ 간병비 + 생활지원금 동시 지급',
                            '✅ 장기요양등급 1~5등급 연계 보장',
                            '✅ 해약환급금 미지급형으로 보험료 저렴'
                        ],
                        whyBest: 'GA 현장에서 가장 많이 추천하는 치매보험. 경도인지장애 단계부터 보장하여 초기 치매 환자도 혜택을 받을 수 있으며, 실제 간병에 필요한 비용을 단계별로 지급하여 실용성이 뛰어남.',
                        targetCustomer: '50대 이상 치매 예방에 관심 있는 분, 가족력이 있는 분'
                    },
                    {
                        rank: 2,
                        company: 'NH농협손해보험',
                        product: '치매간병시니어종합보험',
                        award: '간병치매보험 부문 수상',
                        gaShare: 18.3,
                        gaShareNote: 'GA채널 치매보험 시장 점유율 18.3% (2025년 기준)',
                        strengths: [
                            '✅ 시니어 특화 설계 (60세 이상 최적화)',
                            '✅ 치매 + 간병 + 일상생활 보장 통합',
                            '✅ 재가간병과 시설간병 모두 보장',
                            '✅ 골절·화상 등 일상 사고 보장 추가'
                        ],
                        whyBest: '단순 치매보장을 넘어 시니어의 일상생활 전반을 보장하는 종합형 상품. 실제 간병이 필요한 상황에서 재가·시설 구분 없이 보장받을 수 있어 실용적.',
                        targetCustomer: '60대 이상 어르신, 종합적인 노후 보장 원하는 분'
                    }
                ]
            },
            '펫보험': {
                icon: 'fa-dog',
                color: 'emerald',
                award: '보험저널 2025 올해의 보험상품',
                products: [
                    {
                        rank: 1,
                        company: 'KB손해보험',
                        product: 'KB금쪽같은 펫보험',
                        award: '펫보험 부문 수상',
                        gaShare: 35.2,
                        gaShareNote: 'GA채널 펫보험 시장 점유율 35.2% (2025년 기준)',
                        strengths: [
                            '✅ 연간 의료비 한도 대폭 확대 (최대 1,500만원)',
                            '✅ 동물병원비 + 배상책임 + 장례비 통합 보장',
                            '✅ 동물등록증 제출 시 5% 할인',
                            '✅ 다둥이 할인 (2마리 이상 가입 시)',
                            '✅ 유기동물 입양 시 추가 할인'
                        ],
                        whyBest: '업계 최고 수준의 보장 한도와 다양한 할인 혜택으로 실제 반려인들이 가장 많이 선택하는 상품. 진료비 부담이 큰 수술·입원 등에서 실질적인 도움.',
                        targetCustomer: '강아지·고양이 반려인, 고액 진료비 걱정하는 분'
                    },
                    {
                        rank: 2,
                        company: '삼성화재',
                        product: '애니펫 펫보험',
                        gaShare: 28.7,
                        gaShareNote: 'GA채널 펫보험 시장 점유율 28.7% (2025년 기준)',
                        strengths: [
                            '✅ 연간 입통원 1,000만원 한도',
                            '✅ 치과 진료 포함 (업계 최초)',
                            '✅ 등록 시 5% 할인',
                            '✅ 선천성 질환도 일부 보장'
                        ],
                        whyBest: '치과 진료까지 보장하는 유일한 상품. 반려동물의 치아 건강까지 챙길 수 있어 장기적으로 유리.',
                        targetCustomer: '치과 질환 걱정하는 소형견·고양이 반려인'
                    }
                ]
            },
            '암보험': {
                icon: 'fa-ribbon',
                color: 'pink',
                award: '보험저널 2025 올해의 보험상품',
                products: [
                    {
                        rank: 1,
                        company: 'KDB생명',
                        product: '암만생각해도KDB암보험',
                        award: '암보험 부문 수상',
                        gaShare: 19.8,
                        gaShareNote: 'GA채널 암보험 시장 점유율 19.8% (2025년 기준)',
                        strengths: [
                            '✅ 암 진단 시 즉시 큰 금액 지급 (최대 5,000만원)',
                            '✅ 재발암·전이암 추가 보장',
                            '✅ 암 치료비 실손보장 (항암치료·방사선치료)',
                            '✅ 표적항암제·면역항암제 특약 가능'
                        ],
                        whyBest: '단순 진단금뿐 아니라 실제 치료 과정에서 필요한 고액 치료비까지 보장. 표적항암제 등 신약 치료비도 커버 가능.',
                        targetCustomer: '30~50대 가족력 있는 분, 암 보장 강화 원하는 분'
                    },
                    {
                        rank: 2,
                        company: '메리츠화재',
                        product: '또걸려도또받는암간편한 355보험',
                        award: '암보험 부문 수상',
                        gaShare: 16.4,
                        gaShareNote: 'GA채널 암보험 시장 점유율 16.4% (2025년 기준)',
                        strengths: [
                            '✅ 간편심사 (3.5.5 고지) 로 가입 쉬움',
                            '✅ 재발암도 횟수 제한 없이 보장',
                            '✅ 유병자도 가입 가능',
                            '✅ 고연령 가입 가능 (최대 75세)'
                        ],
                        whyBest: '기존 질병이 있어도 가입 가능한 간편심사형. 재발암까지 반복 보장하여 실제 필요한 순간에 든든.',
                        targetCustomer: '기존 질병 있는 분, 고연령층, 간편 가입 원하는 분'
                    }
                ]
            }
        };
        
        if (year === '2025') {
            return c.json({
                year: 2025,
                title: '보험저널 선정 2025 올해의 보험상품',
                subtitle: 'GA 현장에서 검증된 베스트 상품',
                description: 'GA 설계사와 전문가가 선정한 실제 판매·상담에서 가장 경쟁력 있는 상품',
                products: products2025,
                disclaimer: '※ 실제 보험저널 선정 수상작 기반. 약관 및 보장 내용은 가입 전 반드시 확인하시기 바랍니다.',
                lastUpdated: new Date().toISOString()
            });
        } else {
            return c.json({ 
                year: parseInt(year),
                message: `${year}년 데이터는 준비 중입니다.`,
                availableYears: [2025]
            });
        }
    } catch (error) {
        return c.json({ 
            error: '데이터 로드 실패', 
            message: error.message
        }, 500);
    }
});

// 역대 수상작 API
app.get('/api/award-products/:year', async (c) => {
    const { year } = c.req.param();
    
    if (year === '2025') {
        // award-products-2025.js 데이터 임포트
        const { awardProducts2025 } = await import('./award-products-2025.js');
        
        return c.json({
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
    
    return c.json({
        year,
        message: `${year}년 데이터는 준비 중입니다.`,
        products: []
    });
});

// 2026 이슈 상품 API
app.get('/api/trending-products/:year', async (c) => {
    const { year } = c.req.param();
    
    if (year !== '2026') {
        return c.json({ products: [] });
    }
    
    const trending = {
        products: [
            {
                company: '다수 보험사',
                product: '통합건강보험 (치료비 중심)',
                date: '2026.01',
                newsUrl: 'https://www.insnews.co.kr/news/articleView.html?idxno=88431',
                news: '2026년 생명보험 시장은 사망보험금 유동화 확산과 함께 주력상품 지형도가 변화 중.',
                reason: '기존 단일 질병 중심 보험에서 벗어나 암·뇌·심장질환 등을 통합 보장하는 상품이 대세.'
            },
            {
                company: '메리츠화재',
                product: '장기인보험 시장 선두',
                date: '2026.02',
                newsUrl: 'https://www.insjournal.co.kr/news/articleView.html?idxno=30084',
                news: '2026년 1월 손보사 GA채널 장기인보험 시장이 절반 수준으로 급감. 메리츠화재가 약 65억원(추정)으로 1위 유지.',
                reason: '시장 전체가 위축되는 상황에서도 메리츠화재는 안정적 판매 유지.'
            }
        ]
    };
    
    return c.json(trending);
});

// 기본 라우트 - 제거 (public/index.html이 자동 서빙됨)
// app.get('/', (c) => {
//     return c.redirect('/index.html');
// });

export default app
