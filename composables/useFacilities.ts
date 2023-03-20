export const useFacilities = async () => {
  const runTimeConfig = useRuntimeConfig();

  // const {
  //   data: facilities,
  //   error,
  //   refresh,
  //   pending,
  // } = await useAsyncData("facilities", () => {
  //   return $fetch(
  //     `${runTimeConfig.public.baseWp}/facility/?_embed&per_page=100`
  //   );
  // });

  const { data: facilities, pending } = await useAsyncData("facilities", () =>
    $fetch(`${runTimeConfig.public.baseWp}/facility/?_embed&per_page=100`)
  );
  return { facilities, pending };
};
