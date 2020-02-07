// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgU3QcyeccPaT2l0UjMBljYNrAgNIishE",
    authDomain: "learning-muslim.firebaseapp.com",
    databaseURL: "https://learning-muslim.firebaseio.com",
    projectId: "learning-muslim",
    storageBucket: "learning-muslim.appspot.com",
    messagingSenderId: "1081178276469",
    appId: "1:1081178276469:web:2f71be4aae5ede5db5ae3c",
    measurementId: "G-YWV6LZH0HV"
};
// Initialize Firebase

if (!firebase.apps.length) {

    firebase.initializeApp(firebaseConfig);

    // Initialize Performance Monitoring and get a reference to the service
    const perf = firebase.performance();
}


const db = firebase.firestore();

(function() {
    "use strict";

    // Fetch the form we want to apply custom Bootstrap validation styles to
    const form = document.getElementById("waitListForm");

    if(form )form.addEventListener(
        "click",
        function(event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                const data = {
                    name: form["name"].value,
                    email: form["email"].value
                };

                db.collection("wait-list")
                    .add(data)
                    .then(function(docRef) {
                        console.log(
                            "Document written with ID: ",
                            docRef.id
                        );
                        $("#waitListCenter").modal("hide");
                    })
                    .catch(function(error) {
                        console.error(
                            "Error adding document: ",
                            error
                        );
                        $("#waitListCenter").modal("hide");
                    });
            }

            form.classList.add("was-validated");
        },
        false
    );

})();

function click_70dd41e8ca6019dfd8548ed1061fc7cc(aform_reference) {
    const aForm = aform_reference;
    aForm["amount"].value =
        Math.round(aform["amount"].value * Math.pow(10, 2)) /
        Math.pow(10, 2);
}
