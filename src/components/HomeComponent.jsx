import React, { Component } from 'react'

export default class HomeComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      name: ''
    }
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  submitHandler = (e) => {
    e.preventDefault()
    this.setState({
      name: `${this.state.firstName} ${this.state.lastName}`
    })
    setTimeout(() => {
      alert(this.state.name)
    }, 0)
  }

  resetHandler = (e) => {
    e.preventDefault()
    this.setState({
      firstName: '',
      lastName: '',
      name: ''
    })
  }

  render() {
    const { name } = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="text-primary">Form</h3>
                </div>
                <div className="card-body">
                  <div className="mb-4">
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <input type="text" value={this.state.firstName} onChange={this.changeHandler} name="firstName" id="firstName" className="form-control" />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input type="text" value={this.state.lastName} onChange={this.changeHandler} name="lastName" id="firstName" className="form-control" />
                  </div>
                  <button className="btn btn-info mx-1 text-white" type="submit">
                    Show
                  </button>
                  <button type="submit" onClick={this.resetHandler} className="btn btn-danger">
                    Reset
                  </button>
                </div>
                <div className="card-footer">Halo {name ? name : '...'}</div>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
