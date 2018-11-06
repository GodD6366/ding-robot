"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MessageTemplateAbs {
    constructor() {
        this.canAt = false;
        this.isAtAll = false;
        this.atMobiles = new Set();
        if (new.target === MessageTemplateAbs) {
            throw new Error('抽象类不可以实例化');
        }
    }
    render(options) {
        return Object.assign({
            msgtype: this.msgtype,
        }, options, this.canAt
            ? {
                at: {
                    atMobiles: Array.from(this.atMobiles),
                    isAtAll: this.isAtAll,
                },
            }
            : {});
    }
    get() {
        throw new Error('抽象方法render不可以调用');
    }
    toJsonString() {
        throw new Error('抽象方法toJsonString不可以调用');
    }
    atAll() {
        this.isAtAll = true;
        return this;
    }
    at(phones) {
        if (phones instanceof Array) {
            phones.map(phone => {
                this.atMobiles.add(phone);
            });
        }
        else {
            this.atMobiles.add(phones);
        }
        return this;
    }
}
exports.default = MessageTemplateAbs;
//# sourceMappingURL=MessageTemplateAbs.js.map