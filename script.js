document.getElementById("spinBtn").addEventListener("click", function() {
    let wheel = document.getElementById("wheel");

    // Resetta la rotazione
    wheel.style.transition = "none";
    wheel.style.transform = "rotate(0deg)";
    
    setTimeout(() => {
        // Ora applica una nuova rotazione con animazione
        let randomDegree = Math.floor(Math.random() * 360) + 1440; // Almeno 4 giri completi
        wheel.style.transition = "transform 3s ease-out";
        wheel.style.transform = `rotate(${randomDegree}deg)`;

        setTimeout(() => {
            const objectives = [
                ["1. Povertà zero", "Donare vestiti e cibo, sostenere ONG, fare volontariato"],
                ["2. Fame zero", "Evitare sprechi alimentari, comprare locale e stagionale"],
                ["3. Salute e benessere", "Promuovere sport, evitare cattive abitudini, sostenere ospedali"],
                ["4. Istruzione di qualità", "Donare libri, partecipare a programmi di tutoring"],
                ["5. Parità di genere", "Supportare le donne, combattere stereotipi, promuovere l'equità"],
                ["6. Acqua pulita e igiene", "Ridurre consumo d'acqua, evitare inquinamento"],
                ["7. Energia pulita e accessibile", "Utilizzare energia rinnovabile, ridurre sprechi"],
                ["8. Lavoro dignitoso e crescita economica", "Supportare imprese etiche, evitare lavoro minorile"],
                ["9. Industria, innovazione e infrastrutture", "Sostenere tecnologie verdi, promuovere ricerca"],
                ["10. Ridurre le disuguaglianze", "Supportare politiche di inclusione, promuovere il rispetto"],
                ["11. Città e comunità sostenibili", "Usare trasporto pubblico, riciclare, sostenere spazi verdi"],
                ["12. Consumo responsabile", "Ridurre plastica, riutilizzare, comprare da aziende etiche"],
                ["13. Lotta al cambiamento climatico", "Ridurre CO₂, piantare alberi, usare meno energia"],
                ["14. Vita sott'acqua", "Evitare plastica nei mari, proteggere habitat marini"],
                ["15. Vita sulla Terra", "Proteggere foreste, rispettare biodiversità"],
                ["16. Pace e giustizia", "Promuovere diritti umani, sostenere ONG di pace"],
                ["17. Partnership per gli obiettivi", "Collaborare per il cambiamento, sensibilizzare"]
            ];
            let selectedIndex = Math.floor(Math.random() * objectives.length);
            document.getElementById("result").innerHTML = `<strong>Obiettivo:</strong> ${objectives[selectedIndex][0]}<br><strong>Cosa puoi fare:</strong> ${objectives[selectedIndex][1]}`;
        }, 3000);
    }, 50);
});
