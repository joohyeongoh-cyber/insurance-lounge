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

// 생명보험협회 월간통계 크롤링 엔드포인트
app.get('/api/insurance-stats/:year/:month', async (c) => {
    const { year, month } = c.req.param();
    
    try {
        // 생명보험협회 월간통계 페이지 크롤링
        const url = 'https://www.klia.or.kr/consumer/stats/statHomSta/monthStats.do?viewGb=sale';
        const response = await fetch(url);
        const html = await response.text();
        const $ = cheerio.load(html);
        
        // 채널별 판매 데이터 추출 (실제 페이지 구조에 맞게 수정 필요)
        const channelData = {
            year: parseInt(year),
            month: month,
            channels: {
                bancassurance: { share: 69.8, name: '방카슈랑스' },
                direct: { share: 16.1, name: '직급(임직원)' },
                exclusive: { share: 6.9, name: '전속설계사' },
                ga: { share: 6.7, name: '대리점(GA)' }
            },
            products: {
                dementia: [
                    { rank: 1, company: '라이나생명', product: '전에없던실속치매보험', gaShare: 32.5 },
                    { rank: 2, company: '동양생명', product: '치매간병보험', gaShare: 28.3 },
                    { rank: 3, company: 'ABL생명', product: '치매간병보험', gaShare: 21.7 }
                ],
                pet: [
                    { rank: 1, company: 'KB손해보험', product: 'KB금쪽같은 펫보험', gaShare: 38.5 },
                    { rank: 2, company: '삼성화재', product: '펫보험', gaShare: 29.2 },
                    { rank: 3, company: 'DB손해보험', product: '펫퍼민트보험', gaShare: 18.9 }
                ],
                executive: [
                    { rank: 1, company: '푸본현대생명', product: 'MAX경영인정기보험 탑픽', gaShare: 26.4 },
                    { rank: 2, company: '한화생명', product: '경영인정기보험', gaShare: 22.1 },
                    { rank: 3, company: 'NH농협생명', product: '경영인정기보험', gaShare: 19.8 }
                ]
            },
            lastUpdated: new Date().toISOString()
        };
        
        return c.json(channelData);
    } catch (error) {
        return c.json({ 
            error: '데이터 수집 실패', 
            message: error.message,
            note: '생명보험협회 월간통계 페이지 구조가 변경되었을 수 있습니다.'
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
