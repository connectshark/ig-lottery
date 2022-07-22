# IG留言抽抽


[ig各貼文媒體查詢](https://developers.facebook.com/docs/instagram-api/reference/ig-media/)

## 事前準備條件

- IG商業/創作者帳號
- FB粉絲專頁

### IG商業/創作者帳號
IG的帳號不是一般人都能使用此API查詢
必須先擁有一個IG商業/創作者帳號,也就是此帳號要是公開且為某個類型才可以使用API查詢貼文留言

- [如何設定 IG 商業帳號](https://help.instagram.com/502981923235522)
- [如何設定 IG 創作者帳號](https://help.instagram.com/1158274571010880)

### FB粉絲專頁
IG商業/創作者帳號必須連動一個FB粉絲專頁才能使用查詢貼文等等功能

## 查詢貼文留言流程

- 取得FB授權登入
- code換token
- 取得粉專ID
- 查詢粉專連結的IG帳號ID
- 查詢IG媒體內容

### 必要資訊

- APP_VERSION
- APP_CLIENT_ID
- APP_REDIRECT_URI
- APP_CLIENT_SECRET

### 取得FB授權登入
使用Oauth2授權登入的方式取得帳號的token才能進行接下來的查詢

先請使用者前往連結授權給app,設定的連結為以下內容
```
https://www.facebook.com/${APP_VERSION}/dialog/oauth?client_id=${APP_CLIENT_ID}&redirect_uri=${APP_REDIRECT_URI}/auth&response_type=code&scope=instagram_basic,pages_show_list,pages_read_engagement
```

若授權成功會返回指定的頁面並且附帶`code`參數

### code換token

接下來需要使用一個後端程式將`code`換成`accesstoken`

後端程式大致如下,因含有`APP_CLIENT_SECRET`敏感資訊所以無法前端完成動作

```
const form = {
  client_id: APP_CLIENT_ID,
  client_secret: APP_CLIENT_SECRET,
  code,
  grant_type: 'authorization_code',
  redirect_uri: APP_REDIRECT_URI
}
fetch('https://api.instagram.com/oauth/access_token',{
  method: 'POST',
  body: form,
})
```

交換完成後就可以拿到可使用的`access_token`繼續接下來步驟

### 取得粉專ID

接下來需要先取得此帳號的基本資訊,包含此FB粉專的`ID`
要用`ID`來取得FB粉專連結的IG帳號
```
fetch('https://graph.facebook.com/{{APP_VERSION}}/me/accounts?access_token={access-token}')
```

回傳的資訊大致如下,記下粉專ID後繼續步驟
```
{
  "data": [
    {
      "access_token": "EAAJjmJ...",
      "category": "App Page",
      "category_list": [
        {
          "id": "2301",
          "name": "App Page"
        }
      ],
      "name": "Metricsaurus",
      "id": "134895793791914",// 粉專ID
      "tasks": [
        "ANALYZE",
        "ADVERTISE",
        "MODERATE",
        "CREATE_CONTENT",
        "MANAGE"
      ]
    }
  ]
}
```

### 查詢粉專連結的IG帳號ID
接下來需要將粉專的ID拿去查詢與此帳號連動的IG帳號ID
```
fetch('https://graph.facebook.com/{{APP_VERSION}}/{{粉專ID}}?fields=instagram_business_account&access_token={{access-token}}')
```

回應資訊大致如下,記下IG帳號ID後可繼續步驟

```
{
  "instagram_business_account": {
    "id": "17841405822304914"  //與此粉專連結的IG帳號ID
  },
  "id": "134895793791914"  //粉專ID
}
```

### 查詢IG媒體內容

到此步驟建議可使用[圖形化介面](https://developers.facebook.com/tools/explorer/),可直接把每篇貼文的巢狀內容都一次查詢

```
fetch('https://graph.facebook.com/{{APP_VERSION}}/{{IG帳號ID}}/media?access_token={{access-token}}&fields={{查詢欄位}}')
```