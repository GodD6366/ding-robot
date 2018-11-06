const request = require('request');
import MessageTemplateAbs from './template/MessageTemplateAbs';

class DingRobot {
    private robotHookUrl: String;

    constructor(token: String) {
        this.robotHookUrl = `https://oapi.dingtalk.com/robot/send?access_token=${token}`;
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
