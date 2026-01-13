document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('product-modal');
    const [mImg, mName, mPrice, mDesc] = ['img', 'name', 'price', 'description'].map(id => document.getElementById(`modal-${id}`));

    document.body.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        if (card) {
            mName.innerText = card.querySelector('h3').innerText;
            mPrice.innerText = card.querySelector('.price').innerText;
            mImg.src = card.querySelector('img').src;
            mDesc.innerText = card.dataset.description || "No description available.";
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        } else if (e.target.closest('.buy-now-btn')) {
            // BUYNOW page should came here
            //window.location.href = 'buynow.html';
            console.log("Redirecting to Buy Now page...");
        } else if (e.target.closest('.close-button') || e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});
