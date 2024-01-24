# nia - captcha

这是 nia - api 的路由插件

具体使用方法参见 https://github.com/alongw/nia-captcha

### 配置文件

先修改配置文件，配置文件位于 `/data/nia-captcha/config.yaml` 若没有则创建（可以直接调用一次接口自动创建）

默认 config.yaml

```yaml
key: 114514
```

修改 `key` 的值，以便防止接口被滥用，威胁服务器 ip 安全

### 使用方式

POST 请求 `/nia-captcha/check`

请求体（可选 `urlencode` 或 `json` ）

```json
{
  "key": String,
  "ticker": String,
  "randstr": String
}
```

| 字段名  | 类型   | 必填 | 描述                                                     |
| ------- | ------ | ---- | -------------------------------------------------------- |
| key     | string | 是   | 需与前面配置文件中设置的 key 相同，否则返回 403 鉴权失败 |
| ticker  | string | 是   | 验证码验证成功的票据                                     |
| randstr | string | 是   | 本次验证码验证的随机串                                   |

具体使用方法参见 https://github.com/alongw/nia-captcha
