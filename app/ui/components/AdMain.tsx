import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import cx from 'classnames';

import AdvantagesList from './AdvantagesList';

const montserrat = Montserrat({ subsets: ['latin'] });

const AdMain = () => {
    return (
        <div className="bg-floralwhite p-6 rounded-[10px] flex flex-col items-center lg:flex-row-reverse gap-[19px] lg:gap-[17px]">
            <Image
                src="/familyMobile.jpg"
                alt="family"
                width={255}
                height={237}
                className="lg:hidden"
            />
            <Image
                src="/familyDesktop.jpg"
                alt="family"
                width={380}
                height={469}
                className="hidden lg:block"
            />

            <div className="flex flex-col items-center">
                <AdvantagesList />
                <div
                    className={cx(
                        'flex flex-col items-center',
                        montserrat.className
                    )}
                >
                    <p className="uppercase text-lightseagreen text-xl font-bold leading-[34px]">
                        only now
                    </p>
                    <p className="text-tomato text-[40px] font-bold leading-[34px]">
                        $9.95
                    </p>
                    <p className="text-gray font-medium text-xs text-center lg:text-left mt-[17px] leading-[14px]">
                        You will be charged for $9.95 every month. You can
                        cancel anytime and this will not affect the challenges
                        you purchased.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdMain;
