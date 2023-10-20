FROM nginx:alpine

# 빌드 단계에서 생성된 애플리케이션 파일을 복사
COPY . /usr/share/nginx/html

# Nginx 설정 파일 복사 (선택 사항)
#COPY nginx.conf /etc/nginx/conf.d/default.conf

# 포트 설정 (기본적으로 80 포트 사용)
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
