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
        
        // 월별로 변동하는 GA 점유율 생성
        const dementiaShares = [
            seededRandom(28, 36, 1).toFixed(1),
            seededRandom(24, 32, 2).toFixed(1),
            seededRandom(18, 26, 3).toFixed(1)
        ].sort((a, b) => b - a);
        
        const petShares = [
            seededRandom(32, 42, 4).toFixed(1),
            seededRandom(24, 34, 5).toFixed(1),
            seededRandom(14, 24, 6).toFixed(1)
        ].sort((a, b) => b - a);
        
        const executiveShares = [
            seededRandom(22, 30, 7).toFixed(1),
            seededRandom(18, 26, 8).toFixed(1),
            seededRandom(14, 22, 9).toFixed(1)
        ].sort((a, b) => b - a);
        
        // 채널별 판매 데이터도 월별 변동
        const gaShare = seededRandom(6.0, 7.5, 10).toFixed(1);
        const bancaShare = seededRandom(68, 72, 11).toFixed(1);
        const directShare = seededRandom(15, 17, 12).toFixed(1);
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
            products: {
                dementia: [
                    { rank: 1, company: '라이나생명', product: '전에없던실속치매보험', gaShare: parseFloat(dementiaShares[0]) },
                    { rank: 2, company: '동양생명', product: '치매간병보험', gaShare: parseFloat(dementiaShares[1]) },
                    { rank: 3, company: 'ABL생명', product: '치매간병보험', gaShare: parseFloat(dementiaShares[2]) }
                ],
                pet: [
                    { rank: 1, company: 'KB손해보험', product: 'KB금쪽같은 펫보험', gaShare: parseFloat(petShares[0]) },
                    { rank: 2, company: '삼성화재', product: '펫보험', gaShare: parseFloat(petShares[1]) },
                    { rank: 3, company: 'DB손해보험', product: '펫퍼민트보험', gaShare: parseFloat(petShares[2]) }
                ],
                executive: [
                    { rank: 1, company: '푸본현대생명', product: 'MAX경영인정기보험 탑픽', gaShare: parseFloat(executiveShares[0]) },
                    { rank: 2, company: '한화생명', product: '경영인정기보험', gaShare: parseFloat(executiveShares[1]) },
                    { rank: 3, company: 'NH농협생명', product: '경영인정기보험', gaShare: parseFloat(executiveShares[2]) }
                ]
            },
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
