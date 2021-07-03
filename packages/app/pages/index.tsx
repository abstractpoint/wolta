import { Fragment } from 'react';
import Head from 'next/head'
import LogoArea from '../components/logo-area';
import MainPaperWindow from '../components/main-paper-window';
import Footer from '../components/footer';
import Columns from '../components/columns';
import VaultsTable from '../components/vaults-table';
import CurrentPositionCards from '../components/current-position-cards';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <MainPaperWindow>
        <LogoArea />
        <div className="-ml-5 -mr-5 px-5 pt-5">
          <CurrentPositionCards />
        </div>
        <div className="-ml-5 -mr-5 p-5 border-b border-black">
          <VaultsTable />
        </div>
        <Columns className="-ml-5 -mr-5 border-b border-black">
          <Columns.Col>
            <div className="p-5 hover:bg-purple-500">
              <a href="https://nextjs.org/docs" >
                <h2>Documentation &rarr;</h2>
                <p>Find in-depth information about Next.js features and API.</p>
              </a>
            </div>
          </Columns.Col>
          <Columns.Col>
            <div className="p-5 hover:bg-purple-500">
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </div>
          </Columns.Col>
        </Columns>
      </MainPaperWindow>

      <Footer />
    </Fragment>
  )
}
