import Text from '../src/template/Text';

const text = new Text();
text.setContent('小程序体验版发布通知');

console.log(text.get());

const text2 = new Text();
text2.setContent('小程序体验版发布通知');
text2.atAll();
text2.at('15896267519');
console.log(text2.get());
