import Image from 'next/image';

import UnderlineBold from './UnderlineBold';

const AdIntro = () => {
    return (
        <div className="px-[18px] py-7 flex flex-col items-center gap-7">
            <p className="text-lg xs:text-[25px] md:text-[30px] uppercase font-extrabold text-mediumturquoise">
                Only you, only now
            </p>
            <Image src="/flower.png" width={47} height={43} alt="flower" />
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
                <UnderlineBold className="text-black-olive">tips</UnderlineBold>
                directly from the founder, Derek Mitchell, and other experts.
            </p>
        </div>
    );
};

export default AdIntro;
