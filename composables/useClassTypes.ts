export const useClassTypes = async () => {
  const runTimeConfig = useRuntimeConfig();

  const {
    data: classTypes,
    error,
    refresh,
    pending,
  } = await useAsyncData("classTypes", () => {
    return $fetch(
      `${runTimeConfig.public.baseWp}/class_type/?_embed&per_page=100`
    );
  });

  return { classTypes, error, refresh, pending };
};
