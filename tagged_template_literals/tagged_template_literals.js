let course = "Javascript";
let application = "server";

const highlightKeyWord = ([first, ...strings], ...values) => {
  return values
    .reduce(
      (acc, curr) => {
        return [...acc, `<span>${curr}</span>`, strings.shift()];
      },
      [first]
    )
    .join("");
};

const html = highlightKeyWord`${course} is the programe language. ${course} can be used in order to build ${application}.`;

console.log(html);
