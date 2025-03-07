const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/calculate", (req, res) => {
    const { num1, num2, operation } = req.body;
    let result;

    switch (operation) {
        case "add": result = num1 + num2; break;
        case "subtract": result = num1 - num2; break;
        case "multiply": result = num1 * num2; break;
        case "divide": result = num2 !== 0 ? num1 / num2 : "Error"; break;
        default: return res.status(400).json({ error: "Invalid operation" });
    }
    res.json({ result });
});

app.listen(5000, () => console.log("Server running on port 5000"));