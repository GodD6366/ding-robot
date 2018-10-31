import Text from './template/text';
import Markdown from './template/markdown';
import MessageTemplateAbs from './template/MessageTemplateAbs';

const request = require('request');

const TEST_HOOK =
    'https://oapi.dingtalk.com/robot/send?access_token=9dfd189bf5483df82abac5f9cd191a855731e4dae201b9ddffc7fbc2bb32506a'; // 测试机器人

class DingRobot {
    robotHookUrl: String;

    constructor(hookUrl: String = TEST_HOOK) {
        this.robotHookUrl = hookUrl;
    }

    /**
     * 发送钉钉机器人通知
     */
    notify() {}

    text(desc: String) {
        let text = new Text(desc);
        console.log(text.get());
    }

    md(info: { title: String; text: String }) {
        let md = new Markdown(info);
        console.log(md.get());
    }
}

export default DingRobot;
