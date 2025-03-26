"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contract = void 0;
var core_1 = require("@ts-rest/core");
var users_1 = require("./routes/users");
var admin_1 = require("./routes/admin");
var sellers_1 = require("./routes/sellers");
var buyers_1 = require("./routes/buyers");
var staff_1 = require("./routes/staff");
var auth_1 = require("./routes/auth");
var c = (0, core_1.initContract)();
exports.contract = c.router({
    auth: auth_1.authRouter,
    users: users_1.usersRouter,
    admin: admin_1.adminRouter,
    staff: staff_1.staffRouter,
    sellers: sellers_1.sellersRouter,
    buyers: buyers_1.buyersRouter,
}, { pathPrefix: "/api" });
