# 보험 LOUNGE

## 📋 프로젝트 소개
보험 전문가 플랫폼 - 고객과 보험 전문가를 연결하는 커뮤니티

## 🌐 배포 URL
- **Production**: https://insurance-lounge.vercel.app
- **GitHub**: https://github.com/joohyeongoh-cyber/insurance-lounge

## ✨ 주요 기능
1. **전문가 신청 및 승인 시스템**
   - 관리자 승인/반려 기능
   - 전문가 프로필 관리

2. **전문가 소개 페이지**
   - 컴팩트 카드 디자인 (한 줄에 4개)
   - 클릭 시 상세 모달 팝업
   - 카카오톡 오픈채팅 연결

3. **리뷰 시스템**
   - 전문가별 리뷰 필터링
   - 평균 평점 표시
   - 고객 성함 마스킹 (성**)

4. **베스트 상품**
   - 보험 종류별 추천 상품
   - 10개 카테고리

5. **보험정보**
   - 손해보험협회/생명보험협회 공시실 링크
   - 주요 보험 뉴스

6. **계약/청구 사례**
   - 실제 계약 사례 공유
   - 청구 성공 사례

## 🔧 기술 스택
- **Frontend**: HTML5, Tailwind CSS, JavaScript
- **Storage**: localStorage (클라이언트 사이드)
- **Icons**: Font Awesome
- **Hosting**: Vercel (무료)

## 📁 프로젝트 구조
```
insurance-lounge/
├── index.html              # 홈페이지
├── fa-intro.html          # 전문가 소개
├── fa-apply.html          # 전문가 신청
├── fa-login.html          # 전문가 로그인
├── fa-dashboard.html      # 전문가 대시보드
├── admin-login.html       # 관리자 로그인
├── admin.html             # 관리자 페이지
├── best-products.html     # 베스트 상품
├── insurance-info.html    # 보험정보
├── contract-cases.html    # 계약 사례
├── claim-cases.html       # 청구 사례
├── inquiries.html         # 문의하기
├── public/
│   └── static/
│       ├── common.css     # 공통 스타일
│       ├── common.js      # 공통 JavaScript
│       └── fa-intro.js    # 전문가 페이지 JS
└── vercel.json           # Vercel 설정
```

## 🚀 Vercel 배포 방법

### 방법 1: 웹사이트에서 배포 (추천)
1. [Vercel](https://vercel.com) 접속
2. GitHub로 로그인
3. "New Project" 클릭
4. `insurance-lounge` 저장소 선택
5. "Deploy" 클릭 → 끝!

### 방법 2: CLI로 배포
```bash
npm i -g vercel
cd /home/user/webapp
vercel --prod
```

## 👥 관리자 계정
- **ID**: hyeong20320@naver.com
- **PW**: joomen0225!!!

## 📊 주요 데이터 저장소
- `fa_applications`: 전문가 신청 내역
- `fa_profiles`: 승인된 전문가 프로필
- `contract_cases`: 계약 사례
- `claim_cases`: 청구 사례
- `fa_reviews`: 전문가 리뷰

## 🎨 디자인 특징
- **반응형 디자인**: 모바일, 태블릿, PC 최적화
- **컴팩트 카드**: 100명 이상의 전문가도 깔끔하게 표시
- **모달 팝업**: 상세 정보는 클릭 시 큰 화면으로
- **브라우저 캐싱**: CSS/JS 파일 분리로 성능 향상

## 📝 업데이트 이력
- **2026-02-22**: CSS/JS 파일 분리 및 성능 최적화
- **2026-02-21**: 전문가 카드 컴팩트 디자인 적용
- **2026-02-21**: 전문가 신청 승인/반려 시스템 구축
- **2026-02-21**: 초기 프로젝트 생성

## 📞 문의
- GitHub Issues: https://github.com/joohyeongoh-cyber/insurance-lounge/issues

---
© 2026 보험 LOUNGE. All rights reserved.
