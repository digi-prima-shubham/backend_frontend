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
    org_id: String,
    unit_id: Array,
    patient_id: String,
    doctor_id: String,
    permissions: Array,
    gender: String,
    pwd_changed_at: Date,
    profile_image: String,
    email: {
        type: String,
        unique: false
    },
    email_status: {
        type: String,
        enum: ['LINK_SENT', 'VERIFIED'],
        default: 'LINK_SENT'
    },
    temp_password: String,
    temp_salt: String,
    password: String,
    salt: String,
    status: {
        type: String,
        default: "A"
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