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
exports.IllustrativeAntivirusAndFirewallsIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const IllustrativeAntivirusAndFirewallsIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M27.387 7.333H4.627a2.8 2.8 0 0 0-2.8 2.8V23.64a2.8 2.8 0 0 0 2.8 2.8h10.706v2.227H12.44a.66.66 0 0 0-.667.666.66.66 0 0 0 .667.667h7.12a.66.66 0 0 0 .667-.667.66.66 0 0 0-.667-.666h-2.893V26.44h10.72a2.8 2.8 0 0 0 2.8-2.8V10.133a2.8 2.8 0 0 0-2.8-2.8m1.466 16.307c0 .813-.653 1.467-1.466 1.467H4.627A1.46 1.46 0 0 1 3.16 23.64V10.133c0-.813.653-1.466 1.467-1.466h22.76c.813 0 1.466.653 1.466 1.466zm-8.666-11.667c-1.68-.426-2.96-.866-3.627-1.213a1.24 1.24 0 0 0-1.107 0c-.453.24-1.44.653-3.6 1.2-.773.2-1.32.893-1.32 1.693v4.374c0 3.626 3.507 5.16 5.374 5.466h.226c1.854-.306 5.374-1.853 5.374-5.466v-4.374c0-.8-.547-1.493-1.32-1.68m-.014 6.054c0 3.28-3.8 4.066-4.12 4.146-.586-.12-4.186-.96-4.186-4.146v-4.374c0-.186.133-.346.306-.4 1.787-.453 3.08-.893 3.84-1.293.774.4 2.067.827 3.84 1.293.187.04.307.214.307.387v4.373zm-3.493-1.934v1.067a.66.66 0 0 1-.667.667.66.66 0 0 1-.666-.667v-1.067a.66.66 0 0 1 .666-.666.66.66 0 0 1 .667.666m-.133 2.667a.535.535 0 0 1-1.067 0c0-.293.24-.533.533-.533s.534.24.534.533' })));
exports.IllustrativeAntivirusAndFirewallsIcon = IllustrativeAntivirusAndFirewallsIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.IllustrativeAntivirusAndFirewallsIcon);
exports.default = ForwardRef;
