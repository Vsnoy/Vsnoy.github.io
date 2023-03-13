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
  - `SessionStorage` 仅在当前页面下有效，关闭当前页面或浏览器后被清除
- 存储大小
  - `Cookie` 4K 左右
  - `LocalStorage` 5M 左右
  - `SessionStorage` 5M 左右
- 服务端通信
  - `Cookie` 参与服务端通信
  - `LocalStorage` 不参与服务端通信
  - `SessionStorage` 不参与服务端通信

## 位运算

- 按位与（&）：一假则假
- 按位或（|）：一真则真
- 按位非（~）：负值减一
- 按位异或（^）：相同为零，不同为一
- 左移（<<）
- 有符号右移（>>）
- 无符号右移（>>>）

```
~x = -(x+1)
~0 = -1
```

## 原码、反码和补码

- 第一位为符号位
- 正数的原码、反码及补码相同
- 负数的原码除符号位外按位取反得反码，反码加一得补码

```
以 4 为例

原码：0000 0100
反码：0000 0100
补码：0000 0100
```

```
以 -4 为例

原码：1000 0100
反码：1111 1011
补码：1111 1100
```

## 并发 & 并行

- 并发：两个或多个任务在同一时间段进行。
- 并行：两个或多个任务在同一时间点进行。

:::tip 举个栗子

- 吃饭吃到一半，电话来了，吃完后才去接，说明既不支持并发也不支持并行。
- 吃饭吃到一半，电话来了，停下来接电话，接完后继续吃饭，说明支持并发。
- 吃饭吃到一半，电话来了，一边接电话一边吃饭，说明支持并行。
:::