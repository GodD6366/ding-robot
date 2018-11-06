declare class MessageTemplateAbs {
    constructor(); //构造函数
    get(): Object;
    atAll<T extends MessageTemplateAbs>(): T;
    at<T extends MessageTemplateAbs>(phone: String): T;
    at<T extends MessageTemplateAbs>(phones: String[]): T;
}

declare class DingRobot {
    constructor(hookUrl: string); //构造函数
    notify<T extends MessageTemplateAbs>(message: T): Promise<any>;
}

declare class Markdown extends MessageTemplateAbs {
    constructor();
    setTitle<T extends MessageTemplateAbs>(title: String): T;
    add<T extends MessageTemplateAbs>(text: String | Array<String>): T;
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

declare class TextMessage extends MessageTemplateAbs {
    constructor();
    setContent<T extends MessageTemplateAbs>(title: String): T;
}
