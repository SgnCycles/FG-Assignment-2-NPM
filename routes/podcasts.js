import express from 'express';
import * as path from 'path';
import 'dotenv/config';
import { podcastChannels } from '../data/data.js';
import { navMenu } from '../data/content.js';
import { footerContent } from '../data/content.js';
import { headerCategory } from '../data/content.js';

const podcastRouter = express.Router();
const __dirname = path.resolve();

podcastRouter.get("/", (req, res) => {

  res.render(path.join(__dirname, "/views/pages/category"),
  {
    headTitle: 'Podcasts',
    pageTitle: "Welcome to the Documentaries",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eos ipsum qui eligendi veritatis deserunt sapiente delectus voluptates? Quo corporis repudiandae delectus veniam natus placeat excepturi facilis unde doloremque voluptatum?",
    className: "doc-style",
    documentTitle: "Podcasts",
    pageType: "podcasts",
    navigationMenu: navMenu,
    channels: podcastChannels,
    footer: footerContent.footerText,
    header: headerCategory,
  }
  );
});

export default podcastRouter;