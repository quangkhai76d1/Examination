import {Button} from 'antd'
import cx from 'classnames'

interface BtnCustomProps {
    nameBtn?: string
    variant?:
        | 'primary'
        | 'dashed'
        | 'outline'
        | 'text'
        | 'link'
        | 'secondary'
        | 'outline-primary'
        | undefined
    type?: 'button' | 'submit' | 'reset' | undefined
    loading?: boolean
    onClick?: () => void
    children?: React.ReactNode
    className?: string
}

const BtnCustom = (props: BtnCustomProps) => {
    const {
        nameBtn,
        variant,
        type,
        loading = false,
        onClick,
        children,
        className
    } = props

    return (
        <Button
            className={cx(
                'btn-custom',
                variant === 'primary' && 'btn-primary',
                variant === 'secondary' && 'btn-secondary',
                variant === 'dashed' && 'btn-dashed',
                variant === 'outline' && 'btn-outline',
                variant === 'outline-primary' && 'btn-outline-primary',
                className
            )}
            htmlType={type}
            loading={loading}
            onClick={onClick}
        >
            {nameBtn ? nameBtn : children}
        </Button>
    )
}

export default BtnCustom
