import Head from 'next/head';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Twitter</title>
      </Head>

      <main className="flex min-h-screen bg-black max-w-[1500px] mx-auto">
        <Sidebar />
        {/* Feed */}
        {/* Widgets */}

        {/* Modal */}
      </main>
    </div>
  );
}
