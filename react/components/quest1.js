import React from 'react'
import * as APIaccess from '../api-access_backend'
import { Link } from 'react-router-dom'

export default class Quest1 extends React.Component {
    costructor() {
        this.state = {
            result: null
        }
    }

    getQuarterName(e) {
        let _this = this
        let { fromDate, toDate } = this.refs
        APIaccess.getQuarterNames(fromDate.value, toDate.value)
            .then((result) => {
                _this.setState({
                    result: 'Result: ' + (result.length == 0 ? 'No Quarter name' : result.join(', '))
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
                <h1>Quest1</h1>
                <p>Please submit a java class which generates quarters names when given from date and to date. </p>
                <p>Input: From and To Date . e.g. "2013-05-01”, “2014-09-02”<br /> Input Format: {'<'}java.sql.Date{'>'}, {'<'}java.sql.Date{'>'}</p>
                <p>Output: List of Quarters. e.g. "Jun13, Sep13, Dec13, Mar14, Jun14, Sep14" etc.<br />Output Format: String[] / List{'<'}String{'>'}, / List{'<'}java.sql.Date{'>'}</p>

                <div className="row">
                    <div className="col-sm-4 col-sm-offset-4">
                        <form className="form-group" style={{ "marginTop": "50px", border: "1px solid grey", padding: "20px" }}>
                            <label>From Date: </label>
                            <input type='text' ref="fromDate" /><br />
                            <label>To Date: </label>
                            <input type='text' ref="toDate" /><br />
                            <button type="button" className="btn btn-info" onClick={this.getQuarterName.bind(this)}>Submit</button>
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