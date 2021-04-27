const btn = document.getElementById('btn');
const notifications = document.getElementById('notification-box');

const messages = [
    'Subscribe to the channel',
    'Like this video',
    'New videos coming soon',
];

const types = ['info', 'success', 'error'];

btn.addEventListener('click', () => createNotification());

function createNotification(type = null){
    const notif = document.createElement('div');
    notif.classList.add('notification');
    notif.classList.add(type ? type : getRandomType());

    notif.innerText = getRandomMessage();

    notifications.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
}

function getRandomMessage(){
    return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType(){
    return types[Math.floor(Math.random() * types.length)];
}