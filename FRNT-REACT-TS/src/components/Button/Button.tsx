import "./Button.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
};

function Button({ children, onClick, type = "button" }: ButtonProps) {
  return (
    <button className="button" type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
