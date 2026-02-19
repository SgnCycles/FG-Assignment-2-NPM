import express from 'express';
import * as path from 'path';
import 'dotenv/config';
import { documentaryChannels } from '../data/data.js';
import { navMenu } from '../data/content.js';
import { footerContent } from '../data/content.js';
import { headerCategory } from '../data/content.js';

const documentariesRouter = express.Router();
const __dirname = path.resolve();

documentariesRouter.get("/", (req, res) => {
  
  res.render(path.join(__dirname, "/views/pages/category"),
  {
    headTitle: 'Documentaries',
    pageTitle: "Welcome to the Documentaries",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eos ipsum qui eligendi veritatis deserunt sapiente delectus voluptates? Quo corporis repudiandae delectus veniam natus placeat excepturi facilis unde doloremque voluptatum?",
    className: "doc-style",
    documentTitle: "Documentaries",
    pageType: "documentaries",
    navigationMenu: navMenu,
    channels: documentaryChannels,
    footer: footerContent.footerText,
    header: headerCategory,
  }
  );
})

export default documentariesRouter;