# Other

## Cookie & Session

- 安全性
  - `Cookie` 安全性较低
  - `Session` 安全性较高
- 存储位置
  - `Cookie` 在浏览器端存储
  - `Session` 在服务器端存储
- 存储大小
  - `Cookie` 4K 左右
  - `Session` 无大小限制
- 存储类型
  - `Cookie` 只能存储字符串类型的对象
  - `Session` 可以存储任意类型的对象

## Cookie、LocalStorage 和 SessionStorage

- 有效期
  - `Cookie` 仅在设置的过期时间之前有效
  - `LocalStorage` 永久保存，除非手动清除
  - `SessionStorage` 仅在当前会话下有效，关闭页面或浏览器后被清除
- 存储大小
  - `Cookie` 4K 左右
  - `LocalStorage` 5M 左右
  - `SessionStorage` 5M 左右
- 服务端通信
  - `Cookie` 参与服务端通信
  - `LocalStorage` 不参与服务端通信
  - `SessionStorage` 不参与服务端通信
