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
const PaymentMethod1foryouWhiteIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 128 80', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: '#fff' },
        React.createElement("path", { d: 'm41.47 59.239 12.46 8.465c1.129.825 2.735-.044 2.735-1.433V22.122c0-.564-.26-1.128-.738-1.432l-12.112-8.335c-1.302-.912-3.082.043-3.082 1.606V57.85c0 .564.26 1.085.738 1.389M24.54 27.245l9.725 4.819c.738.39 1.65.347 2.387-.087l.651-.348c.608-.39.739-1.041.695-1.736l-.347-12.068c-.044-.781-.955-1.216-1.606-.738L24.41 25.595c-.607.434-.52 1.346.13 1.65M75.679 26.507v3.733h-7.207v2.648h5.514v3.69h-5.644v4.515h-4.254v-14.5c.043 0 11.46 0 11.59-.086' }),
        React.createElement("path", { fillRule: 'evenodd', d: 'M91.437 33.887c0 4.297-3.473 7.727-7.814 7.727s-7.814-3.43-7.814-7.727 3.516-7.727 7.814-7.727c4.297 0 7.814 3.43 7.814 7.727m-7.814-3.517a3.64 3.64 0 0 0-3.647 3.647 3.64 3.64 0 0 0 3.647 3.646 3.613 3.613 0 0 0 3.646-3.646 3.64 3.64 0 0 0-3.646-3.647M83.623 58.631c4.34 0 7.814-3.43 7.814-7.727s-3.516-7.727-7.814-7.727-7.814 3.43-7.814 7.727 3.473 7.727 7.814 7.727m-3.647-7.597a3.64 3.64 0 0 1 3.647-3.646 3.64 3.64 0 0 1 3.646 3.646 3.613 3.613 0 0 1-3.646 3.647c-1.997 0-3.647-1.65-3.647-3.647M99.511 26.637c-1.693-.304-6.511-.217-4.949-.217h-2.257v15.02h4.21v-4.862h1.086l2.3 4.602h4.385l-2.735-5.296c1.39-1.042 2.301-2.518 2.301-4.168 0-2.474-2.084-4.645-4.34-5.079m.044 5.123c0 .781-.652 1.432-1.433 1.432h-1.78v-2.865h1.78c.781 0 1.433.651 1.433 1.433', clipRule: 'evenodd' }),
        React.createElement("path", { d: 'M64.218 43.698h4.472l2.04 4.514 2.17-4.558h4.428L72.77 52.64v5.774h-4.08v-5.687zM104.634 53.074v-3.82l-.087-5.513h-4.037v9.073c0 1.129-.912 2.04-2.04 2.04a2.04 2.04 0 0 1-2.041-2.04v-9.16h-4.124v9.42c0 3.17 2.605 5.774 5.774 5.774h.781c3.169 0 5.774-2.605 5.774-5.774' }))));
const ForwardRef = (0, react_1.forwardRef)(PaymentMethod1foryouWhiteIcon);
exports.default = ForwardRef;
