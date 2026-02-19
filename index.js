import express from 'express';
import * as path from 'path';
import 'dotenv/config';
import documentariesRouter from './routes/documentaries.js';
import entertainmentRouter from './routes/entertainment.js';
import lifestyleRouter from './routes/lifestyle.js';
import podcastRouter from './routes/podcasts.js';
import { navMenu } from './data/content.js';
import { contentHomepage } from './data/content.js';
import { footerContent } from './data/content.js';
import { documentaryChannels } from './data/data.js';
import { podcastChannels } from './data/data.js';
import { entertainmentChannels } from './data/data.js';
import { lifestyleChannels } from './data/data.js';
import socialsLinks from './data/socials.js';

const app = express();
const port = process.env.PORT;
const __dirname = path.resolve();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use('/documentaries', documentariesRouter);
app.use('/podcasts', podcastRouter);
app.use('/lifestyle', lifestyleRouter);
app.use('/entertainment', entertainmentRouter);

app.get('/', (req,res) => {
  res.render(path.join(__dirname, '/views/pages/home.ejs'),
  {
    headTitle: 'Homepage',
    navigationMenu: navMenu,
    headerHomepage: contentHomepage[0].homepageHeader,
    introHomepage: contentHomepage[0].introHomepage,
    authorHomepage: contentHomepage[0].authorHomepage,
    footer: footerContent.footerText,
  });
});

app.get('/:category/:slug', (req, res) => {
  const {category, slug} = req.params;
  const channelData = {
    documentaries: documentaryChannels,
    podcasts: podcastChannels,
    entertainment: entertainmentChannels,
    lifestyle: lifestyleChannels,
  };

  const dataCategorySource = channelData[category];
  console.log(dataCategorySource);

  if(!dataCategorySource) {
    return res.status(404).send('Page not found');
  }

  const item = dataCategorySource.find(item => item.slug === slug)
  console.log(item);

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

app.listen(port, () => {
  console.log(port, `Listening to the movie port ${port}`)
});