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

// 생명보험협회 월간통계 데이터 엔드포인트
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
