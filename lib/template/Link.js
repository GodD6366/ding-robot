"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MessageTemplateAbs_1 = require("./MessageTemplateAbs");
class Link extends MessageTemplateAbs_1.default {
    constructor() {
        super();
        this.msgtype = 'link';
        this.link = {
            title: '',
            text: '',
            messageUrl: '',
            picUrl: '',
        };
    }
    setTitle(title) {
        this.link.title = title;
    }
    setMessageUrl(messageUrl) {
        this.link.messageUrl = messageUrl;
    }
    setText(text) {
        this.link.text = text;
    }
    setPicUrl(picUrl) {
        this.link.picUrl = picUrl;
    }
    get() {
        return this.render({
            link: this.link,
        });
    }
}
exports.default = Link;
//# sourceMappingURL=Link.js.map