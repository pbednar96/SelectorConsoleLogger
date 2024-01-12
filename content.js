window.addEventListener('load', function() {
    document.addEventListener("click", function (event) {
        var url = window.url;
        var selector = getFullPath(event.target);
        console.log("Page:", url, "Selector: ", selector);
    });
  });

  function getCssSelector(element) {
    if (element.id) {
      return "#" + element.id;
    }
    if (element.className) {
      return element.tagName.toLowerCase() + "." + element.className.split(" ").join(".");
    }
    if (element === document.body) {
      return "body";
    }
    return element.tagName.toLowerCase();
  }

  function getFullPath(element) {
    var selector = getCssSelector(element);
    if (element === document.body) {
      return selector;
    }
    return getFullPath(element.parentNode) + " > " + selector;
  }