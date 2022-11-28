const express = require("express");
const { model } = require("mongoose");
const User = require("../models/User");
const Match = require("../models/Match");

const matchController = {
  create: async (req, res) => {
    const { round, winner, loser } = req.body;
    try {
      const winnerUser = await User.findOne({ username: winner });
      const loserUser = await User.findOne({ username: loser });

      //   return res.json({
      //     winnerUsername,
      //     loserUsername,
      //   });
      //validate
      if (!winnerUser || !loserUser) {
        return res
          .status(400)
          .json({ success: false, message: "username not found" });
      }

      const newMatch = new Match({
        round,
        winner: winnerUser,
        loser: loserUser,
      });
      await newMatch.save();

      res.json({
        success: true,
        message: "Save match",
        match: newMatch,
      });
    } catch (err) {
      res.status(500).json(err.msg);
    }
  },
};

module.exports = matchController;