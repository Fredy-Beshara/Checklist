// ============================================================
// CONFIGURAÇÃO DO FIREBASE
// ============================================================
// 1. Crie um projeto novo em https://console.firebase.google.com
// 2. No projeto, ative "Realtime Database" (modo teste, depois
//    ajuste as regras conforme o final deste arquivo).
// 3. Em "Configurações do projeto" > "Geral", crie um app Web
//    e copie o objeto de configuração para dentro do const abaixo.
// 4. Defina a senha do painel do palestrante em ADMIN_PASSWORD.
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyCSlrqZZoWRsTw4PqrQxAuphawekg1tKC4",
  authDomain: "beshara-checklist.firebaseapp.com",
  databaseURL: "https://beshara-checklist-default-rtdb.firebaseio.com",
  projectId: "beshara-checklist",
  storageBucket: "beshara-checklist.firebasestorage.app",
  messagingSenderId: "889221632977",
  appId: "1:889221632977:web:d3f754eb8cf0e0c9e486f0"
};

// Senha simples para o painel do palestrante (admin.html)
const ADMIN_PASSWORD = "BesharaCeci";

// ============================================================
// REGRAS DO REALTIME DATABASE (cole em Realtime Database > Regras)
// ============================================================
// {
//   "rules": {
//     "participantes": {
//       ".read": true,
//       ".write": true
//     },
//     "config": {
//       ".read": true,
//       ".write": true
//     }
//   }
// }
// Isso libera leitura/escrita pública no nó "participantes" — suficiente
// para este caso de uso (checklist de palestra, sem dado sensível de
// pagamento). Se quiser mais segurança, dá pra evoluir depois para
// Firebase Auth anônimo.
