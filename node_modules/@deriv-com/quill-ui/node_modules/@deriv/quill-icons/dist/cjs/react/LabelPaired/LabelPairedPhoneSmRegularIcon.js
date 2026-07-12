"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_1 = require("react");
const LabelPairedPhoneSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm10.254 11.297 3.062 1.312c.493.192.766.711.657 1.23l-.657 3.063c-.109.492-.546.875-1.066.875-.191 0-.355-.027-.52-.027-.109 0-.246 0-.355-.027C5.004 17.285 0 11.98 0 5.5c0-.492.355-.957.848-1.066l3.062-.657c.52-.109 1.04.164 1.23.657l1.313 3.062c.192.438.082.957-.3 1.258l-1.122.93a8.5 8.5 0 0 0 3.035 3.035l.93-1.121c.3-.383.82-.493 1.258-.301m1.969 5.578c.109 0 .191-.055.218-.164l.657-3.063c.027-.109-.028-.191-.11-.246L9.926 12.09a.32.32 0 0 0-.274.055l-.902 1.12a.88.88 0 0 1-1.121.192 8.9 8.9 0 0 1-3.336-3.336A.88.88 0 0 1 4.484 9l1.121-.902a.32.32 0 0 0 .055-.274L4.348 4.762c-.055-.082-.137-.137-.246-.11l-3.063.657c-.11 0-.164.109-.164.191 0 6.29 5.086 11.375 11.348 11.375' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'e1428fe7438032d7a9137ad11bb596f8__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPhoneSmRegularIcon);
exports.default = ForwardRef;
