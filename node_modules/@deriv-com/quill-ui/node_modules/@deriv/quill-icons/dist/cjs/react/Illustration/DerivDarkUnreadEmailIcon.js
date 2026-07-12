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
const DerivDarkUnreadEmailIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 22 14', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#8c8f034f2440d775065fcd0143ad3069__a)' },
        React.createElement("path", { fill: '#323738', d: 'M0 12V2l11 6 11-6v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2' }),
        React.createElement("path", { fill: '#242828', d: 'M9.873 5.268 0 12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2l-9.873-6.732a2 2 0 0 0-2.254 0' }),
        React.createElement("path", { fill: '#4A5153', d: 'M11.958 7.478 22 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2l10.042 5.478a2 2 0 0 0 1.916 0' }),
        React.createElement("path", { fill: '#FF444F', d: 'M13 7a2 2 0 1 0-4 0 2 2 0 0 0 4 0' }),
        React.createElement("path", { fill: '#fff', fillRule: 'evenodd', d: 'M9.753 7.09a1.25 1.25 0 0 1 1.337-1.337c.661.045 1.16.623 1.16 1.286v.137c0 .18-.103.351-.27.417a.46.46 0 0 1-.538-.151.625.625 0 1 1-.35-1.06c.31.044.533.326.533.64v.156c0 .099.088.196.187.196S12 7.277 12 7.178v-.137c0-.467-.303-.894-.755-1.009-.725-.188-1.4.489-1.214 1.214.116.451.544.753 1.01.753h.459c.069 0 .125.057.125.125a.125.125 0 0 1-.125.125h-.461c-.663 0-1.24-.498-1.286-1.16m.872-.09a.374.374 0 1 0 .749 0 .374.374 0 0 0-.75 0', clipRule: 'evenodd' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '8c8f034f2440d775065fcd0143ad3069__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h22v14H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(DerivDarkUnreadEmailIcon);
exports.default = ForwardRef;
