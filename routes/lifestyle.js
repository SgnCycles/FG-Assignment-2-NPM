import express from 'express';
import * as path from 'path';
import 'dotenv/config';
import { lifestyleChannels } from '../data/data.js';
import { navMenu } from '../data/content.js';
import { footerContent } from '../data/content.js';
import { headerCategory } from '../data/content.js';
import socialsLinks from '../data/socials.js';

const lifestyleRouter = express.Router();
const __dirname = path.resolve();

lifestyleRouter.get("/", (req, res) => {

  res.render(path.join(__dirname, '/views/pages/category'),
  {
    headTitle: 'Lifestyle',
    pageTitle: 'Welcome to the Documentaries',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eos ipsum qui eligendi veritatis deserunt sapiente delectus voluptates? Quo corporis repudiandae delectus veniam natus placeat excepturi facilis unde doloremque voluptatum?',
    documentTitle: 'Lifestyle',
    pageType: 'lifestyle',
    navigationMenu: navMenu,
    channels: lifestyleChannels,
    footer: footerContent.footerText,
    header: headerCategory,
  }
  );
});

lifestyleRouter.get('/:slug', (req, res) => {
  const {slug} = req.params;
  const dataCategorySource = lifestyleChannels;
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

export default lifestyleRouter;