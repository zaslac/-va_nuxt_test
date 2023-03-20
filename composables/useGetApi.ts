export const useGetApi = async (url: string, perPage = '10') => {
  const runTimeConfig = useRuntimeConfig();

  const {  data, error, refresh, pending, } = await useAsyncData('data', 
    () => {
      return $fetch(`${runTimeConfig.public.baseWp}/${url}/?_embed&per_page=${perPage}`)
  })
  return { data, error, refresh, pending };
};