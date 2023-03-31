# ProxyRepo

> proxy rules

# cfw

`Settings` -> `Profiles` -> `Parsers`添加以下配置

```
parsers:
  # ====== 远程配置 ======
  # 删除服务商提供的策略组和规则
  - reg: ^.*$
    remote:
      url: https://raw.githubusercontent.com/zicai-group/ProxyRepo/main/clash/parser/clear.js
      cache: true
  # 建立自己的配置
  - reg: ^.*$
    remote:
      url: https://raw.githubusercontent.com/zicai-group/ProxyRepo/main/clash/parser/parser-Loyalsoldier.yaml
      cache: true
```

# convert url

* 订阅转换地址    [https://nexconvert.com](https://nexconvert.com)
* 远程配置(手机)

```
https://raw.githubusercontent.com/zicai-group/ProxyRepo/main/config/convert-phone.ini
```

* 远程配置(桌面-本地规则)

```
https://raw.githubusercontent.com/zicai-group/ProxyRepo/main/config/convert-cfw.ini
```

* 远程配置(桌面-在线规则)

```
https://raw.githubusercontent.com/zicai-group/ProxyRepo/main/config/convert-cfw-online.ini
```

