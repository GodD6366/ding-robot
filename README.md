# Ding-robot

> 目前只支持`markdown`,`link`,`text`这三种类型的消息

## 安装

```sh
npm install dingding-robot
```

## 使用方法

#### 发送 Markdown 类型

```js
const { DingRobot, Markdown, Text, Link } = require('dingding-robot');

let ding = new DingRobot('钉钉机器人token');

let md = new Markdown();
md.setTitle('杭州天气')
    .addHeaderText(4, `杭州天气 `)
    .addSeparator()
    .addReferenceText('9度，@1825718XXXX 西北风1级，空气良89，相对温度73%')
    .addImageText(
        'http://i01.lw.aliimg.com/media/lALPBbCc1ZhJGIvNAkzNBLA_1200_588.png',
        'screenshot'
    )
    .addHeaderText(5, '10点20分发布')
    .addLinkText('天气', 'http://www.thinkpage.cn/');

ding.notify(md)
    .then(() => {
        console.log(`消息推送成功`);
    })
    .catch(({ errcode, errmsg }) => {
        console.log(`errcode: ${errcode}`);
        console.log(`errmsg: ${errmsg}`);
    });
```

#### 发送 Text 类型

```js
const text = new Text();
text.setContent('我就是我,  @1825718XXXX 是不一样的烟火');
text.at('1825718XXXX');

ding.notify(text);
```

#### 发送 Link 类型

```js
const link = new Link();
link.setText(
    '群机器人是钉钉群的高级扩展功能。群机器人可以将第三方服务的信息聚合到群聊中，实现自动化的信息同步。例如：通过聚合GitHub，GitLab等源码管理服务，实现源码更新同步；通过聚合Trello，JIRA等项目协调服务，实现项目信息同步。不仅如此，群机器人支持Webhook协议的自定义接入，支持更多可能性，例如：你可将运维报警提醒通过自定义机器人聚合到钉钉群。'
);
link.setTitle('自定义机器人协议');
link.setMessageUrl(
    'https://open-doc.dingtalk.com/docs/doc.htm?spm=a219a.7629140.0.0.Rqyvqo&treeId=257&articleId=105735&docType=1'
);
link.atAll();

ding.notify(link);
```
