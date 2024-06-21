import { modifyHtml, ModifyHandler } from "./libs/modifier";
import { keywords } from "./keywords";
import { text2Button } from "./libs/button";


const handler: ModifyHandler = {
  ontext(data) {
    const modifiedData = text2Button(data, keywords);
    return { data: modifiedData };
  }
};

const bodyhtml = document.body.outerHTML;
modifyHtml(bodyhtml, handler).then((modifiedHtml) => {
  document.documentElement.innerHTML = modifiedHtml;
  console.log("HTML modified successfully!: ", modifiedHtml);
}).catch((error) => {
  console.error("Error modifying HTML:", error);
});

export { }
