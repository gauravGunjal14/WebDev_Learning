import React from "react";

const CoinCard = ({coin}) => {
    const cardStyle = {
        border: "1px solid #b1b1b1ff",
        borderRadius: "8px",
        padding: "16px",
        width: "200px",
        margin: "16px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f9f9f9"
    };

    const imageStyle = {
        width: "64px",
        height: "64px",
        marginBottom: "8px",
        objectFit: "contain",
    };

    const infoStyle = {
        margin: "8px 0",
        fontSize: "14px",
        color: "#333"
    };

    return (
        <div style={cardStyle}>
            <img src={coin.image} alt={coin.name} style={imageStyle} />
            <h3 style={infoStyle}>{coin.name}</h3>
            <p style={infoStyle}>Symbol: {coin.symbol.toUpperCase()}</p>
            <p style={infoStyle}>Current Price: ${coin.current_price}</p>
            <p style={infoStyle}>Market Cap: ${coin.market_cap.toLocaleString()}</p>
            <p style={infoStyle}>24h Change: {coin.price_change_percentage_24h.toFixed(2)}%</p>
        </div>
    );
}

export default CoinCard;
