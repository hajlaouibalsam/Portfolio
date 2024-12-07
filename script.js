


 AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });

    AOS.init();

    // Ouvre la modale
    function openModal(id) {
      document.getElementById(id).style.display = "block";
    }

    // Ferme la modale
    function closeModal(id) {
      document.getElementById(id).style.display = "none";
    }


    function calculateScore() {
      var score = 0;
      var totalQuestions = 5;  // Nombre total de questions

      // On vérifie les réponses pour chaque question
      for (var i = 1; i <= totalQuestions; i++) {
        var selectedAnswer = document.querySelector('input[name="q' + i + '"]:checked');
        if (selectedAnswer) {
          score += parseInt(selectedAnswer.value);  // Ajouter la valeur de la réponse sélectionnée
        }
      }

      // Affichage du score
      var scoreDiv = document.getElementById('score');
      scoreDiv.innerHTML = "<h3>Votre score : " + score + " / " + totalQuestions + "</h3>";
      scoreDiv.style.display = "block"; // Afficher le score après le calcul
    }