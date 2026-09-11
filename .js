/* =========================================
   MENU MOBILE
========================================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

    });


    const links = nav.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

        });

    });

}


/* =========================================
   FORMULÁRIO / WHATSAPP
========================================= */

const formulario = document.getElementById("formulario");

if (formulario) {

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();


        const nome =
            document.getElementById("nome").value.trim();

        const telefone =
            document.getElementById("telefone").value.trim();

        const evento =
            document.getElementById("evento").value;

        const convidados =
            document.getElementById("convidados").value;

        const data =
            document.getElementById("data").value;

        const observacoes =
            document.getElementById("observacoes").value.trim();


        /* Formata a data */

        let dataFormatada = data;

        if (data) {

            const partes = data.split("-");

            if (partes.length === 3) {

                dataFormatada =
                    `${partes[2]}/${partes[1]}/${partes[0]}`;

            }

        }


        /* Número do WhatsApp do buffet */

        const numeroWhatsApp = "5511999999999";


        /* Mensagem */

        const mensagem =
            `Olá! Gostaria de solicitar um orçamento para meu evento.%0A%0A` +

            `*Nome:* ${nome}%0A` +

            `*WhatsApp:* ${telefone}%0A` +

            `*Tipo de evento:* ${evento}%0A` +

            `*Número de convidados:* ${convidados}%0A` +

            `*Data do evento:* ${dataFormatada}%0A` +

            `*Observações:* ${observacoes || "Não informado"}`;


        /* Link para WhatsApp */

        const link =
            `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;


        window.open(link, "_blank");

    });

}


/* =========================================
   DATA MÍNIMA DO EVENTO
========================================= */

const campoData = document.getElementById("data");

if (campoData) {

    const hoje = new Date();

    const ano = hoje.getFullYear();

    const mes = String(
        hoje.getMonth() + 1
    ).padStart(2, "0");

    const dia = String(
        hoje.getDate()
    ).padStart(2, "0");


    campoData.min =
        `${ano}-${mes}-${dia}`;

}


/* =========================================
   ANIMAÇÃO AO APARECER NA TELA
========================================= */

const elementosAnimados = document.querySelectorAll(
    ".service-card, .destaque-box, .galeria-item, .contato-card"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


elementosAnimados.forEach(elemento => {

    elemento.style.opacity = "0";

    elemento.style.transform =
        "translateY(25px)";

    elemento.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(elemento);

})