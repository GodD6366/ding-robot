export default class MessageTemplateAbs {
    protected msgtype: String;
    protected canAt: boolean;
    protected isAtAll: boolean;
    protected atMobiles: Set<String>;
    constructor();
    protected render(options: Object): ({
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
    get(): void;
    protected toJsonString(): void;
    atAll(): this;
    at(phone: String): MessageTemplateAbs;
    at(phones: String[]): MessageTemplateAbs;
}
