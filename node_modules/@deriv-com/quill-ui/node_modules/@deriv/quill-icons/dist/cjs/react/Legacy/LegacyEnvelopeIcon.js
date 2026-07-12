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
exports.LegacyEnvelopeIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyEnvelopeIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#FF6444', d: 'M2 16.028c.08 2.865 2.681 4.03 5.387 2.894.552-.23.974-.493 1.702-1.011l.292-.208c1.051-.742 1.584-.93 2.377-.733.713.178 1.182.568 2.194 1.71l.01.013c.389.437.572.637.814.877 1.579 1.735 3.93 2.646 6.316 2.426a1 1 0 0 0-.184-1.992 5.64 5.64 0 0 1-4.689-1.818c-.237-.236-.4-.414-.76-.82l-.01-.013c-1.274-1.437-1.968-2.014-3.206-2.323-1.496-.372-2.534-.006-4.015 1.039l-.3.213c-.611.436-.937.638-1.313.795-1.537.645-2.58.178-2.615-1.105a1 1 0 1 0-2 .056' }),
    React.createElement("path", { fill: '#85ACB0', d: 'M2 3.027c.079 2.902 2.68 4.059 5.395 2.892.688-.29 1.136-.664 1.96-1.504l.1-.102c.884-.901 1.272-1.136 1.846-1.061 1.226.158 1.955.782 3.3 2.565l.158.209c.193.255.321.423.456.594C16.95 8.816 18.701 10 21 10a1 1 0 1 0 0-2c-1.556 0-2.822-.856-4.215-2.62a31 31 0 0 1-.43-.56l-.157-.207c-1.652-2.189-2.71-3.096-4.64-3.345-1.4-.182-2.235.324-3.531 1.644l-.1.103c-.639.651-.948.909-1.315 1.063-1.547.665-2.577.208-2.612-1.105a1 1 0 1 0-2 .054' }),
    React.createElement("path", { fill: '#FF444F', d: 'M2 9.026c.079 2.997 2.644 4.155 5.417 2.883.544-.25.994-.598 1.664-1.217l.262-.243c1.202-1.121 1.675-1.364 2.274-1.115.433.175.832.58 1.395 1.379.049.068.081.115.162.232l.164.237c.139.2.24.34.34.477.207.269 1.109 1.486 1.356 1.8 1.467 1.867 2.89 2.803 5.724 3.511a1 1 0 1 0 .485-1.94c-2.4-.6-3.44-1.285-4.637-2.807-.225-.286-1.117-1.49-1.333-1.772-.125-.168-.668-.95-.627-.892-.77-1.091-1.386-1.717-2.27-2.076-1.605-.665-2.643-.133-4.397 1.503l-.255.237c-.523.483-.846.732-1.142.869-1.58.724-2.546.288-2.582-1.118a1 1 0 0 0-2 .052' })));
exports.LegacyEnvelopeIcon = LegacyEnvelopeIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyEnvelopeIcon);
exports.default = ForwardRef;
