import Markdown from '../src/template/markdown';
import DingRobot from '../src/DingRobot';

const md = new Markdown();
md.setTitle('小程序体验版发布通知')
    .addHeaderText(3, '小程序体验版已发布,请安排测试')
    .addHeaderText(4, `版本号: V1.1.1`)
    .addHeaderText(4, `版本描述`)
    .addSeparator()
    .addReferenceText('请在<<小程序开发助手>>中使用新版')
    .addImageText(
        'https://developers.weixin.qq.com/miniprogram/dev/image/devtools2/mydev/mydev-qrcode.jpg',
        'qrocde'
    );

let ding = new DingRobot();
ding.notify(md);
