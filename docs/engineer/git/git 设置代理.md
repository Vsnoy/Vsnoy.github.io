# git 设置代理

## Win

```
// 设置代理
git config --global http.proxy socks5://127.0.0.1:7890
git config --global https.proxy socks5://127.0.0.1:7890

// 取消代理
git config --global --unset http.proxy
git config --global --unset https.proxy
```

## Mac

```
// 设置代理
export http_proxy=http://127.0.0.1:7890 
export https_proxy=http://127.0.0.1:7890

// 取消代理
unset http_proxy 
unset https_proxy
```
