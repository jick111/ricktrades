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
exports.MarketStocksWaltDisneyIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const MarketStocksWaltDisneyIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#b73f59f87d819ff58e0a578acf1102e9__a)' },
        React.createElement("path", { fill: '#1942C8', d: 'M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16' }),
        React.createElement("path", { fill: '#fff', fillRule: 'evenodd', d: 'M22.41 12.278c1.67 1.363 3.832 3.69 3.568 6.358-.328 2.14-2.569 3.703-4.467 4.21a12.67 12.67 0 0 1-6.03.057c-.128.342-.256.756-.649.899a.86.86 0 0 1-.778-.121c-.563-.528-.107-1.542-.92-1.863a8.38 8.38 0 0 1-4.124-3.617.96.96 0 0 1 .2-.864 9.9 9.9 0 0 1 4.388-1.698c.092 0 .057-.093.128-.129.019-1.072.177-2.137.471-3.168a.286.286 0 0 1 .393-.093c.999.764.528 2.191.956 3.219 1.898.092 3.796.178 5.294 1.248a1.65 1.65 0 0 1 .471 1.663 1.39 1.39 0 0 1-1.17.813c-.328 0-.942 0-.906-.22.035-.222 1.106-.657.778-.993-.471-.485-2.855-.777-4.282-.956-.185-.036-.35 0-.35.214a21.8 21.8 0 0 0 .093 4.21.3.3 0 0 0 .214.214c2.583.421 5.316.186 7.336-1.298a3.09 3.09 0 0 0 1.07-3.026c-.813-3.268-4.224-5.237-7.028-6.508a19.75 19.75 0 0 0-8.977-1.64c-.514 0-1.334.213-1.334.399 0 .185.92.121.806.47-.114.35-1.056.143-1.334.05-.279-.092-.25-.484-.179-.713.714-1.241 2.669-1.341 3.568-1.391a20.08 20.08 0 0 1 12.787 4.281zm-8.87 4.845c-1.262-.02-2.52.175-3.717.578-.235.086-.52.343-.343.65a6 6 0 0 0 1.77 1.512 6.7 6.7 0 0 0 2.22.942c.16-1.182.214-2.376.163-3.568-.071 0 0-.107-.092-.142z', clipRule: 'evenodd' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'b73f59f87d819ff58e0a578acf1102e9__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h32v32H0z' })))));
exports.MarketStocksWaltDisneyIcon = MarketStocksWaltDisneyIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.MarketStocksWaltDisneyIcon);
exports.default = ForwardRef;
