const { userConnection } = require("../../config/database.config");
const mongoose = require("mongoose");
var conn = mongoose.createConnection(
    userConnection, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    });

const UserSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    salutation: String,
    contact_no: Number,
    mobile_no: String,
    user_name: String,
    gender: String,
    pwd_changed_at: Date,
    profile_image: String,
    email: {
        type: String,
        unique: false
    },
    password: String,
    salt: String,
    status: {
        type: String,
        default: "Inactive"
    },
    updated_by: String,
    created_by: String,
    pwd_history: Array,
    verification: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ['patient', 'superadmin', 'masteradmin', 'orgadmin', 'unitadmin', 'doctor'],
        default: "patient",
    },
    isSignedUp: Boolean
}, {
    timestamps: true
});

const Users = conn.model('Users', UserSchema);

module.exports.Users = Users;