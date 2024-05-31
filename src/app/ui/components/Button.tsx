
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}


const Button: React.FC<ButtonProps> = ({ children }) => {

    return (

        <button type='button' name="gettingStarted" role="link" className="border dark:text-white dark:hover:bg-gray-900  dark:border-white my-8 font500 text-[15px] md:text-[17px] rounded border-link text-link dark:bg-blue-600  hover:bg-link hover:text-white transition ease-in-out  duration-700  py-2 px-4 rounded">
            {children}
        </button>
    );
}

export default Button;