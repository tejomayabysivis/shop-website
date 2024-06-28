document.querySelectorAll('#services ul li').forEach(item => {
    item.addEventListener('click', event => {
        const service = event.target.dataset.service;
        const details = document.getElementById(`${service}-details`);
        if (details.classList.contains('hidden')) {
            details.classList.remove('hidden');
            details.classList.add('visible');
        } else {
            details.classList.remove('visible');
            details.classList.add('hidden');
        }
    });
});

function closeDescription() {
    document.getElementById('service-description').classList.add('hidden');
}

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your appointment has been booked successfully!');
});
