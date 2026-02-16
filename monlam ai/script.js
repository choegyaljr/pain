const input = document.getElementById('note-input');
const addButton = document.getElementById('add-button');
const list = document.getElementById('notes-list');

// Add behaviour
addButton.addEventListener('click', () => {
    const text = input.value.trim();

    // Constraint: No empty notes
    if (!text) return;

    // Create card elements
    const card = document.createElement('article');
    const noteText = document.createElement('p');
    const deleteBtn = document.createElement('button');

    noteText.textContent = text;
    deleteBtn.textContent = 'Delete';

    // Delete behaviour
    deleteBtn.addEventListener('click', () => {
        card.remove();
    });

    // Assemble and Append
    card.append(noteText, deleteBtn);
    list.appendChild(card);

    // Reset input
    input.value = '';
});
