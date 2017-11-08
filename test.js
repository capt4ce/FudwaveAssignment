import Fundwave from './Fundwave'

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the fromDate: ', (fromDate) => {
    rl.question('Enter the toDate: ', (toDate) => {
        var result = (+fromDate) + (+toDate);
        let f = new Fundwave()
        console.log('Question 1: getQuarterNames()')
        console.log(f.getQuarterNames(fromDate, toDate).toString())
        console.log()
        console.log('Question 2: getTimePeriods()')
        console.log(Fundwave.getTimePeriods(fromDate, toDate, 1).toString())
        console.log()
        console.log(Fundwave.getTimePeriods(fromDate, toDate, 2).toString())
        console.log()
        console.log(Fundwave.getTimePeriods(fromDate, toDate, 3).toString())
        console.log()
        console.log(Fundwave.getTimePeriods('2013-05-01', '2013-05-06', 4).toString())


        rl.close();
    });
});