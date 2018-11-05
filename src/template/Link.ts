import MessageTemplateAbs from './MessageTemplateAbs';

type linkType = {
    title: String; // 消息标题
    text: String; // 消息内容。如果太长只会部分展示
    messageUrl: String; // 点击消息跳转的URL
    picUrl: String; // 图片URL
};

export default class Link extends MessageTemplateAbs {
    protected readonly msgtype = 'link';
    protected link: linkType = {
        title: '',
        text: '',
        messageUrl: '',
        picUrl: '',
    };

    constructor() {
        super();
    }

    /**
     * 设置消息标题
     * @param title 消息标题
     */
    setTitle(title: String) {
        this.link.title = title;
    }

    /**
     * 设置点击消息跳转的URL
     * @param messageUrl 点击消息跳转的URL
     */
    setMessageUrl(messageUrl: String) {
        this.link.messageUrl = messageUrl;
    }

    /**
     * 设置消息内容
     * @param text 消息内容
     */
    setText(text: String) {
        this.link.text = text;
    }

    /**
     * 设置图片URL
     * @param picUrl 图片URL
     */
    setPicUrl(picUrl: String) {
        this.link.picUrl = picUrl;
    }

    get() {
        return this.render({
            link: this.link,
        });
    }
}
