import MessageTemplateAbs from './MessageTemplateAbs';

export default class Text extends MessageTemplateAbs {
    protected readonly msgtype = 'text';
    protected readonly canAt: boolean = true;
    protected content: String;

    constructor(content?: String) {
        super();
        content && this.setContent(content);
    }

    /**
     * 设置文本内容
     * @param content 内容
     */
    setContent(content: String) {
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
