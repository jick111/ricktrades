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
exports.MarketForexGbpsekIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const MarketForexGbpsekIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#0D47A1', d: 'M0 6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z' }),
    React.createElement("path", { fill: '#fff', d: 'M0 6a2 2 0 0 1 2-2h1.606L10 8.263V4h4v4.263L20.395 4H22a2 2 0 0 1 2 2v.404L18.606 10H24v4h-5.394L24 17.596V18a2 2 0 0 1-2 2h-1.606L14 15.737V20h-4v-4.263L3.606 20H2a2 2 0 0 1-2-2v-.404L5.394 14H0v-4h5.394L0 6.404z' }),
    React.createElement("path", { fill: '#F44336', d: 'M10.759 4v6.726H0v2.522h10.759V20h2.482v-6.752H24v-2.522H13.241V4z' }),
    React.createElement("path", { fill: '#F44336', d: 'M22.764 4.151 14.07 9.885h1.52l7.906-5.213c-.2-.225-.449-.404-.73-.52M23.72 19.023l-7.483-4.934h-1.52l8.423 5.554c.235-.163.433-.375.58-.62M1.198 19.833l8.71-5.744h-1.52L.482 19.302c.194.227.439.41.716.53M.243 5.044l7.34 4.841h1.52l-8.31-5.48a2 2 0 0 0-.55.64' }),
    React.createElement("path", { fill: '#000', fillOpacity: 0.08, fillRule: 'evenodd', d: 'M22 5H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1M2 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#fff', d: 'M30 12H10a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2' }),
    React.createElement("path", { fill: '#006AA7', d: 'M30 12H10a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2' }),
    React.createElement("path", { fill: '#FECC00', d: 'M32 18.5H18V12h-3v6.5H8v3h7V28h3v-6.5h14z' }),
    React.createElement("path", { fill: '#000', fillOpacity: 0.08, fillRule: 'evenodd', d: 'M30 13H10a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V14a1 1 0 0 0-1-1m-20-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2z', clipRule: 'evenodd' })));
exports.MarketForexGbpsekIcon = MarketForexGbpsekIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.MarketForexGbpsekIcon);
exports.default = ForwardRef;
