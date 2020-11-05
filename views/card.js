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
            ${cards.filter(card=> card.id === req.params.id).map(card=>{
                return `<a href='/'><li>
                    <h3>${card.name}</h3>
                    <p>${card.health}</p>
                    <p>${card.type}</p>
                    <p>${card.owner}</p>
                </li></a>`
            }).join('')}
        </ul
    </div>
</body>
</html>`;