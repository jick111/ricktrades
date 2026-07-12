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
exports.MarketDerivedBearIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const MarketDerivedBearIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#a6a5b6f3d5d4a789d8ec3a08b19474b5__a)' },
        React.createElement("path", { fill: '#414652', d: 'M32 8a8 8 0 1 1-16 0 8 8 0 0 1 16 0' }),
        React.createElement("path", { fill: '#fff', d: 'M28.101 4.082c1.323.393 1.217 2.412-.529 2.917h-.053l.37 1.121.583 1.795c-.477 1.459-2.329 1.907-2.329 1.907l-.423.73a.84.84 0 0 1-.741.448h-1.905a.91.91 0 0 1-.741-.393l-.423-.729s-1.852-.505-2.329-1.907l.582-1.795.37-1.121-.105-.056c-1.746-.505-1.852-2.524-.53-2.917 1.06-.336 1.377.449 1.483.785l.952-.28c.53-.168 1.111-.224 1.694-.224.582 0 1.164.056 1.693.224l.9.28c.052-.336.423-1.121 1.481-.785' }),
        React.createElement("path", { fill: '#FF444F', d: 'M32 32h-8v-2h4.586L19 20.414l-5 5-14-14V8.586l14 14 5-5 11 11V24h2z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a6a5b6f3d5d4a789d8ec3a08b19474b5__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h32v32H0z' })))));
exports.MarketDerivedBearIcon = MarketDerivedBearIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.MarketDerivedBearIcon);
exports.default = ForwardRef;
