declare class Markdown extends MessageTemplateAbs {
    constructor();
    setTitle<T extends MessageTemplateAbs>(title: String): T;
    addBoldText<T extends MessageTemplateAbs>(text: String): T;
    addItalicText<T extends MessageTemplateAbs>(text: String): T;
    addLinkText<T extends MessageTemplateAbs>(text: String, href: String): T;
    addImageText<T extends MessageTemplateAbs>(imageUrl: String, desc: String): T;
    addHeaderText<T extends MessageTemplateAbs>(type: number, text: String): T;
    addSeparator<T extends MessageTemplateAbs>(): T;
    addReferenceText<T extends MessageTemplateAbs>(text: String): T;
    addOrderListText<T extends MessageTemplateAbs>(list: String[]): T;
    addUnorderListText<T extends MessageTemplateAbs>(list: String[]): T;
}
