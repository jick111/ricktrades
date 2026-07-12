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
exports.FlagBouvetIslandIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const FlagBouvetIslandIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#fff', d: 'M10.759 5.898H24v.84H9.931V.014h.828zM7.448.013h-.827v5.885H0v.84h7.448zM0 9.261v.84h6.62v5.886h.828V9.26zM9.931 15.987h.828v-5.885H24v-.84H9.931z' }),
    React.createElement("path", { fill: '#F44336', d: 'M22 0a2 2 0 0 1 2 2v3.898H10.759V.013zM6.62 5.898V.013L2 0a2 2 0 0 0-2 2v3.898zM0 14v-3.898h6.62v5.885L2 16a2 2 0 0 1-2-2M24 14a2 2 0 0 1-2 2l-11.241-.013v-5.885H24z' }),
    React.createElement("path", { fill: '#0D47A1', d: 'M24 6.739H9.931V.013H7.448V6.74H0V9.26h7.448v6.726h2.483V9.26H24z' }),
    React.createElement("path", { fill: '#000', fillOpacity: 0.08, fillRule: 'evenodd', d: 'M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z', clipRule: 'evenodd' })));
exports.FlagBouvetIslandIcon = FlagBouvetIslandIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.FlagBouvetIslandIcon);
exports.default = ForwardRef;
