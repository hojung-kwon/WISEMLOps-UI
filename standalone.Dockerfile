FROM node:18-alpine3.17 AS build

WORKDIR /app

# package.json 및 package-lock.json 파일만 변경된 경우에만 npm install 실행
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build
# 2. Nginx 단계
FROM nginx:alpine

# Nuxt.js 빌드 단계에서 생성된 애플리케이션 파일을 복사
COPY --from=build /app/public /usr/share/nginx/html

# Nginx 설정 파일 복사 (선택 사항)
#COPY nginx.conf /etc/nginx/conf.d/default.conf

# 포트 설정 (기본적으로 80 포트 사용)
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
