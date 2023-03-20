export const useBlogNewsletter = async () => {
  const runTimeConfig = useRuntimeConfig();
  const {
    data: blogNewsletter,
    error,
    refresh,
    pending,
  } = await useAsyncData("blogNewsletter", () => {
    return $fetch(`${runTimeConfig.public.cusWp}/blog_newsletter`);
  });

  return { blogNewsletter, error, refresh, pending };
};
