import React, {useState} from 'react'

export default function FunctionComponent() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [name, setName] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
    setName(`${firstname} ${lastname}`)
    setFirstname('')
    setLastname('')
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
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
                  <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} name="firstName" id="firstName" className="form-control" />
                </div>

                <div className="mb-4">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} name="lastName" id="firstName" className="form-control" />
                </div>
                <button className="btn btn-info mx-1 text-white" type="submit">
                  Show
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
