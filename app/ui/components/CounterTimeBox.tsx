import React from 'react';

import { timeUnit } from '@/app/types/counter';

const CounterTimeBox = (unit: timeUnit) => {
    const { name, value } = unit;

    return (
        <div className="rounded-[5px] bg-orange h-[31px] w-[38px] lg:h-[36px] lg:w-[45px] flex flex-col items-center text-dark-charcoal justify-center">
            <p className="font-extrabold leading-5 lg:leading-5 lg:text-xl">
                {value}
            </p>
            <p className="uppercase text-[6px] lg:text-[7px]">{name}</p>
        </div>
    );
};

export default CounterTimeBox;
