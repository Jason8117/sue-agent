#!/bin/bash

# 색상 정의
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 함수 정의
print_step() {
    echo -e "${BLUE}[SETUP]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

# Node.js 버전 확인
print_step "Checking Node.js version..."
if ! command -v node &> /dev/null; then
    echo "Node.js is not installed. Please install Node.js 18 or later"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "Node.js version 18 or later is required"
    exit 1
fi
print_success "Node.js version check passed"

# 환경 변수 파일 생성
print_step "Creating environment variables file..."
if [ ! -f .env ]; then
    cp .env.example .env
    print_success "Created .env file from .env.example"
    echo "Please update the .env file with your AWS credentials and other settings"
else
    print_success ".env file already exists"
fi

# 의존성 패키지 설치
print_step "Installing dependencies..."
npm install
print_success "Dependencies installed"

# shadcn/ui 컴포넌트 설치
print_step "Installing shadcn/ui components..."
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add card
npx shadcn@latest add scroll-area
print_success "shadcn/ui components installed"

# 프로젝트 빌드
print_step "Building project..."
npm run build
print_success "Project built successfully"

echo -e "\n${GREEN}Setup completed successfully!${NC}"
echo -e "To start the development server, run: ${BLUE}npm run dev${NC}" 