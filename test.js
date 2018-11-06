const { DingRobot, Markdown } = require('./lib/index');

let md = new Markdown();
md.setTitle('SDKtest')
    .addHeaderText(4, `版本号: V1.1.1`)
    .addHeaderText(4, `版本描述`)
    .addSeparator()
    .addReferenceText('请在<<小程序开发助手>>中使用新版')
    .addImageText(
        'https://developers.weixin.qq.com/miniprogram/dev/image/devtools2/mydev/mydev-qrcode.jpg',
        'qrocde'
    );

console.log(md.get());

let ding = new DingRobot();
ding.notify(md)
    .then(() => {
        console.log(`消息推送成功`);
    })
    .catch(({ errcode, errmsg }) => {
        console.log(`errcode: ${errcode}`);
        console.log(`errmsg: ${errmsg}`);
    });
