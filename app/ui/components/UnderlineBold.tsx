import cx from 'classnames';

type UnderlineBoldProps = {
    className: string;
    children: React.ReactNode;
};

const UnderlineBold = ({ className, children }: UnderlineBoldProps) => {
    return (
        <span className={cx('font-extrabold underline', className)}>
            {' '}
            {children}{' '}
        </span>
    );
};

export default UnderlineBold;
