
type textareaProps = {
    layout?: string;
    border?: string;
    width?: string;
    height?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    backgroundColor?: string;
    textColor?: string;
    padding?: string;
    name?: string;
    id?: string;
    disabled?: boolean;
    required?: boolean;
    rows?: number;
    cols?: number;
    maxLength?: number;
    resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

const CustomTextarea = ({ 
    layout, 
    border = '', 
    width = 'w-full', 
    height, 
    placeholder, 
    value, 
    onChange, 
    backgroundColor = 'bg-dark-gray!', 
    textColor = 'text-black', 
    padding = 'py-3 px-4', 
    name,
    id,
    disabled = false,
    required = false,
    rows = 4,
    cols,
    maxLength,
    resize = 'vertical'
}: textareaProps) => {

    const resizeClass = resize === 'none' ? 'resize-none' : 
                        resize === 'vertical' ? 'resize-y' : 
                        resize === 'horizontal' ? 'resize-x' : 'resize';

    return (
        <div className={`${layout} relative`}>
            <textarea
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                required={required}
                rows={rows}
                cols={cols}
                maxLength={maxLength}
                className={`${width} ${height} ${padding} ${backgroundColor} ${textColor} ${border} ${resizeClass} focus:outline-none`}
            />
        </div>
    );
}

export default CustomTextarea;
