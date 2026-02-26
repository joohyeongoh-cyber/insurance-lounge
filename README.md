# 보험 LOUNGE

## 📋 프로젝트 소개
보험 전문가 플랫폼 - 고객과 보험 전문가를 연결하는 커뮤니티

## 🌐 배포 URL
- **Development**: https://3000-idzvgb4yncu5605w3cfw1-ea026bf9.sandbox.novita.ai
- **GitHub**: https://github.com/joohyeongoh-cyber/insurance-lounge

## ✨ 주요 기능

### 1. **보험저널 검증 상품** 🆕
   - **역대 수상작**: 2022~2025년 보험저널 '올해의 보험상품' 전체 수상작
   - **2026 이슈 상품**: 보험저널 뉴스 기반 자동 수집 (자동 업데이트 예정)
   - **세일즈카드 생성**: 각 상품별 PDF/이미지 다운로드 기능
     - 상품 정보, 주요 강점, 1억 만들기 플랜 (종신보험)
     - 회사명/상품명 자동 삽입
     - html2canvas + jsPDF 사용

### 2. **전문가 신청 및 승인 시스템**
   - 관리자 승인/반려 기능
   - 전문가 프로필 관리

### 3. **전문가 소개 페이지**
   - 컴팩트 카드 디자인 (한 줄에 4개)
   - 클릭 시 상세 모달 팝업
   - 카카오톡 오픈채팅 연결

### 4. **리뷰 시스템**
   - 전문가별 리뷰 필터링
   - 평균 평점 표시
   - 고객 성함 마스킹 (성**)

### 5. **보험정보**
   - 손해보험협회/생명보험협회 공시실 링크
   - 주요 보험 뉴스

### 6. **계약/청구 사례**
   - 실제 계약 사례 공유
   - 청구 성공 사례

## 🔧 기술 스택
- **Backend**: Hono (Cloudflare Workers)
- **Frontend**: HTML5, Tailwind CSS, JavaScript
- **PDF 생성**: html2canvas + jsPDF
- **Storage**: 
  - localStorage (클라이언트 사이드)
  - Cloudflare D1 (예정)
- **Icons**: Font Awesome
- **Deployment**: Cloudflare Pages (예정)

## 📁 프로젝트 구조
```
insurance-lounge/
├── src/
│   └── index.tsx          # Hono 백엔드 API
├── public/
│   └── static/
│       ├── common.css     # 공통 스타일
│       ├── common.js      # 공통 JavaScript
│       └── fa-intro.js    # 전문가 페이지 JS
├── index.html             # 홈페이지
├── verified-products.html # 검증 상품 🆕
├── fa-intro.html         # 전문가 소개
├── fa-apply.html         # 전문가 신청
├── fa-login.html         # 전문가 로그인
├── fa-dashboard.html     # 전문가 대시보드
├── admin-login.html      # 관리자 로그인
├── admin.html            # 관리자 페이지
├── insurance-info.html   # 보험정보
├── contract-cases.html   # 계약 사례
├── claim-cases.html      # 청구 사례
├── inquiries.html        # 문의하기
├── ecosystem.config.cjs  # PM2 설정
├── wrangler.jsonc        # Cloudflare 설정
├── package.json          # 의존성 관리
└── README.md            # 프로젝트 문서
```

## 🚀 개발 환경 실행

### 로컬 개발 서버 시작
```bash
cd /home/user/webapp
npm run build
pm2 start ecosystem.config.cjs
```

### 서버 상태 확인
```bash
pm2 list
pm2 logs insurance-lounge --nostream
```

### 포트 정리
```bash
fuser -k 3000/tcp
```

## 👥 관리자 계정
- **ID**: hyeong20320@naver.com
- **PW**: joomen0225!!!

## 📊 API 엔드포인트

### 검증 상품 API
- `GET /api/award-products/:year` - 연도별 보험저널 수상작 조회
- `GET /api/trending-products/:year` - 연도별 이슈 상품 조회

### 공시실 프록시 API
- `GET /api/proxy/life-insurance` - 생명보험 공시실
- `GET /api/proxy/general-insurance` - 손해보험 공시실
- `GET /api/proxy/medical-insurance` - 실손보험 공시실

## 📊 주요 데이터 저장소
- `fa_applications`: 전문가 신청 내역
- `fa_profiles`: 승인된 전문가 프로필
- `contract_cases`: 계약 사례
- `claim_cases`: 청구 사례
- `fa_reviews`: 전문가 리뷰
- `award_products`: 보험저널 수상작 (예정)
- `trending_products`: 이슈 상품 (예정)

## 🎨 디자인 특징
- **반응형 디자인**: 모바일, 태블릿, PC 최적화
- **컴팩트 카드**: 100명 이상의 전문가도 깔끔하게 표시
- **모달 팝업**: 상세 정보는 클릭 시 큰 화면으로
- **세일즈카드**: 전문가용 상품 소개 자료 자동 생성
- **브라우저 캐싱**: CSS/JS 파일 분리로 성능 향상

## 📝 업데이트 이력
- **2026-02-26**: 세일즈카드 생성 기능 추가 (PDF/이미지 다운로드)
- **2026-02-26**: 보험저널 검증 상품 페이지 구축
- **2026-02-22**: CSS/JS 파일 분리 및 성능 최적화
- **2026-02-21**: 전문가 카드 컴팩트 디자인 적용
- **2026-02-21**: 전문가 신청 승인/반려 시스템 구축
- **2026-02-21**: 초기 프로젝트 생성

## 🔮 향후 계획
1. ✅ 세일즈카드 생성 기능 (완료)
2. 🔄 보험저널 뉴스 자동 크롤링 시스템
3. 🔄 Cloudflare D1 데이터베이스 연동
4. 🔄 회원가입/로그인 시스템
5. 🔄 Cloudflare Pages 프로덕션 배포

## 📞 문의
- GitHub Issues: https://github.com/joohyeongoh-cyber/insurance-lounge/issues

---
© 2026 보험 LOUNGE. All rights reserved.
