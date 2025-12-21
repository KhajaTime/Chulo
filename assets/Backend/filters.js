document.addEventListener('DOMContentLoaded', () => {
    const searchInputs = [
        document.getElementById('navSearchInput')
    ];
    const foodCards = document.querySelectorAll('.food-preview');

    searchInputs.forEach(input => {
        if (!input) return;

        input.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();

            // Sync values
            searchInputs.forEach(otherInput => {
                if (otherInput && otherInput !== input) {
                    otherInput.value = query;
                }
            });

            // First filter visible cards
            foodCards.forEach(card => {
                const foodName = card.querySelector('.food-name').textContent.toLowerCase();

                if (foodName.includes(query)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });

            // Then check sections and hide if empty
            const containers = document.querySelectorAll('.food-grid-container');
            containers.forEach(container => {
                const visibleCards = Array.from(container.children).filter(child => child.style.display !== 'none');
                const sectionTitle = container.previousElementSibling;

                if (visibleCards.length > 0) {
                    container.style.display = 'grid';
                    if (sectionTitle && sectionTitle.classList.contains('section-title')) {
                        sectionTitle.style.display = 'block';
                    }
                } else {
                    container.style.display = 'none';
                    if (sectionTitle && sectionTitle.classList.contains('section-title')) {
                        sectionTitle.style.display = 'none';
                    }
                }
            });
        });
    });
});
