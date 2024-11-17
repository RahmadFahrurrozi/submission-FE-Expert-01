const FavoriteMenu = {
    async render() {
        return `
            <section id="favorite" class="favorite" tabindex="0">
                <h2>Favorite Menu</h2>
                <div
                    id="favoriteList"
                    class="favorite-list"
                    tabindex="0"
                    role="list"
                    aria-label="Favorite items"
                ></div>
            </section>
        `;
    },

    async afterRender() {

    }
};

export default FavoriteMenu