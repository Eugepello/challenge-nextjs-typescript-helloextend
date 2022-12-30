import FavoritableImage from '../../components/FavoritableImage'

interface Props {
  params: {
    breed: string
  }
}

export default async function BreedPage ({ params: { breed } }: Props) {
  const { message: images } = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/10`).then(res => res.json() as Promise<{message: string[]}>)

  return (
    <section className='grid grid-cols-2 gap-4' style={{ gridTemplateColums: 'repeat(autofill, minmax(256px, 1fr))' }}>
      {
          images.map((image) => (
            <FavoritableImage key={image} src={image} />
          ))
        }
    </section>
  )
}
