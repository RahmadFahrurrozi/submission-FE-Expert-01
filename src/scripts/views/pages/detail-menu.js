const DetailMenu = {
    async render() {
        return `
            <section id="detail" class="detail" tabindex="0">
                <div class="detail-content">
                    <div class="detail-text">
                        <h2>Detail Menu</h2>
                        <p>Detail menu restoran</p>
                    </div>
                </div>
            </section>
        `;
    },
    async afterRender() {
        
    }
};

export default DetailMenu;