<template>
  <div
    v-for="layout in data"
    :class="`section_${layout.acf_fc_layout}` + ' page_components'"
    :id="`section_${layout.acf_fc_layout}`"
  >
    <client-only>
      <Teleport
        to="#notice_area_placeholder"
        v-if="layout.acf_fc_layout == 'notice_area'"
      >
        <BlocksNoticeArea :data="layout" />
      </Teleport>
    </client-only>
    <BlocksPageBanner
      :data="layout"
      v-if="layout.acf_fc_layout == 'page_banner'"
    />
    <BlocksPageTextBanner
      :data="layout"
      v-else-if="layout.acf_fc_layout == 'page_text_banner'"
    />
    <BlocksFacilitiesCarousel
      :data="layout"
      v-else-if="layout.acf_fc_layout == 'facilities_carousel'"
    />

    <BlocksClubTimetable
      :data="layout"
      :title="title"
      v-else-if="layout.acf_fc_layout == 'club_timetable'"
    />
    <BlocksThinImageCta
      :data="layout"
      v-else-if="layout.acf_fc_layout == 'thin_image_cta'"
    />
    <BlocksOurExpertsAccordion
      :data="layout"
      v-else-if="layout.acf_fc_layout == 'our_experts_accordion'"
    />
    <BlocksThinFullWidthImageCTA
      :data="layout"
      v-else-if="layout.acf_fc_layout == 'thin_full_width_image_cta'"
    />
    <BlocksClassesTypesGrid
      :data="layout"
      v-else-if="layout.acf_fc_layout == 'classes_types_grid'"
    />
    <BlocksIntroBlockOne
      :data="layout"
      v-else-if="layout.acf_fc_layout == 'intro_block_1'"
    />
    <BlocksClassTypeCarousel
      :data="layout"
      v-else-if="layout.acf_fc_layout == 'class_type_carousel'"
    />
    <BlocksFeaturedWorkout
      :data="layout"
      v-else-if="layout.acf_fc_layout == 'featured_workout'"
    />
    <BlocksExploreOtherClasses
      :data="layout"
      v-else-if="layout.acf_fc_layout == 'explore_other_classes'"
    />

    <BlocksBlogFilter
      :data="layout"
      v-else-if="layout.acf_fc_layout == 'blog_filter'"
    />

    <BlocksBlogLandingList
      :data="layout"
      v-else-if="layout.acf_fc_layout == 'blog_landing_list'"
    />
    <BlocksBlogPopularTopics
      :data="layout"
      v-else-if="layout.acf_fc_layout == 'blog_popular_topics'"
    />

    <BlocksBlogCategoryLandingList
      v-else-if="layout.acf_fc_layout == 'blog_category_landing_list'"
    />

    <BlocksFeaturedVerticalSlider
      :data="layout"
      v-else-if="layout.acf_fc_layout == 'featured_vertical_slider'"
    />
    <BlocksBlogContentBlock
      :data="layout"
      v-else-if="layout.acf_fc_layout == 'content_block'"
    />
    <BlocksBlogImageBlock
      :data="layout"
      v-else-if="layout.acf_fc_layout == 'image_block'"
    />

    <BlocksBlogVideoBlock
      :data="layout"
      v-else-if="layout.acf_fc_layout == 'video_block'"
    />

    <BlocksCenterContentCTA
      :data="layout"
      v-else-if="layout.acf_fc_layout == 'center_content_cta'"
    />

    <BlocksAdBlockOne
      :data="layout"
      v-else-if="layout.acf_fc_layout == 'ad_block_1'"
    />

    <BlocksRateCards
      :data="layout"
      v-else-if="layout.acf_fc_layout == 'rate_cards'"
    />

    <BlocksFaqs :data="layout" v-else-if="layout.acf_fc_layout == 'faqs'" />

    <BlocksLargeCard
      :data="layout"
      v-else-if="layout.acf_fc_layout == 'large_info_card'"
    />

    <BlocksTestimonialBlock
      :data="layout"
      v-else-if="layout.acf_fc_layout == 'testimonials_block'"
    />

    <BlocksGridBlocks
      :data="layout"
      v-else-if="layout.acf_fc_layout == 'grid_blocks'"
    />

    <BlocksBlogCTABlock
      :data="layout"
      v-else-if="layout.acf_fc_layout == 'cta_block'"
    />

    <BlocksTwoColumnContent
      v-else-if="layout.acf_fc_layout == 'two_column_content'"
      :data="layout"
    />

    <BlocksBackgroundCardColumns
      v-else-if="layout.acf_fc_layout == 'background_card_columns'"
      :data="layout"
    />

    <BlocksTagComponent
      v-else-if="layout.acf_fc_layout == 'tag_component'"
      :data="layout"
    />

    <BlocksFormComponent
      v-else-if="layout.acf_fc_layout == 'form_component'"
      :data="layout"
    />

    <BlocksInfoCardSlider
      v-else-if="layout.acf_fc_layout == 'info_card_slider'"
      :data="layout"
    />

    <BlocksSimpleImageBlock
      v-else-if="layout.acf_fc_layout == 'simple_image_block'"
      :data="layout"
    />

    <BlocksInfoCardList
      v-if="layout.acf_fc_layout == 'info_card_list'"
      :data="layout"
    />

    <BlocksSimpleFormComponent
      v-if="layout.acf_fc_layout == 'simple_form_component'"
      :data="layout"
    />

    <BlocksCustomSupport
      v-else-if="layout.acf_fc_layout == 'customer_support'"
      :data="layout"
    />

    <BlocksMultiFormComponent
      v-else-if="layout.acf_fc_layout == 'multi_form_component'"
      :data="layout"
    />

    <BlocksSingleMapComponent
      v-else-if="layout.acf_fc_layout == 'single_map_component'"
      :data="layout"
    />

    <BlocksPageAnchorBar
      v-else-if="layout.acf_fc_layout == 'page_anchor_bar'"
      :data="data"
    />
    <BlocksNewsletterBlock
      v-else-if="layout.acf_fc_layout == 'newsletter_block'"
      :data="layout"
    />

    <BlocksPromotionalSlider
      v-else-if="layout.acf_fc_layout == 'promotional_slider'"
      :data="layout"
    />
    <BlocksVerticalPromoSection
      v-if="layout.acf_fc_layout == 'vertical_promo_section'"
      :data="layout"
    />
    <BlocksHorizontalPromoSection
      v-else-if="layout.acf_fc_layout == 'horizontal_promo_section'"
      :data="layout"
    />

    <BlocksSimpleVideoBlock
      v-else-if="layout.acf_fc_layout == 'simple_video_block'"
      :data="layout"
    />

    <BlocksFullCTATopContent
      v-else-if="layout.acf_fc_layout == 'full_cta_top_content'"
      :data="layout"
    />

    <BlocksInstructorCarousel
      v-else-if="layout.acf_fc_layout == 'instructor_carousel'"
      :data="layout"
    />

    <BlocksTwoColumnVideoComponent
      v-else-if="layout.acf_fc_layout == 'two_column_video_component'"
      :data="layout"
    />

    <BlocksTestimonialCarousel
      v-else-if="layout.acf_fc_layout == 'testimonial_carousel'"
      :data="layout"
    />
    <BlocksFeaturedMembershipCTA
      v-else-if="layout.acf_fc_layout == 'featured_membership_cta'"
      :data="layout"
    />

    <BlocksGetStartedComponent
      v-else-if="layout.acf_fc_layout == 'get_started_component'"
      :data="layout"
    />

    <BlocksClubCards
      v-else-if="layout.acf_fc_layout == 'club_cards'"
      :data="layout"
    />

    <BlocksClubSlider
      v-else-if="layout.acf_fc_layout == 'club_slider'"
      :data="layout"
    />

    <BlocksTabbedContent
      v-else-if="layout.acf_fc_layout == 'tabbed_content'"
      :data="layout"
    />

    <BlocksCenterContentCTASmall
      v-else-if="layout.acf_fc_layout == 'center_content_cta_small'"
      :data="layout"
    />

    <BlocksRelatedPostsBlock
      v-else-if="layout.acf_fc_layout == 'related_blog_posts'"
      :data="layout"
    />

    <BlocksOnlineMembershipComponent
      v-else-if="layout.acf_fc_layout == 'online_membership_component'"
      :data="layout"
    />

    <BlocksClubMembershipBlockRef
      v-else-if="layout.acf_fc_layout == 'club_membership_block'"
      :data="layout"
    />

    <BlocksMedicalAidPartners
      v-else-if="layout.acf_fc_layout == 'medical_aid_partners'"
      :data="layout"
    />

    <BlocksGoalTwoColumn
      v-else-if="layout.acf_fc_layout == 'goal_two_column'"
      :data="layout"
    />

    <BlocksGoalItems
      v-else-if="layout.acf_fc_layout == 'goal_items'"
      :data="layout"
    />

    <BlocksMembershipMainComponent
      v-else-if="layout.acf_fc_layout == 'membership_main_component'"
      :data="layout"
    />

    <BlocksMembershipHeader
      v-else-if="layout.acf_fc_layout == 'membership_header'"
      :data="layout"
    />

    <BlocksTabSlider
      v-else-if="layout.acf_fc_layout == 'tab_slider'"
      :data="layout"
    />

    <BlocksFullSizeImage
      v-else-if="layout.acf_fc_layout == 'full_size_image'"
      :data="layout"
    />

    <BlocksMobileAppComponent
      v-else-if="layout.acf_fc_layout == 'mobile_app_component'"
      :data="layout"
    />

    <BlocksMobileAppHeader
      v-else-if="layout.acf_fc_layout == 'mobile_app_header'"
      :data="layout"
    />

    <BlocksGymFinder v-else-if="layout.acf_fc_layout == 'gym_finder'" />
    <BlocksColumnFeaturedNumberBlocks
      v-else-if="layout.acf_fc_layout == 'column_featured_number_blocks'"
      :data="layout"
    />
    <BlocksFeatureTabbedCarousel
      v-else-if="layout.acf_fc_layout == 'feature_tabbed_carousel'"
      :data="layout"
    />
    <BlocksTierBenefits
      v-else-if="layout.acf_fc_layout == 'tier_benefits'"
      :data="layout"
    />
    <BlocksTierPointsPanel
      v-else-if="layout.acf_fc_layout == 'tier_points_panel'"
      :data="layout"
    />
  </div>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
  },
});

const noticeArea = useNoticeArea();

const pageAnchorBarData = usePageAnchorBarData();

if (props?.data) {
  props.data?.forEach(function (val, index, array) {
    if (val.acf_fc_layout == "notice_area") {
      noticeArea.value = true;
      return;
    } else {
      noticeArea.value = false;
    }

    if (val.acf_fc_layout == "page_anchor_bar") {
      pageAnchorBarData.value = true;
      return;
    } else {
      pageAnchorBarData.value = false;
    }
  });
}
</script>
