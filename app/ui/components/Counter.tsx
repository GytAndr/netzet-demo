import CounterTimeBox from './CounterTimeBox';

const Counter = () => {
    const timeleft = [
        { name: 'days', value: 0 },
        { name: 'hours', value: 2 },
        { name: 'minutes', value: 23 },
        { name: 'seconds', value: 54 },
    ];

    return (
        <div className="lg:flex lg:gap-[7px] items-center">
            <p className="text-xs font-semibold lg:text-lg">
                This offer expires in:
            </p>
            <div className="flex gap-[5px]">
                {timeleft.map((unit) => (
                    <CounterTimeBox {...unit} key={unit.name} />
                ))}
            </div>
        </div>
    );
};

export default Counter;
