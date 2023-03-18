// Load more cards
const loadMoreBtn = document.querySelector('.btn');
const cardsContainer = document.querySelector('.cards-container');
let numCards = 0;
const totalCards = 20;
let count = 0;
cardList = [
    {   mainImg: 'https://placekitten.com/600/400',
        description: 'Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.',
        source: 'instagram',
        instaLogo: 'icons/instagram-logo.svg',
        sourceLink: 'https://instagram.com/embedsocial/',
        date: '2018-03-12 03:00:00',
        count: "123",
        name: 'John Smith',
        profileImg: 'https://placekitten.com/g/100/100'
    },
    {
        mainImg: "https://placekitten.com/600/410",
        description: "Quisque metus nisi, consequat et molestie eget, facilisis ac odio. Nam lorem libero, efficitur ac velit at, egestas tempor arcu. Nullam pharetra ex eget orci lobortis malesuada. Maecenas eget porta felis. Aliquam porttitor, nibh nec ullamcorper fermentum, eros velit lobortis justo, pretium consectetur turpis enim ut nunc. Fusce convallis, ex ut ultrices sodales, ante quam venenatis arcu, vitae mollis magna urna vel eros. Aliquam a sapien nisi. Nullam convallis malesuada suscipit. ",
        source: "instagram",
        instaLogo: 'icons/instagram-logo.svg',
        sourceLink: 'https://instagram.com/embedsocial/',
        date: "2019-01-12 03:00:00",
        count: "0",
        name: "John Smith",
        profileImg: "https://placekitten.com/g/150/100"
    },
    {
        mainImg: "https://placekitten.com/600/420",
        description: "",
        source: "facebook",
        instaLogo: 'icons/facebook.svg',
        sourceLink: 'https://www.facebook.com/EmbedSocial/',
        date: "2017-01-21 03:00:00",
        count: "9866555",
        name: "John Smith",
        profileImg: "https://placekitten.com/g/100/150"
    },
    {
        mainImg: "https://placekitten.com/600/430",
        description: "Etiam eu blandit nisi. Aliquam rutrum faucibus mauris, sed egestas odio viverra at. In elementum sit amet sapien vitae bibendum.",
        source: "facebook",
        instaLogo: 'icons/facebook.svg',
        sourceLink: 'https://www.facebook.com/EmbedSocial/',
        date: "2019-12-12 03:00:00",
        count: "2",
        name: "John Smith",
        profileImg: "https://placekitten.com/g/120/120"
    },
    {
        mainImg: "https://placekitten.com/600/440",
        description: "Vivamus a sem sit amet nisi pretium pretium. Curabitur blandit ut lectus non bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris leo odio, consectetur a lorem vitae, aliquet placerat orci. Phasellus varius ante sit amet quam mollis, eu efficitur tortor blandit.",
        source: "facebook",
        instaLogo: 'icons/facebook.svg',
        sourceLink: 'https://www.facebook.com/EmbedSocial/',
        date: "2018-04-12 03:00:00",
        count: "12343",
        name: "John Smith",
        profileImg: "https://placekitten.com/g/50/50"
    },
    {
        mainImg: "https://placekitten.com/600/440",
        description: "Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.",
        source: "facebook",
        instaLogo: 'icons/facebook.svg',
        sourceLink: 'https://www.facebook.com/EmbedSocial/',
        date: "2019-12-12 03:00:00",
        count: "123",
        name: "John Smith",
        profileImg: "https://placekitten.com/g/101/101"
    },
    {
        mainImg: "https://placekitten.com/800/400",
        description: "Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.",
        source: "facebook",
        instaLogo: 'icons/facebook.svg',
        sourceLink: 'https://www.facebook.com/EmbedSocial/',
        date: "2019-12-12 03:00:00",
        count: "12",
        name: "John Smith",
        profileImg: "https://placekitten.com/g/150/120"
    },
    {
        mainImg: "https://placekitten.com/600/500",
        description: "Vivamus a sem sit amet nisi pretium pretium. Curabitur blandit ut lectus non bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris leo odio, consectetur a lorem vitae, aliquet placerat orci. Phasellus varius ante sit amet quam mollis, eu efficitur tortor blandit.",
        source: "facebook",
        instaLogo: 'icons/facebook.svg',
        sourceLink: 'https://www.facebook.com/EmbedSocial/',
        date: "2017-12-12 03:00:00",
        count: "23",
        name: "John Smith",
        profileImg: "https://placekitten.com/g/140/140"
    },
    {
        mainImg: "https://placekitten.com/700/400",
        description: "Pellentesque lacinia volutpat turpis non fermentum. Cras at pellentesque augue. Aliquam eget metus sit amet turpis consectetur posuere.",
        source: "facebook",
        instaLogo: 'icons/facebook.svg',
        sourceLink: 'https://www.facebook.com/EmbedSocial/',
        date: "2017-12-08 03:00:00",
        count: "0",
        name: "John Smith",
        profileImg: "https://placekitten.com/g/100/100"
    },
    {
        mainImg: "https://placekitten.com/700/500",
        description: "Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.",
        source: "facebook",
        instaLogo: 'icons/facebook.svg',
        sourceLink: 'https://www.facebook.com/EmbedSocial/',
        date: "2019-02-12 03:00:00",
        count: "0",
        name: "John Smith",
        profileImg: "https://placekitten.com/g/102/102"
    },
    {
        mainImg: "https://placekitten.com/800/600",
        description: "Aliquam odio libero, malesuada et iaculis a, facilisis bibendum dolor. Vivamus ultricies congue arcu eu porttitor. Integer libero tortor, volutpat a purus id, mattis tristique tortor. ",
        source: "facebook",
        instaLogo: 'icons/facebook.svg',
        sourceLink: 'https://www.facebook.com/EmbedSocial/',
        date: "2019-12-12 03:00:00",
        count: "2",
        name: "John Smith",
        profileImg: "https://placekitten.com/g/103/100"
    },
    {
        mainImg: "https://placekitten.com/700/600",
        description: "Duis in facilisis lectus.",
        source: "facebook",
        instaLogo: 'icons/facebook.svg',
        sourceLink: 'https://www.facebook.com/EmbedSocial/',
        date: "2020-12-12 03:00:00",
        count: "1",
        name: "John Smith",
        profileImg: "https://placekitten.com/g/40/100"
    },
    {
        mainImg: "https://placekitten.com/1600/1400",
        description: "Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.",
        source: "facebook",
        instaLogo: 'icons/facebook.svg',
        sourceLink: 'https://www.facebook.com/EmbedSocial/',
        date: "2019-12-15 03:00:00",
        count: "2324",
        name: "John Smith",
        profileImg: "https://placekitten.com/g/80/100"
    },
    {
        mainImg: "https://placekitten.com/1600/400",
        description: "Aliquam odio libero, malesuada et iaculis a, facilisis bibendum dolor.",
        source: "facebook",
        instaLogo: 'icons/facebook.svg',
        sourceLink: 'https://www.facebook.com/EmbedSocial/',
        date: "2019-10-12 03:00:00",
        count: "1223",
        name: "John Smith",
        profileImg: "https://placekitten.com/g/80/80"
    },
    {
        mainImg: "https://placekitten.com/2000/4000",
        description: "Quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.",
        source: "facebook",
        instaLogo: 'icons/facebook.svg',
        sourceLink: 'https://www.facebook.com/EmbedSocial/',
        date: "2016-12-12 03:00:00",
        count: "12223",
        name: "John Smith",
        profileImg: "https://placekitten.com/g/110/110"
    },
    {
        mainImg: "https://placekitten.com/900/600",
        description: " Suspendisse finibus lorem nibh, facilisis ullamcorper nunc consequat sit amet. Curabitur ultricies magna ante, ac eleifend lorem auctor porta. Nullam volutpat aliquet lorem, et posuere ex aliquet eu. Quisque elementum sem mauris, a mattis est scelerisque vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut quis massa eget ligula euismod sagittis id congue quam. Duis vestibulum eros sed tincidunt rutrum. Pellentesque in malesuada velit.",
        source: "facebook",
        instaLogo: 'icons/facebook.svg',
        sourceLink: 'https://www.facebook.com/EmbedSocial/',
        date: "2017-12-12 03:00:00",
        count: "0",
        name: "John Smith",
        profileImg: "https://placekitten.com/g/110/100"
    },
    {
        mainImg: "https://placekitten.com/600/410",
        description: "Quisque metus nisi, consequat et molestie eget, facilisis ac odio. Nam lorem libero, efficitur ac velit at, egestas tempor arcu. Nullam pharetra ex eget orci lobortis malesuada. Maecenas eget porta felis. Aliquam porttitor, nibh nec ullamcorper fermentum, eros velit lobortis justo, pretium consectetur turpis enim ut nunc. Fusce convallis, ex ut ultrices sodales, ante quam venenatis arcu, vitae mollis magna urna vel eros. Aliquam a sapien nisi. Nullam convallis malesuada suscipit. ",
        source: "instagram",
        instaLogo: 'icons/instagram-logo.svg',
        sourceLink: 'https://instagram.com/embedsocial/',
        date: "2019-01-12 03:00:00",
        count: "0",
        name: "John Smith",
        profileImg: "https://placekitten.com/g/150/100"
    },
    {
        mainImg: "https://placekitten.com/600/420",
        description: "",
        source: "facebook",
        instaLogo: 'icons/facebook.svg',
        sourceLink: 'https://www.facebook.com/EmbedSocial/',
        date: "2017-01-21 03:00:00",
        count: "9866555",
        name: "John Smith",
        profileImg: "https://placekitten.com/g/100/150"
    },
    {
        mainImg: "https://placekitten.com/600/430",
        description: "Etiam eu blandit nisi. Aliquam rutrum faucibus mauris, sed egestas odio viverra at. In elementum sit amet sapien vitae bibendum.",
        source: "facebook",
        instaLogo: 'icons/facebook.svg',
        sourceLink: 'https://www.facebook.com/EmbedSocial/',
        date: "2019-12-12 03:00:00",
        count: "2",
        name: "John Smith",
        profileImg: "https://placekitten.com/g/120/120"
    },
    {
        mainImg: "https://placekitten.com/600/440",
        description: "Vivamus a sem sit amet nisi pretium pretium. Curabitur blandit ut lectus non bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris leo odio, consectetur a lorem vitae, aliquet placerat orci. Phasellus varius ante sit amet quam mollis, eu efficitur tortor blandit.",
        source: "facebook",
        instaLogo: 'icons/facebook.svg',
        sourceLink: 'https://www.facebook.com/EmbedSocial/',
        date: "2018-04-12 03:00:00",
        count: "12343",
        name: "John Smith",
        profileImg: "https://placekitten.com/g/50/50"
    }
]

