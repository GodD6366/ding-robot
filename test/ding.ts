import DingRobot from '../src';
import Markdown from '../src/template/markdown';

// const ding: DingRobot = new DingRobot();

const md = new Markdown();
md.setTitle('测试')
    .addHeaderText(1, '标题')
    .addBoldText('我加粗了')
    .addImageText('hgsfadjshdjkashd')
    .addLinkText('dasdas', 'wwwwwwwww')
    .addOrderListText(['1111', '2222', '3333']);

console.log(md.get());
