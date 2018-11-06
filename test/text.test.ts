import Text from '../src/template/Text';
import DingRobot from '../src/DingRobot';
import { TOKEN } from './config';

const text = new Text();
text.setContent('小程序体验版发布通知');
text.at('15896267519');

let ding = new DingRobot(TOKEN);
ding.notify(text);
