export default function Header() {
    return (
        <header className="bg-[#ff5200] text-white flex">
            <div className="my-8 flex container">
                <img className="w-40 h-auto" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="Swiggy logo"></img>
                <div className="text-xl">
                    <a>Swiggy Corporate</a>
                    <a>Partner with us</a>
                    <a className="px-4 py-3 border border-white rounded-2xl">Get the APP
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" aria-label="rating-up-down-icon" aria-hidden="false" strokecolor="#FFFFFF" fillcolor="#FFFFFF">
                            <path d="M12.634 3.45a1 1 0 0 0-1.365 1.462l4.827 4.506c.238.221.44.41.614.577H2.996a1 1 0 0 0 0 2h13.777c-.186.18-.41.39-.677.64l-4.769 4.45a1 1 0 0 0 1.365 
                            1.462l4.817-4.495c.546-.51 1.03-.96 1.367-1.376.365-.449.664-.979.664-1.65 0-.672-.299-1.201-.664-1.65-.338-.415-.821-.866-1.367-1.376z" fill="#FFFFFF" fillOpacity="0.92">
                            </path>
                        </svg>
                    </a>
                    <a className="bg-black rounded-2xl px-4 py-3">Sign in</a>
                </div>
            </div>
            <div></div>
            <div></div>
        </header>
    );
}