const React = require('react')
const Default = require('./layouts/Default')

function Show ({bread , index})  {
    // Confirm we are getting our bread data in the terminal.
    // console.log(bread.name)
      return (
        <Default>
        <h3>{bread.name}</h3>
        <p>
          and it
          {
            bread.hasGluten
            ? <span> does </span>
            : <span> does NOT </span>
          }
          have gluten.
          <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>

        </p>
        <img src={bread.image} alt={bread.name} />
        <p>{bread.getBakedBy()}</p>
        <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>
        <li><a href="/breads">Go home</a></li>
      </Default>
      
      )
      
}

module.exports = Show
