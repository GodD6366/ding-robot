const request = require('request');
import MessageTemplateAbs from './template/MessageTemplateAbs';

const TEST_HOOK =
    'https://oapi.dingtalk.com/robot/send?access_token=9dfd189bf5483df82abac5f9cd191a855731e4dae201b9ddffc7fbc2bb32506a'; // 测试机器人

class DingRobot {
    private robotHookUrl: String;

    constructor(hookUrl: String = TEST_HOOK) {
        this.robotHookUrl = hookUrl;
    }

    /**
     * 发送钉钉机器人通知
     */
    notify<A extends MessageTemplateAbs>(message: A) {
        let body = message.get();
        // console.log(body);
        return new Promise((resolve, reject) => {
            request(
                {
                    url: this.robotHookUrl,
                    method: 'POST',
                    json: true,
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                    },
                    body,
                },
                (error: any, response: any, body: any) => {
                    let { errcode, errmsg } = body;
                    if (errcode) {
                        reject({
                            errcode,
                            errmsg,
                        });
                    } else {
                        resolve();
                    }
                }
            );
        });
    }
}

export default DingRobot;
