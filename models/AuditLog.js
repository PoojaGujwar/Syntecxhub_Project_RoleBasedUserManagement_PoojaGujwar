const mongoose = require("mongoose")

const auditSchema = new mongoose.Schema({
    action:{
        type: String,
        required: true
    },
    performedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    targetUser:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    timestamp:{
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model("AuditLog",auditSchema)