function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  const list = document.querySelectorAll(".ranked-list li");

  for(var i = 0; i < list.length; i++) {
      list[i].innerHTML = parseInt(list[i].innerHTML, 10) + n;
  }
}

function deepestChild() {
  var ar = document.querySelectorAll("#grand-node");
  var list = [];
  var node;
  var children;

  for(var i = 0; i < ar.length; i++) {
    list[i] = ar[i];
  }

  while(list.length > 0) {
    node = list.shift();
    children = node.querySelectorAll("div");

    if(children.length === 1) {
        return node;
    }

    for(var j = 0; j < children.length; j++) {
          list.push(children[j]);
    }
  }
}
