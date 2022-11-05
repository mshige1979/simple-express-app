# FROM
FROM node:12.22

# 環境変数
ENV TZ Asia/Tokyo
ENV LANG C.UTF-8

# 開発用パッケージインストール
RUN apt-get update -qq && \
    apt-get clean && \
    rm -rf /var/cache/apt

# 作業ディレクトリ
WORKDIR /app

# コピー
COPY . /app

# npm install
RUN cd /app && \
    npm install && \
    npm run build

# ポート
EXPOSE 5000

# パラメータ未指定時の起動コマンド
CMD bash -c "node /app/dist/index.js"
