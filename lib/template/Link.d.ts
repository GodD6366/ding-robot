import MessageTemplateAbs from './MessageTemplateAbs';
declare type linkType = {
    title: String;
    text: String;
    messageUrl: String;
    picUrl: String;
};
export default class Link extends MessageTemplateAbs {
    protected readonly msgtype = "link";
    protected link: linkType;
    constructor();
    setTitle(title: String): void;
    setMessageUrl(messageUrl: String): void;
    setText(text: String): void;
    setPicUrl(picUrl: String): void;
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
export {};
