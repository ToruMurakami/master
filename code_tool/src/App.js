import React, { useEffect, useState } from "react";

const App = () => {
  const [input_text, setText_input] = useState("");
  const [output_text, setText_output] = useState("");

  useEffect(() => {
    var text = input_text.replace(/\r\n|\r/g, "\n");
    var lines = text.split("\n");
    var outArray = new Array();
    var num;
    if (input_text != "") {
      //1行ごとリストに挿入
      for (var i = 0; i < lines.length; i++) {
        num = "0" + (i + 1).toString();
        if (num.length == 3) {
          num = num.slice(1);
        }

        outArray.push(
          " <li>" +
            num +
            ":  " +
            lines[i]
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/ /g, "&nbsp;") +
            "</li>\n"
        );
      }
      setText_output("<ul>\n" + outArray.join("") + "</ul>");
    }
  });

  return (
    <div className="App">
      <textArea
        value={input_text}
        className="inputArea"
        onChange={(event) => setText_input(event.target.value)}
      />
      <textArea class="outputArea" id="outputArea">
        {output_text}
      </textArea>
    </div>
  );
};

export default App;
