import Image from 'next/image';
import { Inter } from 'next/font/google';
import cx from 'classnames';

import Lock from '../icons/Lock';

const inter = Inter({ subsets: ['latin'] });

const AdFooter = () => {
    return (
        <>
            <div className="flex justify-between mt-3 max-w-[375px] mx-auto">
                <Image src="/Paypal.png" alt="paypal" width={66} height={16} />
                <Image src="/visa.png" alt="visa" width={44} height={34} />
                <Image
                    src="/americanExpress.png"
                    alt="AmericanExpress"
                    width={23}
                    height={18}
                />
                <Image
                    src="/mastercard.png"
                    alt="mastercard"
                    width={28}
                    height={21}
                />
                <Image
                    src="/discover.png"
                    alt="discover"
                    width={42}
                    height={22}
                />
                <Image
                    src="/maestro.png"
                    alt="maestro"
                    width={28}
                    height={20}
                />
            </div>
            <div className="flex gap-[6px] justify-center items-center text-darkgray mt-[13px]">
                <Lock />
                <p
                    className={cx(
                        'text-[10px] xs:text-xs font-medium',
                        inter.className
                    )}
                >
                    All transactions are secure and encrypted
                </p>
            </div>
        </>
    );
};

export default AdFooter;
