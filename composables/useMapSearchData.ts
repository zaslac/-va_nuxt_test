export const useMapSearchData = async () => {
  const runTimeConfig = useRuntimeConfig();
  const {
    data: mapDataList,
    error,
    refresh,
    pending,
  } = await useAsyncData("clubs", () => {
    return $fetch(`${runTimeConfig.public.cusWp}/map_club_list`);
  });

  return { mapDataList, error, refresh, pending };
};
