import Link from 'next/link';
import { Inter } from 'next/font/google';
import cx from 'classnames';

import Shield from '../icons/Shield';

const inter = Inter({ subsets: ['latin'] });

const Join = () => {
    return (
        <>
            <div className="flex justify-center">
                <Link href="#" className="w-full max-w-[522px]">
                    <button className="uppercase font-extrabold bg-lightseagreen w-full p-3 rounded-[5px] text-white mt-7">
                        join now
                    </button>
                </Link>
            </div>
            <Link href="#">
                <p className="text-gray font-semibold underline text-center mt-[18px]">
                    No, thank you
                </p>
            </Link>
            <p className="text-dark-charcoal text-xs font-medium text-center mt-[17px]">
                By clicking on Join Now button, you actively agree to the T&Cs
                and Privacy Policy.
            </p>
            <div className="flex gap-[13px] justify-center mt-[25px] items-center">
                <Shield />
                <p
                    className={cx(
                        'font-bold text-sm text-limegreen',
                        inter.className
                    )}
                >
                    Pay safe & secure
                </p>
            </div>
        </>
    );
};

export default Join;
