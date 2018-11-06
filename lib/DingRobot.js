"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require('request');
class DingRobot {
    constructor(token) {
        this.robotHookUrl = `https://oapi.dingtalk.com/robot/send?access_token=${token}`;
    }
    notify(message) {
        let body = message.get();
        return new Promise((resolve, reject) => {
            request({
                url: this.robotHookUrl,
                method: 'POST',
                json: true,
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                },
                body,
            }, (error, response, body) => {
                let { errcode, errmsg } = body;
                if (errcode) {
                    reject({
                        errcode,
                        errmsg,
                    });
                }
                else {
                    resolve();
                }
            });
        });
    }
}
exports.default = DingRobot;
//# sourceMappingURL=DingRobot.js.map