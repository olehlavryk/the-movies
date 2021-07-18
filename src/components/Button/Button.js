import "./Button.css";
export const Button = ({ Icon, onClick }) => {
    return (
        <button className="theme-btn" {...{ onClick }}>
            {Icon}
        </button>
    )
}