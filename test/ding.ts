import DingRobot from '../src';

const ding: DingRobot = new DingRobot();

ding.text('test');
ding.md({
    title: 'jk',
    text: 'hj',
});
