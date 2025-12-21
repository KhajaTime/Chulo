const dialog = document.getElementById('dialog');
const desc = document.getElementById('desc');

function showDialog() {
    if (dialog) {
        dialog.showModal();
    }
}

function closeDialog() {
    if (dialog) {
        dialog.close();
    }
}

if (dialog && desc) {
    dialog.addEventListener("click", (e) => {
        if (!desc.contains(e.target)) {
            closeDialog();
        }
    });
}