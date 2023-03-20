export const useBlogCategories = async () => {
  const runTimeConfig = useRuntimeConfig();

  const {
    data: blogCategories,
    error,
    refresh,
    pending,
  } = await useAsyncData("blogCategories", () => {
    return $fetch(`${runTimeConfig.public.baseWp}/categories?per_page=100`);
  });

  return { blogCategories, error, refresh, pending };
};
