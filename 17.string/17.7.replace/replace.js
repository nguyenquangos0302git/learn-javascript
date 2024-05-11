"easy frontend".replace(" ", "-"); // easy-frontend
"easy frontend".replace(" ", ""); // easyfrontend
"easy frontend".replace("easy", "Easy"); // Easy frontend
"easy frontend".replace("easy", ""); // ' frontend'
// replace the first match only
"easy easy frontend".replace("easy", ""); // ' easy frontend'

"learn easy frontend".replaceAll(" ", "-"); // 'learn-easy-frontend'
"learn easy frontend easy".replaceAll("easy", ""); // 'learn frontend '
