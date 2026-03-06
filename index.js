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

app.listen(port, () => {
  console.log(port, `Listening to the movie port ${port}`)
});