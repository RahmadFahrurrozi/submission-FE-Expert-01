import '../components/galerry-section.js';
import '../components/about-section.js';

const Home = {
  render() {
    return `
      <hero-section></hero-section>
      <about-section></about-section>
      <section id="menu" class="menu" tabindex="0">
        <h2>Fizzy Bites Menu</h2>
        <div id="menuList" class="menu-list" tabindex="0" role="list" aria-label="Menu items"></div>
      </section>
      <gallery-section></gallery-section>
    `;
  },

  afterRender() {
    // Add any JavaScript functionality needed after the content is rendered
  },
};

export default Home;