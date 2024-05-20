
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}


const Button: React.FC<ButtonProps> = ({ children }) => {

    return (
        <button type='button' name="gettingStarted" role="link" className="border-[1px] font500 text-[15px] md:text-[17px] rounded-[10px] border-link text-link  hover:bg-link hover:text-white transition ease-in-out  duration-700  py-2 px-4 rounded">
            {children}
        </button>
    );
}

export default Button;