function addCards(numCards) {
    let countHeart = 0;
    for (let i = numCards; i < numCards + 4; i++) {
        const card = document.createElement('div');
        card.classList.add('card');

        const profileContainer = document.createElement('div');
        profileContainer.classList.add('profile-container');
        card.appendChild(profileContainer);

        const profileImg = document.createElement('img');
        profileImg.classList.add('profile-img');
        profileImg.setAttribute('src', cardList[count].profileImg);
        profileContainer.appendChild(profileImg);

        const name = document.createElement('h2');
        name.textContent = cardList[count].name;
        profileContainer.appendChild(name);

        const instaLogo = document.createElement('img')
        const link = document.createElement('a');
        link.setAttribute('href', cardList[count].sourceLink)
        instaLogo.classList.add('instagram-logo');
        instaLogo.setAttribute('src', cardList[count].instaLogo);
        link.appendChild(instaLogo)
        profileContainer.appendChild(link);

        const date = document.createElement('h6');
        date.classList.add('date');
        date.textContent = cardList[count].date;
        card.appendChild(date);

        const mainImg = document.createElement('img');
        mainImg.classList.add('main-img');
        mainImg.setAttribute('src', cardList[count].mainImg);
        mainImg.setAttribute('alt', 'Placeholder Image');
        card.appendChild(mainImg);

        const description = document.createElement('p');
        description.textContent = cardList[count].description;
        card.appendChild(description);

        const source = document.createElement('input');
        source.classList.add('source')
        source.setAttribute('type', 'hidden');
        source.setAttribute('value', cardList[count].source)
        card.appendChild(source);

        const hr = document.createElement('hr');
        card.appendChild(hr);

        const form = document.createElement('form');
        form.classList.add('likes-form')

        const input = document.createElement('p');
        input.setAttribute('id', `number-${countHeart}`);
        input.innerText = cardList[count].count;

        const button = document.createElement('a');
        button.setAttribute('type', 'button');
        button.classList.add('buttonToggle')
        button.addEventListener('click', () => {
            button.classList.toggle('active');
            if (button.classList.contains('active')) {
                input.innerText = parseInt(input.innerText) + 1;
            } else {
                input.innerText = parseInt(input.innerText) - 1;
            }
        });

        const img = document.createElement('img');
        img.classList.add('img-heart');
        img.src = 'https://cdn-icons-png.flaticon.com/512/2107/2107952.png';

        button.appendChild(img);
        form.appendChild(button);
        form.appendChild(input);
        card.appendChild(form);

        cardsContainer.appendChild(card);
        count++;
    }

    // Number of columns
    const numberOfColumnsSelect = document.querySelector('#numberOfColumns');

    numberOfColumnsSelect.addEventListener('change', () => {
        const value = numberOfColumnsSelect.value;
        if (value === 'dynamic') {
            cardsContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
        } else {
            cardsContainer.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
        }
    });
}

