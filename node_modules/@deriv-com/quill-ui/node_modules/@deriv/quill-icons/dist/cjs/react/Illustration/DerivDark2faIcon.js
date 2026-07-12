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
const DerivDark2faIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#323738', stroke: '#242828', strokeWidth: 0.5, d: 'M16 1.25H8A1.75 1.75 0 0 0 6.25 3v18c0 .966.784 1.75 1.75 1.75h8A1.75 1.75 0 0 0 17.75 21V3A1.75 1.75 0 0 0 16 1.25Z' }),
    React.createElement("path", { fill: '#FF444F', fillRule: 'evenodd', d: 'm8.25 15.675.398.134-.288.437.376.254.264-.4.264.4.377-.254-.288-.437.397-.134-.143-.434-.38.128V15h-.453v.37l-.381-.13zm2 0 .398.134-.288.437.376.254.264-.4.264.4.377-.254-.289-.437.398-.134-.143-.434-.38.128V15h-.453v.37l-.381-.13zm2.398.134-.398-.134.143-.434.38.128V15h.453v.37l.381-.13.143.435-.398.134.288.437-.376.254-.264-.4-.264.4-.377-.254zm1.602-.134.398.134-.288.437.376.254.264-.4.264.4.377-.254-.289-.437.398-.134-.143-.434-.38.128V15h-.453v.37l-.381-.13z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#6E6E6E', d: 'M13.5 9h-3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1' }),
    React.createElement("path", { stroke: '#6E6E6E', d: 'M10.5 9.5V8a1.5 1.5 0 0 1 3 0v1.5' }),
    React.createElement("path", { fill: '#242828', d: 'M13.75 21.5h-3.5a.25.25 0 1 0 0 .5h3.5a.25.25 0 1 0 0-.5' })));
const ForwardRef = (0, react_1.forwardRef)(DerivDark2faIcon);
exports.default = ForwardRef;
