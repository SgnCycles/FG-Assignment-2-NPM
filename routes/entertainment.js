import express from 'express';
import * as path from 'path';
import 'dotenv/config';
import { entertainmentChannels } from '../data/data.js';
import { navMenu } from '../data/content.js';
import { footerContent } from '../data/content.js';
import { headerCategory } from '../data/content.js';
import socialsLinks from '../data/socials.js';

const entertainmentRouter = express.Router();
const __dirname = path.resolve();

entertainmentRouter.get("/", (req, res) => {

  res.render(path.join(__dirname, '/views/pages/category'),
  {
    headTitle: 'Entertainment',
    pageTitle: 'Welcome to the Entertainment',
    documentTitle: 'Entertainment',
    pageType: 'entertainment',
    navigationMenu: navMenu,
    channels: entertainmentChannels,
    footer: footerContent.footerText,
    header: headerCategory,
  }
  );
});

entertainmentRouter.get('/:slug', (req, res) => {
  const {slug} = req.params;
  const dataCategorySource = entertainmentChannels;
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

export default entertainmentRouter;