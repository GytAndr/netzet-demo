const Shield = ({ width = 16, height = 20, fill = '#05B133' }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8.568 0.244832C8.49369 0.167224 8.40541 0.10565 8.30821 0.0636374C8.21102 0.0216251 8.10683 0 8.0016 0C7.89637 0 7.79218 0.0216251 7.69499 0.0636374C7.59779 0.10565 7.50951 0.167224 7.4352 0.244832C5.4464 2.31324 3.248 3.33328 0.8 3.33328C0.587827 3.33328 0.384344 3.42108 0.234315 3.57736C0.0842856 3.73365 0 3.94562 0 4.16664V9.16849C0 14.5337 2.6256 18.1805 7.7472 19.9572C7.91128 20.0143 8.08872 20.0143 8.2528 19.9572C13.3728 18.1805 16 14.5337 16 9.16849V4.16664C16 3.94562 15.9157 3.73365 15.7657 3.57736C15.6157 3.42108 15.4122 3.33328 15.2 3.33328C12.7504 3.33328 10.552 2.31657 8.568 0.244832ZM12.5664 6.91174C12.7164 7.06802 12.8006 7.27995 12.8006 7.50093C12.8006 7.7219 12.7164 7.93384 12.5664 8.09011L7.7664 13.0903C7.69209 13.1679 7.60381 13.2295 7.50661 13.2715C7.40942 13.3135 7.30523 13.3351 7.2 13.3351C7.09477 13.3351 6.99058 13.3135 6.89339 13.2715C6.79619 13.2295 6.70791 13.1679 6.6336 13.0903L4.2336 10.5902C4.08338 10.4337 3.99899 10.2215 3.99899 10.0002C3.99899 9.77888 4.08338 9.56664 4.2336 9.41016C4.38382 9.25368 4.58756 9.16577 4.8 9.16577C5.01244 9.16577 5.21618 9.25368 5.3664 9.41016L7.2 11.3219L11.4336 6.91174C11.5079 6.83413 11.5962 6.77256 11.6934 6.73054C11.7906 6.68853 11.8948 6.66691 12 6.66691C12.1052 6.66691 12.2094 6.68853 12.3066 6.73054C12.4038 6.77256 12.4921 6.83413 12.5664 6.91174Z"
                fill={fill}
            />
        </svg>
    );
};

export default Shield;