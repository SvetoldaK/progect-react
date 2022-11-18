import Head from 'next/head';
import Image from 'next/image';
import { Button, Htag } from '../components';

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag='h1'>Text</Htag>
      <Button appearance='primary' className='dolgvd'>Button</Button>
    </div>
  );
}
