"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MessageTemplateAbs_1 = require("./MessageTemplateAbs");
class Markdown extends MessageTemplateAbs_1.default {
    constructor() {
        super();
        this.msgtype = 'markdown';
        this.canAt = true;
        this.items = [];
    }
    setTitle(title) {
        this.title = title;
        return this;
    }
    add(text) {
        if (Array.isArray(text)) {
            this.items.concat(text);
        }
        else {
            this.items.push(text);
        }
    }
    addBoldText(text) {
        this.items.push(`**${text}**`);
        return this;
    }
    addItalicText(text) {
        this.items.push(`*${text}*`);
        return this;
    }
    addLinkText(text, href) {
        this.items.push(`[${text}](${href})`);
        return this;
    }
    addImageText(imageUrl, desc = 'image') {
        this.items.push(`![${desc}](${imageUrl})`);
        return this;
    }
    addHeaderText(type, text) {
        type = Math.max(1, Math.min(6, type));
        this.items.push(`${'#'.repeat(type)} ${text}`);
        return this;
    }
    addSeparator() {
        this.items.push(`---`);
        return this;
    }
    addReferenceText(text) {
        this.items.push(`> ${text}`);
        return this;
    }
    addOrderListText(list) {
        list.map((str, idx) => {
            this.items.push(`${idx}. ${str}`);
        });
        return this;
    }
    addUnorderListText(list) {
        list.map((str, idx) => {
            this.items.push(`- ${str}`);
        });
        return this;
    }
    get() {
        return this.render({
            markdown: {
                title: this.title,
                text: this.items.join('\n'),
            },
        });
    }
}
exports.default = Markdown;
//# sourceMappingURL=Markdown.js.map