import {Select, Form} from 'antd'
import {UseControllerProps, useController} from 'react-hook-form'

const {Option} = Select
const FormItem = Form.Item

interface SelectProps extends UseControllerProps {
    options: {label: string; value: string}[]
    placeholder?: string
    mode?: 'multiple' | 'tags'
    label?: string
    loading?: boolean
    showSearch?: boolean
}

const SelectCustom: React.FC<SelectProps> = ({
    name,
    control,
    rules,
    options,
    placeholder,
    mode,
    label,
    loading,
    showSearch
}) => {
    const {
        field,
        fieldState: {error}
    } = useController({
        name,
        control,
        rules,
        defaultValue: []
    })

    return (
        <FormItem
            label={label}
            help={error ? error.message : null}
            validateStatus={error ? 'error' : 'success'}
            required
        >
            <Select
                mode={mode}
                placeholder={placeholder}
                {...field}
                loading={loading}
                showSearch={showSearch}
            >
                {options.map((option) => (
                    <Option key={option.value} value={option.value}>
                        {option.label}
                    </Option>
                ))}
            </Select>
        </FormItem>
    )
}

export default SelectCustom
