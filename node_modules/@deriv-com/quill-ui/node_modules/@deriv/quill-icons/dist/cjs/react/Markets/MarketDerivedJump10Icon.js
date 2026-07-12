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
exports.MarketDerivedJump10Icon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const MarketDerivedJump10Icon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#FF444F', fillRule: 'evenodd', d: 'M4 12v2H2v-2zM8 12v4H6v-4zM12 12v17h-2V12zM16 26v6h-2v-6z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#0AA0B0', fillRule: 'evenodd', d: 'M20 22v7h-2v-7zM24 0v26h-2V0zM28 4v8h-2V4zM32 8v4h-2V8z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#414652', d: 'M10.064 6.728q-.184.352-.664.352t-.664-.352-.184-.992V4.68q0-.64.184-.992t.664-.352.664.352.184.992v1.056q0 .64-.184.992' }),
    React.createElement("path", { fill: '#414652', fillRule: 'evenodd', d: 'M2 0a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm5.776 7.336q.528.76 1.624.76 1.095 0 1.624-.76.528-.76.528-2.128t-.528-2.128T9.4 2.32t-1.624.76-.528 2.128.528 2.128m-4.82-.304V8h3.887v-.968H5.66V2.416H3.82l-1.336 1.76.768.6 1.136-1.488h.072v3.744z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#fff', d: 'M2.955 8v-.968H4.46V3.288h-.072L3.251 4.776l-.768-.6 1.336-1.76h1.84v4.616h1.184V8zM9.4 8.096q-1.095 0-1.624-.76-.528-.76-.528-2.128t.528-2.128T9.4 2.32t1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.48 0 .664-.352t.184-.992V4.68q0-.64-.184-.992T9.4 3.336t-.664.352-.184.992v1.056q0 .64.184.992t.664.352' })));
exports.MarketDerivedJump10Icon = MarketDerivedJump10Icon;
const ForwardRef = (0, react_1.forwardRef)(exports.MarketDerivedJump10Icon);
exports.default = ForwardRef;
