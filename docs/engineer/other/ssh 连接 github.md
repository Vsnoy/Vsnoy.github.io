# ssh 连接 github

## 设置 git 的 user name 和 email

如果是第一次使用，需要配置下。所填名字和邮箱与 Github 账号相对应。

```
git config --global user.name "<Your Name>"
git config --global user.email "<Your Email>"
```

## 检查是否存在 ssh key

```
ls ~/.ssh
```

## 生成 ssh key

若无 ssh key，则生成。

```
ssh-keygen -t rsa -C "<Your Email>"
```

## 查看 ssh key

```
ll -d ~/.ssh

cat ~/.ssh/id_rsa.pub
```

## 获取 ssh key

将 ssh key 复制到剪贴板。

```
clip < ~/.ssh/id_rsa.pub
```

## github 添加 ssh key

Settings -> SSH and GPG keys -> New SSH key

取个名字，将之前拷贝的秘钥复制进去，添加就好啦。

## 测试 ssh key 是否配置成功

```
ssh -T git@github.com
```

## 参考

- [Github 配置 SSH Key](https://shangzg.top/2022-02-24-github%E9%85%8D%E7%BD%AEssh-key/)
- [使用 SSH 连接到 Github](https://sogrey.top/article/%E4%BD%BF%E7%94%A8SSH%E8%BF%9E%E6%8E%A5%E5%88%B0GitHub/)
