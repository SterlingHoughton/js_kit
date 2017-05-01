import './index.css'
import numeral from 'numeral';

const myMoney = numeral(1000).format('$0,0.00');
debugger;
console.log(`Sucka, you owe me ${myMoney}!`);
