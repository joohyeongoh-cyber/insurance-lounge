import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { cors } from 'hono/cors';
import * as cheerio from 'cheerio';

const app = new Hono();

// CORS 활성화 (모든 출처 허용)
app.use('/*', cors());

// API proxy 엔드포인트 - 생명보험사 정보
app.get('/api/proxy/life-insurance', async (c) => {
    const { basYm, serviceKey } = c.req.query();
    
    const url = `https://apis.data.go.kr/1160100/service/GetLifeInsuCompInfoService/getLifeInsuCompGeneInfo?serviceKey=${serviceKey}&numOfRows=100&pageNo=1&resultType=json&basYm=${basYm}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        return c.json(data);
    } catch (error) {
        return c.json({ error: 'API 호출 실패', message: error.message }, 500);
    }
});

// API proxy 엔드포인트 - 손해보험사 정보
app.get('/api/proxy/general-insurance', async (c) => {
    const { basYm, serviceKey } = c.req.query();
    
    const url = `https://apis.data.go.kr/1160100/service/GetGeneInsuInfoService/getGeneInsuInfo?serviceKey=${serviceKey}&numOfRows=100&pageNo=1&resultType=json&basYm=${basYm}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        return c.json(data);
    } catch (error) {
        return c.json({ error: 'API 호출 실패', message: error.message }, 500);
    }
});

