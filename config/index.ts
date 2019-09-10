import development from './development';
import production from './production';

const getWebsiteConfig = () => {
  if (process.env.NODE_ENV === 'development') {
    return development;
  }
  return production;
}

const WEBSITE_CONFIG = getWebsiteConfig();

export default WEBSITE_CONFIG;
