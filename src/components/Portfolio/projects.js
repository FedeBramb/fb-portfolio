export const projects = [
    {
      id: 1,
      title: "Crown Shop",
      imgPreview: [
        { id: '1a', url: "https://i.ibb.co/S0YFd07/crwn-redux-first.webp" },
        { id: '1b', url: "https://i.ibb.co/4t4DzLW/capture-20240919162245880.webp" },
        { id: '1c', url: "https://i.ibb.co/hRpXZTB/crwn-screen-three.webp" },
      ],
      desc: `A modern and intuitive e-commerce web application offering various types of clothing. All product data and user authentication are stored in our Firebase database.`,
      demo: "https://crwn-clothing-wredux.netlify.app/",
      code: "https://github.com/FedeBramb/crwn-clothing-v2.0-Redux",
      skills: ["React", "JavaScript", "SCSS", "FireBase"],
      overview_sections: [
        { title: 'Description', content: `For my e-commerce project, I used React and JavaScript to build 
          the front end, creating an interactive user interface. 
          I used styled-component library for styling, which allowed me to organize my stylesheets more clearly. 
          To manage data and user authentication, I integrated Firebase, which 
          provides convenient features for user registration and login. This made 
          it easy to create a smooth user experience. Finally, to manage the app's state, 
          I chose to use Redux since I already have the version with Context API.`
        },
        { title: 'Why I Undertook This Project', content: `I decided to develop an e-commerce website because 
          I believe it represents a unique opportunity 
          to learn and deepen my understanding of new technologies and functionalities offered by React and 
          JavaScript. This type of project not only allows me to tackle technical challenges but also gives 
          me the chance to explore fundamental aspects such as state management, user authentication, 
          and API interaction. Furthermore, it enables me to dive into more advanced concepts, like Redux, 
          for more efficient state management, thereby improving the scalability and maintainability of the application.` 
        },
        { title: 'Challenges', content: `Managing Firebase was particularly challenging; despite being a powerful 
          technology, I need to refine my skills to use it more effectively. Another difficulty was ensuring that 
          the various components communicate efficiently with each other. The most significant challenge, however, 
          was using the Redux library: there is a lot of boilerplate, and I will need plenty of practice to master it fully.` 
        },
        { title: 'Future Implementations',
          content: ['User Profile', 'User Dashboard', 'Convert to TypeScript'],}
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
      desc: `Food Blog is a full-stack website dedicated to sharing culinary recipes. 
      It offers a range of features, including a search bar to find recipes by name or 
      ingredient, the ability to add comments, and a carousel to display recipe images.`,
      demo: "https://food-blog-tlsm.onrender.com",
      code: "https://github.com/FedeBramb/food-blog.git",
      skills: ["JavaScript", "React", "SASS", "PostgreSQL"],
      overview_sections: [
          { title: 'Description', content: `
      Initially, the blog's style was defined using CSS and SASS, but I eventually opted for 
      the styled-components library. Creating a responsive and intuitive user interface that 
      works well across devices of various sizes was challenging, but I learned a lot about UI/UX design.  
      I used Framer Motion for some animations, and the back-end is managed with Knex and PostgreSQL, 
      with data hosted on Render.com. On the website, users can register with the option to upload a 
      custom avatar, search for recipes by name or ingredient, and comment on recipes.
      `},
        { title: 'Why I Undertook This Project', content: `Through this project, I was able to explore 
          various features such as ingredient-based search and comment management, which not only 
          enhance the user experience but also require a solid understanding of state management and API interactions.
          Additionally, working on a Food Blog project allowed me to tackle the challenges of creating a full-stack 
          application, from front-end design to back-end management. I learned a great deal about synchronizing 
          the front-end and back-end, as well as implementing features to improve user interaction.` 
        },
        { title: 'Challenges', content: `Implementing a user registration and login system posed challenges in session management.  
          I encountered difficulties with comment management:  
          Associating the comment with the user and the current recipe.  
          Adding or removing a comment from the view.` },
        { title: 'Future Implementations', content: ['Upload ricetta utente', 'Pannello controllo utente', 'Modifica commento'] },
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
        { title: 'Description', content: `
      Web app full stack, ottiene la posizione del viso tramite face detection model 
      di Clarifai Api. I dati dell'utente vengono salvati su database SQL. La parte Front end calcola la posizione e mostra 
      un riquadro intorno al viso rilevato. Infine viene incrementato il numero di richieste fatte dall'utente.
      `},
        { title: 'Why I Undertook This Project', content: `E' stato il mio primo progetto full stack, grazie al quale ho gettato le basi del back end e database.`  },
        { title: 'Challenges', content: 'Non è stato complicato come progetto, la parte leggermente difficile è stata capire come utilizzare la location del viso per renderizzare il riquadro intorno al volto.' },
        { title: 'Future Implementations', content: ['Facial recognition', 'Face search on the web'] },
      ]
    }
  ];