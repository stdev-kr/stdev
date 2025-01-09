# STDev Homepage

[![CI](https://github.com/stdev-kr/stdev/actions/workflows/ci.yml/badge.svg)](https://github.com/stdev-kr/stdev/actions/workflows/ci.yml)
[![CD](https://github.com/stdev-kr/stdev/actions/workflows/cd.yml/badge.svg)](https://github.com/stdev-kr/stdev/actions/workflows/cd.yml)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## How to run for development

`.env.example` 파일을 참고하여 `.env` 파일을 작성합니다.

```bash
npm install
```

```bash
npm run dev
```

브라우저에서 [https://localhost:3000](https://localhost:3000)로 이동합니다.

## How to deploy

Github 레포지토리 설정에서 `Actions secrets and variables` 페이지로 이동한 후 `Repository secrets`에 아래 두 값을 입력합니다.

> AUTH_URL  
> NEXT_PUBLIC_CHANNEL_PLUGIN_KEY

서버에서 `Docker Compose` 환경을 설정한 후, `docker-compose.yml` 을 아래와 같이 작성합니다.

```yml
services:
  stdev:
    container_name: stdev
    image: ghcr.io/stdev-kr/stdev:main
    pull_policy: always
    expose:
      - 1000
    restart: always
    environment:
      DATABASE_URL: example
      AWS_ACCESS_KEY: example
      AWS_SECRET_KEY: example
      AUTH_SECRET: example
      AUTH_GOOGLE_ID: example
      AUTH_GOOGLE_SECRET: example
```

아래 명령을 실행합니다.

```bash
docker compose up -d
```

Port `1000` 번에 Reverse Proxy를 붙입니다.
