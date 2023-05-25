# Vue2 + todolist 待辦事項 練習題

### 建立專案

```
vue create vue2-todolist
```

### 安裝套件

```
vue create vue2-totolist
// 隨機產生uuid輕量版
npm install nanoid
// 安裝bootstrap 相關套件
npm install @popperjs/core
npm install bootstrap
```

### 設定 bootstrap 相關

```
// 修改 main.js ，在 new Vue 前插入
import "bootstrap/dist/css/bootstrap.min.css"

// 在 new Vue 後插入
import "bootstrap/dist/js/bootstrap.js"
```

### 啟動開發測試

```
npm run serve
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```
