declare class MessageTemplateAbs {
    constructor(); //构造函数
    get(): Object;
    atAll<T extends MessageTemplateAbs>(): T;
    at<T extends MessageTemplateAbs>(phone: String): T;
    at<T extends MessageTemplateAbs>(phones: String[]): T;
}
