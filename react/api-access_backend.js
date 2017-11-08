import axios from 'axios'

// const server = 'http://localhost:3000/'
const server = 'https://fundwave-assignment.herokuapp.com/'

export const getQuarterNames = (fromDate, toDate) => {
    return new Promise((resolve, reject) => {
        console.log(server + 'getQuarterNames')
        axios.post(server + 'getQuarterNames', {
            fromDate: fromDate,
            toDate: toDate
        })
            .then((response) => {
                // console.log(response.data.data)
                if (response.data.status == 200)
                    resolve(response.data.data)
                else
                    reject();
            })
    })
}

export const getTimePeriods = (fromDate, toDate, timePeriod) => {
    return new Promise((resolve, reject) => {
        console.log(server + 'getTimePeriods')
        axios.get(server + 'getTimePeriods', {
            params: {
                fromDate: fromDate,
                toDate: toDate,
                timePeriod: timePeriod
            }
        })
            .then((response) => {
                // console.log(response.data.data)
                if (response.data.status == 200)
                    resolve(response.data.data)
                else
                    reject();
            })
    })
}