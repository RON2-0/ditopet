const switchButton = document.getElementById('switchButton');
        const mainWindow = document.getElementById('mainWindow');
        const gamesWindow = document.getElementById('gamesWindow');
        const newsWindow = document.getElementById('newsWindow');

        switchButton.addEventListener('click', () => {
            mainWindow.style.display = 'none';
            gamesWindow.style.display = 'block';
        });

        // Volver a la ventana principal desde la nav-bar
        const homeLinkMain = document.getElementById('homeLinkMain');
        const homeLinkGames = document.getElementById('homeLinkGames');
        const homeLinkNews = document.getElementById('homeLinkNews');

        homeLinkGames.addEventListener('click', (e) => {
            e.preventDefault();
            gamesWindow.style.display = 'none';
            mainWindow.style.display = 'block';
        });

        homeLinkNews.addEventListener('click', (e) => {
            e.preventDefault();
            newsWindow.style.display = 'none';
            mainWindow.style.display = 'block';
        });

        // Ir a la ventana de noticias
        const newsButton = document.getElementById('newsButton');
        newsButton.addEventListener('click', () => {
            gamesWindow.style.display = 'none';
            newsWindow.style.display = 'block';
        });

        // Volver a la ventana de juegos desde noticias
        const backButton = document.getElementById('backButton');
        backButton.addEventListener('click', () => {
            newsWindow.style.display = 'none';
            gamesWindow.style.display = 'block';
        });

        // Abrir/cerrar chat en ventana de juegos
        const chatButton = document.getElementById('chatButton');
        const chatPopup = document.getElementById('chatPopup');
        const closeChat = document.getElementById('closeChat');

        chatButton.addEventListener('click', () => {
            chatPopup.style.display = 'block';
        });

        closeChat.addEventListener('click', () => {
            chatPopup.style.display = 'none';
        });

        // Abrir/cerrar chat en ventana de noticias
        const chatButtonNews = document.getElementById('chatButtonNews');
        const chatPopupNews = document.getElementById('chatPopupNews');
        const closeChatNews = document.getElementById('closeChatNews');

        chatButtonNews.addEventListener('click', () => {
            chatPopupNews.style.display = 'block';
        });

        closeChatNews.addEventListener('click', () => {
            chatPopupNews.style.display = 'none';
        });