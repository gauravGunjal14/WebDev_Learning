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

      <div className="user">
        <button className="profile"><img src="https://img.icons8.com/?size=100&id=12438&format=png&color=000000" alt="profile icon" className="profile-img"/>Profile</button>
        <button className="wishlist"><img src="https://img.icons8.com/?size=100&id=lFyaayFdhpED&format=png&color=000000" alt="wishlist icon" className="wishlist-img" />Wishlist</button>
        <button className="bag"><img src="https://img.icons8.com/?size=100&id=TTpVm8tPePng&format=png&color=000000" alt="bag icon" className="bag-img" />Bag</button>
      </div>
    </div>
  );
}