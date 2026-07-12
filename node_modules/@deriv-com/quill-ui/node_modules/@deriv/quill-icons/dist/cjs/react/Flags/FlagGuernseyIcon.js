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
exports.FlagGuernseyIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const FlagGuernseyIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#fff', d: 'M14 0h8a2 2 0 0 1 2 2v4H14zM10 0H2a2 2 0 0 0-2 2v4h10zM0 10v4a2 2 0 0 0 2 2h8v-6zM14 16h8a2 2 0 0 0 2-2v-4H14z' }),
    React.createElement("path", { fill: 'red', fillRule: 'evenodd', d: 'M24 10V6H14V0h-4v6H0v4h10v6h4v-6zM10.91 2l.545.545v4.91h-4.91L6 6.909v2.182l.545-.546h4.91v4.91l-.546.545h2.182l-.546-.545v-4.91h4.91l.545.546V6.909l-.545.546h-4.91v-4.91L13.091 2z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#F9DD16', d: 'm13.09 2-.545.545v4.91h4.91L18 6.909v2.182l-.545-.546h-4.91v4.91l.546.545h-2.182l.546-.545v-4.91h-4.91L6 9.091V6.909l.545.546h4.91v-4.91L10.909 2z' }),
    React.createElement("path", { fill: '#000', fillOpacity: 0.08, fillRule: 'evenodd', d: 'M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z', clipRule: 'evenodd' })));
exports.FlagGuernseyIcon = FlagGuernseyIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.FlagGuernseyIcon);
exports.default = ForwardRef;
