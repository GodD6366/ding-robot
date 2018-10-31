import MessageTemplateAbs from './MessageTemplateAbs';

type C = {
    title: String;
    text: String;
};
export default class Markdown extends MessageTemplateAbs {
    readonly msgtype = 'markdown';
    title: String;
    text: String;

    constructor({ title, text }: C) {
        super();
        this.title = title;
        this.text = text;
    }

    render() {}

    get() {
        return {
            msgtype: this.msgtype,
            markdown: {
                title: this.title,
                text: this.text,
            },
            at: {},
        };
    }
}
