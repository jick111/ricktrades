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
exports.CurrencyEurIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const CurrencyEurIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#283991', d: 'M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16' }),
    React.createElement("path", { fill: '#F8D12E', d: 'm16.352 4.38-.39-1.2-.39 1.2h-1.263l1.022.741-.39 1.2 1.02-.742 1.022.742-.39-1.2 1.021-.742zM16.352 27.037l-.39-1.2-.39 1.2h-1.263l1.022.742-.39 1.2 1.02-.741 1.022.741-.39-1.2 1.021-.742zM22.18 5.187l.39 1.2h1.262l-1.021.743.39 1.2-1.021-.742-1.021.742.39-1.2-1.021-.742h1.262zM26.812 10.573l-.39-1.2-.39 1.2H24.77l1.021.742-.39 1.2 1.022-.741 1.02.742-.39-1.2 1.022-.743zM26.524 19.949l.39 1.2h1.262l-1.022.742.39 1.2-1.02-.741-1.022.741.39-1.2-1.02-.742h1.262zM6.044 10.573l-.39-1.2-.39 1.2H4.003l1.021.742-.39 1.2 1.021-.741 1.021.742-.39-1.2 1.021-.743zM27.406 14.417l.39 1.2h1.262l-1.021.742.39 1.2-1.021-.741-1.021.741.39-1.2-1.021-.742h1.261zM5.08 15.617l-.39-1.2-.39 1.2H3.038l1.02.742-.39 1.2 1.022-.741 1.021.741-.39-1.2 1.02-.742zM5.518 19.949l.39 1.2h1.261l-1.02.742.39 1.2-1.021-.741-1.022.741.39-1.2-1.02-.742h1.262zM22.753 25.513l-.39-1.2-.39 1.2h-1.262l1.02.742-.39 1.2 1.022-.741 1.02.742-.39-1.2 1.022-.743zM9.945 5.187l.39 1.2h1.262l-1.021.743.39 1.2-1.021-.742-1.021.742.39-1.2-1.021-.742h1.262zM9.874 25.437l-.39-1.2-.39 1.2H7.832l1.021.741-.39 1.2 1.021-.74 1.021.74-.39-1.2 1.021-.741z' })));
exports.CurrencyEurIcon = CurrencyEurIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.CurrencyEurIcon);
exports.default = ForwardRef;
