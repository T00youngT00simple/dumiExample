import { notification } from 'antd'
import React, { forwardRef, useImperativeHandle } from 'react'

type NotificationParam = {
  message?: string
  desc?: string
  duration?: number
  key?: string
  type?: 'info' | 'warning' | 'error' | 'success'
}

const CBDESNotification = forwardRef<
  unknown,
  {
    footer?: React.ReactNode
    onClose?: () => void
    description?: string
  } & NotificationParam
>((props, ref) => {
  const [api, contextHolder] = notification.useNotification()

  const open = ({ message, desc, type, duration, key }: NotificationParam = {}) => {
    api[type ?? props.type ?? 'info']({
      message: message ?? props.message,
      description: desc ?? props.description,
      duration: duration ?? props.duration ?? 3,
      placement: 'bottomRight',
      btn: props.footer,
      onClose: props.onClose,
      key: key ?? Symbol().toString(),
    })
  }

  useImperativeHandle(ref, () => ({
    open,
  }))

  return <>{contextHolder}</>
})

export default CBDESNotification
