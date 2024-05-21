# 如何使用 Docker Compose 啟動服務
## 設定 ngrok.yml
1. 先複製 ngrok.example.yml 一份到 ngrok.yml
2. 設定 ngrok 給的 authToken
   
https://dashboard.ngrok.com/get-started/your-authtoken

```
authtoken: { authToken }
tunnels:
  api:
    addr: demo-api:8080
    proto: http
    schemes:
      - https
version: '2'

```

## 安裝
使用以下命令在後台啟動 Docker Compose 服務：

```sh
docker-compose up -d
```

## 取得 Domain
可以先開啟下列網址查看隨機 domain 是什麼

http://localhost:4040/status
<img width="1297" alt="截圖 2024-05-21 晚上11 37 18" src="https://github.com/Leoyang183/ngrok_demo/assets/9442209/352877dd-2ce7-4215-9215-46c0c54e1b91">


或者可以到官網 endpoint 查看

https://dashboard.ngrok.com/cloud-edge/endpoints

## 確認 API 狀態
最後使用 Ngrok 提供的網址

```
GET https://{domain}/health_check
```
會看到 response ok
