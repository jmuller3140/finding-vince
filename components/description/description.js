import React, { Fragment } from 'react'

const DescriptionComponent = ({ title, description }) => {
  return (
    <Fragment>
      <h1>{title}</h1>
      <div>
        {description}
      </div>
    </Fragment>
  )
}

export default DescriptionComponent