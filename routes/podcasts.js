import express from 'express';
import * as path from 'path';
import 'dotenv/config';
import { podcastChannels } from '../data/data.js';
import { navMenu } from '../data/content.js';
import { footerContent } from '../data/content.js';
import { headerCategory } from '../data/content.js';
import socialsLinks from '../data/socials.js';

const podcastRouter = express.Router();
const __dirname = path.resolve();

podcastRouter.get("/", (req, res) => {

  res.render(path.join(__dirname, '/views/pages/category'),
  {
    headTitle: 'Podcasts',
    pageTitle: 'Welcome to the Podcasts',
    documentTitle: 'Podcasts',
    pageType: 'podcasts',
    navigationMenu: navMenu,
    channels: podcastChannels,
    footer: footerContent.footerText,
    header: headerCategory,
  }
  );
});

podcastRouter.get('/:slug', (req, res) => {
  const {slug} = req.params;
  const dataCategorySource = podcastChannels;
  const item = dataCategorySource.find(item => item.slug === slug)

   if(!item) {
    return res.status(404).send('Page not found');
  }

  res.render('pages/channel', {
    pageType: 'channel',
    navigationMenu: navMenu,
    headTitle: item.title,
    title: item.title,
    channelContent: item.description,
    image: item.image,
    banner: item.banner,
    socials: item.socials,
    socialsIcons: socialsLinks,
    footer: footerContent.footerText,
  });
});

export default podcastRouter;