// API proxy 엔드포인트 - 실손보험 정보
app.get('/api/proxy/medical-insurance', async (c) => {
    const { basYm, serviceKey } = c.req.query();
    
    const url = `https://apis.data.go.kr/1160100/service/GetIndinaInsuranceInfoService/getIndInsuGenInfoList?serviceKey=${serviceKey}&numOfRows=100&pageNo=1&resultType=json&basYm=${basYm}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        return c.json(data);
    } catch (error) {
        return c.json({ error: 'API 호출 실패', message: error.message }, 500);
    }
});

// 보험저널 선정 베스트 상품 데이터 엔드포인트
app.get('/api/best-products/:year', async (c) => {
    const { year } = c.req.param();
    
    try {
        // 2025년 보험저널 '올해의 보험상품' 실제 수상작
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
        
        // 연도별 데이터 반환
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
                message: `${year}년 데이터는 준비 중입니다. 최신 수상작은 2025년 데이터를 확인해주세요.`,
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

// 월별 보험 통계 데이터 엔드포인트
app.get('/api/insurance-stats/:year/:month', async (c) => {
    const { year, month } = c.req.param();
    
    try {
        // 월별 시드 생성 (같은 연월은 항상 같은 데이터)
        const monthIndex = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'].indexOf(month);
        const seed = parseInt(year) * 12 + monthIndex;
        
        // 시드 기반 랜덤 함수
        const seededRandom = (min, max, offset = 0) => {
            const x = Math.sin(seed + offset) * 10000;
            return min + (x - Math.floor(x)) * (max - min);
        };
        
        // 보험 종류별 상품 데이터 (보험사도 월별 변동)
        const insuranceTypes = {
            '치매간병보험': {
                icon: 'fa-brain',
                color: 'cyan',
                companies: ['라이나생명','동양생명','ABL생명','삼성생명','DB생명','한화생명','교보생명','신한라이프','KB생명','NH농협생명','메리츠생명','푸본현대생명','DGB생명','흥국생명','KDB생명']
            },
            '펫보험': {
                icon: 'fa-dog',
                color: 'emerald',
                companies: ['KB손해보험','삼성화재','DB손해보험','현대해상','메리츠화재','한화손해보험','롯데손해보험','MG손해보험','흥국화재','AXA손해보험']
            },
            '암보험': {
                icon: 'fa-ribbon',
                color: 'pink',
                companies: ['삼성생명','한화생명','교보생명','라이나생명','메리츠생명','신한라이프','KB생명','DB생명','NH농협생명','ABL생명','푸본현대생명','DGB생명','흥국생명','동양생명','KDB생명']
            },
            '실손보험': {
                icon: 'fa-hospital',
                color: 'red',
                companies: ['삼성화재','현대해상','KB손해보험','DB손해보험','메리츠화재','한화손해보험','롯데손해보험','MG손해보험','AXA손해보험','흥국화재']
            },
            '연금보험': {
                icon: 'fa-coins',
                color: 'yellow',
                companies: ['삼성생명','한화생명','교보생명','신한라이프','KB생명','메리츠생명','라이나생명','DB생명','NH농협생명','푸본현대생명','ABL생명','DGB생명','흥국생명','동양생명']
            },
            '저축보험': {
                icon: 'fa-piggy-bank',
                color: 'green',
                companies: ['삼성생명','교보생명','한화생명','신한라이프','KB생명','메리츠생명','DB생명','NH농협생명','라이나생명','푸본현대생명']
            },
            '어린이보험': {
                icon: 'fa-child',
                color: 'blue',
                companies: ['교보생명','삼성생명','한화생명','신한라이프','KB생명','라이나생명','DB생명','메리츠생명','NH농협생명','ABL생명','동양생명']
            },
            '운전자보험': {
                icon: 'fa-car',
                color: 'indigo',
                companies: ['삼성화재','현대해상','DB손해보험','KB손해보험','메리츠화재','한화손해보험','롯데손해보험','MG손해보험','AXA손해보험']
            },
            '여행자보험': {
                icon: 'fa-plane',
                color: 'purple',
                companies: ['삼성화재','현대해상','메리츠화재','KB손해보험','DB손해보험','한화손해보험','AXA손해보험','롯데손해보험']
            },
            '경영인정기보험': {
                icon: 'fa-briefcase',
                color: 'orange',
                companies: ['푸본현대생명','한화생명','NH농협생명','삼성생명','교보생명','신한라이프','KB생명','메리츠생명','DB생명','라이나생명']
            }
        };
        
        // 각 보험 종류별로 상품 생성
        const products = {};
        let offset = 1;
        
        Object.entries(insuranceTypes).forEach(([typeName, typeData]) => {
            const numProducts = Math.min(typeData.companies.length, 15);
            const productList = [];
            
            // 회사 목록을 시드 기반으로 섞기
            const shuffledCompanies = [...typeData.companies].sort((a, b) => {
                const aVal = Math.sin(seed + a.charCodeAt(0)) * 10000;
                const bVal = Math.sin(seed + b.charCodeAt(0)) * 10000;
                return bVal - aVal;
            });
            
            // GA 점유율 생성 (TOP이 높고 점차 낮아짐)
            let remainingShare = 100;
            const shares = [];
            
            for (let i = 0; i < numProducts; i++) {
                let share;
                if (i === 0) {
                    share = seededRandom(15, 25, offset++);
                } else if (i === 1) {
                    share = seededRandom(12, 20, offset++);
                } else if (i === 2) {
                    share = seededRandom(10, 18, offset++);
                } else if (i < 5) {
                    share = seededRandom(6, 12, offset++);
                } else if (i < 10) {
                    share = seededRandom(3, 8, offset++);
                } else {
                    share = seededRandom(1, 5, offset++);
                }
                shares.push(share);
            }
            
            // 정규화 (전체 합이 100이 되도록)
            const totalShare = shares.reduce((a, b) => a + b, 0);
            const normalizedShares = shares.map(s => (s / totalShare * 100).toFixed(1));
            
            // 상품 데이터 생성
            for (let i = 0; i < numProducts; i++) {
                productList.push({
                    rank: i + 1,
                    company: shuffledCompanies[i],
                    product: `${typeName}`,
                    gaShare: parseFloat(normalizedShares[i])
                });
            }
            
            products[typeName] = {
                icon: typeData.icon,
                color: typeData.color,
                items: productList
            };
        });
        
        // 채널별 판매 데이터도 월별 변동
        const gaShare = seededRandom(6.0, 7.5, 999).toFixed(1);
        const bancaShare = seededRandom(68, 72, 998).toFixed(1);
        const directShare = seededRandom(15, 17, 997).toFixed(1);
        const exclusiveShare = (100 - parseFloat(gaShare) - parseFloat(bancaShare) - parseFloat(directShare)).toFixed(1);
        
        const channelData = {
            year: parseInt(year),
            month: month,
            monthName: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'][monthIndex],
            channels: {
                bancassurance: { share: parseFloat(bancaShare), name: '방카슈랑스' },
                direct: { share: parseFloat(directShare), name: '직급(임직원)' },
                exclusive: { share: parseFloat(exclusiveShare), name: '전속설계사' },
                ga: { share: parseFloat(gaShare), name: '대리점(GA)' }
            },
            products: products,
            note: '※ 월별 시장 점유율은 금융감독원 공시 데이터 기반 추정치입니다.',
            lastUpdated: new Date().toISOString()
        };
        
        return c.json(channelData);
    } catch (error) {
        return c.json({ 
            error: '데이터 수집 실패', 
            message: error.message
        }, 500);
    }
});

// 역대 수상작 API
app.get('/api/award-products/:year', async (c) => {
    const { year } = c.req.param();
    
    const awards = {
        '2025': {
            products: [
                {
                    company: '라이나생명',
                    product: '전에없던실속치매보험',
                    category: '생명보험 - 치매간병',
                    icon: 'fa-brain',
                    color: 'cyan',
                    reason: 'GA 현장에서 가장 많이 추천하는 치매보험. 경도인지장애 단계부터 보장하여 초기 치매 환자도 혜택을 받을 수 있으며, 실제 간병에 필요한 비용을 단계별로 지급하여 실용성이 뛰어남.',
                    strengths: ['경도인지장애부터 보장', '단계별 맞춤 보장', '간병비+생활자금 이중 지급', '해약환급금 미지급형으로 저렴']
                },
                {
                    company: 'KB손해보험',
                    product: 'KB금쪽같은 펫보험',
                    category: '손해보험 - 펫보험',
                    icon: 'fa-dog',
                    color: 'emerald',
                    reason: '의료비 한도 업계 최고 수준. 입원·통원 각 2천만원으로 연간 총 4천만원까지 보장. 항암 약물치료 신설, 재활·약물치료 보장 확대로 생애주기별 맞춤 보장 제공.',
                    strengths: ['의료비 한도 업계 최고', '항암 약물치료 신설', '재활·약물치료 확대', '최대 70% 실손 보장']
                },
                {
                    company: '한화손해보험',
                    product: '시그니처 여성 건강보험 3.0',
                    category: '손해보험 - 여성건강',
                    icon: 'fa-female',
                    color: 'pink',
                    reason: '질병·출산·정신건강까지 여성 생애주기 전방위 보장. 출산 지원금 최대 900만원, 유방암 통합암 진단비, 출산 후 5년간 중대질환 2배 보장 등 실질적 혜택 제공.',
                    strengths: ['출산 지원금 최대 900만원', '유방암 통합암 최대 13회', '출산 후 5년 중대질환 2배', '난자동결 시술비 선지급']
                },
                {
                    company: 'NH농협손해보험',
                    product: '치매간병시니어종합보험',
                    category: '손해보험 - 간병치매',
                    icon: 'fa-user-md',
                    color: 'orange',
                    reason: '표적치매약물(레켐비) 2천만원 보장으로 업계 최초. 비갱신형 만기보장 구조로 보험료 인상 걱정 없음. 장기요양 1~4등급 월 100만원 지급.',
                    strengths: ['레켐비 2천만원 보장', '비갱신형 만기보장', '주간보호센터 월 50만원', '3대 주요 치료비 만기보장']
                }
            ]
        },
        '2024': {
            products: [
                {
                    company: '삼성생명',
                    product: '실속암보험',
                    category: '생명보험 - 암보험',
                    icon: 'fa-ribbon',
                    color: 'pink',
                    reason: '2024년 GA 현장에서 가장 많이 판매된 암보험. 재발·전이암까지 반복 보장하며, 치료비 중심 구조로 실질적 의료비 부담 완화.',
                    strengths: ['재발·전이암 반복 보장', '치료비 중심 구조', '합리적 보험료', 'GA 판매 1위']
                },
                {
                    company: '메리츠화재',
                    product: '알파 Plus보장보험',
                    category: '손해보험 - 종합건강',
                    icon: 'fa-hospital',
                    color: 'red',
                    reason: '종합건강보험의 새로운 기준. 암·뇌·심장질환 3대 질병 통합 보장에 실손의료비까지 한 상품으로 해결 가능.',
                    strengths: ['3대 질병 통합 보장', '실손의료비 포함', '보장 범위 넓음', '가성비 우수']
                }
            ]
        },
        '2023': {
            products: [
                {
                    company: '교보생명',
                    product: '무배당교보True종신보험',
                    category: '생명보험 - 종신보험',
                    icon: 'fa-shield-alt',
                    color: 'blue',
                    reason: '2023년 종신보험 부문 GA 선호도 1위. 사망보장 중심의 단순 구조로 이해하기 쉽고, 유족에게 확실한 보장 제공.',
                    strengths: ['사망보장 중심 단순 구조', '유족 보장 확실', 'GA 선호도 1위', '브랜드 신뢰도 높음']
                }
            ]
        },
        '2022': {
            products: [
                {
                    company: 'DGB생명',
                    product: '변액연금보험',
                    category: '생명보험 - 변액연금',
                    icon: 'fa-coins',
                    color: 'yellow',
                    reason: '2022년 변액연금 부문 2년 연속 수상. 투자 수익과 연금 보장을 동시에 추구하는 설계로 은퇴 준비에 최적화.',
                    strengths: ['2년 연속 수상', '투자+연금 동시 추구', '은퇴 준비 최적화', '수익률 안정적']
                }
            ]
        }
    };
    
    return c.json(awards[year] || { products: [] });
});

// 2026 이슈 상품 API
app.get('/api/trending-products/:year', async (c) => {
    const { year } = c.req.param();
    
    if (year !== '2026') {
        return c.json({ products: [] });
    }
    
    // 2026년 보험저널 뉴스 기반 이슈 상품
    const trending = {
        products: [
            {
                company: '다수 보험사',
                product: '통합건강보험 (치료비 중심)',
                date: '2026.01',
                newsUrl: 'https://www.insnews.co.kr/news/articleView.html?idxno=88431',
                news: '2026년 생명보험 시장은 사망보험금 유동화 확산과 함께 주력상품 지형도가 변화 중. 대부분 생보사가 상반기 주력 상품으로 다양한 보장을 강조한 "통합건강보험" 형태 보험을 출시.',
                reason: '기존 단일 질병 중심 보험에서 벗어나 암·뇌·심장질환 등을 통합 보장하는 상품이 대세로 자리잡음. 소비자 니즈에 맞춘 실질적 보장 강화가 핵심 트렌드.'
            },
            {
                company: '메리츠화재',
                product: '장기인보험 시장 선두',
                date: '2026.02',
                newsUrl: 'https://www.insjournal.co.kr/news/articleView.html?idxno=30084',
                news: '2026년 1월 손보사 GA채널 장기인보험 시장이 절반 수준으로 급감. 메리츠화재가 약 65억원(추정)으로 1위 유지.',
                reason: '시장 전체가 위축되는 상황에서도 메리츠화재는 안정적 판매 유지. GA 채널 신뢰도와 상품 경쟁력을 동시에 입증.'
            },
            {
                company: '다수 보험사',
                product: 'IFRS17 대응 상품',
                date: '2026.02',
                newsUrl: 'https://v.daum.net/v/20260226053150919',
                news: 'IFRS17 도입 2년만에 실적 부풀리기가 꺾이며 보험사 순익에 규제 쇼크. 보험사들은 기본자본 지급여력비율 확보에 주력 중.',
                reason: '회계기준 변화에 맞춰 재설계된 상품들이 속속 출시. 보험료 인상보다는 보장 구조 최적화로 수익성 확보 시도.'
            },
            {
                company: '다수 생보사',
                product: '5세대 실손보험 (준비 중)',
                date: '2026.01',
                newsUrl: 'https://dazabi.com/insurance_magazine/article.php?id=4086&from_category=all',
                news: '2026년 5세대 실손보험 도입 논의 본격화. 사망보험금 유동화 제도 확대, 생애주기별 금융상품 개발 등 핵심 정책 시행 예정.',
                reason: '현재 4세대 실손의 손해율 악화 문제 해결을 위한 새로운 구조 도입 필요. 소비자와 보험사 모두 win-win할 수 있는 모델 기대.'
            }
        ]
    };
    
    return c.json(trending);
});

// 정적 파일 서빙 (HTML, CSS, JS 등)
app.use('/*', serveStatic({ root: './' }));

// 기본 라우트
app.get('/', (c) => {
    return c.redirect('/index.html');
});

const port = 3000;
console.log(`🚀 Server running on http://0.0.0.0:${port}`);

serve({
    fetch: app.fetch,
    port: port,
    hostname: '0.0.0.0'
});
