/*

document.addEventListener("DOMContentLoaded", function() {
    const familyWords = ["father", "mother", "son", "daughter", "grandfather", "grandmother", "uncle", "aunt", "cousin", "nephew", "niece", "brother", "sister"];
    const petWords = ['dog', 'cat', 'bird', 'fish']; // Ejemplo de palabras de mascotas

    // Cargar imágenes para vocabulario de familia
    familyWords.forEach(word => {
        const wordContainer = createWordContainer(word);
        fetchImages(word, wordContainer, 'family-images');
    });
    // Cargar imágenes para vocabulario de mascotas
    petWords.forEach(word => {
        const wordContainer = createWordContainer(word);
        fetchImages(word, wordContainer, 'pets-images');
    });
});


function createWordContainer(word) {
    const wordContainer = document.createElement('div');
    wordContainer.classList.add('word-container');



    return wordContainer;
}

function fetchImages(query, container, containerId) {
    const apiKey = 'cflbBXbQthKaBXfeFyn9z7o7mcWDm6C9sBzLFxI2xomfOObXLcGmnUae'; // Reemplaza con tu clave API de Pexels
    const apiUrl = `https://api.pexels.com/v1/search?query=${query}&per_page=1`;

    fetch(apiUrl, {
        headers: {
            Authorization: apiKey
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if (data.photos.length === 0) {
                // Si no se encuentra ninguna imagen, mostrar un mensaje de imagen no encontrada
                const noImageMsg = document.createElement('p');
                noImageMsg.textContent = 'Imagen no encontrada';
                container.appendChild(noImageMsg);

                // Mostrar el término en inglés debajo de la imagen (opcional)
                const wordLabel = document.createElement('p');
                wordLabel.textContent = query;
                container.appendChild(wordLabel);

                // Mostrar la traducción debajo del mensaje de imagen no encontrada
                const translationLabel = document.createElement('p');
                translationLabel.textContent = getTranslation(query); // Obtener la traducción
                container.appendChild(translationLabel);




            } else {
                // Si se encuentra una imagen, mostrarla
                data.photos.forEach(photo => {
                    const img = document.createElement('img');
                    img.src = photo.src.medium;
                    img.alt = query; // Usar la palabra como texto alternativo
                    container.appendChild(img);
                });

                // Mostrar el término en inglés debajo de la imagen (opcional)
                const wordLabel = document.createElement('p');
                wordLabel.textContent = query;
                container.appendChild(wordLabel);

                // Mostrar la traducción debajo del término en inglés
                const translationLabel = document.createElement('p');
                translationLabel.textContent = getTranslation(query); // Obtener la traducción
                container.appendChild(translationLabel);
            }

            // Añadir el contenedor al elemento específico según el ID proporcionado
            const vocabCategory = document.getElementById(containerId);
            if (vocabCategory) {
                vocabCategory.appendChild(container);
            }
        })
        .catch(error => {
            console.error('Error al obtener las imágenes:', error);
        });
}



// Objeto con las traducciones de las palabras
const translations = {
    'mother': 'madre',
    'father': 'padre',
    "son": "hijo",
    "daughter": "hija",
    "grandfather": "abuelo",
    "grandmother": "abuela",
    "uncle": "tío",
    "aunt": "tía",
    "cousin": "primo(a)",
    "nephew": "sobrino",
    "niece": "sobrina",
    "brother": "hermano",
    "sister": "hermana",
    "bird": "ave",
    "dog": "perro",
    "cat" : "gato",
    "fish": "pez"
    // Añadir más palabras y sus traducciones según sea necesario
};

// Función para obtener la traducción de una palabra
function getTranslation(words) {
    return translations[words] || 'Traducción no encontrada'; // Si no se encuentra la traducción, devuelve un mensaje de error
}
*/
// Datos simulados de niveles y unidades
const niveles = [
    {
        nombre: "Beginner 3",
        unidades: [
            { nombre: "Unidad 1", link: "./beginner3/unidad1.html" },
            { nombre: "Unidad 2", link: "/beginner3/unidad2.html" },
            { nombre: "Unidad 3", link: "/beginner3/unidad3.html" },
            { nombre: "Unidad 4", link: "/beginner3/unidad4.html" },
            { nombre: "Unidad 5", link: "/beginner3/unidad5.html" },
            { nombre: "Unidad 6", link: "/beginner3/unidad6.html" }
        ]
    },
    {
        nombre: "Basic 2",
        unidades: [
            { nombre: "Unidad 1", link: "unidad1.html" },
            { nombre: "Unidad 2", link: "unidad2.html" },
            { nombre: "Unidad 3", link: "unidad3.html" },
            { nombre: "Unidad 4", link: "unidad4.html" },
            { nombre: "Unidad 5", link: "unidad5.html" }
        ]
    }
];

// Función para generar dinámicamente el contenido de los niveles
function cargarNiveles() {
    const levelsContainer = document.getElementById('levels-container');

    niveles.forEach(nivel => {
        const levelDiv = document.createElement('div');
        levelDiv.classList.add('level');

        const levelTitle = document.createElement('h2');
        levelTitle.textContent = nivel.nombre;

        levelDiv.appendChild(levelTitle);

        nivel.unidades.forEach(unidad => {
            const unitLink = document.createElement('a');
            unitLink.href = unidad.link;
            unitLink.textContent = unidad.nombre;
            unitLink.classList.add('unit-link');

            const unitDiv = document.createElement('div');
            unitDiv.classList.add('unit');
            unitDiv.appendChild(unitLink);

            levelDiv.appendChild(unitDiv);
        });

        levelsContainer.appendChild(levelDiv);
    });
}

// Cargar los niveles cuando se cargue la página
document.addEventListener('DOMContentLoaded', cargarNiveles);
