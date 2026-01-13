document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('product-modal');
    const [mImg, mName, mPrice, mDesc] = ['img', 'name', 'price', 'description'].map(id => document.getElementById(`modal-${id}`));

    document.body.addEventListener('click', (e) => {
        const target = e.target;

        if (target.closest('.buy-now-btn')) return;

        const card = target.closest('.product-card');
        if (card) {
            mName.innerText = card.querySelector('h3').innerText;
            mPrice.innerText = card.querySelector('.price').innerText;
            mImg.src = card.querySelector('img').src;
            mDesc.innerText = card.dataset.description || "No description available.";
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        } else if (target.closest('.close-button') || target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});