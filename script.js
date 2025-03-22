const switchButton = document.getElementById('switchButton');
const petButton = document.getElementById('petButton');
const mainWindow = document.getElementById('mainWindow');
const gamesWindow = document.getElementById('gamesWindow');
const newsWindow = document.getElementById('newsWindow');
const menuWindow = document.getElementById('menuWindow');
const levelsWindow = document.getElementById('levelsWindow');
const level1Window = document.getElementById('level1Window');
const petWindow = document.getElementById('petWindow');

// Función para ocultar todas las ventanas
function hideAllWindows() {
    mainWindow.style.display = 'none';
    gamesWindow.style.display = 'none';
    newsWindow.style.display = 'none';
    menuWindow.style.display = 'none';
    levelsWindow.style.display = 'none';
    level1Window.style.display = 'none';
    petWindow.style.display = 'none';
}

// Ir a ventana de mascota desde el botón flotante principal
switchButton.addEventListener('click', () => {
    hideAllWindows();
    petWindow.style.display = 'block';
});

// Ir a ventana de mascota desde juegos
petButton.addEventListener('click', () => {
    hideAllWindows();
    petWindow.style.display = 'block';
});

// Volver a la ventana principal desde la nav-bar
const homeLinks = [
    document.getElementById('homeLinkMain'),
    document.getElementById('homeLinkGames'),
    document.getElementById('homeLinkNews'),
    document.getElementById('homeLinkMenu'),
    document.getElementById('homeLinkLevels'),
    document.getElementById('homeLinkLevel1'),
    document.getElementById('homeLinkPet')
];
homeLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        hideAllWindows();
        mainWindow.style.display = 'block';
    });
});

// Ir a ventana de noticias desde la nav-bar
const newsLinks = [
    document.getElementById('newsLinkMain'),
    document.getElementById('newsLinkGames'),
    document.getElementById('newsLinkMenu'),
    document.getElementById('newsLinkLevels'),
    document.getElementById('newsLinkLevel1'),
    document.getElementById('newsLinkPet')
];
newsLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        hideAllWindows();
        newsWindow.style.display = 'block';
    });
});

// Ir a ventana de menú desde las tres líneas
const menuButtons = [
    document.getElementById('menuButton'),
    document.getElementById('menuButtonGames'),
    document.getElementById('menuButtonNews'),
    document.getElementById('menuButtonLevels'),
    document.getElementById('menuButtonLevel1'),
    document.getElementById('menuButtonPet')
];
menuButtons.forEach(button => {
    button.addEventListener('click', () => {
        hideAllWindows();
        menuWindow.style.display = 'block';
    });
});

// Ir a ventana de niveles desde el menú
document.getElementById('levelsLink').addEventListener('click', (e) => {
    e.preventDefault();
    hideAllWindows();
    levelsWindow.style.display = 'block';
});

// Ir a ventana de Nivel 1
document.getElementById('level1Link').addEventListener('click', () => {
    hideAllWindows();
    level1Window.style.display = 'block';
});