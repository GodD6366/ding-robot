declare class DingRobot {
    constructor(hookUrl: string); //构造函数
    notify<T extends MessageTemplateAbs>(message: T): Promise<any>;
}
