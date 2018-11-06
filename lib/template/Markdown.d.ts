import MessageTemplateAbs from './MessageTemplateAbs';
export default class Markdown extends MessageTemplateAbs {
    protected readonly msgtype: String;
    protected readonly canAt: boolean;
    protected title: String;
    protected text: String;
    protected items: String[];
    constructor();
    setTitle(title: String): this;
    add(text: String | Array<String>): void;
    addBoldText(text: String): this;
    addItalicText(text: String): this;
    addLinkText(text: String, href: String): this;
    addImageText(imageUrl: String, desc?: String): this;
    addHeaderText(type: number, text: String): this;
    addSeparator(): this;
    addReferenceText(text: String): this;
    addOrderListText(list: String[]): this;
    addUnorderListText(list: String[]): this;
    get(): ({
        msgtype: String;
    } & Object & {
        at: {
            atMobiles: String[];
            isAtAll: boolean;
        };
    }) | ({
        msgtype: String;
    } & Object & {
        at?: undefined;
    });
}
