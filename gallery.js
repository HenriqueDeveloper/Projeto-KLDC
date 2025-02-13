document.addEventListener('DOMContentLoaded', () => {
    const instagramPosts = [
        {
            id: 1,
            image: 'img/obras/img2.jpg',
            caption: 'Instalação de válvula de alívio. (Santa Cruz) ',
            likes: 157,
            username: 'kldc.sistemas',
            views: 1256,
            liked: false
        },
        {
            id: 2,
            image: 'img/obras/img5.jpg',
            caption: 'Manutenção corretiva em moto bomba. (Phampharma) ',
            likes: 243,
            username: 'kldc.sistemas',
            views: 2103,
            liked: false
        },
        {
            id: 3,
            image: 'img/obras/img7.jpg',
            caption: ' Instalação de sistema de VGAs. (Terminal rodoviário Tietê) ',
            likes: 189,
            username: 'kldc.sistemas',
            views: 1789,
            liked: false
        },
        {
            id: 4,
            image: 'img/obras/img9.jpg',
            caption: ' Retrofit do sistema de hidrantes. (Terminal Rodoviário Tietê) ',
            likes: 134,
            username: 'kldc.sistemas',
            views: 987,
            liked: false
        },
        {
            id: 5,
            image: 'img/obras/img11.jpg',
            caption: 'Instalação de bomba de incêndio. (Terminal Rodoviário Tietê)',
            likes: 221,
            username: 'kldc.sistemas',
            views: 1645,
            liked: false
        },
        {
            id: 6,
            image: 'img/obras/img6.jpg',
            caption: 'Checagem de equipamentos de segurança antes de uma inspeção.',
            likes: 176,
            username: 'kldc.sistemas',
            views: 1432,
            liked: false
        }
    ];

    const instagramPostsContainer = document.getElementById('instagram-posts');

    function createPostElement(post) {
        const postElement = document.createElement('div');
        postElement.classList.add('instagram-post');
        postElement.innerHTML = `
            <div class="post-header">
                <img src="img/logo.JPG" class="profile-pic">
                <span class="username">${post.username}</span>
            </div>
            <div class="post-image">
                <img src="${post.image}" alt="Post image">
            </div>
            <div class="post-actions">
                <button class="like-btn ${post.liked ? 'liked' : ''}" data-id="${post.id}">
                    <i class="fas fa-heart"></i>
                </button>
                <button class="comment-btn" disabled>
                    <i class="fas fa-comment"></i>
                </button>
            </div>
            <div class="post-details">
                <p class="likes-count">${post.likes} curtidas</p>
                <p class="post-caption">
                    <strong>${post.username}</strong> ${post.caption}
                </p>
                <p class="post-views">Visualizações: ${post.views}</p>
            </div>
        `;

        const likeBtn = postElement.querySelector('.like-btn');
        likeBtn.addEventListener('click', () => {
            toggleLike(post, likeBtn);
        });

        return postElement;
    }

    function toggleLike(post, likeBtn) {
        const likesCountElement = likeBtn.closest('.instagram-post').querySelector('.likes-count');
        
        if (post.liked) {
            post.likes--;
            likeBtn.classList.remove('liked');
        } else {
            post.likes++;
            likeBtn.classList.add('liked');
        }
        
        post.liked = !post.liked;
        likesCountElement.textContent = `${post.likes} curtidas`;
    }

    
    instagramPosts.forEach(post => {
        const postElement = createPostElement(post);
        instagramPostsContainer.appendChild(postElement);
    });
});