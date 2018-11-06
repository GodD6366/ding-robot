import MessageTemplateAbs from './MessageTemplateAbs';
export default class Text extends MessageTemplateAbs {
    protected readonly msgtype = "text";
    protected readonly canAt: boolean;
    protected content: String;
    constructor(content?: String);
    setContent(content: String): void;
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
