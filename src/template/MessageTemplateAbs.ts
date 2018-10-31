export default class MessageTemplateAbs {
    msgtype: String;

    constructor() {
        if (new.target === MessageTemplateAbs) {
            throw new Error('抽象类不可以实例化');
        }
    }

    protected render() {
        throw new Error('抽象方法render不可以调用');
    }

    protected get() {
        throw new Error('抽象方法render不可以调用');
    }
}
