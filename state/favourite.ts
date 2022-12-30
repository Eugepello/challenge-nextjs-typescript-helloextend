import create from 'zustand'

interface Props {
  favourites: string[]
  addFavourite: (image: string) => void
}

export const useFavourites = create<Props>((set) => ({
  favourites: JSON.parse(window.localStorage.getItem('favourites') || '[]'),
  addFavourite: (image: string) =>
    set(({ favourites }) => {
      const draft = favourites.includes(image)
        ? favourites.filter((favourite) => favourite !== image)
        : favourites.concat(image)

      window.localStorage.setItem('favourites', JSON.stringify(draft))

      return {
        favourites: draft
      }
    })
}))
