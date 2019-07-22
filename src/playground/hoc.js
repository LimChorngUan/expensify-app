import React from 'react'

const Info = ({ info }) => (
  <div>
    <p>Here is the info: {info}</p>
  </div>
)

const addWarningMessage = BasedComponent => {
  return (props) => (
    <div>
      <p>Please don't share this info!</p>
      <BasedComponent {...props} />
    </div>
  )
}

const WarningInfo = addWarningMessage(Info)

export default WarningInfo