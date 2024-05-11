const words = ["Easy", "Frontend"];
words.join(); // 'Easy,Frontend' as default separator is comma
words.join(""); // 'EasyFrontend'
words.join(" "); // 'Easy Frontend'
words.join("-"); // 'Easy-Frontend'
