export default class MessageTemplateAbs {
    msgtype: String;

    constructor() {
        if (new.target === MessageTemplateAbs) {
            throw new Error('抽象类不可以实例化');
        }
    }

    protected render(options: Object) {
        return Object.assign(
            {
                msgtype: this.msgtype,
            },
            options
        );
    }

    protected get() {
        throw new Error('抽象方法render不可以调用');
    }

    protected toJsonString() {
        throw new Error('抽象方法toJsonString不可以调用');
    }
}
