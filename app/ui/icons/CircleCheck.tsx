const CircleCheck = ({ width = 25, height = 26, fill = '#F5773D' }) => {
    return (
        <svg
            className="flex-shrink-0"
            width={width}
            height={height}
            viewBox="0 0 25 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="12.5" cy="13" r="12.5" fill={fill} />
            <path
                d="M5.76929 11.0769L11.5385 16.3654L19.7116 8.19232"
                stroke="#FEFBF9"
                strokeWidth="2.5"
            />
        </svg>
    );
};

export default CircleCheck;
