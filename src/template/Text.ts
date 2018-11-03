import MessageTemplateAbs from './MessageTemplateAbs';

export default class Text extends MessageTemplateAbs {
    readonly msgtype = 'text';
    content: String;

    constructor(content: String) {
        super();
        this.content = content;
    }

    get() {
        return this.render({
            text: {
                content: this.content,
            },
            at: {},
        });
    }
}
