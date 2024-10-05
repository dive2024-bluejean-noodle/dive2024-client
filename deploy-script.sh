#!/bin/bash

# 명령이 실패하면 스크립트를 중단하게 설정
set -e

# EC2 서버 정보
PEM_FILE="dive2024-ec2.pem"
USER="ubuntu"
HOST="ec2-3-35-236-66.ap-northeast-2.compute.amazonaws.com"
PORT="22"
DEST_PATH="/home/$USER/"

npm run build

# 파일 복사
scp -P $PORT -i $PEM_FILE -r public $USER@$HOST:$DEST_PATH
scp -P $PORT -i $PEM_FILE -r .next/standalone/* $USER@$HOST:$DEST_PATH
scp -P $PORT -i $PEM_FILE -r .next/standalone/.next $USER@$HOST:$DEST_PATH
scp -P $PORT -i $PEM_FILE -r .next/static $USER@$HOST:${DEST_PATH}.next/
scp -P $PORT -i $PEM_FILE .env $USER@$HOST:$DEST_PATH

ssh -p $PORT -i $PEM_FILE $HOST << 'EOF'
   cd /home/ubuntu/
   npm i --omit=dev --ignore-scripts
   pm2 restart server.js
EOF