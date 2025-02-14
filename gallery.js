document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = [
        {
            id: 1,
            image: 'img/obras/img17.jpg',
            title: 'Montagem de Infraestrutura',
            description: 'Montagem de Infraestrutura de Sprinklers em Tenda (Distribuidora de Medicamentos Phanfarma, 📍Jundiaí).'
        },
        {
            id: 2,
            image: 'img/obras/img13.jpg',
            title: 'Montagem de Infraestrutura',
            description: 'Montagem de infraestrutura de Splinklers em Tenda (Distribuidora de Medicamentos Panfarma, 📍Jundiaí).'
        },
        {
            id: 3,
            image: 'img/obras/img18.jpg',
            title: 'Montagem de Infraestrutura',
            description: 'Montagem de infraestrutura de Splinklers (Galpão Léo Madeiras, 📍Barueri).'
        },
        {
            id: 4,
            image: 'img/obras/img14.jpg',
            title: 'Montagem de Infraestrutura',
            description: 'Montagem de infraestrutura de Splinklers (Galpão Léo Madeiras, 📍Barueri).'
        },
        {
            id: 5,
            image: 'img/obras/img27.jpg',
            title: 'Montagem de Infraestrutura',
            description: 'Montagem de Infraestrutura de Rede de Hidrantes (Linha Amarela, 📍Metrô Acciona).'
        },
        {
            id: 6,
            image: 'img/obras/img12.jpg',
            title: 'Instalação de Rede de Hidrantes',
            description: 'Retrofit de Casa de Bomba de Hidrantes (Terminal Rodoviário Intermunicipal, 📍Campinas).'
        },
        {
            id: 7,
            image: 'img/obras/img24.jpg',
            title: 'Instalação de Rede de Hidrantes (Parte 2)',
            description: 'Retrofit de Casa de Bomba de Hidrantes (Terminal Rodoviário Intermunicipal, 📍Campinas).'
        },
        {
            id: 8,
            image: 'img/obras/img5.jpg',
            title: 'Manutenção Preventiva',
            description: 'Manutenção Preventiva em Motobomba (Condomínio Gato Preto, 📍Cajamar).'
        },
        {
            id: 9,
            image: 'img/obras/img28.jpg',
            title: 'Montagem de Infraestrutura',
            description: 'Montagem de Infraestrutura de Rede de Sprinklers (Fast Shop, 📍Recife).'
        },
        {
            id: 10,
            image: 'img/obras/img7.jpg',
            title: 'Montagem de Sistema.',
            description: 'Montagem de Sistema VGA (Terminal Rodoviário Tietê, 📍São Paulo).'
        },
        {
            id: 11,
            image: 'img/obras/img9.jpg',
            title: 'Manutenção Preventiva',
            description: 'Retrofit de Sistemas de Hidrantes (Terminal Rodoviário Tietê, 📍São Paulo).'
        },
        {
            id: 12,
            image: 'img/obras/img11.jpg',
            title: 'Instalação',
            description: 'Instalação de Bomba de Incêndio (Terminal Rodoviário Tietê, 📍São Paulo).'
        },
        {
            id: 13,
            image: 'img/obras/img2.jpg',
            title: 'Instalação',
            description: 'Instalação de Válvula de Alívio (Distribuidora de Medicamentos Panfarma, 📍Jundiaí).'
        },
        {
            id: 14,
            image: 'img/obras/img10.jpg',
            title: 'Manutenção Preventiva',
            description: 'Manutenção Preventiva em Sistema de Gás Co2 (Usina Hidrelétrica Paranapanema, 📍Piraju).'
        },
        {
            id: 15,
            image: 'img/obras/img22.jpg',
            title: 'Manutenção Preventiva',
            description: 'Retrofit de Rede de Hidrantes (Terminal Rodoviário Intermunicipal, 📍Campinas).'
        }
    ];

    function initializeGallery() {
        const galleryContainer = document.getElementById('professional-gallery');
        
        if (!galleryContainer) {
            console.error('Gallery container not found');
            return;
        }

        galleryContainer.innerHTML = '';

        galleryItems.forEach(item => {
            const galleryItemElement = createGalleryItem(item);
            galleryContainer.appendChild(galleryItemElement);
        });
    }

    function createGalleryItem(item) {
        const galleryItemElement = document.createElement('div');
        galleryItemElement.classList.add('gallery-item');
        galleryItemElement.innerHTML = `
            <div class="gallery-item-image">
                <img src="${item.image}" alt="${item.title}" loading="lazy">
            </div>
            <div class="gallery-item-details">
                <div>
                    <h3 class="gallery-item-title">${item.title}</h3>
                    <p class="gallery-item-description">${item.description}</p>
                </div>
            </div>
        `;

        return galleryItemElement;
    }

    
    initializeGallery();
});