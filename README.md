# Account login

一個使用 Express + node.js + MongoDB 建立的基礎的登入功能測試

### 功能描述 (features)：

- 在登入頁面，使用者輸入正確 email 和對應 password 將登入歡迎頁面
- 在登入頁面，若使用者輸入錯誤，將顯示錯誤訊息

### 專案畫面

![login image](https://github.com/Goater1095/basic-user-authentication/blob/master/images/login.PNG)

![home image](https://github.com/Goater1095/basic-user-authentication/blob/master/images/home.PNG)

## 測試帳號

|     |               Email |         Password |
| --: | ------------------: | ---------------: |
|   1 |      tony@stark.com |       iamironman |
|   2 | captain@hotmail.com | icandothisallday |
|   3 |    peter@parker.com |         enajyram |
|   4 |   natasha@gamil.com |     \*parol#@\$! |
|   5 |     nick@shield.com |         password |

### 安裝

1.開啟終端機(Terminal)cd 到存放專案本機位置並執行:

```
git clone https://github.com/Goater1095/basic-user-authentication.git
```

2.初始

```
cd basic-user-authentication  //切至專案資料夾
```

```
npm install  //安裝套件
```

3.開啟程式

```
npm run dev  //執行程式
```

終端顯示 This Server start on http://localhost:3000
即啟動完成，請至 http://localhost:3000 開始使用程式

### 使用工具

- Visual Studio Code - 開發環境
- Node.js - 執行環境
- Express - 應用程式架構
- Express-Handlebars - 模板引擎
