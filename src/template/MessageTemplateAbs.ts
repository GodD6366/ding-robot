export default class MessageTemplateAbs {
    protected msgtype: String;
    protected canAt: boolean = false;
    protected isAtAll: boolean = false;
    protected atMobiles: Set<String> = new Set();

    constructor() {
        if (new.target === MessageTemplateAbs) {
            throw new Error('抽象类不可以实例化');
        }
    }

    protected render(options: Object) {
        console.log(this.canAt);

        return Object.assign(
            {
                msgtype: this.msgtype,
            },
            options,
            this.canAt
                ? {
                      at: {
                          atMobiles: [...this.atMobiles],
                          isAtAll: this.isAtAll,
                      },
                  }
                : {}
        );
    }

    protected get() {
        throw new Error('抽象方法render不可以调用');
    }

    protected toJsonString() {
        throw new Error('抽象方法toJsonString不可以调用');
    }

    atAll() {
        this.isAtAll = true;
        return this;
    }

    at(phone: String): MessageTemplateAbs;
    at(phones: String[]): MessageTemplateAbs;
    at(phones: String[] | String): MessageTemplateAbs {
        if (phones instanceof Array) {
            phones.map(phone => {
                this.atMobiles.add(phone);
            });
        } else {
            this.atMobiles.add(phones);
        }
        return this;
    }
}
