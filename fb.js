/**
 * Configuração do Firebase
 * By Luferat
 * MIT License 
 **/

/**
 * Configurações so Firebase
 * 
 * IMPORTANTE!
 * Troque os valores de 'firebaseConfig' pelos dados do SEU FIREBASE!
 **/
const firebaseConfig = {
     apiKey: "AIzaSyDM_gh75wsoyfzu-gHRwcNGa--7NXnuM-g",
  authDomain: "frontend-daniele.firebaseapp.com",
  projectId: "frontend-daniele",
  storageBucket: "frontend-daniele.appspot.com",
  messagingSenderId: "399422174655",
  appId: "1:399422174655:web:1946f569dc5f2dae181d0a"
};

// Incializa o Firebase
firebase.initializeApp(firebaseConfig);

// Incializa o Firebase Authentication
const auth = firebase.auth();

// Define o provedor de autenticação
var provider = new firebase.auth.GoogleAuthProvider();