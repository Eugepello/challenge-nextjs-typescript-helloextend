'use client'
import './globals.css'
import React from 'react'
import { Nunito } from '@next/font/google'
import Link from 'next/link'
import FavoritableImage from '../components/FavoritableImage'
import { useFavourites } from '../state/favourite'

const nunito = Nunito({ subsets: ['latin'] })

interface Props {
  children: React.ReactNode
}

export default function RootLayout ({
  children
}: Props) {
  const favourites = useFavourites(state => state.favourites)

  return (
    <html className={nunito.className}>
      <head />
      <body className='max-w-screen-md m-auto p-4'>
        <main className='flex flex-col gap-6'>
          <div>
            <Link href='/'><h1 className='font-bold text-3xl'>Dog Breeds</h1></Link>
            <nav>
              <ul className='flex gap-4'>
                <li><Link href='/affenpinscher'>Affenpinscher</Link></li>
                <li><Link href='/african'>African</Link></li>
                <li><Link href='/airedale'>Airedale</Link></li>
              </ul>
            </nav>
          </div>
          <article>
            {children}
          </article>
          <hr />
          <article>
            <h1 className='font-bold text-3xl mb-3'>Favourites</h1>
            {favourites?.length === 0
              ? (
                <p className='text-gray-500'>You have no favourites yet.</p>
                )
              : (
                <section className='grid grid-cols-2 gap-4 gridder'>
                  {
                  favourites.map((image) => (
                    <FavoritableImage key={image} src={image} />
                  ))
                }
                </section>
                )}
          </article>
        </main>
      </body>
    </html>
  )
}
