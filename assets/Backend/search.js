document.addEventListener('DOMContentLoaded', () => {
    // search and filter logics hereeeeeeeeeeeeeeeeeeee
    const searchInputs = [document.getElementById('navSearchInput')];
    const foodCards = document.querySelectorAll('.food-preview');
    const filterChips = document.querySelectorAll('.filter-chip');
    let currentFilter = 'all';
    let currentQuery = '';

    // Initialize Search Listeners
    searchInputs.forEach(input => {
        if (!input) return;
        input.addEventListener('input', (e) => {
            currentQuery = e.target.value.toLowerCase().trim();
            // Sync other inputs if any
            searchInputs.forEach(otherInput => {
                if (otherInput && otherInput !== input) otherInput.value = currentQuery;
            });
            applyFilters();
        });
    });

    // Initialize Filter Chip Listeners
    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            // Update UI
            filterChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');

            // Update Filter State
            currentFilter = chip.getAttribute('data-filter');
            applyFilters();
        });
    });

    // Main Filter Function
    function applyFilters() {
        foodCards.forEach(card => {
            const foodName = card.querySelector('.food-name').textContent.toLowerCase();
            const type = card.getAttribute('data-type') || '';
            const tags = card.getAttribute('data-tags') || '';

            // Check Search Query
            const matchesSearch = foodName.includes(currentQuery);

            // Check Category Filter
            let matchesFilter = true;
            if (currentFilter !== 'all') {
                if (currentFilter === 'veg' || currentFilter === 'non-veg') {
                    matchesFilter = (type === currentFilter);
                } else {
                    // Start checking tags sweet spicy or whateveralsdjfasdfasdfa
                    matchesFilter = tags.includes(currentFilter);
                }
            }

            // Show/Hide Card
            if (matchesSearch && matchesFilter) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });

        // Hide Empty Sections
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
    }

    //favourite
    initFavorites();
});

// exposed function for onclick
function toggleFavorite(event, id) {
    event.stopPropagation(); // Prevent opening modal

    // Get current favorites
    let favorites = JSON.parse(localStorage.getItem('khajaTimeFavorites')) || [];
    const index = favorites.indexOf(id);

    // Toggle ID in array
    if (index > -1) {
        favorites.splice(index, 1); // Remove
    } else {
        favorites.push(id); // Add
    }

    // Save
    localStorage.setItem('khajaTimeFavorites', JSON.stringify(favorites));

    // Update UI
    updateFavoriteBtnUI(id, index === -1);
}

function initFavorites() {
    const favorites = JSON.parse(localStorage.getItem('khajaTimeFavorites')) || [];
    favorites.forEach(id => {
        updateFavoriteBtnUI(id, true);
    });
}

function updateFavoriteBtnUI(id, isFavorite) {
    // Find button(s) for this ID (in case usage in multiple places) neardy stuff yk
    // We look for food-preview with data-id="id" then inside find .favorite-btn
    const cards = document.querySelectorAll(`.food-preview[data-id="${id}"]`);
    cards.forEach(card => {
        const btn = card.querySelector('.favorite-btn');
        if (btn) {
            if (isFavorite) {
                btn.classList.add('active');
                btn.innerHTML = '<i class="fas fa-heart"></i>'; // Solid
            } else {
                btn.classList.remove('active');
                btn.innerHTML = '<i class="far fa-heart"></i>'; // Outline
            }
        }
    });
}
