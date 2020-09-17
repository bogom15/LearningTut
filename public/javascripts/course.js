$('.card.mb-4.shadow-sm').click((clickedElement) => {
    location.href = `http://localhost:3000/course/${clickedElement.currentTarget.dataset.coursetitle}`;
});

$('.mits-nav-heading').click(() => {
    location.href = `http://localhost:3000/`;
});