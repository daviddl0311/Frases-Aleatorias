const imagenes = ["https://d1ih8jugeo2m5m.cloudfront.net/2024/12/frases_motivadoras-700x400.webp",
    "https://i.pinimg.com/736x/04/69/c8/0469c8967593194195be83494a766f3b.jpg",
    "https://content.clara.es/medio/2024/12/02/frases_803554b1_241202141738_800x800.webp",
    "https://i.pinimg.com/236x/b9/54/ed/b954edfee1f0b9ef7a7bac379c15fcce.jpg",
];

const texto = ["La vida es un viaje, no un destino.", 
    "El éxito es la suma de pequeños esfuerzos repetidos un día sí y otro también.",
    "No importa lo lento que vayas mientras no te detengas.",
    "El éxito es la suma de pequeños esfuerzos repetidos un día sí y otro también."
];

const arr = ["texto","imagenes"];

let button = document.getElementById('btn');
let text = document.getElementById('text');

button.addEventListener("click", () => {
    let random = arr[Math.floor(Math.random() * arr.length)];

    if(random == "texto") {
        text.textContent = '"'+ texto[Math.floor(Math.random() * texto.length)]+'"';
    } else {
        text.innerHTML = "<img src=" + imagenes[Math.floor(Math.random() * imagenes.length)] + " alt='Imagenes'>";
    }
});