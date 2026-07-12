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
const DerivLightIcWarningIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 64 65', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#206a1ffc1fbeb82cf9a57a7b589b2d74__a)' },
        React.createElement("path", { fill: '#FFAD3A', fillRule: 'evenodd', d: 'M64 32.133c0-17.673-14.328-32-32-32s-32 14.328-32 32 14.328 32 32 32 32-14.328 32-32', clipRule: 'evenodd', opacity: 0.2 }),
        React.createElement("path", { fill: '#FFAD3A', fillRule: 'evenodd', d: 'M55 32.133c0-12.702-10.298-23-23-23s-23 10.298-23 23 10.298 23 23 23 23-10.298 23-23', clipRule: 'evenodd', style: {
                mixBlendMode: 'multiply',
            } }),
        React.createElement("path", { fill: '#fff', fillRule: 'evenodd', d: 'M32.618 34.542a1.6 1.6 0 0 0 1.071-.516c.33-.356.4-.818.427-.999l.005-.033.932-5.783q.055-.343.055-.691v-3.038c0-.738-.176-1.906-1.207-2.482a2.85 2.85 0 0 0-1.434-.367 2.86 2.86 0 0 0-1.38.371c-1.024.576-1.196 1.738-1.196 2.47v3.04q0 .355.057.705l.95 5.776.005.033c.028.182.1.647.434 1.003.318.34.783.544 1.281.511m-2.728 7.245v.474c0 .598.183 1.225.677 1.698.49.47 1.168.674 1.931.674s1.443-.205 1.934-.675c.494-.473.676-1.1.676-1.697v-.474c0-.598-.182-1.225-.676-1.698-.49-.47-1.17-.674-1.934-.674-.762 0-1.44.204-1.93.674-.495.473-.677 1.1-.677 1.698', clipRule: 'evenodd' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '206a1ffc1fbeb82cf9a57a7b589b2d74__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h64v65H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(DerivLightIcWarningIcon);
exports.default = ForwardRef;
