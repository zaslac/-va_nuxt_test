export const useExperts = async () => {
  const runTimeConfig = useRuntimeConfig();

  const {
    data: experts,
    error,
    refresh,
    pending,
  } = await useAsyncData("experts", () => {
    return $fetch(
      `${runTimeConfig.public.baseWp}/our_experts/?_embed&per_page=100`
    );
  });

  return { experts, error, refresh, pending };
  // const expert = await useGetApi("our_experts", "100");
  // return expert;
};
