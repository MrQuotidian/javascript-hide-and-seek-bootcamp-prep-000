function getFirstSelector( selector ) {
  return document.querySelector( selector )
}

function nestedTarget() {
  return document.querySelector( "#nested .target" )
}

function increaseRankBy( n ) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < lis.length; i++) {
    let x = parseInt(lis[i].innerHTML, 10)
    lis[i].innerHTML = x+n
  }
}

function deepestChild() {
  const grand = document.getElementById("grand-node")
  var nodes = grand.childNodes
  var deeper_nodes = []

  do {
    for( let i in nodes ) {
      let n = nodes[i].children
      if( typeof n != 'undefined' ) {
        deeper_nodes.push(nodes[i])
      }
    }

    console.log(deeper_nodes)

    if( deeper_nodes.length > 0 ) {
      nodes = deeper_nodes.slice(0)
      deeper_nodes = []
    }
    else { return nodes[0] }

  } while( nodes.length > 0 )
}
