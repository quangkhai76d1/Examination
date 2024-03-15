/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import {Modal} from 'antd'
import cx from 'classnames'

interface ModalProps {
    open: boolean
    title: string | React.ReactNode
    onCancel?: () => void
    onOk?: () => void
    children: React.ReactNode
    okButtonProps?: any
    cancelButtonProps?: any
    okText?: string
    cancelText?: string
    centered?: boolean
    width?: number
    variant?: 'primary' | 'secondary' | 'danger'
    footer?: any
    confirmLoading?: boolean
}

const CustomModal: React.FC<ModalProps> = ({
    open,
    title,
    onCancel,
    onOk,
    children,
    variant = 'primary',
    footer,
    confirmLoading,
    ...rest
}) => {
    return (
        <Modal
            open={open}
            title={title}
            onCancel={onCancel}
            onOk={onOk}
            footer={footer}
            {...rest}
            className={cx(
                variant === 'primary' && 'modal-primary',
                variant === 'secondary' && 'modal-secondary',
                variant === 'danger' && 'modal-danger'
            )}
            confirmLoading={confirmLoading}
        >
            {children}
        </Modal>
    )
}

export default CustomModal
