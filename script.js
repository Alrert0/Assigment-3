document.getElementById('calculate').addEventListener('click', calculatePrice);

function calculatePrice() {
    let basePrice = 100;
    
    let educationFactor = {
        'bachelor': 1.5,
        'college': 1.2,
        'high_school': 1.05,
        'middle_school': 0.9
    };
    let education = document.getElementById('education').value;
    if (education !== 'blank') {
        basePrice *= educationFactor[education];
    }

    let networthFactor = {
        'more_than_10000': 2,
        'between_5000_10000': 1.5,
        'less_than_5000': 1.2
    };
    let networth = document.getElementById('networth').value;
    if (networth !== 'blank') {
        basePrice *= networthFactor[networth];
    }

    let castePrice = {
        'brahmin': 100,
        'kshatriya': 50,
        'vaishya': 20,
        'shudra': 10,
        'untouchable': -50
    };
    let caste = document.getElementById('caste').value;
    if (caste !== 'blank') {
        basePrice += castePrice[caste];
    }

    if (document.getElementById('music').checked) basePrice += 10;
    if (document.getElementById('cook').checked) basePrice += 20;
    if (document.getElementById('easygoing').checked) basePrice += 15;
    if (document.getElementById('sing').checked) basePrice += 10;

    let ageFactors = document.getElementsByName('age');
    ageFactors.forEach(age => {
        if (age.checked) {
            basePrice *= parseFloat(age.value);
        }
    });

    if (document.getElementById('gossip_parents').checked) basePrice *= 0.85;
    if (document.getElementById('gossip_character').checked) basePrice *= 0.9;
    if (document.getElementById('general_gossip').checked) basePrice -= 20;

    document.getElementById('result').innerHTML = "Final Dowry Price: $" + basePrice.toFixed(2);
}
