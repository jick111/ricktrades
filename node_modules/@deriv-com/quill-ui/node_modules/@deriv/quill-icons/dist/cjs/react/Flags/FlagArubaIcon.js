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
exports.FlagArubaIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const FlagArubaIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#3D87E0', d: 'M22 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2' }),
    React.createElement("path", { fill: '#FAD800', fillRule: 'evenodd', d: 'M0 10h24v1H0zm0 2h24v1H0z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#000', fillOpacity: 0.08, fillRule: 'evenodd', d: 'M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#fff', d: 'm4.72 3.28 1.555.491a.24.24 0 0 1 0 .458L4.72 4.72l-.491 1.555a.24.24 0 0 1-.458 0L3.28 4.72l-1.555-.491a.24.24 0 0 1 0-.458L3.28 3.28l.491-1.555a.24.24 0 0 1 .458 0z' }),
    React.createElement("path", { fill: '#D4062F', d: 'm4.48 3.52 1.454.364c.122.03.122.202 0 .232L4.48 4.48l-.364 1.454c-.03.122-.202.122-.232 0L3.52 4.48l-1.454-.364c-.122-.03-.122-.202 0-.232L3.52 3.52l.364-1.454c.03-.122.202-.122.232 0z' })));
exports.FlagArubaIcon = FlagArubaIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.FlagArubaIcon);
exports.default = ForwardRef;
