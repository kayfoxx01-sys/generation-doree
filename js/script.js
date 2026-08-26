/* ==========================================
   FORMULAIRE ASSISTANCE
========================================== */

const assistanceForm = document.getElementById("assistanceForm");
const successNotification = document.getElementById("successNotification");


if (assistanceForm && successNotification) {

    assistanceForm.addEventListener("submit", function (event) {

        event.preventDefault();


        /*
         * Pour le moment, on simule l'envoi.
         * Le système d'assistance réel pourra être
         * connecté plus tard.
         */


        successNotification.classList.add("show");


        assistanceForm.reset();


        setTimeout(function () {

            successNotification.classList.remove("show");

        }, 5000);

    });

}