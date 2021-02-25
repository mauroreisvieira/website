import Link from 'next/link';
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import Header from '../components/Header';
const Page = () => {
    const meta = {
        title: 'Home | Next.js + TypeScript Example',
        description: 'Home | Next.js + TypeScript Example',
    };
    return (
        <>
            <Header>
                <Nav />
            </Header>
            <Layout meta={meta}>
                <div className="lg:grid lg:grid-cols-2 gap-12">
                    <div>
                        <h1 className="tracking-tight font-black text-7xl dark:text-white mb-12">
                            Hey folks!
                        </h1>
                        <div>
                            <p className="text-3xl dark:text-white mb-4">
                                I'm a Front End Developer from Portugal.
                            </p>
                            <p className="text-3xl dark:text-white">
                                You can read more{' '}
                                <Link href="/about">
                                    <span className="text-indigo-500 hover:text-indigo-600 cursor-pointer">
                                        about me
                                    </span>
                                </Link>
                                {' '}or you can check what{' '}
                                <Link href="/uses">
                                    <span className="text-indigo-500 hover:text-indigo-600 cursor-pointer">
                                        cool things
                                    </span>
                                </Link>{' '}
                                I use on my normal workday.
                            </p>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};
export default Page;
