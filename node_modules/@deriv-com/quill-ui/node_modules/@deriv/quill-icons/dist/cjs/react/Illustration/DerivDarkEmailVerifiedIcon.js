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
const DerivDarkEmailVerifiedIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#242828', d: 'M10.873 2.268 1 9l11 7 11-7-9.873-6.732a2 2 0 0 0-2.254 0' }),
    React.createElement("path", { fill: '#6E6E6E', d: 'M4 6v12h16V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2' }),
    React.createElement("path", { fill: '#0E0E0E', d: 'M16.5 7h-9a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1M16.5 9h-9a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1M11.5 11h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1' }),
    React.createElement("path", { fill: '#323738', d: 'M1 20V9l11 7 11-7v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2' }),
    React.createElement("path", { fill: '#242828', d: 'M10.873 13.268 1 20a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2l-9.873-6.732a2 2 0 0 0-2.254 0' }),
    React.createElement("path", { fill: '#FF444F', d: 'M24 20a4 4 0 1 0-8 0 4 4 0 0 0 8 0' }),
    React.createElement("path", { fill: '#fff', d: 'm19.5 20.7-.583-.583a.164.164 0 0 0-.234 0 .164.164 0 0 0 0 .233l.699.698c.065.066.17.066.235 0l1.766-1.764a.164.164 0 0 0 0-.234.164.164 0 0 0-.233 0z' })));
const ForwardRef = (0, react_1.forwardRef)(DerivDarkEmailVerifiedIcon);
exports.default = ForwardRef;
