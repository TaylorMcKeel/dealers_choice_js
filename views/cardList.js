const html = require("html-template-tag");

module.exports = (cards)=> html `<!DOCTYPE html>
<html>
<head>
  <title>My Favorite Pokemon</title>
  <link rel="stylesheet" href="/style.css" />
</head>
<body>
    <h1>My Favorite Pokemon</h1>
    <div id='cardBox'>
        <ul id='cardList' >
            ${cards.map(card=>{
                return `<a href='/pokemon/${card.id}'><li>
                    <h3>${card.name}</h3>
                    <p>${card.owner}</p>
                </li></a>`
            }).join('')}
        </ul
    </div>
</body>
</html>`;