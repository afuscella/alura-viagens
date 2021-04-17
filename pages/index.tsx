import { websitePageHOC } from '@/components/wrappers/WebsitePage/hoc';
import { HomeScreen } from '@/components/screen/HomeScreen';

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
  },
});
