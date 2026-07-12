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
exports.MarketDerivedDex900dnIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const MarketDerivedDex900dnIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#a0f5fa3a5742d17920854efe7dce20d4__a)' },
        React.createElement("path", { fill: '#0AA0B0', d: 'M26 22h3v-3h-3zM23 25h3v-3h-3zM29 19h3v-3h-3zM3 9h3V6H3zM6 6h3V3H6zM0 12h3V9H0z' }),
        React.createElement("path", { fill: '#FF444F', d: 'M21 25 12 0H9v3h1.6l9 25H23v-3z' }),
        React.createElement("path", { fill: '#414652', d: 'M0 24a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z' }),
        React.createElement("path", { fill: '#fff', d: 'M6.769 26.536q0 .592-.184 1.112-.177.52-.464.968-.28.44-.64.792a4.7 4.7 0 0 1-.712.592H3.113q.512-.367.92-.696.408-.336.704-.672a3.7 3.7 0 0 0 .496-.68q.192-.352.28-.752l-.072-.024q-.072.16-.176.312a1.1 1.1 0 0 1-.248.272q-.144.112-.344.184a1.4 1.4 0 0 1-.464.072q-.345 0-.648-.12a1.7 1.7 0 0 1-.52-.352A1.7 1.7 0 0 1 2.697 27a2 2 0 0 1-.12-.72q0-.432.144-.792.151-.36.424-.616.28-.264.664-.408t.864-.144q.495 0 .888.16.392.151.656.448.271.288.408.696.144.408.144.912m-2.096.56q.399 0 .624-.216.224-.224.224-.632v-.144q0-.408-.224-.624-.225-.224-.624-.224-.4 0-.624.224-.225.216-.224.624v.144q0 .408.224.632.224.216.624.216M9.502 30.096q-1.096 0-1.624-.76t-.528-2.128.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.479 0 .664-.352.184-.352.184-.992V26.68q0-.64-.184-.992t-.664-.352-.664.352-.184.992v1.056q-.001.64.184.992.184.352.664.352M14.298 30.096q-1.095 0-1.624-.76-.528-.76-.528-2.128t.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.48 0 .664-.352t.184-.992V26.68q.001-.64-.184-.992-.184-.352-.664-.352-.479 0-.664.352-.184.352-.184.992v1.056q0 .64.184.992t.664.352' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a0f5fa3a5742d17920854efe7dce20d4__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h32v32H0z' })))));
exports.MarketDerivedDex900dnIcon = MarketDerivedDex900dnIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.MarketDerivedDex900dnIcon);
exports.default = ForwardRef;
