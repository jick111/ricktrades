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
exports.MarketDerivedGbpBasketIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const MarketDerivedGbpBasketIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: '#0AA0B0', fillRule: 'evenodd', clipRule: 'evenodd' },
        React.createElement("path", { d: 'M17.515 4.857 21.8 12H27a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h5.2l4.286-7.143a1.766 1.766 0 0 1 3.029 0M13.185 12l2.729-4.605a.1.1 0 0 1 .172 0L18.815 12zM25.72 16a1 1 0 0 1 .97 1.242l-2.5 10a1 1 0 0 1-.97.758H8.78a1 1 0 0 1-.97-.758l-2.5-10A1 1 0 0 1 6.28 16zM10 20a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0zm6-1a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1m4 1a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0z' })),
    React.createElement("path", { fill: '#0D47A1', d: 'M17 1.25C17 .56 17.56 0 18.25 0h12.5C31.44 0 32 .56 32 1.25v7.5c0 .69-.56 1.25-1.25 1.25h-12.5C17.56 10 17 9.44 17 8.75z' }),
    React.createElement("path", { fill: '#fff', d: 'M17 1.25C17 .56 17.56 0 18.25 0h1.003l3.997 2.664V0h2.5v2.664L29.747 0h1.003C31.44 0 32 .56 32 1.25v.252L28.628 3.75H32v2.5h-3.372L32 8.498v.252c0 .69-.56 1.25-1.25 1.25h-1.003L25.75 7.336V10h-2.5V7.336L19.253 10H18.25C17.56 10 17 9.44 17 8.75v-.252l3.372-2.248H17v-2.5h3.372L17 1.502z' }),
    React.createElement("path", { fill: '#F44336', d: 'M23.724 0v4.204H17V5.78h6.724V10h1.552V5.78H32V4.204h-6.724V0z' }),
    React.createElement("path", { fill: '#F44336', d: 'm31.228.094-5.435 3.584h.95L31.684.42a1.25 1.25 0 0 0-.456-.326M31.825 9.39l-4.677-3.085h-.95l5.265 3.472c.146-.102.27-.234.361-.388M17.749 9.895l5.444-3.59h-.95L17.3 9.564c.122.141.274.255.448.331M17.152.653l4.588 3.025h.95L17.496.253a1.3 1.3 0 0 0-.344.4' }),
    React.createElement("path", { fill: '#000', fillOpacity: 0.08, fillRule: 'evenodd', d: 'M30.75.625h-12.5a.625.625 0 0 0-.625.625v7.5c0 .345.28.625.625.625h12.5c.345 0 .625-.28.625-.625v-7.5a.625.625 0 0 0-.625-.625M18.25 0C17.56 0 17 .56 17 1.25v7.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25v-7.5C32 .56 31.44 0 30.75 0z', clipRule: 'evenodd' })));
exports.MarketDerivedGbpBasketIcon = MarketDerivedGbpBasketIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.MarketDerivedGbpBasketIcon);
exports.default = ForwardRef;
