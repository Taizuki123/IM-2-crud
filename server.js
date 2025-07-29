const express = require("express");
const app = express();
const contact = require("./contact.json");

app.use(express.json());

app.get("/api/contact", function (req, res) {
  res.json(contact);
});

app.post("/api/like", function (req, res) {
  res.json({
    gege: "gege",
  });
});

app.put("/api/contact/:index", function (req, res) {
  const index = parseInt(req.params.index);
  if (index < 0 || index >= contact.length) {
    return res.status(404).json({ message: "Contact not found" });
  }
  contact[index] = { ...contact[index], ...req.body };
  res.json({ message: "Contact updated", contact: contact[index] });
});

app.delete("/api/contact/:index", function (req, res) {
  const index = parseInt(req.params.index);
  if (index < 0 || index >= contact.length) {
    return res.status(404).json({ message: "Contact not found" });
  }
  const removed = contact.splice(index, 1);
  res.json({ message: "Contact deleted", contact: removed[0] });
});

app.listen(5000, function () {
  console.log(`http://localhost:5000`);
});
