const GetDialog = document.getElementById('dialog');
function showDialog() {
    dialog.showModal();
}
function closeDialog() {
    dialog.close();
}
GetDialog.addEventListener("click", (e) => {
    if (!desc.contains(e.target)) {
        closeDialog();
    }
});