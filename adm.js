// Function ifasha gufungura cyangwa gufunga div
function toggleDisplay(element) {
    if (element.style.display === 'none' || element.style.display === '' || element.style.display === 'block') {
        element.style.display = 'block'; // Fungura
    } else {
        element.style.display = 'none'; // Funga
    }
}

// Fungura cyangwa funga user-management igihe ukande kuri manage-users link
const manageUsersLink = document.getElementById('manage-users');
const userManagement = document.querySelector('.user-management');

manageUsersLink.addEventListener('click', (event) => {
    event.preventDefault(); // Irinde gufungura page nshya
    toggleDisplay(userManagement); // Fungura cyangwa funga
});

// Fungura cyangwa funga admin-content igihe ukande kuri manage-posts link
const managePostsLink = document.getElementById('manage-posts');
const adminContent = document.querySelector('.admin-content');

managePostsLink.addEventListener('click', (event) => {
    event.preventDefault();
    toggleDisplay(adminContent);
});

// Fungura cyangwa funga topic-content igihe ukande kuri manage-folders link
const manageFoldersLink = document.getElementById('manage-folders');
const topicContent = document.querySelector('.topic-content');

manageFoldersLink.addEventListener('click', (event) => {
    event.preventDefault();
    toggleDisplay(topicContent);
});

// Fungura cyangwa funga ads-content igihe ukande kuri manage-ads link
const manageAdsLink = document.getElementById('manage-ads');
const adsContent = document.querySelector('.ads-content');

manageAdsLink.addEventListener('click', (event) => {
    event.preventDefault();
    toggleDisplay(adsContent);
});

// Fungura cyangwa funga profile-container igihe ukande kuri profile link
const profileLink = document.getElementById('profile');
const profileContainer = document.querySelector('.profile-container');

profileLink.addEventListener('click', (event) => {
    event.preventDefault();
    toggleDisplay(profileContainer);
});

// Fungura cyangwa funga mailbox igihe ukande kuri message link
const messageLink = document.getElementById('message');
const mailbox = document.querySelector('.mailbox');

messageLink.addEventListener('click', (event) => {
    event.preventDefault();
    toggleDisplay(mailbox);
});

// Fungura cyangwa funga ad igihe ukande kuri create-folder link
const createFolderLink = document.getElementById('create-Folder');
const ad = document.querySelector('.ad');

createFolderLink.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleDisplay(ad);
});

// Fungura cyangwa funga editor-container igihe ukande kuri create-post link
const createPostLink = document.getElementById('create-post');
const editorContainer = document.querySelector('.editor-container');

createPostLink.addEventListener('click', (event) => {
    event.preventDefault();
    toggleDisplay(editorContainer);
});


const createAdsLink = document.getElementById('create-ads');
const writingForm= document.querySelector('.writing-form');

createAdsLink.addEventListener('click', (event) => {
    event.preventDefault();
    toggleDisplay(writingForm);
});
// Igihe user akanda ahandi hose, funga content zose zafunguwe
document.addEventListener('click', (event) => {
    if (!manageUsersLink.contains(event.target) && !userManagement.contains(event.target)) {
        userManagement.style.display = 'none';
    }
    if (!managePostsLink.contains(event.target) && !adminContent.contains(event.target)) {
        adminContent.style.display = 'none';
    }
    if (!manageFoldersLink.contains(event.target) && !topicContent.contains(event.target)) {
        topicContent.style.display = 'none';
    }
    if (!manageAdsLink.contains(event.target) && !adsContent.contains(event.target)) {
        adsContent.style.display = 'none';
    }
    if (!profileLink.contains(event.target) && !profileContainer.contains(event.target)) {
        profileContainer.style.display = 'none';
    }
    if (!messageLink.contains(event.target) && !mailbox.contains(event.target)) {
        mailbox.style.display = 'none';
    }
    if (!createFolderLink.contains(event.target) && !ad.contains(event.target)) {
        ad.style.display = 'none';
    }
    if (!createPostLink.contains(event.target) && !editorContainer.contains(event.target)) {
        editorContainer.style.display = 'none';
    }
    if (!createAdsLink.contains(event.target) && !writingForm.contains(event.target)) {
        writingForm.style.display = 'none';
    }
    if (!dashboardLink.contains(event.target) && !dashboard.contains(event.target)) {
        dashboard.style.display = 'none';
    }
});

// Ntifunge igihe user akanda muri ad
ad.addEventListener('click', (event) => {
    event.stopPropagation();
});
const dashboardLink = document.getElementById('dashboard');
const dashboard = document.querySelector('.dashboard');

dashboardLink.addEventListener('click', (event) => {
    event.preventDefault(); // Irinde gufungura page nshya
    toggleDisplay(dashboard); // Fungura cyangwa funga
});
