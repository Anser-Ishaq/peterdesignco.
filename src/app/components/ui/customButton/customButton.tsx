
type buttonProps = {
    layout?: string;
    border?: string;
    width?: string;
    height?: string;
    text?: string;
    onClick?: () => void;
    backgroundColor?: string;
    textColor?: string;
    padding?: string;
    icon?: string;


}

const CustomButton = ({ layout, border, width, height, text, onClick, backgroundColor = 'bg-gold', textColor = 'text-black', padding = 'py-3 px-8', icon }: buttonProps) => {

    return (
        <div className={`${layout} relative`}>
            <button className={`flex gap-2.5 ${padding} ${backgroundColor} ${textColor} ${border} `}>
                {text}
                {icon &&
                    <img src={icon} alt="arrow" className="" />
                }
            </button>
        </div>
    );
}

export default CustomButton;