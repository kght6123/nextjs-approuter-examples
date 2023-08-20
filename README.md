# Next.js の AppRouter を使ったサンプル集

公式の AppRouter のドキュメントを見ながら、色々とサンプルを作った時のリポジトリです。

DB は dgraph（Dgraph）、認証は NextAuth、フロント周りは SWR や Tailwind CSS、DaisyUI などを使っています。

## 使い方

```sh
npm install
npm run dev
```

Dgraph を起動する

```sh
mkdir .dgraph
docker run --name dgraph -d -p "8080:8080" -p "9080:9080" -v $(pwd)/.dgraph:/dgraph dgraph/standalone:latest
docker run --name ratel  -d -p "8000:8000"  dgraph/ratel:latest
```
