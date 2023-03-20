export const useClubs = async () => {
  const  clubs = await useGetApi('clubs', '10');
  return clubs
}