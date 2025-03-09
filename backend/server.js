const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/calculate", (req, res) => {
    const { expression } = req.body;

    try {
        // Перевірка введення
        if (!'/^[0-9+\-*/().\s]+$/'.test(expression)) {
            return res.status(400).json({ error: "Invalid characters in expression" });
        }

        // Обчислення виразу
        const result = eval(expression);
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: "Invalid expression" });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));