addCards(numCards);
numCards += 4;

loadMoreBtn.addEventListener('click', () => {
    addCards(numCards);
    numCards += 4;

    if (numCards >= totalCards) {
        loadMoreBtn.style.display = 'none';
    }
});

// Heart count
function incrementValue(countHeart) {
    var value = parseInt(document.getElementById(`number-${countHeart}`).innerText, 10);
    value = isNaN(value) ? 0 : value;
    value += 1;
    document.getElementById(`number-${countHeart}`).innerText = value;
}

// Card background color
const inputColor = document.querySelector('#cardBackgroundColor');
const cards = document.querySelectorAll('.card');

inputColor.addEventListener('input', () => {
    cards.forEach(card => {
        card.style.backgroundColor = inputColor.value;
    });
});

// Cards space between
const inputSpace = document.querySelector('#cardSpaceBetween');

inputSpace.addEventListener('input', () => {
    cards.forEach(card => {
        card.style.marginBottom = inputSpace.value;
    });
});

// Choose theme
const darkTheme = document.querySelector('#darkTheme');

darkTheme.addEventListener('input', () => {
    cards.forEach(card => {
        card.style.backgroundColor = 'black';
        card.style.color = 'white';
    });
});

const lightTheme = document.querySelector('#lightTheme');

lightTheme.addEventListener('input', () => {
    cards.forEach(card => {
        card.style.backgroundColor = 'white';
        card.style.color = 'black';
    })
})

//Filter by source
const instagram = document.querySelector('#instagram');

instagram.addEventListener('input', () => {
    cards.forEach(card => {
        const sourceInput = card.querySelector('.source');
        if (sourceInput.value !== 'instagram') {
            card.style.display = 'none';
        }
    });
});

const twitter = document.querySelector('#twitter');

twitter.addEventListener('input', () => {
    cards.forEach(card => {
        const sourceInput = card.querySelector('.source');
        if (sourceInput.value !== 'twitter') {
            card.style.display = 'none';
        }
    });
});

const facebook = document.querySelector('#facebook');

facebook.addEventListener('input', () => {
    cards.forEach(card => {
        const sourceInput = card.querySelector('.source');
        if (sourceInput.value !== 'facebook') {
            card.style.display = 'none';
        }
    });
});

const all = document.querySelector('#all');

    all.addEventListener('input', () => {
    cards.forEach(card => {
        const sourceInput = card.querySelector('.source');
        if (sourceInput.value === 'twitter' || sourceInput.value === 'facebook' || sourceInput.value === 'instagram') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});