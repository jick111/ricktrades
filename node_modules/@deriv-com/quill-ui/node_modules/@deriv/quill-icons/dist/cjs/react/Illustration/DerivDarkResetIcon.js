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
const DerivDarkResetIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#333', d: 'M2.857 7.125c.474 0 .857.392.857.875 0 2.416 1.92 4.375 4.286 4.375.946 0 1.841-.314 2.57-.873L8.857 11.5A.866.866 0 0 1 8 10.625c0-.483.384-.875.857-.875h3.429c.473 0 .857.392.857.875v3.5a.866.866 0 0 1-.857.875.866.866 0 0 1-.857-.875v-1.098A5.9 5.9 0 0 1 8 14.125c-3.314 0-6-2.742-6-6.125 0-.483.384-.875.857-.875M3.714 1c.474 0 .857.392.857.875v1.098A5.9 5.9 0 0 1 8 1.875c3.314 0 6 2.742 6 6.125a.866.866 0 0 1-.857.875.866.866 0 0 1-.857-.875c0-2.416-1.92-4.375-4.286-4.375a4.2 4.2 0 0 0-2.571.874l1.714.001c.473 0 .857.392.857.875a.866.866 0 0 1-.857.875H3.714a.866.866 0 0 1-.857-.875v-3.5c0-.483.384-.875.857-.875' })));
const ForwardRef = (0, react_1.forwardRef)(DerivDarkResetIcon);
exports.default = ForwardRef;
