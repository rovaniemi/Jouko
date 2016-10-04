// Jos Jougo niin Jouko

var elements = document.getElementsByTagName('*');
for (var p = 0; p < elements.length; p++) {
    var element = elements[p];

    for (var x = 0; x < element.childNodes.length; x++) {
        var node = element.childNodes[x];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var whiteSpace = /(\s|[-])([Jj]ou(kk|k)o)/ig
                begins = /^([Jj]ou(kk|k)o)/igm
                justJouko = /([Jj]ou(kk|k)o)/ig

            if(!text.match(whiteSpace))
              if(text.match(begins))
                replText = text.replace(begins, 'Jouko');
              else
                replText = text.replace(justJouko, '-Jouko');
            else if(text.match(justJouko))
              replText = text.replace(justJouko, 'Jouko');

            if (replText !== text)
                element.replaceChild(document.createTextNode(replText), node);
        }
    }
}
