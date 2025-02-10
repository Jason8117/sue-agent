# Next.js AWS Bedrock Chat

AWS Bedrock을 활용한 Next.js 챗봇 애플리케이션

## 시스템 요구사항

- Node.js 18 이상
- npm 또는 yarn

## 빠른 시작

### Unix/Linux/macOS 사용자

1. 저장소 클론
```bash
git clone https://github.com/[사용자명]/[저장소명].git
cd [저장소명]
```

2. 설치 스크립트 실행 권한 부여 및 실행
```bash
chmod +x setup.sh
./setup.sh
```

### Windows 사용자

1. 저장소 클론
```bash
git clone https://github.com/[사용자명]/[저장소명].git
cd [저장소명]
```

2. 수동으로 다음 명령어들을 순서대로 실행
```bash
# 의존성 설치
npm install

# shadcn/ui 컴포넌트 설치
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add card
npx shadcn@latest add scroll-area

# 프로젝트 빌드
npm run build
```

3. 환경 변수 설정
- `.env.example` 파일을 `.env`로 복사
- `.env` 파일을 열어 필요한 값들을 입력

## 환경 변수 설정

`.env` 파일에 다음 값들을 설정해야 합니다:

- `AWS_ACCESS_KEY_ID`: AWS 액세스 키
- `AWS_SECRET_ACCESS_KEY`: AWS 시크릿 키
- `AWS_REGION`: AWS 리전
- `AGENT_ID`: Bedrock Agent ID
- `AGENT_ALIAS_ID`: Bedrock Agent Alias ID

## 개발 서버 실행

```bash
npm run dev
```

## 기술 스택

- Next.js 14
- TypeScript
- Tailwind CSS
- shadcn/ui
- AWS Bedrock

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
