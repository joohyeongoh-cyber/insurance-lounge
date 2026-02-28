#!/bin/bash

# 10Web 배포용 파일 정리
echo "📦 10Web 배포 패키지 생성 중..."

# dist 폴더의 HTML, CSS, JS, 이미지 파일만 복사
mkdir -p 10web-deploy

# _worker.js와 _routes.json 제외하고 모든 파일 복사
cd dist
for file in *.html *.css *.js *.png *.jpg *.jpeg *.gif *.svg *.ico; do
    if [ -f "$file" ] && [ "$file" != "_worker.js" ]; then
        cp "$file" ../10web-deploy/ 2>/dev/null || true
    fi
done
cd ..

echo "✅ 10web-deploy 폴더에 배포 파일 준비 완료!"
echo "📁 업로드할 파일 목록:"
ls -lh 10web-deploy/ | grep "^-" | wc -l
echo "개의 파일"

