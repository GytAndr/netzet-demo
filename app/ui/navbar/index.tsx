import Link from 'next/link';
import Image from 'next/image';

import PhoneIcon from '../icons/PhoneIcon';
import Counter from '../components/Counter';

const Navbar = () => {
    return (
        <nav className="bg-black-olive text-white flex justify-center">
            <div className="max-w-[1120px] w-full flex justify-center md:justify-between items-center gap-4 xs:gap-[38px] py-[11px] px-[21px]">
                <Image
                    className="hidden md:block"
                    src="/Parenting_leader_logo.png"
                    alt="logo"
                    width={158}
                    height={42}
                />
                <Counter />
                <Link href="#">
                    <button className="font-extrabold py-[9px] px-[25px] bg-islamic-green rounded-[5px] uppercase leading-[13px] text-[13px] lg:text-base">
                        Accept the Challange
                    </button>
                </Link>
                <div className="hidden md:flex items-center gap-[11px]">
                    <PhoneIcon fill="white" width={17} height={17} />
                    <p className="font-bold text-white">1 (302) 316-5995</p>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
