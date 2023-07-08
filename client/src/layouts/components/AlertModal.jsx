import { Space, Alert } from 'antd'
import React from 'react'

function AlertModal({type,message}) {
  return (
    <Space
    direction="vertical"
    style={{
      width: '50%',
    }}
  >
    {/* <Alert message="Success Tips" type="success" showIcon /> */}
    <Alert message={message} type={type} showIcon closable={true} />
    {/* <Alert
      message="Success Tips"
      description="Detailed description and advice about successful copywriting."
      type="success"
      showIcon
    />
    <Alert
      message="Error"
      description="This is an error message about copywriting."
      type="error"
      showIcon
    /> */}
  </Space>
  )
}

export default AlertModal