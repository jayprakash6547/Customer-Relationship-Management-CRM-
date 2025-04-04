const router = require("express").Router();
const Lead = require("../models/Lead");
const auth = require("../middleware/auth");
const role = require("../middleware/roles");

router.get("/", auth, role("telecaller"), async (req, res) => {
  const leads = await Lead.find();
  res.json(leads);
});

router.post("/", auth, role("telecaller"), async (req, res) => {
  const lead = await Lead.create(req.body);
  res.json(lead);
});

router.put("/:id", auth, role("telecaller"), async (req, res) => {
  const lead = await Lead.findById(req.params.id);
  lead.address = req.body.address;
  await lead.save();
  res.json(lead);
});

router.delete("/:id", auth, role("telecaller"), async (req, res) => {
  await Lead.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

router.post("/status/:id", auth, role("telecaller"), async (req, res) => {
  const lead = await Lead.findById(req.params.id);
  lead.status = req.body.status;
  lead.response = req.body.response;
  lead.updatedBy = req.user.id;
  lead.updatedAt = new Date();
  await lead.save();
  res.json(lead);
});

module.exports = router;
