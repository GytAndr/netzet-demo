import CircleCheck from '../icons/CircleCheck';

const list = [
    'Exclusive parenting resources',
    'Supportive community',
    'Personalized guides',
    'Private discussions',
    'Expert advice',
];

const AdvantagesList = () => {
    return (
        <div className="flex flex-col gap-[19px] mb-[18px]">
            {list.map((point) => (
                <div key={point} className="flex gap-[15px] items-center">
                    <CircleCheck />
                    <p className="lg:text-[23px] font-semibold">{point}</p>
                </div>
            ))}
        </div>
    );
};

export default AdvantagesList;
