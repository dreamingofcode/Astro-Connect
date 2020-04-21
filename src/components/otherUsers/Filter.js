import * as React from 'react'
import classnames from 'classnames'

import styles from './styles.module.css'

class Filter extends React.Component {
  render() {
    const containerClasses = classnames('container', 'mb-1', styles.container)
    const formClasses = classnames('form-horizontal', styles.form)

    return (
      <div className={containerClasses}>
        <form className={formClasses} noValidate>
          <h1 className="mb-1">Refine your results</h1>
          <div>
            <div >
              <div >
                <div >
                <div className="col-9 col-sm-12">
                  <select className="form-select" id="postcode">
                    <option value="">Choose...</option>
                  </select>
                </div>
                </div>
                <div className="col-9 col-sm-12">
                  <input
                    className="form-input"
                    min="0"
                    max="10000000"
                    type="number"
                    id="price-from"
                    placeholder="£1,000,000"
                  />
                </div>
              </div>
            </div>
            <div className="column col-4 col-xs-12">
              <div className="form-group">
                <div className="col-3 col-sm-12">
                  <label className="form-label" htmlFor="postcode">
                    Postcode
                  </label>
                </div>
                <div className="col-9 col-sm-12">
                  <select className="form-select" id="postcode">
                    <option value="">Choose...</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="column col-4 col-xs-12">
              <div className="form-group">
                <div className="col-3 col-sm-12">
                  <label className="form-label" htmlFor="sortorder">
                    Sort Order
                  </label>
                </div>
                <div className="col-9 col-sm-12">
                  <select className="form-select" id="sortorder">
                    <option value="">Choose...</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Filter