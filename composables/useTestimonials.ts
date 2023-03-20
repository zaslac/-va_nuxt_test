export const useTestimonials = async () => {
  const runTimeConfig = useRuntimeConfig();

  const {
    data: testimonials,
    error,
    refresh,
    pending,
  } = await useAsyncData("testimonials", () => {
    return $fetch(
      `${runTimeConfig.public.baseWp}/testimonial`
    );
  });

  return { testimonials, error, refresh, pending };
};
