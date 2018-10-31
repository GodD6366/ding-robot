import MessageTemplateAbs from './MessageTemplateAbs';

export default class Text extends MessageTemplateAbs {
    readonly msgtype = 'text';
    content: String;

    constructor(content: String) {
        super();
        this.content = content;
    }

    render() {}

    get() {
        return {
            msgtype: this.msgtype,
            text: {
                content: this.content,
            },
            at: {},
        };
    }
}
