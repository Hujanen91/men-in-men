const profiles = [
    { 
        name: "Quednau", 
        bio: "En mr know-it-all som absolut inte dagdrömmer om Konrad", 
        image: "image.jpg" // Ändra till namnet på din bildfil
    },
    { 
        name: "Konrad", 
        bio: "Professionell gamer och yapper, är 100% 'straight' ", 
        image: "465054743_8830134577052217_3493146278570007325_n.jpg" // Ändra till namnet på din bildfil
    }
];

// Vi väljer vem som ska visas (index 0 eller 1)
let currentIndex = 0;

function loadProfile(index) {
    const profile = profiles[index];
    document.getElementById('name').innerText = profile.name;
    document.getElementById('bio').innerText = profile.bio;
    document.getElementById('profile-img').src = profile.image;
}

// Körs direkt när sidan laddas
loadProfile(currentIndex);

function handleSwipe(action) {
    if (action === 'nej') {
        // Om de försöker trycka på X
        alert("Felaktigt val. Du kan inte fly från ditt öde. Tryck på hjärtat.");
    } else {
        // Om de trycker på hjärtat
        document.getElementById('match-overlay').classList.remove('hidden');
        
        // Bonus: Spela upp ett litet ljud om du vill (valfritt)
        console.log("Match skapad!");
    }
}

function closeMatch() {
    document.getElementById('match-overlay').classList.add('hidden');
    
    // Växla till den andra kompisen efter att man stängt matchen
    currentIndex = currentIndex === 0 ? 1 : 0;
    loadProfile(currentIndex);
}