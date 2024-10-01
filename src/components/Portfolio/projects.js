export const projects = [
    {
      id: 1,
      title: "Crown Shop",
      imgPreview: [
        { id: '1a', url: "https://i.ibb.co/vskZHv1/crwn-screen-one.webp" },
        { id: '1b', url: "https://i.ibb.co/4t4DzLW/capture-20240919162245880.webp" },
        { id: '1c', url: "https://i.ibb.co/hRpXZTB/crwn-screen-three.webp" },
      ],
      desc: `Un'applicazione web e-commerce moderna e intuitiva che offre varie tipologie di indumenti. 
      Tutti i dati sui prodotti e l'autenticazione degli utenti sono memorizzati nel nostro database Firebase.`,
      demo: "https://profound-kringle-719cd9.netlify.app/",
      code: "https://github.com/FedeBramb/crwn-clothing.git",
      skills: ["React", "JavaScript", "SASS", "FireBase"],
      overview_sections: [
        { title: 'Descrizione progetto', content: `Per il mio progetto di e-commerce, ho usato React e JavaScript per costruire il front end, 
          creando un'interfaccia utente interattiva. Ho utilizzato SCSS per lo stile, il che mi ha permesso di organizzare i miei fogli di 
          stile in modo più chiaro. Per gestire i dati e l'autenticazione degli utenti, ho integrato Firebase, che offre funzionalità pratiche 
          per registrare e accedere agli utenti. Questo ha reso facile creare una buona esperienza utente.
          Infine, per gestire lo stato dell'app, ho scelto di usare il Context API di React, che mi ha aiutato a condividere i dati tra i 
          componenti senza complicare troppo il codice..`
        },
        { title: 'Perchè ho svolto questo progetto', content: `Ho deciso di sviluppare un sito di e-commerce perché credo che rappresenti 
          un'opportunità unica per apprendere e approfondire nuove tecnologie e funzionalità offerte da React e JavaScript. Questo tipo di 
          progetto non solo mi consente di affrontare sfide tecniche, ma mi offre anche la possibilità di esplorare aspetti fondamentali 
          come la gestione dello stato, l'autenticazione degli utenti e l'interazione con le API. Inoltre, mi permette di avvicinarmi a 
          concetti più avanzati, come Redux, per la gestione dello stato in modo più efficiente, migliorando così la scalabilità e la 
          manutenibilità dell'applicazione.` 
        },
        { title: 'Difficoltà', content: `La gestione di Firebase è stata particolarmente impegnativa; pur essendo una tecnologia potente, 
          ho bisogno di affinare le mie competenze per utilizzarla al meglio. Un'altra difficoltà è stata garantire che i vari componenti 
          comunichino in modo efficace tra di loro.` },
        { title: 'Implementazioni future', content: ['Redux', 'Pagamenti', 'Profilo utente'] },
      ]
    },
    {
      id: 2,
      title: "Food Blog",
      imgPreview: [
              { id: '2a', url: "https://i.ibb.co/mCDg0qf/food-one.webp" },
              { id: '2b', url: "https://i.ibb.co/2cm9MkL/food-two.webp" },
              { id: '2c', url: "https://i.ibb.co/KW7N2T0/food-three.webp" },
          ],
      desc: `Food Blog è un sito web full stack dedicato alla condivisione di ricette culinarie. Offre una serie di funzionalità, tra cui una barra di ricerca per trovare ricette 
      per nome o ingrediente, la possibilità di aggiungere commenti e un carosello per visualizzare le immagini 
      delle ricette.`,
      demo: "https://food-blog-tlsm.onrender.com",
      code: "https://github.com/FedeBramb/food-blog.git",
      skills: ["JavaScript", "React", "SASS", "PostgreSQL"],
      overview_sections: [
          { title: 'Descrizione progetto', content: `
      Inizialmento lo stile del blog è stato definito con CSS, SASS e infine ho optato per l'utilizzo della libreria styled-component.
      Creare un'interfaccia utente responsiva e intuitiva che funzionasse bene su dispositivi di diverse dimensioni è stata una sfida,
       ma ho imparato molto sulla progettazione UI/UX.
      Ho utilizzato Framer-motion per alcune animazioni e 
      Il back-end è gestito con Knex e PostgreSQL, con i dati ospitati su Render.com.
      `},
        { title: 'Perchè ho svolto questo progetto', content: `Attraverso questo progetto, ho potuto esplorare diverse funzionalità 
        come la ricerca per ingredienti e la gestione dei commenti, che non solo migliorano l'esperienza dell'utente, ma richiedono 
        anche una buona comprensione della gestione dello stato e delle interazioni con le API.
        Inoltre, lavorare su un progetto di Food Blog mi ha permesso di affrontare le sfide della creazione di un'applicazione 
        full-stack, dalla progettazione del front-end fino alla gestione del back-end. Ho imparato molto sulla sincronizzazione tra 
        il front-end e il back-end, così come sull'implementazione delle funzionalità per migliorare l'interazione dell'utente.` 
        },
        { title: 'Difficoltà', content: `Implementare un sistema di registrazione e accesso degli utenti ha comportato sfide nella gestione delle sessioni.
      Ho incontrato difficoltà per la gestione dei commenti:
      associare il commento all'user e alla ricetta corrente,
      aggiungere o eliminare un commento alla view.` },
        { title: 'Implementazioni future', content: ['Upload ricetta utente', 'Pannello controllo utente', 'Modifica commento'] },
      ]    
    },
    {
      id: 3,
      title: "Face Recognition",
      imgPreview: [
        { id: '3a', url: "https://i.ibb.co/Vw8vJG8/face-rec-two.webp" },
        { id: '3b', url: "https://i.ibb.co/fNzPksS/face-rec-three.webp" },
        { id: '3c', url: "https://i.ibb.co/hYYd0FH/face-rec-one.webp" },
      ],
      desc: "Web App fullstack. Tramite la registrazione sarà possibile inviare un link di un'immagine nella quale verrà evidenziato il viso della persona.",
      demo: "https://facerecognitionbrain-xwap.onrender.com/",
      code: "https://github.com/FedeBramb/facerecognitionbrain.git",
      skills: [
        "JavaScript", "React", "CSS", "Particles-Bg", "Tachyons"
      ],
      overview_sections: [
        { title: 'Descrizione progetto', content: `
      Web app full stack, ottiene la posizione del viso tramite face detection model 
      di Clarifai Api. I dati dell'utente vengono salvati su database SQL. La parte Front end calcola la posizione e mostra 
      un riquadro intorno al viso rilevato. Infine viene incrementato il numero di richieste fatte dall'utente.
      `},
        { title: 'Perchè ho svolto questo progetto', content: `E' stato il mio primo progetto full stack, grazie al quale ho gettato le basi del back end e database.`  },
        { title: 'Difficoltà', content: 'Non è stato complicato come progetto, la parte leggermente difficile è stata capire come utilizzare la location del viso per renderizzare il riquadro intorno al volto.' },
        { title: 'Implementazioni future', content: ['Riconosicimento più visi', 'Ricerca volto sul web'] },
      ]
    }
  ];