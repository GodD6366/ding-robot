import MessageTemplateAbs from './template/MessageTemplateAbs';
declare class DingRobot {
    private robotHookUrl;
    constructor(token: String);
    notify<A extends MessageTemplateAbs>(message: A): Promise<{}>;
}
export default DingRobot;
