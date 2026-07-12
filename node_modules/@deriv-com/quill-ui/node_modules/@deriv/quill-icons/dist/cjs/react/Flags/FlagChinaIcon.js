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
exports.FlagChinaIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const FlagChinaIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#F1361D', fillRule: 'evenodd', d: 'M2 0h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m6.893 2.861-.5-.455-.114.666-.455.5.666.114.5.455.114-.666.455-.5zm1.634 1.453-.016.676.351.577-.675-.015-.578.351.016-.676-.352-.577.676.015zm-.38 2.637-.605-.3.074.672-.3.606.672-.075.606.3-.074-.672.3-.606zM9.13 9.103l-.008-.676-.565.372-.676.008.372.564.008.676.565-.37.676-.009zM5.48 7.1 3.862 8.253l.597-1.895-1.597-1.183 1.987-.017.631-1.884.631 1.884 1.987.017-1.597 1.183.597 1.895z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#FFDC42', d: 'm9.13 9.103-.008-.676-.565.372-.676.008.372.564.008.676.565-.37.676-.009zM10.148 6.95l-.606-.3.074.673-.3.606.672-.075.606.3-.074-.672.3-.606zM10.511 4.99l.016-.676-.578.351-.676-.015.352.577-.016.676.578-.351.675.015zM8.893 2.861l-.5-.455-.114.666-.455.5.666.114.5.455.114-.666.455-.5zM3.862 8.253 5.48 7.1l1.618 1.153-.597-1.895 1.597-1.183-1.987-.017-.63-1.884-.632 1.884-1.987.017L4.46 6.358z' }),
    React.createElement("path", { fill: '#000', fillOpacity: 0.08, fillRule: 'evenodd', d: 'M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z', clipRule: 'evenodd' })));
exports.FlagChinaIcon = FlagChinaIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.FlagChinaIcon);
exports.default = ForwardRef;
