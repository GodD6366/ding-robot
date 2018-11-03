import MessageTemplateAbs from './MessageTemplateAbs';

export default class Markdown extends MessageTemplateAbs {
    readonly msgtype = 'markdown';
    title: String;
    text: String;
    private items: String[] = [];

    constructor() {
        super();
    }

    setTitle(title: String) {
        this.title = title;
        return this;
    }

    /**
     * 增加粗体字
     * @param text 文本内容
     */
    addBoldText(text: String) {
        this.items.push(`**${text}**`);
        return this;
    }

    /**
     * 增加斜体字
     * @param text 文本内容
     */
    addItalicText(text: String) {
        this.items.push(`*${text}*`);
        return this;
    }

    /**
     * 增加超链接
     * @param text 文本内容
     * @param href 连接地址
     */
    addLinkText(text: String, href: String) {
        this.items.push(`[${text}](${href})`);
        return this;
    }

    /**
     * 增加超链接
     * @param imageUrl 连接地址
     */
    addImageText(imageUrl: String) {
        this.items.push(`![image](${imageUrl})`);
        return this;
    }

    /**
     * 增加标题内容
     * @param type 标题类型 1-6
     * @param text 标题内容
     */
    addHeaderText(type: number, text: String) {
        type = Math.max(1, Math.min(6, type));
        this.items.push(`${'#'.repeat(type)} ${text}`);
        return this;
    }

    /**
     * 获取引用文本内容
     * @param text 内容
     */
    addReferenceText(text: String) {
        this.items.push(`> ${text}`);
        return this;
    }

    addOrderListText(list: String[]) {
        list.map((str, idx) => {
            this.items.push(`${idx}. ${str}`);
        });
        return this;
    }

    addUnorderListText(list: String[]) {
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
            at: {},
        });
    }
}
