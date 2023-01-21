# Deno api

Install Deno o Arch linux
```
sudo pacman -Syu deno
```

Run deno
```bash
deno run -A main.ts
```

Docker
```bash
docker run -it -p 8000:8000 -v $PWD:/app denoland/deno:1.29.4 run -A /app/main.ts
```

Docker Compose
```bash
docker-compose up -d
```
