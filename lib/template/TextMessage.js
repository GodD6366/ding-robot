"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MessageTemplateAbs_1 = require("./MessageTemplateAbs");
class Text extends MessageTemplateAbs_1.default {
    constructor(content) {
        super();
        this.msgtype = 'text';
        this.canAt = true;
        content && this.setContent(content);
    }
    setContent(content) {
        this.content = content;
    }
    get() {
        return this.render({
            text: {
                content: this.content,
            },
        });
    }
}
exports.default = Text;
//# sourceMappingURL=TextMessage.js.map