export default function Header() {
  return (
    <div className="header">

      <img src="https://aartisto.com/wp-content/uploads/2020/11/myntra-930x620.png" alt="" className="logo" />
      <div className="option">
        <button>MEN</button>
        <button>WOMEN</button>
        <button>KIDS</button>
        <button>HOME AND LIVING</button>
        <button>BEAUTY</button>
        <button>STUDIO</button>
      </div>

      <input type="text" name="search" id="search" placeholder="&#8981; Search for products brands and more" />

      <div className="profile">
        <button>Profile</button>
        <button>Wishlist</button>
        <button>Bag</button>
      </div>
    </div>
  );
}