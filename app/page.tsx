import AdFooter from './ui/components/AdFooter';
import Join from './ui/components/Join';
import AdMain from './ui/components/AdMain';
import AdIntro from './ui/components/AdIntro';
import AdExpiration from './ui/components/AdExpiration';

export default function Home() {
    return (
        <main className="bg-grayish-orange px-5 pt-[26px] pb-[57px] flex justify-center">
            <div className="bg-pale-orange rounded-[10px] max-w-[867px] md:px-[37px] drop-shadow-[0_35px_35px_rgba(141,141,141,0.21)]">
                <AdIntro />
                <AdExpiration />
                <div className="bg-pale-orange px-[19px] py-7 rounded-b-[10px]">
                    <AdMain />
                    <Join />
                    <AdFooter />
                </div>
            </div>
        </main>
    );
}
