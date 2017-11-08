import React from 'react'
import * as APIaccess from '../api-access_backend'
import { Link } from 'react-router-dom'

export default class Quest2 extends React.Component {
    costructor() {
        this.state = {
            result: null
        }
    }

    getTimePeriod(e) {
        let _this = this
        let { fromDate, toDate, timePeriod } = this.refs
        APIaccess.getTimePeriods(fromDate.value, toDate.value, timePeriod.value)
            .then((result) => {
                _this.setState({
                    result: 'Result: ' + (result.length == 0 ? 'No Time Periods' : result.join(', '))
                })
            })
            .catch((err) => {
                _this.setState({
                    result: 'A error occured while coectig to server. ' + err
                })
            })
    }

    render() {
        let result = this.state && this.state.result ? this.state.result.toString() : ''
        return (
            <div className="text-center">
                <h1>Quest2</h1>
                <p>Make a generic static method getTimePeriods(java.sql.Date fromDate, java.sql.Date toDate, int timePeriod) which works for years and months apart from quarters.</p>
                <p>e.g.  List{'<'}String{'>'} timePeriods = TimePeriod.getTimePeriods(java.sql.Date fromDate, java.sql.Date toDate, TimePeriod.QUARTER)</p>
                <p>TimePeriod.MONTH=1<br />TimePeriod.QUARTER = 2<br />TimePeriod.YEAR = 3</p>
                <p>In the getTimePeriod(fromDate, toDate, timePeriod) method, you will achieve the same result as in Question 1 when timePeriod = TimePeriod.QUARTER.</p>
                {/* <p><strong>Test Case 1: </strong><br />Input:  fromDate = 01 Mar 2014, toDate = 01 April 2015 and timePeriod = TimePeriod.YEAR<br />Output: 2014, 2015.</p>
                <p><strong>Test Case 2: </strong><br />Input: fromDate = 01 Mar 2014, toDate = 07 Mar 2014 and timePeriod = TimePeriod.DAY<br />Output:  01 Mar, 02 Mar, 03 Mar, 04 Mar, 05 Mar, 06 Mar, 07 Mar.</p> */}


                <div className="row">
                    <div className="col-sm-4 col-sm-offset-4">
                        <form className="form-group" style={{ "marginTop": "50px", border: "1px solid grey", padding: "20px" }}>
                            <label>From Date: </label>
                            <input type='text' ref="fromDate" /><br />
                            <label>To Date: </label>
                            <input type='text' ref="toDate" /><br />
                            <label>Time Period: </label>
                            <select ref="timePeriod">
                                <option value="1">Month</option>
                                <option value="2">Quarter</option>
                                <option value="3">Year</option>
                                <option value="4">Day</option>
                            </select>
                            <br />
                            <button type="button" className="btn btn-info" onClick={this.getTimePeriod.bind(this)}>Submit</button>
                        </form>
                    </div>
                </div>

                <div id="result">
                    {result}
                </div>

                <br />
                <Link to="/">Home</Link>
            </div>
        )
    }
}