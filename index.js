require('dotenv').config();

const express = require('express');
const router = require('./router');
// On importe le middleware cors qui permet de faire des requetes vers l'API
// depuis le navigateur
const cors = require('cors');
//const rateLimit = require('express-rate-limit');
const bodySanitizer = require('./middlewares/exemple_sanitizer');

const PORT = process.env.PORT || 6000;
const app = express();

// pour la mise en production avec react
// j'utilise le fichier build générer avec 'yarn build'
app.use(express.static("../build"));

// C'est un middleware donc on utilise app.use
app.use(express.urlencoded({ extended: true }));

/* Permet de décoder le req.body qui est reçu au format JSON */
app.use(express.json());

// on ajoute le middleware de "nettoyage" des variables
app.use(bodySanitizer);

// const corsOptions = {
//   // autorise des domaines
//   origin:'http://localhost:8080',
//   // For legacy browser support
//   optionsSuccessStatus: 200, 
//   methods: ['GET', 'PUT', 'POST', 'DELETE']
// }

app.use(cors(/*corsOptions*/));

// // Add rate limit policy
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100000, // limit each IP to 100K requests per `window` (here, per 15 minutes)
//   standardHeaders: true, // return rate limit info in the `RateLimit-*` headers
//   legacyHeaders: false, // disable the `X-RateLimit-*` headers
// });
// app.use(limiter);

app.use(router);
   
app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`);
})
