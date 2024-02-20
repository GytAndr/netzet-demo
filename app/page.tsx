import Image from 'next/image';
import { Montserrat, Inter } from 'next/font/google';
import cx from 'classnames';
import Link from 'next/link';

import UnderlineBold from './ui/components/UnderlineBold';
import AdvantagesList from './ui/components/AdvantagesList';
import Shield from './ui/icons/Shield';
import Lock from './ui/icons/Lock';

const montserrat = Montserrat({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <main className="bg-grayish-orange px-5 pt-[26px] pb-[57px] flex justify-center">
            <div className="bg-pale-orange rounded-[10px] max-w-[867px] md:px-[37px] drop-shadow-[0_35px_35px_rgba(141,141,141,0.21)]">
                <div className="px-[18px] py-7 flex flex-col items-center gap-7">
                    <p className="text-lg xs:text-[25px] md:text-[30px] uppercase font-extrabold text-mediumturquoise">
                        Only you, only now
                    </p>
                    <Image
                        src="/flower.png"
                        width={47}
                        height={43}
                        alt="flower"
                    />
                    <p className="font-semibold text-center text-xl md:text-[27px] leading-6 md:leading-[33px]">
                        Introducing an exclusive
                        <UnderlineBold className="text-mediumturquoise">
                            VIP parenting community
                        </UnderlineBold>
                        on Facebook with
                        <UnderlineBold className="text-black-olive">
                            additional parenting tools
                        </UnderlineBold>
                        and
                        <UnderlineBold className="text-black-olive">
                            tips
                        </UnderlineBold>
                        directly from the founder, Derek Mitchell, and other
                        experts.
                    </p>
                </div>
                <div className="bg-tomato text-white text-lg xs:text-xl uppercase flex justify-center px-4 py-[10px]">
                    <p>
                        Offer expires in{' '}
                        <span className="text-[25px] font-extrabold">
                            02:22
                        </span>
                    </p>
                </div>
                <div className="bg-pale-orange px-[19px] py-7 rounded-b-[10px]">
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
                                    You will be charged for $9.95 every month.
                                    You can cancel anytime and this will not
                                    affect the challenges you purchased.
                                </p>
                            </div>
                        </div>
                    </div>
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
                        By clicking on Join Now button, you actively agree to
                        the T&Cs and Privacy Policy.
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
                    <div className="flex justify-between mt-3 max-w-[375px] mx-auto">
                        <Image
                            src="/Paypal.png"
                            alt="paypal"
                            width={66}
                            height={16}
                        />
                        <Image
                            src="/visa.png"
                            alt="visa"
                            width={44}
                            height={34}
                        />
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
                </div>
            </div>
        </main>
    );
}
