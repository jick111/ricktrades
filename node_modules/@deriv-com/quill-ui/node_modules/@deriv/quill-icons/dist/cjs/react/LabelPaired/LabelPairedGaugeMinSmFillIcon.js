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
const LabelPairedGaugeMinSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 10.75a6.95 6.95 0 0 1 3.5-6.043c2.16-1.258 4.813-1.258 7 0C12.66 5.965 14 8.262 14 10.75a7.02 7.02 0 0 1-3.5 6.07c-2.187 1.258-4.84 1.258-7 0A6.96 6.96 0 0 1 0 10.75m7.875-4.375A.9.9 0 0 0 7 5.5a.88.88 0 0 0-.875.875c0 .492.383.875.875.875a.88.88 0 0 0 .875-.875M7 15.125c.957 0 1.75-.766 1.75-1.75 0-.957-.793-1.75-1.75-1.75-.41 0-.766.137-1.04.355L2.735 9.984c-.3-.191-.71-.082-.902.22-.191.3-.082.71.219.901l3.199 1.997v.273c0 .984.766 1.75 1.75 1.75M4.813 7.688a.9.9 0 0 0-.875-.875.88.88 0 0 0-.876.875c0 .492.383.875.876.875a.88.88 0 0 0 .874-.876m6.562 3.937a.88.88 0 0 0 .875-.875.9.9 0 0 0-.875-.875.88.88 0 0 0-.875.875c0 .492.383.875.875.875m-.437-3.937a.9.9 0 0 0-.876-.875.88.88 0 0 0-.874.875c0 .492.382.875.874.875a.88.88 0 0 0 .876-.876' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'c7b2ca8e6efa28ee7bb6458983d63ef1__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedGaugeMinSmFillIcon);
exports.default = ForwardRef;
