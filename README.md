🚀 Strapi + Docker Commands
📦 Install Strapi dependencies
npm install

🛠 Run Strapi in development
npm run develop

🏗 Build Strapi admin
npm run build

▶️ Start Strapi in production (local)
npm run start

🐳 Docker Commands
1️⃣ Create environment file
cp .env.example .env

2️⃣ Build + start Docker containers
docker compose up -d --build

3️⃣ Scale Strapi containers (load balanced)
docker compose up -d --scale strapi=3

4️⃣ Stop all containers
docker compose down