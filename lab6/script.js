const profileList = document.querySelector('.profile-list');
const downloadButton = document.querySelector('.download-button');
const isSuccessful = document.querySelector('.is-successful');

async function getProfile() {
    const response = await fetch('https://randomuser.me/api');

    return response.json();
}

function createProfileElement({
    picture,
    cell,
    name,
    location,
    dob,
    phone,
}) {
    return `
        <div class="profile">
            <img class="profile-picture" src="${picture.large}"/>
            <p>Cell: ${cell}</p>
            <p>Name: ${name.first} ${name.last}</p>
            <p>Address: ${location.country}, ${location.city}</p>
            <p>Age: ${dob.age}</p>
            <p>Phone: ${phone}</p>
        </div>
    `;
}

downloadButton.onclick = async () => {
    try {
        const { results: profiles } = await getProfile();
        
        isSuccessful.innerHTML = 'success!';
        for (const profile of profiles) {
            profileList.innerHTML += createProfileElement(profile);
        }
    } catch (error) {
        isSuccessful.innerHTML = 'fail!';
        throw error;
    }
};
