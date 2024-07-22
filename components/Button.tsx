interface ButtonProps {
    label: string;
    secondary: boolean;
    fullWidth?: boolean;
    large?: boolean;
    onClick: () => void;
    disable?: boolean;
    outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    label,
    secondary,
    fullWidth,
    large,
    onClick,
    disable,
    outline
}) => {
  return (
    <button
        disabled={disable}
        onClick={onClick}
        className={`
            disable:opacity-70
            rounded-full
            disable:cursor-not-allowed
            hover:opacity-80
            transition
            border-2
            ${fullWidth ? 'w-full' : 'w-fit'}
            ${secondary ? 'bg-white' : 'bg-sky-500'}
            ${secondary ? 'text-black' : 'text-white'}
            ${secondary ? 'border-black' : 'border-sky-500'}
            ${large ? 'text-xl' : 'text-md'}
            ${large ? 'px-5' : 'px-4'}
            ${large ? 'py-3' : 'py-2'}
            ${outline ? 'bg-transparent' : ''}
            ${outline ? 'border-white': ''}
            ${outline ? 'text-white' : ''}
            font-semibold
        `}
    >
        {label}
    </button>
  )
}

export default Button