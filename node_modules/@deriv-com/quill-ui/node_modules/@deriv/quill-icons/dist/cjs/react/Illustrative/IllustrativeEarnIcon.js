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
exports.IllustrativeEarnIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const IllustrativeEarnIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M25.333 15.453v-.786c0-1.1-.9-2-2-2H23.3C22.96 8.933 19.82 6 16 6s-6.96 2.933-7.3 6.667H7.333c-1.1 0-2 .9-2 2V28c0 1.1.9 2 2 2h17.334c1.1 0 2-.9 2-2V17.333c0-.866-.56-1.6-1.334-1.88m0 9.207h-4.666a.67.67 0 0 1-.667-.667v-2.666c0-.367.3-.667.667-.667h4.666zM24 14.667v.666h-.953c.126-.433.206-.88.253-1.333h.033c.367 0 .667.3.667.667m-8-7.334c3.307 0 6 2.694 6 6 0 .694-.12 1.36-.347 2h-2.986V14c0-.733-.6-1.333-1.334-1.333h-2.666v-1.334H18c.367 0 .667-.3.667-.666S18.367 10 18 10h-1.333v-.667c0-.366-.3-.666-.667-.666s-.667.3-.667.666V10h-.666c-.734 0-1.334.6-1.334 1.333v1.334c0 .733.6 1.333 1.334 1.333h2.666v1.333h-6.98a6 6 0 0 1-.346-2c0-3.306 2.693-6 6-6zM7.333 14H8.7c.04.453.127.9.247 1.333H7.333a.677.677 0 0 1-.666-.666c0-.36.306-.667.666-.667m18 14c0 .367-.3.667-.666.667H7.333A.67.67 0 0 1 6.667 28V16.547c.206.073.433.12.666.12h17.334c.366 0 .666.3.666.666v2h-4.666c-1.1 0-2 .9-2 2V24c0 1.1.9 2 2 2h4.666z' }),
        React.createElement("path", { d: 'M22.667 23.333a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333M24 8.667c.367 0 .667-.3.667-.667V5.333c0-.366-.3-.666-.667-.666s-.667.3-.667.666V8c0 .367.3.667.667.667M8.667 8.667c.366 0 .666-.3.666-.667V5.333c0-.366-.3-.666-.666-.666S8 4.967 8 5.333V8c0 .367.3.667.667.667M12 5.333c.367 0 .667-.3.667-.666V3.333c0-.366-.3-.666-.667-.666s-.667.3-.667.666v1.334c0 .366.3.666.667.666M20.667 5.333c.366 0 .666-.3.666-.666V3.333c0-.366-.3-.666-.666-.666s-.667.3-.667.666v1.334c0 .366.3.666.667.666M16 4c.367 0 .667-.3.667-.667v-.666c0-.367-.3-.667-.667-.667s-.667.3-.667.667v.666c0 .367.3.667.667.667' }))));
exports.IllustrativeEarnIcon = IllustrativeEarnIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.IllustrativeEarnIcon);
exports.default = ForwardRef;
