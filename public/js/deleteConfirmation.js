let deleteBtn = document.getElementById('deleteConfirmation');

deleteBtn.addEventListener('click', async(event) =>{
    let url = deleteBtn.getAttribute('data-url');
    let uid = deleteBtn.getAttribute('data-user');
    let response = await fetch(`${url}`, {
        method: 'DELETE'
    })
    if(response.ok){
        window.location.href = `/jobs/${uid}`;
    }
})




