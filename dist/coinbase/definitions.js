"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentStatus = void 0;
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["NEW"] = "NEW";
    PaymentStatus["PENDING"] = "Pending";
    PaymentStatus["COMPLETED"] = "Completed";
    PaymentStatus["EXPIRED"] = "Expired";
    PaymentStatus["UNRESOLVED"] = "Unresolved";
    PaymentStatus["UNRESOLVED_UNDERPAID"] = "Unresolved (Underpaid)";
    PaymentStatus["UNRESOLVED_OVERPAID"] = "Unresolved (Overpaid)";
    PaymentStatus["UNRESOLVED_DELAYED"] = "Unresolved (Delayed)";
    PaymentStatus["UNRESOLVED_MULTIPLE"] = "Unresolved (Multiple)";
    PaymentStatus["UNRESOLVED_OTHER"] = "Unresolved (Other)";
    PaymentStatus["RESOLVED"] = "Resolved";
    PaymentStatus["CANCELLED"] = "Cancelled";
    PaymentStatus["PENDING_REFUND"] = "Pending Refund";
    PaymentStatus["REFUNDED"] = "Refunded";
})(PaymentStatus = exports.PaymentStatus || (exports.PaymentStatus = {}));
//# sourceMappingURL=definitions.js.map