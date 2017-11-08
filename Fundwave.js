// import 'moment'
var moment = require('moment')

module.exports = class Fundwave {
    costructor() {
        this.fromDate
        this.toDate
        this.quarterNames = []
    }

    getQuarterNames(fromDate, toDate) {
        // initialization of variables of the class from supplied parametes
        this.fromDate = moment(fromDate)
        this.toDate = moment(toDate)
        this.quarterNames = []

        // validation for date etered by the user
        if (!this.fromDate.isValid() || !this.toDate.isValid())
            return []

        // setting variables for iteration
        // setting them to day 1 to so that month is also included to the conversion to QuarterNames
        let start = this.fromDate.clone().date(1)
        let finish = this.toDate.clone().date(1)

        //setting to start date to treshold quarter
        if (parseInt(start.format('M')) <= 3)
            start.month(2)
        else if (parseInt(start.format('M')) <= 6)
            start.month(5)
        else if (parseInt(start.format('M')) <= 9)
            start.month(8)
        else if (parseInt(start.format('M')) <= 12)
            start.month(11)

        // iterating the month starting from the closest month of the treshold quarter
        while (!start.isAfter(finish)) {
            this.quarterNames.push(start.format('MMMYY'))
            start.add(3, 'M')
        }

        return this.quarterNames
    }

    static getTimePeriods(fromDate, toDate, timePeriod) {
        console.log(fromDate)
        console.log(toDate)
        console.log(timePeriod)
        // declaring costants for TIME PERIOD
        const TimePeriod = {
            MONTH: 1,
            QUARTER: 2,
            YEAR: 3,
            DAY: 4
        }

        // declaring result array
        let result = []

        // variables for iteration
        let start = moment(fromDate)
        let finish = moment(toDate)

        // validation for date etered by the user
        if (!start.isValid() || !finish.isValid())
            return []

        // handling the function based on timePeriod parameter supplied
        switch (timePeriod) {
            case TimePeriod.MONTH:
                while (!start.isAfter(finish)) {
                    result.push(start.format('MMM YY'))             // e.g. JAN 14
                    start.add(1, 'M')
                }
                break
            case TimePeriod.QUARTER:
                let f = new this
                result = f.getQuarterNames(fromDate, toDate)        // calling declared function to handle quarter listing
                break
            case TimePeriod.YEAR:
                while (!start.isAfter(finish)) {
                    result.push(start.format('YYYY'))               // e.g. 2014
                    start.add(1, 'y')
                }
                break
            case TimePeriod.DAY:
                while (!start.isAfter(finish)) {
                    result.push(start.format('DD MMM'))             // e.g. 03 MAR
                    start.add(1, 'd')
                }
                break
            default: return []
        }

        return result
    }
}

