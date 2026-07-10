const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzUtDGYf-liULMdGD5z-azQj2vRl8TmdMlPOjJ-TIJpXgbNwYExYZLw70luXH6nZlPc/exec";

const form = document.getElementById("wzForm");

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const nom = document.getElementById("wz-nom").value.trim();
    const telephone = document.getElementById("wz-tel").value.trim();
    const ville = document.getElementById("wz-ville").value;
    const quantite = document.getElementById("wz-qte").value;

    try {

        const response = await fetch(GOOGLE_SCRIPT_URL, {

            method: "POST",

            body: new URLSearchParams({

                nom,
                telephone,
                ville,
                quantite

            })

        });

        const result = await response.text();

        alert("Commande envoyée avec succès !");

        form.reset();

    } catch (err) {

        console.error(err);

        alert("Erreur lors de l'envoi.");

    }

});