import { Button } from '@/components/ui/button'
import logo from '@/assets/logo.svg'
import main from '@/assets/main.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='max-w-6xl m-auto p-2'>
      <header>
        <Image src={logo} alt='Logo image' />
      </header>
      <section className=' sm:grid grid-cols-2 gap-10'>
        <div className='flex flex-col items-start justify-center'>
          <h1 className='text-3xl mt-28  lg:text-6xl font-bold mb-6'>
            Job Tracking App
          </h1>
          <p className='text-lg lg:leading-loose max-w-md mt-4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            mollitia iure magnam, sint recusandae tempore voluptatum aliquam
            modi necessitatibus laboriosam, eveniet labore, iste pariatur ab.
            Obcaecati quo vitae non impedit.
          </p>
          <Button asChild className='mt-4'>
            <Link href='/add-job'>Get Started</Link>
          </Button>
        </div>
        <Image
          src={main}
          alt='Hero page image'
          className='hidden sm:block mt-8'
        />
      </section>
    </main>
  )
}
