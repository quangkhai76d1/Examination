import {Checkbox, Form} from 'antd'
import {UseControllerProps, useController} from 'react-hook-form'

interface CheckboxGroupProps extends UseControllerProps {
    options: {label: string; value: string}[]
    label?: string
    className?: string
}

const FormItem = Form.Item

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
    name,
    control,
    defaultValue,
    rules,
    options,
    label,
    className
}) => {
    const {
        field,
        fieldState: {error}
    } = useController({name, control, defaultValue, rules})

    return (
        <FormItem
            label={label}
            help={error ? error.message : null}
            validateStatus={error ? 'error' : 'success'}
            className={className}
        >
            <Checkbox.Group {...field} options={options} />
        </FormItem>
    )
}

export default CheckboxGroup
