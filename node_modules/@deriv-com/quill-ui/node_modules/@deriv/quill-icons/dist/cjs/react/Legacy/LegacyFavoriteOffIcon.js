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
exports.LegacyFavoriteOffIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyFavoriteOffIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#3aa5b74d79f42f1dd6807384909d77f7__a)' },
        React.createElement("path", { fill: '#333', d: 'm4.256 13.654 3.511-1.847a.5.5 0 0 1 .466 0l3.511 1.847-.67-3.91a.5.5 0 0 1 .143-.443l2.841-2.77-3.926-.57a.5.5 0 0 1-.376-.274L8 2.13 6.244 5.687a.5.5 0 0 1-.376.274l-3.926.57 2.84 2.77a.5.5 0 0 1 .144.442zM8 12.814 3.824 15.01a.5.5 0 0 1-.725-.527l.797-4.65L.518 6.54a.5.5 0 0 1 .277-.852l4.669-.679L7.552.78a.5.5 0 0 1 .896 0l2.088 4.23 4.669.679a.5.5 0 0 1 .277.852l-3.378 3.293.797 4.65a.5.5 0 0 1-.725.527z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '3aa5b74d79f42f1dd6807384909d77f7__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyFavoriteOffIcon = LegacyFavoriteOffIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyFavoriteOffIcon);
exports.default = ForwardRef;
