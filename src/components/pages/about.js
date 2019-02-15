import React from 'react'

export default (props) => {
  return (
    <div>
      <h1 className="display-4">{props.match.params.message}</h1>
      <p>simple app to manage contacts</p>
      <p className="text-secondary">Version 1.0.0</p>
    </div>
  )
}
