import React, { Component } from 'react'

export default class ListComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoItems: '',
      items: []
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      items: [...this.state.items, this.state.todoItems],
      todoItems: ''
    })
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      todoItems: e.target.value
    })
    console.log(this.state.todoItems)
  }
  render() {
    return (
      <div className="mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <form onSubmit={this.handleSubmit}>
              <div className="form-floating">
                <input id="list" className="form-control" value={this.state.todoItems} onChange={this.handleChange} />
                <label htmlFor="list">Todo List</label>
              </div>
              <div className="col-lg-2">
                <button className="btn btn-success">Tambah</button>
              </div>
            </form>
          </div>
          <div className="col-lg-6">
            <h5 className="text-center">Daftar List</h5>
            <ol className="list-group list-group-numbered">
              {this.state.items.map((item, index) =>
                <li className="list-group-item" key={index}>{item}</li>
              )}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}
